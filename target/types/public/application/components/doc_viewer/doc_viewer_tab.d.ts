import React from 'react';
import { DocViewRenderFn, DocViewRenderProps } from '../../doc_views/doc_views_types';
interface Props {
    id: number;
    renderProps: DocViewRenderProps;
    title: string;
    render?: DocViewRenderFn;
    component?: React.ComponentType<DocViewRenderProps>;
}
interface State {
    error: Error | string;
    hasError: boolean;
}
/**
 * Renders the tab content of a doc view.
 * Displays an error message when it encounters exceptions, thanks to
 * Error Boundaries.
 */
export declare class DocViewerTab extends React.Component<Props, State> {
    state: {
        hasError: boolean;
        error: string;
    };
    static getDerivedStateFromError(error: unknown): {
        hasError: boolean;
        error: unknown;
    };
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=doc_viewer_tab.d.ts.map