import { IUiSettingsClient } from 'kibana/public';
import { SavedSearch } from '../../../../saved_searches';
import { DataPublicPluginStart } from '../../../../../../data/public';
import { AppState } from '../services/discover_state';
export declare function getStateDefaults({ config, data, savedSearch, }: {
    config: IUiSettingsClient;
    data: DataPublicPluginStart;
    savedSearch: SavedSearch;
}): AppState;
//# sourceMappingURL=get_state_defaults.d.ts.map