import { EuiDataGridCellValueElementProps } from '@elastic/eui';
import { ElasticSearchHit } from '../../doc_views/doc_views_types';
/**
 * Returning a generated id of a given ES document, since `_id` can be the same
 * when using different indices and shard routing
 */
export declare const getDocId: (doc: ElasticSearchHit & {
    _routing?: string;
}) => string;
export declare const SelectButton: ({ rowIndex, setCellProps }: EuiDataGridCellValueElementProps) => JSX.Element;
export declare function DiscoverGridDocumentToolbarBtn({ isFilterActive, rows, selectedDocs, setIsFilterActive, setSelectedDocs, }: {
    isFilterActive: boolean;
    rows: ElasticSearchHit[];
    selectedDocs: string[];
    setIsFilterActive: (value: boolean) => void;
    setSelectedDocs: (value: string[]) => void;
}): JSX.Element;
//# sourceMappingURL=discover_grid_document_selection.d.ts.map