import { ReactNode } from 'react';
import { FieldMapping, DocViewFilterFn } from '../../doc_views/doc_views_types';
export interface Props {
    field?: string;
    fieldMapping?: FieldMapping;
    fieldType: string;
    displayUnderscoreWarning: boolean;
    isCollapsible: boolean;
    isColumnActive: boolean;
    isCollapsed: boolean;
    onToggleCollapse: () => void;
    onFilter?: DocViewFilterFn;
    onToggleColumn?: () => void;
    value: string | ReactNode;
    valueRaw: unknown;
}
export declare function DocViewTableRow({ field, fieldMapping, fieldType, displayUnderscoreWarning, isCollapsible, isCollapsed, isColumnActive, onFilter, onToggleCollapse, onToggleColumn, value, valueRaw, }: Props): JSX.Element;
//# sourceMappingURL=table_row.d.ts.map