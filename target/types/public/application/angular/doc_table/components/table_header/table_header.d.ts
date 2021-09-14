import { IndexPattern } from '../../../../../kibana_services';
import { SortOrder } from './helpers';
interface Props {
    columns: string[];
    defaultSortOrder: string;
    hideTimeColumn: boolean;
    indexPattern: IndexPattern;
    isShortDots: boolean;
    onChangeSortOrder?: (sortOrder: SortOrder[]) => void;
    onMoveColumn?: (name: string, index: number) => void;
    onRemoveColumn?: (name: string) => void;
    sortOrder: SortOrder[];
}
export declare function TableHeader({ columns, defaultSortOrder, hideTimeColumn, indexPattern, isShortDots, onChangeSortOrder, onMoveColumn, onRemoveColumn, sortOrder, }: Props): JSX.Element;
export {};
//# sourceMappingURL=table_header.d.ts.map