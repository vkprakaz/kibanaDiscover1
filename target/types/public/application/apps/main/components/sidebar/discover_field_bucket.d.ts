import { Bucket } from './types';
import { IndexPatternField } from '../../../../../../../data/public';
import './discover_field_bucket.scss';
interface Props {
    bucket: Bucket;
    field: IndexPatternField;
    onAddFilter: (field: IndexPatternField | string, value: string, type: '+' | '-') => void;
}
export declare function DiscoverFieldBucket({ field, bucket, onAddFilter }: Props): JSX.Element;
export {};
//# sourceMappingURL=discover_field_bucket.d.ts.map