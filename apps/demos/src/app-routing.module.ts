/**
 * @license
 * Copyright 2021 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DtExampleAlertDarkError,
  DtExampleAlertDark,
  DtExampleAlertError,
  DtExampleAlertInteractive,
  DtExampleAlertWarning,
  DtExampleAutocompleteAttachDifferentElement,
  DtExampleAutocompleteControlValues,
  DtExampleAutocompleteCustomFilter,
  DtExampleAutocompleteDefault,
  DtExampleAutocompleteGroups,
  DtExampleAutocompleteHighlightFirstOption,
  DtExampleBarIndicatorAlignment,
  DtExampleBarIndicatorColor,
  DtExampleBarIndicatorDefault,
  DtExampleBarIndicatorDynamic,
  DtExampleBarIndicatorTable,
  DtExampleBreadcrumbsColor,
  DtExampleBreadcrumbsDark,
  DtExampleBreadcrumbsDefault,
  DtExampleBreadcrumbsObservable,
  DtExampleButtonColor,
  DtExampleButtonDark,
  DtExampleButtonDefault,
  DtExampleButtonDisabled,
  DtExampleButtonIconOnly,
  DtExampleButtonIcons,
  DtExampleButtonInteraction,
  DtExampleButtonLoadingSpinner,
  DtExampleButtonVariant,
  DtExampleButtonGroupDefault,
  DtExampleButtonGroupDisabled,
  DtExampleButtonGroupError,
  DtExampleButtonGroupInteractive,
  DtExampleButtonGroupItemDisabled,
  DtExampleCardActionButtons,
  DtExampleCardDark,
  DtExampleCardDefault,
  DtExampleCardFooterActions,
  DtExampleCardIcon,
  DtExampleCardSubtitle,
  DtExampleChartArea,
  DtExampleChartAreaRange,
  DtExampleChartBar,
  DtExampleChartBehaviorSwitch,
  DtExampleChartCategorized,
  DtExampleChartDefault,
  DtExampleChartDonut,
  DtExampleChartHeatfield,
  DtExampleChartHeatfieldMultiple,
  DtExampleChartLine,
  DtExampleChartLineWithGaps,
  DtExampleChartLoading,
  DtExampleChartMinMax,
  DtExampleChartOrderedColors,
  DtExampleChartPie,
  DtExampleChartSelectionAreaDefault,
  DtExampleChartSinglePointData,
  DtExampleChartStream,
  DtExampleCheckboxDark,
  DtExampleCheckboxDefault,
  DtExampleCheckboxIndeterminate,
  DtExampleCheckboxResponsive,
  DtExampleConfirmationDialogDefault,
  DtExampleConfirmationDialogShowBackdrop,
  DtExampleConsumptionDefault,
  DtExampleConsumptionError,
  DtExampleConsumptionWarning,
  DtExampleComboboxSimple,
  DtExampleComboboxFormControl,
  DtExampleContainerBreakpointObserverDefault,
  DtExampleContainerBreakpointObserverIfElse,
  DtExampleContainerBreakpointObserverIf,
  DtExampleContextDialogActions,
  DtExampleContextDialogCustomIcon,
  DtExampleContextDialogDark,
  DtExampleContextDialogDefault,
  DtExampleContextDialogFooter,
  DtExampleContextDialogHeader,
  DtExampleContextDialogInteractive,
  DtExampleContextDialogPreviousFocus,
  DtExampleCopyToClipboardCallback,
  DtExampleCopyToClipboardContext,
  DtExampleCopyToClipboardDark,
  DtExampleCopyToClipboardDefault,
  DtExampleCopyToClipboardError,
  DtExampleCopyToClipboardSecondaryButton,
  DtExampleCopyToClipboardTextarea,
  DtExampleDrawerDefault,
  DtExampleDrawerDynamic,
  DtExampleDrawerNested,
  DtExampleDrawerOver,
  DtExampleDrawerTableDefault,
  DtExampleCustomEmptyStateTable,
  DtExampleCustomEmptyState,
  DtExampleEmptyStateDefault,
  DtExampleEmptyStateInCard,
  DtExampleEmptyStateMultipleItems,
  DtExampleEmptyStateMultipleItemsInCard,
  DtExampleEventChartComplexSelection,
  DtExampleEventChartCustomColor,
  DtExampleEventChartDefault,
  DtExampleEventChartLegend,
  DtExampleEventChartOverlappingLoad,
  DtExampleEventChartOverlay,
  DtExampleEventChartSelection,
  DtExampleEventChartHeatfield,
  DtExampleEventChartSessionReplay,
  DtExampleExpandablePanelDefault,
  DtExampleExpandablePanelDisabled,
  DtExampleExpandablePanelDynamicTrigger,
  DtExampleExpandablePanelProgrammatic,
  DtExampleExpandableSectionDark,
  DtExampleExpandableSectionDefault,
  DtExampleExpandableSectionDisabled,
  DtExampleExpandableSectionInteractive,
  DtExampleExpandableSectionOpen,
  DtExampleExpandableTextDefault,
  DtExampleFilterFieldAsync,
  DtExampleFilterFieldClearall,
  DtExampleFilterFieldDefaultSearch,
  DtExampleFilterFieldDisabled,
  DtExampleFilterFieldDistinct,
  DtExampleFilterFieldInfiniteDataDepth,
  DtExampleFilterFieldPartial,
  DtExampleFilterFieldProgrammaticFilters,
  DtExampleFilterFieldReadOnlyTags,
  DtExampleFilterFieldUnique,
  DtExampleFilterFieldValidator,
  DtExampleFormFieldDefault,
  DtExampleFormFieldErrorCustomValidator,
  DtExampleFormFieldError,
  DtExampleFormFieldHint,
  DtExampleFormFieldPrefixSuffix,
  DtExampleFormFieldServerValidation,
  DtExampleFormattersBits,
  DtExampleFormattersBytes,
  DtExampleFormattersCount,
  DtExampleFormattersDuration,
  DtExampleFormattersPercent,
  DtExampleFormattersRate,
  DtExampleHighlightCaseSensitive,
  DtExampleHighlightDefault,
  DtExampleIconAll,
  DtExampleIconDefault,
  DtExampleIndicatorDefault,
  DtExampleInfoGroupDefault,
  DtExampleInfoGroupInCard,
  DtExampleInlineEditorApi,
  DtExampleInlineEditorDefault,
  DtExampleInlineEditorFailing,
  DtExampleInlineEditorRequired,
  DtExampleInlineEditorSuccessful,
  DtExampleInlineEditorValidation,
  DtExampleInputDark,
  DtExampleInputDefault,
  DtExampleInputDisabledReadonly,
  DtExampleInputForm,
  DtExampleInputNgModel,
  DtExampleInputOptional,
  DtExampleInputTextarea,
  DtExampleKeyValueListDefault,
  DtExampleKeyValueListLongtext,
  DtExampleKeyValueListMulticolumn,
  DtExampleLegendDefault,
  DtExampleLegendOverlay,
  DtExampleLegendSymbolAttribute,
  DtExampleLegendTimelineChart,
  DtExampleLinkDark,
  DtExampleLinkExternal,
  DtExampleLinkNotification,
  DtExampleLinkSimple,
  DtExampleLoadingDistractorDefault,
  DtExampleLoadingDistractorInput,
  DtExampleLoadingDistractorSpinner,
  DtExampleMenuDefault,
  DtExampleMenuWithinContextDialog,
  DtExampleMenuWithinDrawer,
  DtExampleMicroChartColumns,
  DtExampleMicroChartColumnsInterpolated,
  DtExampleMicroChartDefault,
  DtExampleMicroChartInterpolated,
  DtExampleMicroChartStream,
  DtExampleOverlayComplexContent,
  DtExampleOverlayDefault,
  DtExampleOverlayFullscreen,
  DtExampleOverlayImplicitContext,
  DtExampleOverlayProgrammatic,
  DtExampleOverlayTile,
  DtExamplePaginationDefault,
  DtExamplePaginationDynamicTable,
  DtExamplePaginationMany,
  DtExampleProgressBarChange,
  DtExampleProgressBarDark,
  DtExampleProgressBarDefault,
  DtExampleProgressBarRightAligned,
  DtExampleProgressBarWithColor,
  DtExampleProgressBarWithCountAndDescription,
  DtExampleProgressBarWithCountAndDescriptionIndicator,
  DtExampleProgressBarWithCount,
  DtExampleProgressBarWithDescription,
  DtExampleProgressCircleChange,
  DtExampleProgressCircleDefault,
  DtExampleProgressCircleWithColor,
  DtExampleProgressCircleWithIcon,
  DtExampleProgressCircleWithText,
  DtExampleQuickFilterDefault,
  DtExampleQuickFilterCustomShowMore,
  DtExampleQuickFilterCustomParser,
  DtExampleRadialChartCustomColors,
  DtExampleRadialChartDefaultDonut,
  DtExampleRadialChartDefaultPie,
  DtExampleRadialChartLegend,
  DtExampleRadialChartMaxValue,
  DtExampleRadialChartOverlay,
  DtExampleRadioDark,
  DtExampleRadioDefault,
  DtExampleRadioNameGrouping,
  DtExampleRadioResponsive,
  DtExampleSecondaryNavActive,
  DtExampleSecondaryNavDefault,
  DtExampleSecondaryNavExternal,
  DtExampleSecondaryNavMulti,
  DtExampleSecondaryNavRouterLinkActive,
  DtExampleSecondaryNavTitle,
  DtExampleSelectComplexValue,
  DtExampleSelectDefault,
  DtExampleSelectDisabled,
  DtExampleSelectFormField,
  DtExampleSelectForms,
  DtExampleSelectGroups,
  DtExampleSelectValue,
  DtExampleSelectWithIcons,
  DtExampleShowMoreDark,
  DtExampleShowMoreDefault,
  DtExampleShowMoreDisabled,
  DtExampleShowMoreToggle,
  DtExampleSidenavDefault,
  DtExampleSimpleSlider,
  DtExampleFractionSlider,
  DtExampleDisabledSlider,
  DtExampleStepperDefault,
  DtExampleStepperEditable,
  DtExampleStepperLinear,
  DtExampleSunburstChartCustomColor,
  DtExampleSunburstChartDefault,
  DtExampleSunburstChartRelativeValues,
  DtExampleStackedSeriesChartSingle,
  DtExampleStackedSeriesChartConnectedLegend,
  DtExampleStackedSeriesChartGeneric,
  DtExampleStackedSeriesChartFilled,
  DtExampleStackedSeriesChartColumn,
  DtExampleSwitchDark,
  DtExampleSwitchDefault,
  DtExampleSwitchResponsive,
  DtExampleTableButtons,
  DtExampleTableColumnMinWidth,
  DtExampleTableColumnProportion,
  DtExampleTableComparators,
  DtExampleTableCustomColumns,
  DtExampleTableDefault,
  DtExampleTableDynamicColumns,
  DtExampleTableEmptyState,
  DtExampleTableExpandableRows,
  DtExampleTableFavoriteColumn,
  DtExampleTableFavoriteColumnNoHeader,
  DtExampleTableInteractiveRows,
  DtExampleTableLoading,
  DtExampleTableObservable,
  DtExampleTableOrderColumn,
  DtExampleTableOrderExpandable,
  DtExampleTableOrderObservable,
  DtExampleTablePagination,
  DtExampleTableProblem,
  DtExampleTableResponsive,
  DtExampleTableSearch,
  DtExampleTableShowMore,
  DtExampleTableSorting,
  DtExampleTableSortingMixedColumns,
  DtExampleTableStickyHeader,
  DtExampleTableWithInfoGroupCell,
  DtExampleTabsDefault,
  DtExampleTabsDynamic,
  DtExampleTabsInteractive,
  DtExampleTagDefault,
  DtExampleTagInteractive,
  DtExampleTagKey,
  DtExampleTagListWithTagAdd,
  DtExampleTagRemovable,
  DtExampleTileDefault,
  DtExampleTileDisabled,
  DtExampleTileError,
  DtExampleTileMain,
  DtExampleTileWarning,
  DtExampleTileRecovered,
  DtExampleTileSmall,
  DtExampleTimelineChartDefault,
  DtExampleTimelineChartOverlay,
  DtExampleToastDefault,
  DtExampleToastDynamicMsg,
  DtExampleToggleButtonGroupDefault,
  DtExampleToggleButtonGroupDynamicItems,
  DtExampleToggleButtonGroupShowMore,
  DtExampleTopBarNavigationDefault,
  DtExampleTopBarNavigationDrawer,
  DtExampleTreeTableAsyncShowMore,
  DtExampleTreeTableDefault,
  DtExampleTreeTableProblemIndicator,
  DtExampleTreeTableSimple,
  DtExampleComboboxCustomOptionHeight,
  DtExampleSelectCustomValueTemplate,
  DtExampleCalendarMinMax,
  DtExampleTimepickerMinMax,
  DtExampleDatepickerDark,
  DtExampleDatepickerDefault
} from '@dynatrace/barista-examples';

// The Routing Module replaces the routing configuration in the root or feature module.
// Either configure routes in the Routing Module or within the module itself but not in both.
//
// The Routing Module is a design choice whose value is most obvious when the configuration is complex
// and includes specialized guard and resolver services.
// See: https://angular.io/guide/router#refactor-the-routing-configuration-into-a-routing-module

const ROUTES: Routes = [
  { path: 'alert-dark-error-example', component: DtExampleAlertDarkError },
  { path: 'alert-dark-example', component: DtExampleAlertDark },
  { path: 'alert-error-example', component: DtExampleAlertError },
  { path: 'alert-interactive-example', component: DtExampleAlertInteractive },
  { path: 'alert-warning-example', component: DtExampleAlertWarning },
  {
    path: 'autocomplete-attach-different-element-example',
    component: DtExampleAutocompleteAttachDifferentElement,
  },
  {
    path: 'autocomplete-control-values-example',
    component: DtExampleAutocompleteControlValues,
  },
  {
    path: 'autocomplete-custom-filter-example',
    component: DtExampleAutocompleteCustomFilter,
  },
  {
    path: 'autocomplete-default-example',
    component: DtExampleAutocompleteDefault,
  },
  {
    path: 'autocomplete-groups-example',
    component: DtExampleAutocompleteGroups,
  },
  {
    path: 'autocomplete-highlight-first-option-example',
    component: DtExampleAutocompleteHighlightFirstOption,
  },
  {
    path: 'bar-indicator-alignment-example',
    component: DtExampleBarIndicatorAlignment,
  },
  {
    path: 'bar-indicator-color-example',
    component: DtExampleBarIndicatorColor,
  },
  {
    path: 'bar-indicator-default-example',
    component: DtExampleBarIndicatorDefault,
  },
  {
    path: 'bar-indicator-dynamic-example',
    component: DtExampleBarIndicatorDynamic,
  },
  {
    path: 'bar-indicator-table-example',
    component: DtExampleBarIndicatorTable,
  },
  { path: 'breadcrumbs-color-example', component: DtExampleBreadcrumbsColor },
  { path: 'breadcrumbs-dark-example', component: DtExampleBreadcrumbsDark },
  {
    path: 'breadcrumbs-default-example',
    component: DtExampleBreadcrumbsDefault,
  },
  {
    path: 'breadcrumbs-observable-example',
    component: DtExampleBreadcrumbsObservable,
  },
  { path: 'button-color-example', component: DtExampleButtonColor },
  { path: 'button-dark-example', component: DtExampleButtonDark },
  { path: 'button-default-example', component: DtExampleButtonDefault },
  { path: 'button-disabled-example', component: DtExampleButtonDisabled },
  { path: 'button-icon-only-example', component: DtExampleButtonIconOnly },
  { path: 'button-icons-example', component: DtExampleButtonIcons },
  { path: 'button-interaction-example', component: DtExampleButtonInteraction },
  {
    path: 'button-loading-spinner-example',
    component: DtExampleButtonLoadingSpinner,
  },
  { path: 'button-variant-example', component: DtExampleButtonVariant },
  {
    path: 'button-group-default-example',
    component: DtExampleButtonGroupDefault,
  },
  {
    path: 'button-group-disabled-example',
    component: DtExampleButtonGroupDisabled,
  },
  { path: 'button-group-error-example', component: DtExampleButtonGroupError },
  {
    path: 'button-group-interactive-example',
    component: DtExampleButtonGroupInteractive,
  },
  {
    path: 'button-group-item-disabled-example',
    component: DtExampleButtonGroupItemDisabled,
  },
  {
    path: 'card-action-buttons-example',
    component: DtExampleCardActionButtons,
  },
  { path: 'card-dark-example', component: DtExampleCardDark },
  { path: 'card-default-example', component: DtExampleCardDefault },
  {
    path: 'card-footer-actions-example',
    component: DtExampleCardFooterActions,
  },
  { path: 'card-icon-example', component: DtExampleCardIcon },
  { path: 'card-subtitle-example', component: DtExampleCardSubtitle },
  { path: 'chart-area-example', component: DtExampleChartArea },
  { path: 'chart-arearange-example', component: DtExampleChartAreaRange },
  { path: 'chart-bar-example', component: DtExampleChartBar },
  {
    path: 'chart-behavior-switch-example',
    component: DtExampleChartBehaviorSwitch,
  },
  { path: 'chart-categorized-example', component: DtExampleChartCategorized },
  { path: 'chart-default-example', component: DtExampleChartDefault },
  { path: 'chart-donut-example', component: DtExampleChartDonut },
  { path: 'chart-heatfield-example', component: DtExampleChartHeatfield },
  {
    path: 'chart-heatfield-multiple-example',
    component: DtExampleChartHeatfieldMultiple,
  },
  { path: 'chart-line-example', component: DtExampleChartLine },
  {
    path: 'chart-line-with-gaps-example',
    component: DtExampleChartLineWithGaps,
  },
  { path: 'chart-loading-example', component: DtExampleChartLoading },
  { path: 'chart-min-max-example', component: DtExampleChartMinMax },
  {
    path: 'chart-ordered-colors-example',
    component: DtExampleChartOrderedColors,
  },
  { path: 'chart-pie-example', component: DtExampleChartPie },
  {
    path: 'chart-selection-area-default-example',
    component: DtExampleChartSelectionAreaDefault,
  },
  {
    path: 'chart-single-data-point-example',
    component: DtExampleChartSinglePointData,
  },
  { path: 'chart-stream-example', component: DtExampleChartStream },
  { path: 'checkbox-dark-example', component: DtExampleCheckboxDark },
  { path: 'checkbox-default-example', component: DtExampleCheckboxDefault },
  {
    path: 'checkbox-indeterminate-example',
    component: DtExampleCheckboxIndeterminate,
  },
  {
    path: 'checkbox-responsive-example',
    component: DtExampleCheckboxResponsive,
  },
  {
    path: 'combobox-simple-example',
    component: DtExampleComboboxSimple,
  },
  {
    path: 'combobox-form-control-example',
    component: DtExampleComboboxFormControl,
  },
  {
    path: 'combobox-custom-option-height-example',
    component: DtExampleComboboxCustomOptionHeight,
  },
  {
    path: 'confirmation-dialog-default-example',
    component: DtExampleConfirmationDialogDefault,
  },
  {
    path: 'confirmation-dialog-show-backdrop-example',
    component: DtExampleConfirmationDialogShowBackdrop,
  },
  {
    path: 'consumption-default-example',
    component: DtExampleConsumptionDefault,
  },
  { path: 'consumption-error-example', component: DtExampleConsumptionError },
  {
    path: 'consumption-warning-example',
    component: DtExampleConsumptionWarning,
  },
  {
    path: 'container-breakpoint-observer-default-example',
    component: DtExampleContainerBreakpointObserverDefault,
  },
  {
    path: 'container-breakpoint-observer-if-else-example',
    component: DtExampleContainerBreakpointObserverIfElse,
  },
  {
    path: 'container-breakpoint-observer-if-example',
    component: DtExampleContainerBreakpointObserverIf,
  },
  {
    path: 'context-dialog-actions-example',
    component: DtExampleContextDialogActions,
  },
  {
    path: 'context-dialog-custom-icon-example',
    component: DtExampleContextDialogCustomIcon,
  },
  {
    path: 'context-dialog-dark-example',
    component: DtExampleContextDialogDark,
  },
  {
    path: 'context-dialog-default-example',
    component: DtExampleContextDialogDefault,
  },
  {
    path: 'context-dialog-footer-example',
    component: DtExampleContextDialogFooter,
  },
  {
    path: 'context-dialog-header-example',
    component: DtExampleContextDialogHeader,
  },
  {
    path: 'context-dialog-interactive-example',
    component: DtExampleContextDialogInteractive,
  },
  {
    path: 'context-dialog-previous-focus-example',
    component: DtExampleContextDialogPreviousFocus,
  },
  {
    path: 'copy-to-clipboard-callback-example',
    component: DtExampleCopyToClipboardCallback,
  },
  {
    path: 'copy-to-clipboard-context-example',
    component: DtExampleCopyToClipboardContext,
  },
  {
    path: 'copy-to-clipboard-dark-example',
    component: DtExampleCopyToClipboardDark,
  },
  {
    path: 'copy-to-clipboard-default-example',
    component: DtExampleCopyToClipboardDefault,
  },
  {
    path: 'copy-to-clipboard-error-example',
    component: DtExampleCopyToClipboardError,
  },
  {
    path: 'copy-to-clipboard-secondary-button-example',
    component: DtExampleCopyToClipboardSecondaryButton,
  },
  {
    path: 'copy-to-clipboard-textarea-example',
    component: DtExampleCopyToClipboardTextarea,
  },
  { path: 'drawer-default-example', component: DtExampleDrawerDefault },
  { path: 'drawer-dynamic-example', component: DtExampleDrawerDynamic },
  { path: 'drawer-nested-example', component: DtExampleDrawerNested },
  { path: 'drawer-over-example', component: DtExampleDrawerOver },
  { path: 'calendar-min-max-example', component: DtExampleCalendarMinMax},
  { path: 'timepicker-min-max-example', component: DtExampleTimepickerMinMax},
  { path: 'datepicker-dark-example', component: DtExampleDatepickerDark},
  { path: 'datepicker-default-example', component: DtExampleDatepickerDefault},
  {
    path: 'drawer-table-default-example',
    component: DtExampleDrawerTableDefault,
  },
  {
    path: 'empty-state-custom-empty-state-table-example',
    component: DtExampleCustomEmptyStateTable,
  },
  {
    path: 'empty-state-custom-empty-state-table-example',
    component: DtExampleCustomEmptyState,
  },
  {
    path: 'empty-state-default-example',
    component: DtExampleEmptyStateDefault,
  },
  { path: 'empty-state-in-card-example', component: DtExampleEmptyStateInCard },
  {
    path: 'empty-state-multiple-items-example',
    component: DtExampleEmptyStateMultipleItems,
  },
  {
    path: 'empty-state-multiple-items-in-card-example',
    component: DtExampleEmptyStateMultipleItemsInCard,
  },
  {
    path: 'event-chart-complex-selection-example',
    component: DtExampleEventChartComplexSelection,
  },
  {
    path: 'event-chart-custom-color-example',
    component: DtExampleEventChartCustomColor,
  },
  {
    path: 'event-chart-default-example',
    component: DtExampleEventChartDefault,
  },
  { path: 'event-chart-legend-example', component: DtExampleEventChartLegend },
  {
    path: 'event-chart-overlapping-load-example',
    component: DtExampleEventChartOverlappingLoad,
  },
  {
    path: 'event-chart-overlay-example',
    component: DtExampleEventChartOverlay,
  },
  {
    path: 'event-chart-heatfield-example',
    component: DtExampleEventChartHeatfield,
  },
  {
    path: 'event-chart-selection-example',
    component: DtExampleEventChartSelection,
  },
  {
    path: 'event-chart-session-replay-example',
    component: DtExampleEventChartSessionReplay,
  },
  {
    path: 'expandable-panel-default-example',
    component: DtExampleExpandablePanelDefault,
  },
  {
    path: 'expandable-panel-disabled-example',
    component: DtExampleExpandablePanelDisabled,
  },
  {
    path: 'expandable-panel-dynamic-trigger-example',
    component: DtExampleExpandablePanelDynamicTrigger,
  },
  {
    path: 'expandable-panel-programmatic-example',
    component: DtExampleExpandablePanelProgrammatic,
  },
  {
    path: 'expandable-section-dark-example',
    component: DtExampleExpandableSectionDark,
  },
  {
    path: 'expandable-section-default-example',
    component: DtExampleExpandableSectionDefault,
  },
  {
    path: 'expandable-section-disabled-example',
    component: DtExampleExpandableSectionDisabled,
  },
  {
    path: 'expandable-section-interactive-example',
    component: DtExampleExpandableSectionInteractive,
  },
  {
    path: 'expandable-section-open-example',
    component: DtExampleExpandableSectionOpen,
  },
  {
    path: 'expandable-text-default-example',
    component: DtExampleExpandableTextDefault,
  },
  { path: 'filter-field-async-example', component: DtExampleFilterFieldAsync },
  {
    path: 'filter-field-clearall-example',
    component: DtExampleFilterFieldClearall,
  },
  {
    path: 'filter-field-default-search-example',
    component: DtExampleFilterFieldDefaultSearch,
  },
  {
    path: 'filter-field-disabled-example',
    component: DtExampleFilterFieldDisabled,
  },
  {
    path: 'filter-field-distinct-example',
    component: DtExampleFilterFieldDistinct,
  },
  {
    path: 'filter-field-infinite-data-depth-example',
    component: DtExampleFilterFieldInfiniteDataDepth,
  },
  {
    path: 'filter-field-partial-example',
    component: DtExampleFilterFieldPartial,
  },
  {
    path: 'filter-field-programmatic-filters-example',
    component: DtExampleFilterFieldProgrammaticFilters,
  },
  {
    path: 'filter-field-readonly-non-editable-tags-example',
    component: DtExampleFilterFieldReadOnlyTags,
  },
  {
    path: 'filter-field-unique-example',
    component: DtExampleFilterFieldUnique,
  },
  {
    path: 'filter-field-validator-example',
    component: DtExampleFilterFieldValidator,
  },
  { path: 'form-field-default-example', component: DtExampleFormFieldDefault },
  {
    path: 'form-field-error-custom-validator-example',
    component: DtExampleFormFieldErrorCustomValidator,
  },
  { path: 'form-field-error-example', component: DtExampleFormFieldError },
  { path: 'form-field-hint-example', component: DtExampleFormFieldHint },
  {
    path: 'form-field-prefix-suffix-example',
    component: DtExampleFormFieldPrefixSuffix,
  },
  {
    path: 'form-field-server-validation-example',
    component: DtExampleFormFieldServerValidation,
  },
  { path: 'formatters-bits-example', component: DtExampleFormattersBits },
  { path: 'formatters-bytes-example', component: DtExampleFormattersBytes },
  { path: 'formatters-count-example', component: DtExampleFormattersCount },
  {
    path: 'formatters-duration-example',
    component: DtExampleFormattersDuration,
  },
  { path: 'formatters-percent-example', component: DtExampleFormattersPercent },
  { path: 'formatters-rate-example', component: DtExampleFormattersRate },
  {
    path: 'highlight-case-sensitive-example',
    component: DtExampleHighlightCaseSensitive,
  },
  { path: 'highlight-default-example', component: DtExampleHighlightDefault },
  { path: 'icon-all-example', component: DtExampleIconAll },
  { path: 'icon-default-example', component: DtExampleIconDefault },
  { path: 'indicator-default-example', component: DtExampleIndicatorDefault },
  { path: 'info-group-default-example', component: DtExampleInfoGroupDefault },
  { path: 'info-group-in-card-example', component: DtExampleInfoGroupInCard },
  { path: 'inline-editor-api-example', component: DtExampleInlineEditorApi },
  {
    path: 'inline-editor-default-example',
    component: DtExampleInlineEditorDefault,
  },
  {
    path: 'inline-editor-failing-example',
    component: DtExampleInlineEditorFailing,
  },
  {
    path: 'inline-editor-required-example',
    component: DtExampleInlineEditorRequired,
  },
  {
    path: 'inline-editor-successful-example',
    component: DtExampleInlineEditorSuccessful,
  },
  {
    path: 'inline-editor-validation-example',
    component: DtExampleInlineEditorValidation,
  },
  { path: 'input-dark-example', component: DtExampleInputDark },
  { path: 'input-default-example', component: DtExampleInputDefault },
  {
    path: 'input-disabled-readonly-example',
    component: DtExampleInputDisabledReadonly,
  },
  { path: 'input-form-example', component: DtExampleInputForm },
  { path: 'input-ng-model-example', component: DtExampleInputNgModel },
  { path: 'input-optional-example', component: DtExampleInputOptional },
  { path: 'input-textarea-example', component: DtExampleInputTextarea },
  {
    path: 'key-value-list-default-example',
    component: DtExampleKeyValueListDefault,
  },
  {
    path: 'key-value-list-longtext-example',
    component: DtExampleKeyValueListLongtext,
  },
  {
    path: 'key-value-list-multicolumn-example',
    component: DtExampleKeyValueListMulticolumn,
  },
  { path: 'legend-default-example', component: DtExampleLegendDefault },
  { path: 'legend-overlay-example', component: DtExampleLegendOverlay },
  {
    path: 'legend-symbol-attribute-example',
    component: DtExampleLegendSymbolAttribute,
  },
  {
    path: 'legend-timeline-chart-example',
    component: DtExampleLegendTimelineChart,
  },
  { path: 'link-dark-example', component: DtExampleLinkDark },
  { path: 'link-external-example', component: DtExampleLinkExternal },
  { path: 'link-notification-example', component: DtExampleLinkNotification },
  { path: 'link-simple-example', component: DtExampleLinkSimple },
  {
    path: 'loading-distractor-default-example',
    component: DtExampleLoadingDistractorDefault,
  },
  {
    path: 'loading-distractor-input-example',
    component: DtExampleLoadingDistractorInput,
  },
  {
    path: 'loading-distractor-spinner-example',
    component: DtExampleLoadingDistractorSpinner,
  },
  { path: 'menu-default-example', component: DtExampleMenuDefault },
  {
    path: 'menu-within-context-dialog-example',
    component: DtExampleMenuWithinContextDialog,
  },
  { path: 'menu-within-drawer-example', component: DtExampleMenuWithinDrawer },
  {
    path: 'micro-chart-columns-example',
    component: DtExampleMicroChartColumns,
  },
  {
    path: 'micro-chart-columns-interpolated-example',
    component: DtExampleMicroChartColumnsInterpolated,
  },
  {
    path: 'micro-chart-default-example',
    component: DtExampleMicroChartDefault,
  },
  {
    path: 'micro-chart-interpolated-example',
    component: DtExampleMicroChartInterpolated,
  },
  { path: 'micro-chart-stream-example', component: DtExampleMicroChartStream },
  {
    path: 'overlay-complex-content-example',
    component: DtExampleOverlayComplexContent,
  },
  { path: 'overlay-default-example', component: DtExampleOverlayDefault },
  { path: 'overlay-fullscreen-example', component: DtExampleOverlayFullscreen },
  {
    path: 'overlay-implicit-context-example',
    component: DtExampleOverlayImplicitContext,
  },
  {
    path: 'overlay-programmatic-example',
    component: DtExampleOverlayProgrammatic,
  },
  { path: 'overlay-tile-example', component: DtExampleOverlayTile },
  { path: 'pagination-default-example', component: DtExamplePaginationDefault },
  {
    path: 'pagination-dynamic-table-example',
    component: DtExamplePaginationDynamicTable,
  },
  { path: 'pagination-many-example', component: DtExamplePaginationMany },
  {
    path: 'progress-bar-change-example',
    component: DtExampleProgressBarChange,
  },
  { path: 'progress-bar-dark-example', component: DtExampleProgressBarDark },
  {
    path: 'progress-bar-default-example',
    component: DtExampleProgressBarDefault,
  },
  {
    path: 'progress-bar-right-aligned-example',
    component: DtExampleProgressBarRightAligned,
  },
  {
    path: 'progress-bar-with-color-example',
    component: DtExampleProgressBarWithColor,
  },
  {
    path: 'progress-bar-with-count-and-description-example',
    component: DtExampleProgressBarWithCountAndDescription,
  },
  {
    path: 'progress-bar-with-count-and-description-indicator-example',
    component: DtExampleProgressBarWithCountAndDescriptionIndicator,
  },
  {
    path: 'progress-bar-with-count-example',
    component: DtExampleProgressBarWithCount,
  },
  {
    path: 'progress-bar-with-description-example',
    component: DtExampleProgressBarWithDescription,
  },
  {
    path: 'progress-circle-change-example',
    component: DtExampleProgressCircleChange,
  },
  {
    path: 'progress-circle-default-example',
    component: DtExampleProgressCircleDefault,
  },
  {
    path: 'progress-circle-with-color-example',
    component: DtExampleProgressCircleWithColor,
  },
  {
    path: 'progress-circle-with-icon-example',
    component: DtExampleProgressCircleWithIcon,
  },
  {
    path: 'progress-circle-with-text-example',
    component: DtExampleProgressCircleWithText,
  },
  {
    path: 'quick-filter-default-example',
    component: DtExampleQuickFilterDefault,
  },
  {
    path: 'quick-filter-custom-show-more-example',
    component: DtExampleQuickFilterCustomShowMore,
  },
  {
    path: 'quick-filter-custom-parser-example',
    component: DtExampleQuickFilterCustomParser,
  },
  {
    path: 'radial-chart-custom-colors-example',
    component: DtExampleRadialChartCustomColors,
  },
  {
    path: 'radial-chart-default-donut-example',
    component: DtExampleRadialChartDefaultDonut,
  },
  {
    path: 'radial-chart-default-pie-example',
    component: DtExampleRadialChartDefaultPie,
  },
  {
    path: 'radial-chart-legend-example',
    component: DtExampleRadialChartLegend,
  },
  {
    path: 'radial-chart-max-value-example',
    component: DtExampleRadialChartMaxValue,
  },
  {
    path: 'radial-chart-overlay-example',
    component: DtExampleRadialChartOverlay,
  },
  { path: 'radio-dark-example', component: DtExampleRadioDark },
  { path: 'radio-default-example', component: DtExampleRadioDefault },
  {
    path: 'radio-name-grouping-example',
    component: DtExampleRadioNameGrouping,
  },
  { path: 'radio-responsive-example', component: DtExampleRadioResponsive },
  {
    path: 'secondary-nav-active-example',
    component: DtExampleSecondaryNavActive,
  },
  {
    path: 'secondary-nav-default-example',
    component: DtExampleSecondaryNavDefault,
  },
  {
    path: 'secondary-nav-external-example',
    component: DtExampleSecondaryNavExternal,
  },
  {
    path: 'secondary-nav-multi-example',
    component: DtExampleSecondaryNavMulti,
  },
  {
    path: 'secondary-nav-router-link-active-example',
    component: DtExampleSecondaryNavRouterLinkActive,
  },
  {
    path: 'secondary-nav-title-example',
    component: DtExampleSecondaryNavTitle,
  },
  {
    path: 'select-complex-value-example',
    component: DtExampleSelectComplexValue,
  },
  { path: 'select-default-example', component: DtExampleSelectDefault },
  { path: 'select-disabled-example', component: DtExampleSelectDisabled },
  { path: 'select-form-field-example', component: DtExampleSelectFormField },
  { path: 'select-forms-example', component: DtExampleSelectForms },
  { path: 'select-groups-example', component: DtExampleSelectGroups },
  { path: 'select-value-example', component: DtExampleSelectValue },
  { path: 'select-with-icons-example', component: DtExampleSelectWithIcons },
  { path: 'show-more-dark-example', component: DtExampleShowMoreDark },
  { path: 'show-more-default-example', component: DtExampleShowMoreDefault },
  { path: 'show-more-disabled-example', component: DtExampleShowMoreDisabled },
  { path: 'show-more-toggle-example', component: DtExampleShowMoreToggle },
  { path: 'sidenav-default-example', component: DtExampleSidenavDefault },
  { path: 'slider-simple-example', component: DtExampleSimpleSlider },
  { path: 'slider-fraction-example', component: DtExampleFractionSlider },
  { path: 'slider-disabled-example', component: DtExampleDisabledSlider },
  {
    path: 'stacked-series-chart-single-example',
    component: DtExampleStackedSeriesChartSingle,
  },
  {
    path: 'stacked-series-chart-connected-legend-example',
    component: DtExampleStackedSeriesChartConnectedLegend,
  },
  {
    path: 'stacked-series-chart-generic-example',
    component: DtExampleStackedSeriesChartGeneric,
  },
  {
    path: 'stacked-series-chart-filled-example',
    component: DtExampleStackedSeriesChartFilled,
  },
  {
    path: 'stacked-series-chart-column-example',
    component: DtExampleStackedSeriesChartColumn,
  },
  { path: 'stepper-default-example', component: DtExampleStepperDefault },
  { path: 'stepper-editable-example', component: DtExampleStepperEditable },
  { path: 'stepper-linear-example', component: DtExampleStepperLinear },
  {
    path: 'sunburst-chart-custom-color-example',
    component: DtExampleSunburstChartCustomColor,
  },
  {
    path: 'sunburst-chart-default-example',
    component: DtExampleSunburstChartDefault,
  },
  {
    path: 'sunburst-chart-relative-values-example',
    component: DtExampleSunburstChartRelativeValues,
  },
  { path: 'switch-dark-example', component: DtExampleSwitchDark },
  { path: 'switch-default-example', component: DtExampleSwitchDefault },
  { path: 'switch-responsive-example', component: DtExampleSwitchResponsive },
  { path: 'table-buttons-example', component: DtExampleTableButtons },
  {
    path: 'table-column-min-width-example',
    component: DtExampleTableColumnMinWidth,
  },
  {
    path: 'table-column-proportion-example',
    component: DtExampleTableColumnProportion,
  },
  { path: 'table-comparators-example', component: DtExampleTableComparators },
  {
    path: 'table-custom-columns-example',
    component: DtExampleTableCustomColumns,
  },
  { path: 'table-default-example', component: DtExampleTableDefault },
  {
    path: 'table-dynamic-columns-example',
    component: DtExampleTableDynamicColumns,
  },
  { path: 'table-empty-state-example', component: DtExampleTableEmptyState },
  {
    path: 'table-expandable-rows-example',
    component: DtExampleTableExpandableRows,
  },
  {
    path: 'table-favorite-column-example',
    component: DtExampleTableFavoriteColumn,
  },
  {
    path: 'table-favorite-column-no-header-example',
    component: DtExampleTableFavoriteColumnNoHeader,
  },
  {
    path: 'table-interactive-rows-example',
    component: DtExampleTableInteractiveRows,
  },
  { path: 'table-loading-example', component: DtExampleTableLoading },
  { path: 'table-observable-example', component: DtExampleTableObservable },
  { path: 'table-order-column-example', component: DtExampleTableOrderColumn },
  {
    path: 'table-order-expandable-example',
    component: DtExampleTableOrderExpandable,
  },
  {
    path: 'table-order-observable-example',
    component: DtExampleTableOrderObservable,
  },
  { path: 'table-pagination-example', component: DtExampleTablePagination },
  { path: 'table-problem-example', component: DtExampleTableProblem },
  { path: 'table-responsive-example', component: DtExampleTableResponsive },
  { path: 'table-search-example', component: DtExampleTableSearch },
  { path: 'table-show-more-example', component: DtExampleTableShowMore },
  { path: 'table-sorting-example', component: DtExampleTableSorting },
  {
    path: 'table-sorting-mixed-columns-example',
    component: DtExampleTableSortingMixedColumns,
  },
  {
    path: 'table-sticky-header-example',
    component: DtExampleTableStickyHeader,
  },
  {
    path: 'table-with-info-group-cell-example',
    component: DtExampleTableWithInfoGroupCell,
  },
  { path: 'tabs-default-example', component: DtExampleTabsDefault },
  { path: 'tabs-dynamic-example', component: DtExampleTabsDynamic },
  { path: 'tabs-interactive-example', component: DtExampleTabsInteractive },
  { path: 'tag-default-example', component: DtExampleTagDefault },
  { path: 'tag-interactive-example', component: DtExampleTagInteractive },
  { path: 'tag-key-example', component: DtExampleTagKey },
  {
    path: 'tag-list-with-tag-add-example',
    component: DtExampleTagListWithTagAdd,
  },
  { path: 'tag-removable-example', component: DtExampleTagRemovable },
  { path: 'tile-default-example', component: DtExampleTileDefault },
  { path: 'tile-disabled-example', component: DtExampleTileDisabled },
  { path: 'tile-error-example', component: DtExampleTileError },
  { path: 'tile-main-example', component: DtExampleTileMain },
  { path: 'tile-warning-example', component: DtExampleTileWarning },
  { path: 'tile-recovered-example', component: DtExampleTileRecovered },
  { path: 'tile-small-example', component: DtExampleTileSmall },
  {
    path: 'timeline-chart-default-example',
    component: DtExampleTimelineChartDefault,
  },
  {
    path: 'timeline-chart-overlay-example',
    component: DtExampleTimelineChartOverlay,
  },
  { path: 'toast-default-example', component: DtExampleToastDefault },
  { path: 'toast-dynamic-msg-example', component: DtExampleToastDynamicMsg },
  {
    path: 'toggle-button-group-default-example',
    component: DtExampleToggleButtonGroupDefault,
  },
  {
    path: 'toggle-button-group-dynamic-items-example',
    component: DtExampleToggleButtonGroupDynamicItems,
  },
  {
    path: 'toggle-button-group-show-more-example',
    component: DtExampleToggleButtonGroupShowMore,
  },
  {
    path: 'top-bar-navigation-default-example',
    component: DtExampleTopBarNavigationDefault,
  },
  {
    path: 'top-bar-navigation-drawer-example',
    component: DtExampleTopBarNavigationDrawer,
  },
  {
    path: 'tree-table-async-show-more-example',
    component: DtExampleTreeTableAsyncShowMore,
  },
  { path: 'tree-table-default-example', component: DtExampleTreeTableDefault },
  {
    path: 'tree-table-problem-indicator-example',
    component: DtExampleTreeTableProblemIndicator,
  },
  { path: 'tree-table-simple-example', component: DtExampleTreeTableSimple },
  {
    path: 'select-custom-value-template-example',
    component: DtExampleSelectCustomValueTemplate,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class DtDemosAppRoutingModule {}
