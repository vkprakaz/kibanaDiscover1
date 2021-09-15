import { Query } from 'src/plugins/../../src/plugins/data/public';
/**
 * Creates a standardized query object from old queries that were either strings or pure ES query DSL
 *
 * @param query - a legacy query, what used to be stored in SearchSource's query property
 * @return Object
 */
export declare function migrateLegacyQuery(query: Query | {
    [key: string]: unknown;
} | string): Query;
//# sourceMappingURL=migrate_legacy_query.d.ts.map