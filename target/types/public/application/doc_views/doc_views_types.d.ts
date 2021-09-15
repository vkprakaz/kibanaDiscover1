import { ComponentType } from 'react';
import { IScope } from 'angular';
import type { estypes } from '@elastic/elasticsearch';
import { IndexPattern } from '../../../../../../src/plugins/data/public';
export interface AngularDirective {
    controller: (...injectedServices: unknown[]) => void;
    template: string;
}
export declare type AngularScope = IScope;
export declare type ElasticSearchHit<T = unknown> = estypes.SearchResponse<T>['hits']['hits'][number];
export interface FieldMapping {
    filterable?: boolean;
    scripted?: boolean;
    rowCount?: number;
    type: string;
    name: string;
    displayName?: string;
}
export declare type DocViewFilterFn = (mapping: FieldMapping | string | undefined, value: unknown, mode: '+' | '-') => void;
export interface DocViewRenderProps {
    columns?: string[];
    filter?: DocViewFilterFn;
    hit: ElasticSearchHit;
    indexPattern?: IndexPattern;
    onAddColumn?: (columnName: string) => void;
    onRemoveColumn?: (columnName: string) => void;
}
export declare type DocViewerComponent = ComponentType<DocViewRenderProps>;
export declare type DocViewRenderFn = (domeNode: HTMLDivElement, renderProps: DocViewRenderProps) => () => void;
export interface BaseDocViewInput {
    order: number;
    shouldShow?: (hit: ElasticSearchHit) => boolean;
    title: string;
}
export interface RenderDocViewInput extends BaseDocViewInput {
    render: DocViewRenderFn;
    component?: undefined;
    directive?: undefined;
}
interface ComponentDocViewInput extends BaseDocViewInput {
    component: DocViewerComponent;
    render?: undefined;
    directive?: undefined;
}
interface DirectiveDocViewInput extends BaseDocViewInput {
    component?: undefined;
    render?: undefined;
    directive: ng.IDirective;
}
export declare type DocViewInput = ComponentDocViewInput | RenderDocViewInput | DirectiveDocViewInput;
export declare type DocView = DocViewInput & {
    shouldShow: NonNullable<DocViewInput['shouldShow']>;
};
export declare type DocViewInputFn = () => DocViewInput;
export {};
//# sourceMappingURL=doc_views_types.d.ts.map