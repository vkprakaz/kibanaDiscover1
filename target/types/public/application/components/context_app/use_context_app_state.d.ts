import { IndexPattern } from '../../../../../../../src/plugins/data/public';
import { DiscoverServices } from '../../../build_services';
import { AppState } from '../../angular/context_state';
export declare function useContextAppState({ indexPattern, services, }: {
    indexPattern: IndexPattern;
    services: DiscoverServices;
}): {
    appState: AppState;
    stateContainer: import("../../angular/context_state").GetStateReturn;
    setAppState: (newState: Partial<AppState>) => void;
};
//# sourceMappingURL=use_context_app_state.d.ts.map