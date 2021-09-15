import { auto } from 'angular';
import { DocView, DocViewInput, ElasticSearchHit, DocViewInputFn } from './doc_views_types';
export declare class DocViewsRegistry {
    private docViews;
    private angularInjectorGetter;
    setAngularInjectorGetter: (injectorGetter: () => Promise<auto.IInjectorService>) => void;
    /**
     * Extends and adds the given doc view to the registry array
     */
    addDocView(docViewRaw: DocViewInput | DocViewInputFn): void;
    /**
     * Returns a sorted array of doc_views for rendering tabs
     */
    getDocViewsSorted(hit: ElasticSearchHit): DocView[];
}
//# sourceMappingURL=doc_views_registry.d.ts.map