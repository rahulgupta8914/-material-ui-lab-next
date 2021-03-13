import { PickerSelectionState } from './usePickerState';
import { AllAvailableViews } from '../typings/Views';
export declare type PickerOnChangeFn<TDate> = (date: TDate | null, selectionState?: PickerSelectionState) => void;
interface UseViewsOptions<TDate, TView extends AllAvailableViews> {
    onChange: PickerOnChangeFn<TDate>;
    views: TView[];
    view: TView | undefined;
    openTo?: TView;
    onViewChange?: (newView: TView) => void;
}
export declare function useViews<TDate, TView extends AllAvailableViews>({ view, views, openTo, onChange, onViewChange, }: UseViewsOptions<TDate, TView>): {
    nextView: TView;
    previousView: TView;
    openNext: () => void;
    handleChangeAndOpenNext: (date: TDate, currentViewSelectionState?: PickerSelectionState | undefined) => void;
    openView: TView;
    setOpenView: (newView: TView) => void;
};
export {};
