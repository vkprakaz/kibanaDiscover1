import { Component } from 'react';
import PropTypes from 'prop-types';
import { ElementClickListener, BrushEndListener, Theme } from '@elastic/charts';
import { EuiChartThemeType } from '@elastic/eui/dist/eui_charts_theme';
import { Chart as IChart } from './point_series';
export interface DiscoverHistogramProps {
    chartData: IChart;
    timefilterUpdateHandler: (ranges: {
        from: number;
        to: number;
    }) => void;
}
interface DiscoverHistogramState {
    chartsTheme: EuiChartThemeType['theme'];
    chartsBaseTheme: Theme;
}
export declare class DiscoverHistogram extends Component<DiscoverHistogramProps, DiscoverHistogramState> {
    static propTypes: {
        chartData: PropTypes.Requireable<object>;
        timefilterUpdateHandler: PropTypes.Requireable<(...args: any[]) => any>;
    };
    private subscription?;
    state: {
        chartsTheme: import("@elastic/charts").RecursivePartial<Theme>;
        chartsBaseTheme: Theme;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onBrushEnd: BrushEndListener;
    onElementClick: (xInterval: number) => ElementClickListener;
    formatXValue: (val: string) => string;
    render(): JSX.Element | null;
}
export {};
//# sourceMappingURL=histogram.d.ts.map