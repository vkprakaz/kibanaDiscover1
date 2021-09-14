/**
 * Allows lazy initialization of a singleton
 * Context: https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
 * Why not using useMemo: We're using the useMemo here also kind of as a guarantee to
 * only instantiate that subject once. Unfortunately useMemo explicitly does not give
 * those guarantees:
 * https://reactjs.org/docs/hooks-reference.html#usememo
 */
export declare function useSingleton<T>(initialize: () => T): T;
//# sourceMappingURL=use_singleton.d.ts.map