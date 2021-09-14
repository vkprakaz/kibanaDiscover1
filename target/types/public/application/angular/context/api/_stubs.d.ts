import sinon from 'sinon';
import { EsHitRecordList } from './context';
export declare function createIndexPatternsStub(): Pick<import("../../../../../../data/public").IndexPatternsService, "create" | "delete" | "find" | "get" | "ensureDefaultIndexPattern" | "getIds" | "getTitles" | "getIdsWithTitle" | "clearCache" | "getCache" | "getDefault" | "getDefaultId" | "setDefault" | "hasUserIndexPattern" | "getFieldsForWildcard" | "getFieldsForIndexPattern" | "refreshFields" | "fieldArrayToMap" | "savedObjectToSpec" | "migrate" | "createAndSave" | "createSavedObject" | "updateSavedObject">;
/**
 * A stubbed search source with a `fetch` method that returns all of `_stubHits`.
 */
export declare function createSearchSourceStub(hits: EsHitRecordList, timeField?: string): any;
/**
 * A stubbed search source with a `fetch` method that returns a filtered set of `_stubHits`.
 */
export declare function createContextSearchSourceStub(timeFieldName: string): sinon.SinonStub<any[], any>;
//# sourceMappingURL=_stubs.d.ts.map