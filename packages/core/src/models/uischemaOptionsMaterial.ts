/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import {
  AlertProps,
  AutocompleteProps,
  AvatarGroupProps,
  PaginationProps,
  RatingProps,
  SkeletonProps,
  SpeedDialActionProps,
  SpeedDialIconProps,
  SpeedDialProps,
  TabContextProps,
  TabListProps,
  TabPanelProps,
  TimelineConnectorProps,
  TimelineContentProps,
  TimelineDotProps,
  TimelineItemProps,
  TimelineOppositeContentProps,
  TimelineProps,
  TimelineSeparatorProps,
  ToggleButtonGroupProps,
  ToggleButtonProps,
  TreeItemProps,
  TreeViewProps
} from '@material-ui/lab';
import {
  AccordionActionsProps,
  AccordionDetailsProps,
  AccordionSummaryProps,
  AppBarProps,
  AvatarProps,
  BackdropProps,
  BadgeProps,
  BottomNavigationProps,
  BottomNavigationActionProps,
  BreadcrumbsProps,
  ButtonProps,
  ButtonBaseProps,
  ButtonGroupProps,
  CardProps,
  CardActionAreaProps,
  CardActionsProps,
  CardContentProps,
  CardHeaderProps,
  CardMediaProps,
  CheckboxProps,
  ChipProps,
  CircularProgressProps,
  ClickAwayListenerProps,
  CollapseProps,
  ContainerProps,
  CssBaselineProps,
  DialogProps,
  DialogActionsProps,
  DialogContentProps,
  DialogContentTextProps,
  DialogTitleProps,
  DividerProps,
  DrawerProps,
  ExpansionPanelProps,
  ExpansionPanelActionsProps,
  ExpansionPanelDetailsProps,
  ExpansionPanelSummaryProps,
  FabProps,
  FadeProps,
  FilledInputProps,
  FormControlProps,
  FormControlLabelProps,
  FormGroupProps,
  FormHelperTextProps,
  FormLabelProps,
  GridProps,
  GridListProps,
  GridListTileProps,
  GridListTileBarProps,
  GrowProps,
  HiddenProps,
  IconProps,
  IconButtonProps,
  InputProps,
  InputAdornmentProps,
  InputBaseProps,
  InputLabelProps,
  LinearProgressProps,
  LinkProps,
  ListProps,
  ListItemProps,
  ListItemAvatarProps,
  ListItemIconProps,
  ListItemSecondaryActionProps,
  ListItemTextProps,
  ListSubheaderProps,
  MenuProps,
  MenuItemProps,
  MenuListProps,
  MobileStepperProps,
  ModalProps,
  NativeSelectProps,
  NoSsrProps,
  OutlinedInputProps,
  PaperProps,
  PopoverProps,
  PopperProps,
  PortalProps,
  RadioProps,
  RadioGroupProps,
  RootRefProps,
  SelectProps,
  SlideProps,
  SliderProps,
  SnackbarProps,
  SnackbarContentProps,
  StepProps,
  StepButtonProps,
  StepConnectorProps,
  StepContentProps,
  StepIconProps,
  StepLabelProps,
  StepperProps,
  SvgIconProps,
  SwipeableDrawerProps,
  SwitchProps,
  TabProps,
  TabScrollButtonProps,
  TableProps,
  TableBodyProps,
  TableCellProps,
  TableContainerProps,
  TableFooterProps,
  TableHeadProps,
  TablePaginationProps,
  TableRowProps,
  TableSortLabelProps,
  TabsProps,
  TextFieldProps,
  TextareaAutosizeProps,
  ToolbarProps,
  TooltipProps,
  TypographyProps,
  ZoomProps
} from '@material-ui/core';
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider';
import {
  BaseDatePickerProps,
  DatePickerProps,
  DatePickerViewsProps,
  KeyboardDatePickerProps
} from '@material-ui/pickers/DatePicker';
import {
  BaseDateTimePickerProps,
  DateTimePickerProps,
  DateTimePickerViewsProps,
  KeyboardDateTimePickerProps
} from '@material-ui/pickers/DateTimePicker';

