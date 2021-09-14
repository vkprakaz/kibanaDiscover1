import React from 'react';
import './discover_grid.scss';
import { EuiDataGridProps } from '@elastic/eui';
import { IndexPattern } from '../../../kibana_services';
import { DocViewFilterFn, ElasticSearchHit } from '../../doc_views/doc_views_types';
import { DiscoverGridSettings } from './types';
import { SortPairArr } from '../../angular/doc_table/lib/get_sort';
import { DiscoverServices } from '../../../build_services';
export interface DiscoverGridProps {
    /**
     * Determines which element labels the grid for ARIA
     */
    ariaLabelledBy: string;
    /**
     * Optional class name to apply
     */
    className?: string;
    /**
     * Determines which columns are displayed
     */
    columns: string[];
    /**
     * If set, the given document is displayed in a flyout
     */
    expandedDoc?: ElasticSearchHit;
    /**
     * The used index pattern
     */
    indexPattern: IndexPattern;
    /**
     * Determines if data is currently loaded
     */
    isLoading: boolean;
    /**
     * Function used to add a column in the document flyout
     */
    onAddColumn: (column: string) => void;
    /**
     * Function to add a filter in the grid cell or document flyout
     */
    onFilter: DocViewFilterFn;
    /**
     * Function used in the grid header and flyout to remove a column
     * @param column
     */
    onRemoveColumn: (column: string) => void;
    /**
     * Function triggered when a column is resized by the user
     */
    onResize?: (colSettings: {
        columnId: string;
        width: number;
    }) => void;
    /**
     * Function to set all columns
     */
    onSetColumns: (columns: string[]) => void;
    /**
     * function to change sorting of the documents, skipped when isSortEnabled is set to false
     */
    onSort?: (sort: string[][]) => void;
    /**
     * Array of documents provided by Elasticsearch
     */
    rows?: ElasticSearchHit[];
    /**
     * The max size of the documents returned by Elasticsearch
     */
    sampleSize: number;
    /**
     * Function to set the expanded document, which is displayed in a flyout
     */
    setExpandedDoc: (doc: ElasticSearchHit | undefined) => void;
    /**
     * Grid display settings persisted in Elasticsearch (e.g. column width)
     */
    settings?: DiscoverGridSettings;
    /**
     * Saved search description
     */
    searchDescription?: string;
    /**
     * Saved search title
     */
    searchTitle?: string;
    /**
     * Discover plugin services
     */
    services: DiscoverServices;
    /**
     * Determines whether the time columns should be displayed (legacy settings)
     */
    showTimeCol: boolean;
    /**
     * Manage user sorting control
     */
    isSortEnabled?: boolean;
    /**
     * Current sort setting
     */
    sort: SortPairArr[];
    /**
     * How the data is fetched
     */
    useNewFieldsApi: boolean;
    /**
     * Manage pagination control
     */
    isPaginationEnabled?: boolean;
    /**
     * List of used control columns (available: 'openDetails', 'select')
     */
    controlColumnIds?: string[];
}
export declare const EuiDataGridMemoized: React.MemoExoticComponent<(props: EuiDataGridProps) => JSX.Element>;
export declare const DiscoverGrid: ({ ariaLabelledBy, columns, indexPattern, isLoading, expandedDoc, onAddColumn, onFilter, onRemoveColumn, onResize, onSetColumns, onSort, rows, sampleSize, searchDescription, searchTitle, services, setExpandedDoc, settings, showTimeCol, sort, useNewFieldsApi, isSortEnabled, isPaginationEnabled, controlColumnIds, className, }: DiscoverGridProps) => JSX.Element;
//# sourceMappingURL=discover_grid.d.ts.map