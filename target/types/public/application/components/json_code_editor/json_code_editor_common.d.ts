import './json_code_editor.scss';
import React from 'react';
import { monaco } from '@kbn/monaco';
interface JsonCodeEditorCommonProps {
    jsonValue: string;
    onEditorDidMount: (editor: monaco.editor.IStandaloneCodeEditor) => void;
    width?: string | number;
    hasLineNumbers?: boolean;
}
export declare const JsonCodeEditorCommon: ({ jsonValue, width, hasLineNumbers, onEditorDidMount, }: JsonCodeEditorCommonProps) => JSX.Element | null;
export declare const JSONCodeEditorCommonMemoized: React.MemoExoticComponent<(props: JsonCodeEditorCommonProps) => JSX.Element>;
export {};
//# sourceMappingURL=json_code_editor_common.d.ts.map