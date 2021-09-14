export interface DiscoverIndexPatternTitleProps {
    /**
     * determines whether the change link is displayed
     */
    isChangeable: boolean;
    /**
     * function triggered when the change link is clicked
     */
    onChange: () => void;
    /**
     * title of the current index pattern
     */
    title: string;
}
/**
 * Component displaying the title of the current selected index pattern
 * and if changeable is true, a link is provided to change the index pattern
 */
export declare function DiscoverIndexPatternTitle({ isChangeable, onChange, title, }: DiscoverIndexPatternTitleProps): JSX.Element;
//# sourceMappingURL=discover_index_pattern_title.d.ts.map