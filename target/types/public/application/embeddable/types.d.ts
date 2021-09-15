import { Embeddable, EmbeddableInput, EmbeddableOutput, IEmbeddable } from 'src/plugins/embeddable/public';
import { SortOrder } from '../angular/doc_table/components/table_header/helpers';
import { Filter, IIndexPattern, TimeRange, Query } from '../../../../../../src/plugins/data/public';
import { SavedSearch } from '../..';
export interface SearchInput extends EmbeddableInput {
    timeRange: TimeRange;
    query?: Query;
    filters?: Filter[];
    hidePanelTitles?: boolean;
    columns?: string[];
    sort?: SortOrder[];
}
export interface SearchOutput extends EmbeddableOutput {
    editUrl: string;
    indexPatterns?: IIndexPattern[];
    editable: boolean;
}
export interface ISearchEmbeddable extends IEmbeddable<SearchInput, SearchOutput> {
    getSavedSearch(): SavedSearch;
}
export interface SearchEmbeddable extends Embeddable<SearchInput, SearchOutput> {
    type: string;
}
//# sourceMappingURL=types.d.ts.map