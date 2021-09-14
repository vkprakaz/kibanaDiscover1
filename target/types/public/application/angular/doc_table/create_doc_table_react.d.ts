import angular, { auto, IScope } from 'angular';
import type { estypes } from '@elastic/elasticsearch';
import { IIndexPattern } from '../../../kibana_services';
import { IndexPatternField } from '../../../../../data/common';
export interface DocTableLegacyProps {
    columns: string[];
    searchDescription?: string;
    searchTitle?: string;
    onFilter: (field: IndexPatternField | string, value: string, type: '+' | '-') => void;
    rows: estypes.SearchHit[];
    indexPattern: IIndexPattern;
    minimumVisibleRows: number;
    onAddColumn?: (column: string) => void;
    onBackToTop?: () => void;
    onSort?: (sort: string[][]) => void;
    onMoveColumn?: (columns: string, newIdx: number) => void;
    onRemoveColumn?: (column: string) => void;
    sampleSize?: number;
    sort?: string[][];
    useNewFieldsApi?: boolean;
}
export interface AngularDirective {
    template: string;
}
export declare type AngularScope = IScope & {
    renderProps?: DocTableLegacyProps;
};
/**
 * Compiles and injects the give angular template into the given dom node
 * returns a function to cleanup the injected angular element
 */
export declare function injectAngularElement(domNode: Element, template: string, renderProps: any, injector: auto.IInjectorService): Promise<angular.IScope & {
    renderProps: any;
}>;
export declare function DocTableLegacy(renderProps: DocTableLegacyProps): JSX.Element;
//# sourceMappingURL=create_doc_table_react.d.ts.map