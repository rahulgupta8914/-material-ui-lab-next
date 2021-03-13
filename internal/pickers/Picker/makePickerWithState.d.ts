import * as React from 'react';
import { ExportedPickerProps } from './Picker';
import { ParsableDate } from '../constants/prop-types';
import { SomeWrapper, PublicWrapperProps } from '../wrappers/Wrapper';
import { ResponsiveWrapper } from '../wrappers/ResponsiveWrapper';
import { AllAvailableViews } from '../typings/Views';
import { AllSharedPickerProps } from './SharedPickerProps';
import { ToolbarComponentProps } from '../typings/BasePicker';
declare type AllAvailableForOverrideProps = ExportedPickerProps<AllAvailableViews>;
export declare type AllPickerProps<T, TWrapper extends SomeWrapper = SomeWrapper> = T & AllSharedPickerProps & PublicWrapperProps<TWrapper>;
export interface MakePickerOptions<T extends unknown> {
    name: string;
    /**
     * Hook that running validation for the `value` and input.
     */
    useValidation: (value: ParsableDate, props: T) => string | null;
    /**
     * Intercept props to override or inject default props specifically for picker.
     */
    useInterceptProps: (props: AllPickerProps<T>) => AllPickerProps<T> & {
        inputFormat: string;
    };
    DefaultToolbarComponent: React.ComponentType<ToolbarComponentProps>;
}
export declare type SharedPickerProps<TDate, TWrapper extends SomeWrapper> = PublicWrapperProps<TWrapper> & AllSharedPickerProps<ParsableDate<TDate>, TDate | null> & React.RefAttributes<HTMLInputElement>;
declare type PickerComponent<TViewProps extends AllAvailableForOverrideProps, TWrapper extends SomeWrapper> = (props: TViewProps & SharedPickerProps<unknown, TWrapper> & React.RefAttributes<HTMLInputElement>) => JSX.Element;
export declare function makePickerWithState<T extends AllAvailableForOverrideProps, TWrapper extends SomeWrapper = typeof ResponsiveWrapper>(Wrapper: TWrapper, { name, useInterceptProps, useValidation, DefaultToolbarComponent }: MakePickerOptions<T>): PickerComponent<T, TWrapper>;
export {};
