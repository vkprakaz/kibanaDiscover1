import './discover_sidebar.scss';
import { FieldFilterState } from './lib/field_filter';
import { DiscoverSidebarResponsiveProps } from './discover_sidebar_responsive';
export interface DiscoverSidebarProps extends DiscoverSidebarResponsiveProps {
    /**
     * Current state of the field filter, filtering fields by name, type, ...
     */
    fieldFilter: FieldFilterState;
    /**
     * Change current state of fieldFilter
     */
    setFieldFilter: (next: FieldFilterState) => void;
    /**
     * Callback to close the flyout if sidebar is rendered in a flyout
     */
    closeFlyout?: () => void;
    /**
     * Pass the reference to field editor component to the parent, so it can be properly unmounted
     * @param ref reference to the field editor component
     */
    setFieldEditorRef?: (ref: () => void | undefined) => void;
    editField: (fieldName?: string) => void;
}
export declare function DiscoverSidebar({ alwaysShowActionButtons, columns, fieldCounts, fieldFilter, hits, indexPatternList, onAddField, onAddFilter, onRemoveField, selectedIndexPattern, services, setFieldFilter, trackUiMetric, useNewFieldsApi, useFlyout, onEditRuntimeField, onChangeIndexPattern, setFieldEditorRef, closeFlyout, editField, }: DiscoverSidebarProps): JSX.Element | null;
//# sourceMappingURL=discover_sidebar.d.ts.map