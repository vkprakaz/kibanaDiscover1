import { FieldDetails } from './types';
import { IndexPatternField, IndexPattern } from '../../../../../../../../../src/plugins/data/public';
interface DiscoverFieldDetailsProps {
    field: IndexPatternField;
    indexPattern: IndexPattern;
    details: FieldDetails;
    onAddFilter: (field: IndexPatternField | string, value: string, type: '+' | '-') => void;
}
export declare function DiscoverFieldDetails({ field, indexPattern, details, onAddFilter, }: DiscoverFieldDetailsProps): JSX.Element;
export {};
//# sourceMappingURL=discover_field_details.d.ts.map