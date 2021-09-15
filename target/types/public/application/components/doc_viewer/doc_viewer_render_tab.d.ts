import { DocViewRenderFn, DocViewRenderProps } from '../../doc_views/doc_views_types';
interface Props {
    render: DocViewRenderFn;
    renderProps: DocViewRenderProps;
}
/**
 * Responsible for rendering a tab provided by a render function.
 * So any other framework can be used (E.g. legacy Angular 3rd party plugin code)
 * The provided `render` function is called with a reference to the
 * component's `HTMLDivElement` as 1st arg and `renderProps` as 2nd arg
 */
export declare function DocViewRenderTab({ render, renderProps }: Props): JSX.Element;
export {};
//# sourceMappingURL=doc_viewer_render_tab.d.ts.map