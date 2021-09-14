import { EuiDataGridCellValueElementProps } from '@elastic/eui';
import { IndexPattern } from '../../../kibana_services';
import { ElasticSearchHit } from '../../doc_views/doc_views_types';
export declare const getRenderCellValueFn: (indexPattern: IndexPattern, rows: ElasticSearchHit[] | undefined, rowsFlattened: Array<Record<string, unknown>>, useNewFieldsApi: boolean, maxDocFieldsDisplayed: number) => ({ rowIndex, columnId, isDetails, setCellProps }: EuiDataGridCellValueElementProps) => JSX.Element;
//# sourceMappingURL=get_render_cell_value.d.ts.map