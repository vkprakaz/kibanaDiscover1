import { IndexPattern } from '../../../kibana_services';
import { DocViewFilterFn, ElasticSearchHit } from '../../doc_views/doc_views_types';
import { DiscoverServices } from '../../../build_services';
interface Props {
    columns: string[];
    hit: ElasticSearchHit;
    hits?: ElasticSearchHit[];
    indexPattern: IndexPattern;
    onAddColumn: (column: string) => void;
    onClose: () => void;
    onFilter: DocViewFilterFn;
    onRemoveColumn: (column: string) => void;
    services: DiscoverServices;
    setExpandedDoc: (doc: ElasticSearchHit) => void;
}
/**
 * Flyout displaying an expanded Elasticsearch document
 */
export declare function DiscoverGridFlyout({ hit, hits, indexPattern, columns, onFilter, onClose, onRemoveColumn, onAddColumn, services, setExpandedDoc, }: Props): JSX.Element;
export {};
//# sourceMappingURL=discover_grid_flyout.d.ts.map