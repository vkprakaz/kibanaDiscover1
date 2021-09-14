import './index.scss';
export interface LazyScope extends ng.IScope {
    [key: string]: any;
}
export declare function createDocTableDirective(pagerFactory: any, $filter: any): {
    restrict: string;
    template: string;
    scope: {
        sorting: string;
        columns: string;
        hits: string;
        totalHitCount: string;
        indexPattern: string;
        isLoading: string;
        infiniteScroll: string;
        filter: string;
        minimumVisibleRows: string;
        onAddColumn: string;
        onChangeSortOrder: string;
        onMoveColumn: string;
        onRemoveColumn: string;
        inspectorAdapters: string;
        useNewFieldsApi: string;
    };
    link: ($scope: LazyScope, $el: JQuery) => void;
};
//# sourceMappingURL=doc_table.d.ts.map