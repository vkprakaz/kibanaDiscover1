import { DiscoverLayoutProps } from '../layout/types';
import { Query, TimeRange } from '../../../../../../../../../src/plugins/data/common/query';
import { GetStateReturn } from '../../services/discover_state';
export declare type DiscoverTopNavProps = Pick<DiscoverLayoutProps, 'indexPattern' | 'navigateTo' | 'savedSearch' | 'services' | 'searchSource'> & {
    onOpenInspector: () => void;
    query?: Query;
    savedQuery?: string;
    updateQuery: (payload: {
        dateRange: TimeRange;
        query?: Query;
    }, isUpdate?: boolean) => void;
    stateContainer: GetStateReturn;
    resetSavedSearch: () => void;
};
export declare const DiscoverTopNav: ({ indexPattern, onOpenInspector, query, savedQuery, stateContainer, updateQuery, searchSource, navigateTo, savedSearch, services, resetSavedSearch, }: DiscoverTopNavProps) => JSX.Element;
//# sourceMappingURL=discover_topnav.d.ts.map