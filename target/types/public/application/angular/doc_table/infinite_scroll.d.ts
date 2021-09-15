interface LazyScope extends ng.IScope {
    [key: string]: any;
}
export declare function createInfiniteScrollDirective(): {
    restrict: string;
    scope: {
        more: string;
    };
    link: ($scope: LazyScope, $element: JQuery) => void;
};
export {};
//# sourceMappingURL=infinite_scroll.d.ts.map