import { Capabilities, IUiSettingsClient } from 'kibana/public';
import { IndexPattern, IndexPatternsContract } from '../../kibana_services';
import { AppState as DiscoverState, GetStateReturn as DiscoverGetStateReturn } from '../apps/main/services/discover_state';
import { AppState as ContextState, GetStateReturn as ContextGetStateReturn } from '../angular/context_state';
interface UseDataGridColumnsProps {
    capabilities: Capabilities;
    config: IUiSettingsClient;
    indexPattern: IndexPattern;
    indexPatterns: IndexPatternsContract;
    useNewFieldsApi: boolean;
    setAppState: DiscoverGetStateReturn['setAppState'] | ContextGetStateReturn['setAppState'];
    state: DiscoverState | ContextState;
}
export declare const useDataGridColumns: ({ capabilities, config, indexPattern, indexPatterns, setAppState, state, useNewFieldsApi, }: UseDataGridColumnsProps) => {
    columns: string[];
    onAddColumn: (columnName: string) => void;
    onRemoveColumn: (columnName: string) => void;
    onMoveColumn: (columnName: string, newIndex: number) => void;
    onSetColumns: (columns: string[]) => void;
};
export {};
//# sourceMappingURL=use_data_grid_columns.d.ts.map