import * as React from 'react';
import { MobileWrapperProps, DesktopWrapperProps, WrapperProps, PrivateWrapperProps } from './WrapperProps';
export interface ResponsiveWrapperProps extends MobileWrapperProps, DesktopWrapperProps {
    /**
     * CSS media query when `Mobile` mode will be changed to `Desktop`.
     * @default "@media (pointer: fine)"
     * @example "@media (min-width: 720px)" or theme.breakpoints.up("sm")
     */
    desktopModeMediaQuery?: string;
}
export declare const makeResponsiveWrapper: (DesktopWrapperComponent: React.FC<WrapperProps>, MobileWrapperComponent: React.FC<WrapperProps>) => React.FC<ResponsiveWrapperProps & PrivateWrapperProps>;
export declare const ResponsiveWrapper: React.FC<ResponsiveWrapperProps & PrivateWrapperProps>;
export declare const ResponsiveTooltipWrapper: React.FC<ResponsiveWrapperProps & PrivateWrapperProps>;
