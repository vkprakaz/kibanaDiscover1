import { IndexPatternField } from '../../../../../../../../../../src/plugins/data/public';
export declare function triggerVisualizeActions(field: IndexPatternField, indexPatternId: string | undefined, contextualFields: string[]): void;
export interface VisualizeInformation {
    field: IndexPatternField;
    href?: string;
}
/**
 * Returns the field name and potentially href of the field or the first multi-field
 * that has a compatible visualize uiAction.
 */
export declare function getVisualizeInformation(field: IndexPatternField, indexPatternId: string | undefined, contextualFields: string[], multiFields?: IndexPatternField[]): Promise<VisualizeInformation | undefined>;
//# sourceMappingURL=visualize_trigger_utils.d.ts.map