import './discover_field_search.scss';
export interface State {
    searchable: string;
    aggregatable: string;
    type: string;
    missing: boolean;
    [index: string]: string | boolean;
}
export interface Props {
    /**
     * triggered on input of user into search field
     */
    onChange: (field: string, value: string | boolean | undefined) => void;
    /**
     * the input value of the user
     */
    value?: string;
    /**
     * types for the type filter
     */
    types: string[];
    /**
     * use new fields api
     */
    useNewFieldsApi?: boolean;
}
/**
 * Component is Discover's side bar to  search of available fields
 * Additionally there's a button displayed that allows the user to show/hide more filter fields
 */
export declare function DiscoverFieldSearch({ onChange, value, types, useNewFieldsApi }: Props): JSX.Element | null;
//# sourceMappingURL=discover_field_search.d.ts.map