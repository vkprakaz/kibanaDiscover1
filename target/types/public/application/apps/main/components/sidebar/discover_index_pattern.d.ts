import { SavedObject } from 'kibana/public';
import { IndexPattern, IndexPatternAttributes } from 'src/plugins/data/public';
export interface DiscoverIndexPatternProps {
    /**
     * list of available index patterns, if length > 1, component offers a "change" link
     */
    indexPatternList: Array<SavedObject<IndexPatternAttributes>>;
    /**
     * Callback function when changing an index pattern
     */
    onChangeIndexPattern: (id: string) => void;
    /**
     * currently selected index pattern, due to angular issues it's undefined at first rendering
     */
    selectedIndexPattern: IndexPattern;
}
/**
 * Component allows you to select an index pattern in discovers side bar
 */
export declare function DiscoverIndexPattern({ indexPatternList, onChangeIndexPattern, selectedIndexPattern, }: DiscoverIndexPatternProps): JSX.Element | null;
//# sourceMappingURL=discover_index_pattern.d.ts.map