import React from 'react';
import { UiCounterMetricType } from '@kbn/analytics';
import type { IndexPattern, IndexPatternField } from 'src/plugins/data/common';
import type { FieldDetails } from './types';
interface Props {
    field: IndexPatternField;
    indexPattern: IndexPattern;
    details: FieldDetails;
    multiFields?: IndexPatternField[];
    trackUiMetric?: (metricType: UiCounterMetricType, eventName: string | string[]) => void;
}
export declare const DiscoverFieldVisualize: React.FC<Props>;
export {};
//# sourceMappingURL=discover_field_visualize.d.ts.map