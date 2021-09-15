import { I18nStart } from 'kibana/public';
import './open_options_popover.scss';
interface OptionsPopoverProps {
    onClose: () => void;
    anchorElement: HTMLElement;
}
export declare function OptionsPopover(props: OptionsPopoverProps): JSX.Element;
export declare function openOptionsPopover({ I18nContext, anchorElement, }: {
    I18nContext: I18nStart['Context'];
    anchorElement: HTMLElement;
}): void;
export {};
//# sourceMappingURL=open_options_popover.d.ts.map