/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { EuiText, EuiSpacer, EuiLink } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';
import { OrderviewFieldBucket } from './orderview_field_bucket';
import { Bucket, FieldDetails } from './types';
import { IndexPatternField, IndexPattern } from '../../../../../../../../src/plugins/data/public';

interface OrderviewFieldDetailsProps {
  field: IndexPatternField;
  indexPattern: IndexPattern;
  details: FieldDetails;
  onAddFilter: (field: IndexPatternField | string, value: string, type: '+' | '-') => void;
}

export function OrderviewFieldDetails({
  field,
  indexPattern,
  details,
  onAddFilter,
}: OrderviewFieldDetailsProps) {
  return (
    <>
      {details.error && <EuiText size="xs">{details.error}</EuiText>}
      {!details.error && (
        <>
          <div style={{ marginTop: '4px' }}>
            {details.buckets.map((bucket: Bucket, idx: number) => (
              <OrderviewFieldBucket
                key={`bucket${idx}`}
                bucket={bucket}
                field={field}
                onAddFilter={onAddFilter}
              />
            ))}
          </div>
          <EuiSpacer size="xs" />
          <EuiText size="xs">
            {!indexPattern.metaFields.includes(field.name) && !field.scripted ? (
              <EuiLink
                onClick={() => onAddFilter('_exists_', field.name, '+')}
                data-test-subj="onAddFilterButton"
              >
                <FormattedMessage
                  id="orderview.fieldChooser.detailViews.existsInRecordsText"
                  defaultMessage="Exists in {value} / {totalValue} records"
                  values={{
                    value: details.exists,
                    totalValue: details.total,
                  }}
                />
              </EuiLink>
            ) : (
              <FormattedMessage
                id="orderview.fieldChooser.detailViews.valueOfRecordsText"
                defaultMessage="{value} / {totalValue} records"
                values={{
                  value: details.exists,
                  totalValue: details.total,
                }}
              />
            )}
          </EuiText>
        </>
      )}
    </>
  );
}
