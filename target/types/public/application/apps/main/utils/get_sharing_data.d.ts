import type { Capabilities, IUiSettingsClient } from 'kibana/public';
import { ISearchSource } from '../../../../../../../../src/plugins/data/common';
import type { SavedSearch } from '../../../../saved_searches/types';
import { AppState } from '../services/discover_state';
/**
 * Preparing data to share the current state as link or CSV/Report
 */
export declare function getSharingData(currentSearchSource: ISearchSource, state: AppState | SavedSearch, config: IUiSettingsClient): Promise<{
    searchSource: import("../../../../../../../../src/plugins/data/common").SearchSourceFields;
    columns: string[];
}>;
export interface DiscoverCapabilities {
    createShortUrl?: boolean;
    save?: boolean;
    saveQuery?: boolean;
    show?: boolean;
    storeSearchSession?: boolean;
}
export declare const showPublicUrlSwitch: (anonymousUserCapabilities: Capabilities) => boolean;
//# sourceMappingURL=get_sharing_data.d.ts.map