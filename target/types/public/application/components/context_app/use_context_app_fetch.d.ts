import { DiscoverServices } from '../../../build_services';
import { EsHitRecord, SurrDocType } from '../../angular/context/api/context';
import { IndexPattern } from '../../../../../data/public';
import { ContextFetchState } from '../../angular/context_query_state';
import { AppState } from '../../angular/context_state';
export interface ContextAppFetchProps {
    anchorId: string;
    indexPatternId: string;
    indexPattern: IndexPattern;
    appState: AppState;
    useNewFieldsApi: boolean;
    services: DiscoverServices;
}
export declare function useContextAppFetch({ anchorId, indexPatternId, indexPattern, appState, useNewFieldsApi, services, }: ContextAppFetchProps): {
    fetchedState: ContextFetchState;
    fetchAllRows: () => Promise<[PromiseSettledResult<void>, PromiseSettledResult<void>] | undefined>;
    fetchContextRows: (anchor?: EsHitRecord | undefined) => Promise<[PromiseSettledResult<void>, PromiseSettledResult<void>]>;
    fetchSurroundingRows: (type: SurrDocType, fetchedAnchor?: EsHitRecord | undefined) => Promise<void>;
};
//# sourceMappingURL=use_context_app_fetch.d.ts.map