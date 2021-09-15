interface LazyScope extends ng.IScope {
    [key: string]: any;
}
export declare function createTableRowDirective($compile: ng.ICompileService): {
    restrict: string;
    scope: {
        columns: string;
        filter: string;
        indexPattern: string;
        row: string;
        onAddColumn: string;
        onRemoveColumn: string;
        useNewFieldsApi: string;
    };
    link: ($scope: LazyScope, $el: JQuery) => void;
};
export {};
//# sourceMappingURL=table_row.d.ts.map