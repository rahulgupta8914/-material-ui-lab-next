/// <reference types="react" />
import StaticWrapper from './StaticWrapper';
import MobileWrapper from './MobileWrapper';
import DesktopWrapper from './DesktopWrapper';
import { ResponsiveWrapper } from './ResponsiveWrapper';
import DesktopTooltipWrapper from './DesktopTooltipWrapper';
import { PrivateWrapperProps } from './WrapperProps';
export declare type SomeWrapper = typeof ResponsiveWrapper | typeof StaticWrapper | typeof MobileWrapper | typeof DesktopWrapper | typeof DesktopTooltipWrapper;
export declare type PublicWrapperProps<TWrapper extends SomeWrapper> = Omit<React.ComponentProps<TWrapper>, keyof PrivateWrapperProps>;
export declare type WrapperVariant = import('./WrapperVariantContext').WrapperVariant;
export { StaticWrapper, MobileWrapper, DesktopWrapper };
