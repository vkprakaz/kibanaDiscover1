import { ISearchSource, IndexPatternsContract, EsQuerySortValue } from '../../../../../../../../src/plugins/data/public';
import { EsHitRecord } from './context';
export declare function fetchAnchorProvider(indexPatterns: IndexPatternsContract, searchSource: ISearchSource, useNewFieldsApi?: boolean): (indexPatternId: string, anchorId: string, sort: EsQuerySortValue[]) => Promise<EsHitRecord>;
//# sourceMappingURL=anchor.d.ts.map