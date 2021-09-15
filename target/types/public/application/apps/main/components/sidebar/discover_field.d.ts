import './discover_field.scss';
import React from 'react';
import { UiCounterMetricType } from '@kbn/analytics';
import { FieldDetails } from './types';
import { IndexPatternField, IndexPattern } from '../../../../../../../../../src/plugins/data/public';
export interface DiscoverFieldProps {
    /**
     * Determines whether add/remove button is displayed not only when focused
     */
    alwaysShowActionButton?: boolean;
    /**
     * The displayed field
     */
    field: IndexPatternField;
    /**
     * The currently selected index pattern
     */
    indexPattern: IndexPattern;
    /**
     * Callback to add/select the field
     */
    onAddField: (fieldName: string) => void;
    /**
     * Callback to add a filter to filter bar
     */
    onAddFilter: (field: IndexPatternField | string, value: string, type: '+' | '-') => void;
    /**
     * Callback to remove/deselect a the field
     * @param fieldName
     */
    onRemoveField: (fieldName: string) => void;
    /**
     * Retrieve details data for the field
     */
    getDetails: (field: IndexPatternField) => FieldDetails;
    /**
     * Determines whether the field is selected
     */
    selected?: boolean;
    /**
     * Metric tracking function
     * @param metricType
     * @param eventName
     */
    trackUiMetric?: (metricType: UiCounterMetricType, eventName: string | string[]) => void;
    multiFields?: Array<{
        field: IndexPatternField;
        isSelected: boolean;
    }>;
    /**
     * Callback to edit a runtime field from index pattern
     * @param fieldName name of the field to edit
     */
    onEditField?: (fieldName: string) => void;
    /**
     * Callback to delete a runtime field from index pattern
     * @param fieldName name of the field to delete
     */
    onDeleteField?: (fieldName: string) => void;
}
declare function DiscoverFieldComponent({ alwaysShowActionButton, field, indexPattern, onAddField, onRemoveField, onAddFilter, getDetails, selected, trackUiMetric, multiFields, onEditField, onDeleteField, }: DiscoverFieldProps): JSX.Element;
export declare const DiscoverField: React.MemoExoticComponent<typeof DiscoverFieldComponent>;
export {};
//# sourceMappingURL=discover_field.d.ts.map