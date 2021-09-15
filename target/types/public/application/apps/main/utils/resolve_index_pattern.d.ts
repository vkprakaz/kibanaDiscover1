import { IUiSettingsClient, SavedObject, ToastsStart } from 'kibana/public';
import { IndexPattern } from '../../../../kibana_services';
import { IndexPatternsContract, SearchSource } from '../../../../../../../../src/plugins/data/common';
export declare type IndexPatternSavedObject = SavedObject & {
    title: string;
};
interface IndexPatternData {
    /**
     * List of existing index patterns
     */
    list: IndexPatternSavedObject[];
    /**
     * Loaded index pattern (might be default index pattern if requested was not found)
     */
    loaded: IndexPattern;
    /**
     * Id of the requested index pattern
     */
    stateVal: string;
    /**
     * Determines if requested index pattern was found
     */
    stateValFound: boolean;
}
export declare function findIndexPatternById(indexPatterns: IndexPatternSavedObject[], id: string): IndexPatternSavedObject | undefined;
/**
 * Checks if the given defaultIndex exists and returns
 * the first available index pattern id if not
 */
export declare function getFallbackIndexPatternId(indexPatterns: IndexPatternSavedObject[], defaultIndex?: string): string;
/**
 * A given index pattern id is checked for existence and a fallback is provided if it doesn't exist
 * The provided defaultIndex is usually configured in Advanced Settings, if it's also invalid
 * the first entry of the given list of Indexpatterns is used
 */
export declare function getIndexPatternId(id?: string, indexPatterns?: IndexPatternSavedObject[], defaultIndex?: string): string;
/**
 * Function to load the given index pattern by id, providing a fallback if it doesn't exist
 */
export declare function loadIndexPattern(id: string, indexPatterns: IndexPatternsContract, config: IUiSettingsClient): Promise<IndexPatternData>;
/**
 * Function used in the discover controller to message the user about the state of the current
 * index pattern
 */
export declare function resolveIndexPattern(ip: IndexPatternData, searchSource: SearchSource, toastNotifications: ToastsStart): IndexPattern;
export {};
//# sourceMappingURL=resolve_index_pattern.d.ts.map