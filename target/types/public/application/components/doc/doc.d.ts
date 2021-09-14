import { IndexPatternsContract } from 'src/plugins/data/public';
export interface DocProps {
    /**
     * Id of the doc in ES
     */
    id: string;
    /**
     * Index in ES to query
     */
    index: string;
    /**
     * IndexPattern ID used to get IndexPattern entity
     * that's used for adding additional fields (stored_fields, script_fields, docvalue_fields)
     */
    indexPatternId: string;
    /**
     * IndexPatternService to get a given index pattern by ID
     */
    indexPatternService: IndexPatternsContract;
    /**
     * If set, will always request source, regardless of the global `fieldsFromSource` setting
     */
    requestSource?: boolean;
}
export declare function Doc(props: DocProps): JSX.Element;
//# sourceMappingURL=doc.d.ts.map