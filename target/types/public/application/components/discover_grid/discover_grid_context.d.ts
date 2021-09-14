import React from 'react';
import { DocViewFilterFn, ElasticSearchHit } from '../../doc_views/doc_views_types';
import { IndexPattern } from '../../../kibana_services';
export interface GridContext {
    expanded: ElasticSearchHit | undefined;
    setExpanded: (hit: ElasticSearchHit | undefined) => void;
    rows: ElasticSearchHit[];
    onFilter: DocViewFilterFn;
    indexPattern: IndexPattern;
    isDarkMode: boolean;
    selectedDocs: string[];
    setSelectedDocs: (selected: string[]) => void;
}
export declare const DiscoverGridContext: React.Context<GridContext>;
//# sourceMappingURL=discover_grid_context.d.ts.map