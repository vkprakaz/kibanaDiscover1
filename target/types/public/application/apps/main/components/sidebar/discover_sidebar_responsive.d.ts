import { UiCounterMetricType } from '@kbn/analytics';
import { IndexPatternAttributes } from '../../../../../../../../../src/plugins/data/common';
import { SavedObject } from '../../../../../../../../core/types';
import { IndexPatternField, IndexPattern } from '../../../../../../../../../src/plugins/data/public';
import { DiscoverServices } from '../../../../../build_services';
import { ElasticSearchHit } from '../../../../doc_views/doc_views_types';
import { AppState } from '../../services/discover_state';
export interface DiscoverSidebarResponsiveProps {
    /**
     * Determines whether add/remove buttons are displayed non only when focused
     */
    alwaysShowActionButtons?: boolean;
    /**
     * the selected columns displayed in the doc table in discover
     */
    columns: string[];
    /**
     * a statistics of the distribution of fields in the given hits
     */
    fieldCounts: Record<string, number>;
    /**
     * hits fetched from ES, displayed in the doc table
     */
    hits: ElasticSearchHit[];
    /**
     * List of available index patterns
     */
    indexPatternList: Array<SavedObject<IndexPatternAttributes>>;
    /**
     * Has been toggled closed
     */
    isClosed?: boolean;
    /**
     * Callback function when selecting a field
     */
    onAddField: (fieldName: string) => void;
    /**
     * Callback function when adding a filter from sidebar
     */
    onAddFilter: (field: IndexPatternField | string, value: string, type: '+' | '-') => void;
    /**
     * Callback function when changing an index pattern
     */
    onChangeIndexPattern: (id: string) => void;
    /**
     * Callback function when removing a field
     * @param fieldName
     */
    onRemoveField: (fieldName: string) => void;
    /**
     * Currently selected index pattern
     */
    selectedIndexPattern?: IndexPattern;
    /**
     * Discover plugin services;
     */
    services: DiscoverServices;
    /**
     * Discover App state
     */
    state: AppState;
    /**
     * Metric tracking function
     * @param metricType
     * @param eventName
     */
    trackUiMetric?: (metricType: UiCounterMetricType, eventName: string | string[]) => void;
    /**
     * Shows index pattern and a button that displays the sidebar in a flyout
     */
    useFlyout?: boolean;
    /**
     * Read from the Fields API
     */
    useNewFieldsApi?: boolean;
    /**
     * callback to execute on edit runtime field
     */
    onEditRuntimeField: () => void;
}
/**
 * Component providing 2 different renderings for the sidebar depending on available screen space
 * Desktop: Sidebar view, all elements are visible
 * Mobile: Index pattern selector is visible and a button to trigger a flyout with all elements
 */
export declare function DiscoverSidebarResponsive(props: DiscoverSidebarResponsiveProps): JSX.Element | null;
//# sourceMappingURL=discover_sidebar_responsive.d.ts.map