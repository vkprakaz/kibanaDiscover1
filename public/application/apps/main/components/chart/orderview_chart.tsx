/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import React, { useCallback, useEffect, useRef } from 'react';
import moment from 'moment';
import { EuiFlexGroup, EuiFlexItem, EuiButtonEmpty, EuiSpacer } from '@elastic/eui';
import { IUiSettingsClient } from 'kibana/public';
import { i18n } from '@kbn/i18n';
import { HitsCounter } from '../hits_counter';
import { DataPublicPluginStart, IndexPattern, search } from '../../../../../../../../src/plugins/data/public';
import { TimechartHeader } from '../timechart_header';
import { SavedSearch } from '../../../../../saved_searches';
import { AppState, GetStateReturn } from '../../services/orderview_state';
import { TimechartBucketInterval } from '../timechart_header/timechart_header';
import { Chart as IChart } from './point_series';
import { OrderviewHistogram } from './histogram';

const TimechartHeaderMemoized = React.memo(TimechartHeader);
const OrderviewHistogramMemoized = React.memo(OrderviewHistogram);
export function OrderviewChart({
  config,
  data,
  bucketInterval,
  chartData,
  hits,
  isLegacy,
  resetSavedSearch,
  savedSearch,
  state,
  stateContainer,
  timefield,
}: {
  config: IUiSettingsClient;
  data: DataPublicPluginStart;
  bucketInterval?: TimechartBucketInterval;
  chartData?: IChart;
  hits?: number;
  indexPattern: IndexPattern;
  isLegacy: boolean;
  resetSavedSearch: () => void;
  savedSearch: SavedSearch;
  state: AppState;
  stateContainer: GetStateReturn;
  timefield?: string;
}) {
  const chartRef = useRef<{ element: HTMLElement | null; moveFocus: boolean }>({
    element: null,
    moveFocus: false,
  });

  useEffect(() => {
    if (chartRef.current.moveFocus && chartRef.current.element) {
      chartRef.current.element.focus();
    }
  }, [state.hideChart]);

  const toggleHideChart = useCallback(() => {
    const newHideChart = !state.hideChart;
    stateContainer.setAppState({ hideChart: newHideChart });
    chartRef.current.moveFocus = !newHideChart;
  }, [state, stateContainer]);

  const onChangeInterval = useCallback(
    (interval: string) => {
      if (interval) {
        stateContainer.setAppState({ interval });
      }
    },
    [stateContainer]
  );

  const timefilterUpdateHandler = useCallback(
    (ranges: { from: number; to: number }) => {
      data.query.timefilter.timefilter.setTime({
        from: moment(ranges.from).toISOString(),
        to: moment(ranges.to).toISOString(),
        mode: 'absolute',
      });
    },
    [data]
  );

  return (
    <EuiFlexGroup direction="column" alignItems="stretch" gutterSize="none" responsive={false}>
      <EuiFlexItem grow={false} className="dscResultCount">
        <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
          <EuiFlexItem
            grow={false}
            className="dscResuntCount__title eui-textTruncate eui-textNoWrap"
          >
            <HitsCounter
              hits={hits}
              showResetButton={!!(savedSearch && savedSearch.id)}
              onResetQuery={resetSavedSearch}
            />
          </EuiFlexItem>
          {!state.hideChart && (
            <EuiFlexItem className="dscResultCount__actions">
              <TimechartHeaderMemoized
                data={data}
                dateFormat={config.get('dateFormat')}
                options={search.aggs.intervalOptions}
                onChangeInterval={onChangeInterval}
                stateInterval={state.interval || ''}
                bucketInterval={bucketInterval}
              />
            </EuiFlexItem>
          )}
          {timefield && (
            <EuiFlexItem className="dscResultCount__toggle" grow={false}>
              <EuiButtonEmpty
                size="xs"
                iconType={!state.hideChart ? 'eyeClosed' : 'eye'}
                onClick={toggleHideChart}
                data-test-subj="orderviewChartToggle"
              >
                {!state.hideChart
                  ? i18n.translate('orderview.hideChart', {
                      defaultMessage: 'Hide chart',
                    })
                  : i18n.translate('orderview.showChart', {
                      defaultMessage: 'Show chart',
                    })}
              </EuiButtonEmpty>
            </EuiFlexItem>
          )}
        </EuiFlexGroup>
      </EuiFlexItem>
      {!state.hideChart && chartData && (
        <EuiFlexItem grow={false}>
          <section
            ref={(element) => (chartRef.current.element = element)}
            tabIndex={-1}
            aria-label={i18n.translate('orderview.histogramOfFoundDocumentsAriaLabel', {
              defaultMessage: 'Histogram of found documents',
            })}
            className="dscTimechart"
          >
            <div
              className={isLegacy ? 'dscHistogram' : 'dscHistogramGrid'}
              data-test-subj="orderviewChart"
            >
              <OrderviewHistogramMemoized
                chartData={chartData}
                timefilterUpdateHandler={timefilterUpdateHandler}
              />
            </div>
          </section>
          <EuiSpacer size="s" />
        </EuiFlexItem>
      )}
    </EuiFlexGroup>
  );
}
