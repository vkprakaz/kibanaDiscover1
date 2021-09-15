import { EuiDataGridColumnCellActionProps } from '@elastic/eui';
import { IndexPatternField } from '../../../../../../../src/plugins/data/common/index_patterns/fields';
export declare const FilterInBtn: ({ Component, rowIndex, columnId, }: EuiDataGridColumnCellActionProps) => JSX.Element;
export declare const FilterOutBtn: ({ Component, rowIndex, columnId, }: EuiDataGridColumnCellActionProps) => JSX.Element;
export declare function buildCellActions(field: IndexPatternField): (({ Component, rowIndex, columnId, }: EuiDataGridColumnCellActionProps) => JSX.Element)[] | undefined;
//# sourceMappingURL=discover_grid_cell_actions.d.ts.map