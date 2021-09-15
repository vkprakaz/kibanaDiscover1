import { SortOrder } from './helpers';
interface Props {
    colLeftIdx: number;
    colRightIdx: number;
    displayName?: string;
    isRemoveable: boolean;
    isSortable: boolean;
    name: string;
    onChangeSortOrder?: (sortOrder: SortOrder[]) => void;
    onMoveColumn?: (name: string, idx: number) => void;
    onRemoveColumn?: (name: string) => void;
    sortOrder: SortOrder[];
}
export declare function TableHeaderColumn({ colLeftIdx, colRightIdx, displayName, isRemoveable, isSortable, name, onChangeSortOrder, onMoveColumn, onRemoveColumn, sortOrder, }: Props): JSX.Element;
export {};
//# sourceMappingURL=table_header_column.d.ts.map