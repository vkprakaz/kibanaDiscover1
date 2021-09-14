import { DiscoverServices } from '../../../../../build_services';
import { IndexPattern } from '../../../../../../../data/common/index_patterns/index_patterns';
export interface DiscoverIndexPatternManagementProps {
    /**
     * Currently selected index pattern
     */
    selectedIndexPattern?: IndexPattern;
    /**
     * Discover plugin services;
     */
    services: DiscoverServices;
    /**
     * Read from the Fields API
     */
    useNewFieldsApi?: boolean;
    /**
     * Callback to execute on edit field action
     * @param fieldName
     */
    editField: (fieldName?: string) => void;
}
export declare function DiscoverIndexPatternManagement(props: DiscoverIndexPatternManagementProps): JSX.Element | null;
//# sourceMappingURL=discover_index_pattern_management.d.ts.map