/**
 * All props from all material ui components.
 * If using the material renderer set, if the renderer renders any of these material components,
 * these props will be spread onto it and take precedence over all other props.
 */
export interface UISchemaOptionsMaterial {
  AccordionActionsProps?: AccordionActionsProps;
  AccordionDetailsProps?: AccordionDetailsProps;
  AccordionSummaryProps?: AccordionSummaryProps;
  AlertProps?: AlertProps;
  AppBarProps?: AppBarProps;
  AutocompleteProps?: AutocompleteProps<any, any, any, any>;
  AvatarGroupProps?: AvatarGroupProps;
  AvatarProps?: AvatarProps;
  BackdropProps?: BackdropProps;
  BadgeProps?: BadgeProps;
  BaseDatePickerProps?: BaseDatePickerProps;
  BaseDateTimePickerProps?: BaseDateTimePickerProps;
  BottomNavigationActionProps?: BottomNavigationActionProps;
  BottomNavigationProps?: BottomNavigationProps;
  BreadcrumbsProps?: BreadcrumbsProps;
  ButtonBaseProps?: ButtonBaseProps;
  ButtonGroupProps?: ButtonGroupProps;
  ButtonProps?: ButtonProps;
  CardActionAreaProps?: CardActionAreaProps;
  CardActionsProps?: CardActionsProps;
  CardContentProps?: CardContentProps;
  CardHeaderProps?: CardHeaderProps;
  CardMediaProps?: CardMediaProps;
  CardProps?: CardProps;
  CheckboxProps?: CheckboxProps;
  ChipProps?: ChipProps;
  CircularProgressProps?: CircularProgressProps;
  ClickAwayListenerProps?: ClickAwayListenerProps;
  CollapseProps?: CollapseProps;
  ContainerProps?: ContainerProps;
  CssBaselineProps?: CssBaselineProps;
  DatePickerProps?: DatePickerProps;
  DatePickerViewsProps?: DatePickerViewsProps;
  DateTimePickerProps?: DateTimePickerProps;
  DateTimePickerViewsProps?: DateTimePickerViewsProps;
  DialogActionsProps?: DialogActionsProps;
  DialogContentProps?: DialogContentProps;
  DialogContentTextProps?: DialogContentTextProps;
  DialogProps?: DialogProps;
  DialogTitleProps?: DialogTitleProps;
  DividerProps?: DividerProps;
  DrawerProps?: DrawerProps;
  ExpansionPanelActionsProps?: ExpansionPanelActionsProps;
  ExpansionPanelDetailsProps?: ExpansionPanelDetailsProps;
  ExpansionPanelProps?: ExpansionPanelProps;
  ExpansionPanelSummaryProps?: ExpansionPanelSummaryProps;
  FabProps?: FabProps;
  FadeProps?: FadeProps;
  FilledInputProps?: FilledInputProps;
  FormControlLabelProps?: FormControlLabelProps;
  FormControlProps?: FormControlProps;
  FormGroupProps?: FormGroupProps;
  FormHelperTextProps?: FormHelperTextProps;
  FormLabelProps?: FormLabelProps;
  GridListProps?: GridListProps;
  GridListTileBarProps?: GridListTileBarProps;
  GridListTileProps?: GridListTileProps;
  GridProps?: GridProps;
  GrowProps?: GrowProps;
  HiddenProps?: HiddenProps;
  IconButtonProps?: IconButtonProps;
  IconProps?: IconProps;
  InputAdornmentProps?: InputAdornmentProps;
  InputBaseProps?: InputBaseProps;
  InputLabelProps?: InputLabelProps;
  InputProps?: InputProps;
  KeyboardDatePickerProps?: KeyboardDatePickerProps;
  KeyboardDateTimePickerProps?: KeyboardDateTimePickerProps;
  LinearProgressProps?: LinearProgressProps;
  LinkProps?: LinkProps;
  ListItemAvatarProps?: ListItemAvatarProps;
  ListItemIconProps?: ListItemIconProps;
  ListItemProps?: ListItemProps;
  ListItemSecondaryActionProps?: ListItemSecondaryActionProps;
  ListItemTextProps?: ListItemTextProps;
  ListProps?: ListProps;
  ListSubheaderProps?: ListSubheaderProps;
  MenuItemProps?: MenuItemProps;
  MenuListProps?: MenuListProps;
  MenuProps?: MenuProps;
  MobileStepperProps?: MobileStepperProps;
  ModalProps?: ModalProps;
  MuiPickersUtilsProviderProps?: MuiPickersUtilsProviderProps;
  NativeSelectProps?: NativeSelectProps;
  NoSsrProps?: NoSsrProps;
  OutlinedInputProps?: OutlinedInputProps;
  PaginationProps?: PaginationProps;
  PaperProps?: PaperProps;
  PopoverProps?: PopoverProps;
  PopperProps?: PopperProps;
  PortalProps?: PortalProps;
  RadioGroupProps?: RadioGroupProps;
  RadioProps?: RadioProps;
  RatingProps?: RatingProps;
  RootRefProps?: RootRefProps;
  SelectProps?: SelectProps;
  SkeletonProps?: SkeletonProps;
  SlideProps?: SlideProps;
  SliderProps?: SliderProps;
  SnackbarContentProps?: SnackbarContentProps;
  SnackbarProps?: SnackbarProps;
  SpeedDialActionProps?: SpeedDialActionProps;
  SpeedDialIconProps?: SpeedDialIconProps;
  SpeedDialProps?: SpeedDialProps;
  StepButtonProps?: StepButtonProps;
  StepConnectorProps?: StepConnectorProps;
  StepContentProps?: StepContentProps;
  StepIconProps?: StepIconProps;
  StepLabelProps?: StepLabelProps;
  StepProps?: StepProps;
  StepperProps?: StepperProps;
  SvgIconProps?: SvgIconProps;
  SwipeableDrawerProps?: SwipeableDrawerProps;
  SwitchProps?: SwitchProps;
  TabContextProps?: TabContextProps;
  TabListProps?: TabListProps;
  TabPanelProps?: TabPanelProps;
  TabProps?: TabProps;
  TabScrollButtonProps?: TabScrollButtonProps;
  TableBodyProps?: TableBodyProps;
  TableCellProps?: TableCellProps;
  TableContainerProps?: TableContainerProps;
  TableFooterProps?: TableFooterProps;
  TableHeadProps?: TableHeadProps;
  TablePaginationProps?: TablePaginationProps;
  TableProps?: TableProps;
  TableRowProps?: TableRowProps;
  TableSortLabelProps?: TableSortLabelProps;
  TabsProps?: TabsProps;
  TextFieldProps?: TextFieldProps;
  TextareaAutosizeProps?: TextareaAutosizeProps;
  TimelineConnectorProps?: TimelineConnectorProps;
  TimelineContentProps?: TimelineContentProps;
  TimelineDotProps?: TimelineDotProps;
  TimelineItemProps?: TimelineItemProps;
  TimelineOppositeContentProps?: TimelineOppositeContentProps;
  TimelineProps?: TimelineProps;
  TimelineSeparatorProps?: TimelineSeparatorProps;
  ToggleButtonGroupProps?: ToggleButtonGroupProps;
  ToggleButtonProps?: ToggleButtonProps;
  ToolbarProps?: ToolbarProps;
  TooltipProps?: TooltipProps;
  TreeItemProps?: TreeItemProps;
  TreeViewProps?: TreeViewProps;
  TypographyProps?: TypographyProps;
  ZoomProps?: ZoomProps;
}
