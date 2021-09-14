import { EuiButtonProps } from '@elastic/eui';
import { EuiSelectableProps } from '@elastic/eui/src/components/selectable/selectable';
import { IndexPatternRef } from './types';
export declare type ChangeIndexPatternTriggerProps = EuiButtonProps & {
    label: string;
    title?: string;
};
export declare function ChangeIndexPattern({ indexPatternId, indexPatternRefs, onChangeIndexPattern, selectableProps, trigger, }: {
    indexPatternId?: string;
    indexPatternRefs: IndexPatternRef[];
    onChangeIndexPattern: (newId: string) => void;
    selectableProps?: EuiSelectableProps<{
        value: string;
    }>;
    trigger: ChangeIndexPatternTriggerProps;
}): JSX.Element;
//# sourceMappingURL=change_indexpattern.d.ts.map