import { IndexPatternField } from 'src/plugins/../../src/plugins/data/public';
import { FieldFilterState } from './field_filter';
interface GroupedFields {
    selected: IndexPatternField[];
    popular: IndexPatternField[];
    unpopular: IndexPatternField[];
}
/**
 * group the fields into selected, popular and unpopular, filter by fieldFilterState
 */
export declare function groupFields(fields: IndexPatternField[] | null, columns: string[], popularLimit: number, fieldCounts: Record<string, number>, fieldFilterState: FieldFilterState, useNewFieldsApi: boolean): GroupedFields;
export {};
//# sourceMappingURL=group_fields.d.ts.map