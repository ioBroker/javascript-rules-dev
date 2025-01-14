import { PureComponent } from 'react';
// eslint-disable-next-line no-duplicate-imports
import type React from 'react';

import { type AdminConnection, type IobTheme } from '@iobroker/adapter-react-v5';

import type {
    RuleBlockConfig,
    RuleBlockDescription,
    RuleContext,
    RuleInputAny,
    RuleInputButton,
    RuleInputCheckbox,
    RuleInputColor,
    RuleInputNameText,
    RuleInputNumber,
    RuleInputSlider,
    RuleInputSwitch,
    RuleInputText,
    RuleTagCard,
    RuleTagCardTitle,
    RuleUserRules,
    RuleInputObjectID,
    RuleInputTime,
    RuleInputSelect,
    RuleInputInstance,
    RuleInputDialog,
    RuleInputModalInput,
    RuleInputDate,
    RuleInputCron,
    RuleInputWizard,
    DebugMessage,
} from './types';

export interface GenericBlockProps<Settings> {
    _id: number;
    name?: string;
    icon?: string;
    adapter?: string;
    socket: AdminConnection;
    userRules?: RuleUserRules;
    classes?: {
        valueAck: string;
        valueNotAck: string;
    };
    settings?: Settings;
    onChange: (settings: Settings) => void;
    onDebugMessage?: DebugMessage[];
    enableSimulation: boolean;
    theme: IobTheme;
    className?: string;
    style?: React.CSSProperties;
    inputs?: RuleInputAny[];
    notFound?: boolean;
    isTourOpen?: boolean;
    tourStep?: number;
    setTourStep?: (step: number) => void;
    setOnUpdate?: (value: boolean) => void;
    helpDialog?: string;
    acceptedBy?: string;
    onUpdate?: boolean;
}

export interface GenericBlockState<Settings> {
    inputs: RuleInputAny[];
    name: string;
    icon: string;
    adapter: string;
    helpDialog: string;
    tagCardArray: (RuleTagCard | RuleTagCardTitle)[];
    openTagMenu: any;
    openModal: boolean;
    iconTag: boolean;
    error: string;
    helpText: string;
    instanceSelectionOptions: any[];
    instanceSelectionDef: string;
    hideAttributes: string[];
    settings: Settings;
    debugMessage: any;
    enableSimulation: boolean;
}

export declare class IGenericBlock<
    Settings extends RuleBlockConfig = RuleBlockConfig,
    TState extends GenericBlockState<Settings> = GenericBlockState<Settings>,
> extends PureComponent<GenericBlockProps<Settings>, TState> {
    private debugHideTimeout: ReturnType<typeof setTimeout> | null;

    private lastObjectIdChange: number;
    private enableSimulationProcessing: boolean;
    private lastDebugMessage: number;
    private debugMessageTimeout: ReturnType<typeof setTimeout> | null;

    static getStaticData(): RuleBlockDescription;

    static compile(_config: RuleBlockConfig, _context: RuleContext): string;

    constructor(props: GenericBlockProps<Settings>, item: RuleBlockDescription);

    static getDerivedStateFromProps(
        nextProps: GenericBlockProps<any>,
        state: GenericBlockState<any>,
    ): Partial<GenericBlockState<any>> | null;

    // called every time, the tagCard changes or at start
    onTagChange(
        _tagCard?: RuleTagCardTitle | null,
        cb?: () => void,
        _value?: any,
        _toggle?: boolean,
        _useTrigger?: boolean,
    ): void;

    // called if trigger added or removed
    onUpdate(): void;

    onValueChanged(_value: any, _attr: string): void;

    renderText: (input: RuleInputText, value: string, onChange: (value: string) => void) => React.JSX.Element;

    renderSwitch: (input: RuleInputSwitch, value: boolean, onChange: (value: boolean) => void) => React.JSX.Element;

    renderNameText: (
        { attr, signature, doNotTranslate, defaultValue }: RuleInputNameText,
        value: string,
    ) => React.JSX.Element;

    renderNumber: (
        input: RuleInputNumber,
        value: number,
        onChange: (value: number | string) => void,
    ) => React.JSX.Element | null;

    renderColor: (input: RuleInputColor, value: string, onChange: (value: string) => void) => React.JSX.Element;

    renderCheckbox: (input: RuleInputCheckbox, value: boolean, onChange: (value: boolean) => void) => React.JSX.Element;

    renderSlider: (input: RuleInputSlider, value: number, onChange: (value: number) => void) => React.JSX.Element;

    renderButton: (input: RuleInputButton, value: boolean, onChange: (bValue: boolean) => void) => React.JSX.Element;

    findIcon: (obj: ioBroker.Object | null | undefined) => Promise<string | null>;

    renderObjectID: (
        input: RuleInputObjectID,
        value: string,
        onChange: (value: Record<string, any>, cb: () => void) => void,
    ) => React.JSX.Element | null;

    renderIconTag: () => React.JSX.Element;

    renderTime: (input: RuleInputTime, value: string, onChange: (value: string) => void) => React.JSX.Element;

    renderSelect: (
        input: RuleInputSelect,
        value: any,
        onChange: (value: any, attr: string) => void,
    ) => React.JSX.Element;

    renderInstance: (
        input: RuleInputInstance,
        value: string,
        onChange: (value: string) => void,
    ) => React.JSX.Element | null;

    renderDialog: (input: RuleInputDialog) => React.JSX.Element;

    renderModalInput: (
        input: RuleInputModalInput,
        value: string | number,
        onChange: (value: string | number) => void,
    ) => React.JSX.Element;

    renderDate: (input: RuleInputDate, value: string, onChange: (value: string) => void) => React.JSX.Element;

    static getReplacesInText(context: RuleContext): string;

    /////////////////////////////
    renderTags(): React.JSX.Element | string | undefined;

    // will be overwritten
    getData(): RuleBlockDescription;

    onChangeTag: () => void;

    onChangeInput: (attribute: string) => (value: any, attr?: string | (() => void), cb?: () => void) => void;

    renderSpecific(): React.JSX.Element | null;

    renderDebug(_message?: any): React.JSX.Element | string;

    renderDebugInfo(): React.JSX.Element | null;

    renderCron(
        _input: RuleInputCron,
        _value: string,
        _onChange: (value: string, attr?: string, cb?: () => void) => void,
    ): React.JSX.Element | null;

    renderWizard(
        _input: RuleInputWizard,
        _value: string,
        _onChange: (newData: Record<string, any> | string) => void,
    ): React.JSX.Element | null;

    renderWriteState(): React.JSX.Element[] | null;

    renderInputElement(input: RuleInputAny, index: number): React.JSX.Element | React.JSX.Element[] | null;
}
