import './hits_counter.scss';
export interface HitsCounterProps {
    /**
     * the number of query hits
     */
    hits?: number;
    /**
     * displays the reset button
     */
    showResetButton: boolean;
    /**
     * resets the query
     */
    onResetQuery: () => void;
}
export declare function HitsCounter({ hits, showResetButton, onResetQuery }: HitsCounterProps): JSX.Element | null;
//# sourceMappingURL=hits_counter.d.ts.map