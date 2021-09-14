import { Capabilities, IUiSettingsClient } from 'kibana/public';
import { IndexPattern, IndexPatternsContract } from '../../../../kibana_services';
import { AppState as DiscoverState, GetStateReturn as DiscoverGetStateReturn } from '../../../apps/main/services/discover_state';
import { AppState as ContextState, GetStateReturn as ContextGetStateReturn } from '../../context_state';
export declare function addColumn(columns: string[], columnName: string, useNewFieldsApi?: boolean): string[];
export declare function removeColumn(columns: string[], columnName: string, useNewFieldsApi?: boolean): string[];
export declare function moveColumn(columns: string[], columnName: string, newIndex: number): string[];
export declare function getStateColumnActions({ capabilities, config, indexPattern, indexPatterns, useNewFieldsApi, setAppState, state, }: {
    capabilities: Capabilities;
    config: IUiSettingsClient;
    indexPattern: IndexPattern;
    indexPatterns: IndexPatternsContract;
    useNewFieldsApi: boolean;
    setAppState: DiscoverGetStateReturn['setAppState'] | ContextGetStateReturn['setAppState'];
    state: DiscoverState | ContextState;
}): {
    onAddColumn: (columnName: string) => void;
    onRemoveColumn: (columnName: string) => void;
    onMoveColumn: (columnName: string, newIndex: number) => void;
    onSetColumns: (columns: string[]) => void;
};
//# sourceMappingURL=columns.d.ts.map