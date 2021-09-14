import { IUiSettingsClient } from 'kibana/public';
import { DataPublicPluginStart, IndexPattern } from '../../../../../../../data/public';
import { SavedSearch } from '../../../../../saved_searches';
import { AppState, GetStateReturn } from '../../services/discover_state';
import { TimechartBucketInterval } from '../timechart_header/timechart_header';
import { Chart as IChart } from './point_series';
export declare function DiscoverChart({ config, data, bucketInterval, chartData, hits, isLegacy, resetSavedSearch, savedSearch, state, stateContainer, timefield, }: {
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
}): JSX.Element;
//# sourceMappingURL=discover_chart.d.ts.map