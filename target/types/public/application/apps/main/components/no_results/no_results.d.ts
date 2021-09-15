import { DataPublicPluginStart } from '../../../../../../../../../src/plugins/data/public';
import './_no_results.scss';
export interface DiscoverNoResultsProps {
    timeFieldName?: string;
    queryLanguage?: string;
    error?: Error;
    data?: DataPublicPluginStart;
}
export declare function DiscoverNoResults({ timeFieldName, queryLanguage, error, data, }: DiscoverNoResultsProps): JSX.Element;
//# sourceMappingURL=no_results.d.ts.map