import { SearchSource } from '../../../../../../../../src/plugins/data/common';
import { DataPublicPluginStart } from '../../../../../../../../src/plugins/data/public';
/**
 * Helper function to apply or remove aggregations to a given search source used for gaining data
 * for Discover's histogram vis
 */
export declare function getChartAggConfigs(searchSource: SearchSource, histogramInterval: string, data: DataPublicPluginStart): import("../../../../../../../../src/plugins/data/common").AggConfigs;
//# sourceMappingURL=get_chart_agg_configs.d.ts.map