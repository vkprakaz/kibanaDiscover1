import { FieldIconProps } from '../../../../../kibana_react/public';
import { FieldMapping } from '../../doc_views/doc_views_types';
interface Props {
    fieldName: string;
    fieldType: string;
    fieldMapping?: FieldMapping;
    fieldIconProps?: Omit<FieldIconProps, 'type'>;
    scripted?: boolean;
    className?: string;
}
export declare function FieldName({ fieldName, fieldMapping, fieldType, fieldIconProps, className, scripted, }: Props): JSX.Element;
export {};
//# sourceMappingURL=field_name.d.ts.map