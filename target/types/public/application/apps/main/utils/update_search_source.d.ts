import { IndexPattern, ISearchSource } from '../../../../../../data/common';
import { SortOrder } from '../../../../saved_searches/types';
import { DiscoverServices } from '../../../../build_services';
/**
 * Helper function to update the given searchSource before fetching/sharing/persisting
 */
export declare function updateSearchSource(searchSource: ISearchSource, persist: boolean | undefined, { indexPattern, services, sort, useNewFieldsApi, }: {
    indexPattern: IndexPattern;
    services: DiscoverServices;
    sort: SortOrder[];
    useNewFieldsApi: boolean;
}): void;
//# sourceMappingURL=update_search_source.d.ts.map