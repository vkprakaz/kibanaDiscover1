import { auto, IController } from 'angular';
import { DocViewRenderProps, AngularDirective } from './doc_views_types';
/**
 * Compiles and injects the give angular template into the given dom node
 * returns a function to cleanup the injected angular element
 */
export declare function injectAngularElement(domNode: Element, template: string, scopeProps: DocViewRenderProps, Controller: IController, getInjector: () => Promise<auto.IInjectorService>): Promise<() => void>;
/**
 * Converts a given legacy angular directive to a render function
 * for usage in a react component. Note that the rendering is async
 */
export declare function convertDirectiveToRenderFn(directive: AngularDirective, getInjector: () => Promise<auto.IInjectorService>): (domNode: Element, props: DocViewRenderProps) => () => void;
//# sourceMappingURL=doc_views_helpers.d.ts.map