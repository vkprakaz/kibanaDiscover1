import { IndexPattern, IndexPatternField } from '../../../../../data/common';
import { SortDirection } from '../../../../../data/public';
import { LoadingStatus } from '../../angular/context_query_state';
import { AppState } from '../../angular/context_state';
import { EsHitRecordList } from '../../angular/context/api/context';
import { DiscoverServices } from '../../../build_services';
export interface ContextAppContentProps {
    columns: string[];
    onAddColumn: (columnsName: string) => void;
    onRemoveColumn: (columnsName: string) => void;
    onSetColumns: (columnsNames: string[]) => void;
    services: DiscoverServices;
    indexPattern: IndexPattern;
    predecessorCount: number;
    successorCount: number;
    rows: EsHitRecordList;
    sort: [[string, SortDirection]];
    predecessors: EsHitRecordList;
    successors: EsHitRecordList;
    anchorStatus: LoadingStatus;
    predecessorsStatus: LoadingStatus;
    successorsStatus: LoadingStatus;
    useNewFieldsApi: boolean;
    isLegacy: boolean;
    setAppState: (newState: Partial<AppState>) => void;
    addFilter: (field: IndexPatternField | string, values: unknown, operation: string) => Promise<void>;
}
export declare function clamp(value: number): number;
export declare function ContextAppContent({ columns, onAddColumn, onRemoveColumn, onSetColumns, services, indexPattern, predecessorCount, successorCount, rows, sort, predecessors, successors, anchorStatus, predecessorsStatus, successorsStatus, useNewFieldsApi, isLegacy, setAppState, addFilter, }: ContextAppContentProps): JSX.Element;
//# sourceMappingURL=context_app_content.d.ts.map