import * as React from 'react';
import { BasePickerProps } from '../typings/BasePicker';
import { ResponsiveWrapperProps } from './ResponsiveWrapper';
import { SomeWrapper } from './Wrapper';
import { StaticWrapperProps, DateInputPropsLike, WrapperProps } from './WrapperProps';
interface MakePickerOptions {
    PureDateInputComponent?: React.ComponentType<DateInputPropsLike>;
    KeyboardDateInputComponent?: React.ComponentType<DateInputPropsLike>;
}
interface WithWrapperProps {
    children: React.ReactNode;
    DateInputProps: DateInputPropsLike;
    wrapperProps: Omit<WrapperProps, 'DateInputProps'>;
}
export declare function makeWrapperComponent<TWrapper extends SomeWrapper = any>(Wrapper: TWrapper, { KeyboardDateInputComponent, PureDateInputComponent }: MakePickerOptions): (props: Partial<BasePickerProps<any, any>> & WithWrapperProps & ResponsiveWrapperProps & StaticWrapperProps) => JSX.Element;
export default makeWrapperComponent;
