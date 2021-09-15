import { IndexPattern } from '../../../../kibana_services';
import { ElasticSearchHit } from '../../../doc_views/doc_views_types';
/**
 * This function is recording stats of the available fields, for usage in sidebar and sharing
 * Note that this values aren't displayed, but used for internal calculations
 */
export declare function calcFieldCounts(counts: Record<string, number> | undefined, rows: ElasticSearchHit[], indexPattern: IndexPattern): Record<string, number>;
//# sourceMappingURL=calc_field_counts.d.ts.map