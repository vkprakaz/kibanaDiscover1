import { IndexPatternField } from '../../../../../../../../data/public';
export interface FieldFilterState {
    missing: boolean;
    type: string;
    name: string;
    aggregatable: null | boolean;
    searchable: null | boolean;
}
export declare function getDefaultFieldFilter(): FieldFilterState;
export declare function setFieldFilterProp(state: FieldFilterState, name: string, value: string | boolean | null | undefined): FieldFilterState;
export declare function isFieldFiltered(field: IndexPatternField, filterState: FieldFilterState, fieldCounts: Record<string, number>): boolean;
//# sourceMappingURL=field_filter.d.ts.map