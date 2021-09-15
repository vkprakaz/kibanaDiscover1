import { IUiSettingsClient } from 'src/core/public';
/**
 * Makes sure the current state is not referencing the source column when using the fields api
 * @param state
 * @param uiSettings
 */
export declare function handleSourceColumnState<TState extends {
    columns?: string[];
}>(state: TState, uiSettings: IUiSettingsClient): TState;
//# sourceMappingURL=state_helpers.d.ts.map