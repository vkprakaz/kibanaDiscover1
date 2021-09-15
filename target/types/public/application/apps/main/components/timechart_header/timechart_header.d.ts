import './timechart_header.scss';
import { DataPublicPluginStart } from '../../../../../../../../../src/plugins/data/public';
export interface TimechartBucketInterval {
    scaled?: boolean;
    description?: string;
    scale?: number;
}
export interface TimechartHeaderProps {
    /**
     * Format of date to be displayed
     */
    dateFormat?: string;
    /**
     * Interval for the buckets of the recent request
     */
    bucketInterval?: TimechartBucketInterval;
    data: DataPublicPluginStart;
    /**
     * Interval Options
     */
    options: Array<{
        display: string;
        val: string;
    }>;
    /**
     * changes the interval
     */
    onChangeInterval: (interval: string) => void;
    /**
     * selected interval
     */
    stateInterval: string;
}
export declare function TimechartHeader({ bucketInterval, dateFormat, data, options, onChangeInterval, stateInterval, }: TimechartHeaderProps): JSX.Element | null;
//# sourceMappingURL=timechart_header.d.ts.map