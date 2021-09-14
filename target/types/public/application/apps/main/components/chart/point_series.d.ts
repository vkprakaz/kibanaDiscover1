import { Duration, Moment } from 'moment';
import { Unit } from '@elastic/datemath';
import { SerializedFieldFormat } from '../../../../../../../expressions/common';
export interface Column {
    id: string;
    name: string;
}
export interface Row {
    [key: string]: number | 'NaN';
}
export interface Table {
    columns: Column[];
    rows: Row[];
}
export interface HistogramParamsBounds {
    min: Moment;
    max: Moment;
}
interface HistogramParams {
    date: true;
    interval: Duration;
    intervalESValue: number;
    intervalESUnit: Unit;
    format: string;
    bounds: HistogramParamsBounds;
}
export interface Dimension {
    accessor: 0 | 1;
    format: SerializedFieldFormat<{
        pattern: string;
    }>;
    label: string;
}
export interface Dimensions {
    x: Dimension & {
        params: HistogramParams;
    };
    y: Dimension;
}
interface Ordered {
    date: true;
    interval: Duration;
    intervalESUnit: string;
    intervalESValue: number;
    min: Moment;
    max: Moment;
}
export interface Chart {
    values: Array<{
        x: number;
        y: number;
    }>;
    xAxisOrderedValues: number[];
    xAxisFormat: Dimension['format'];
    yAxisFormat: Dimension['format'];
    xAxisLabel: Column['name'];
    yAxisLabel?: Column['name'];
    ordered: Ordered;
}
export declare const buildPointSeriesData: (table: Table, dimensions: Dimensions) => Chart;
export {};
//# sourceMappingURL=point_series.d.ts.map