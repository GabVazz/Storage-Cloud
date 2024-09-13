import {
  Scroller,
  ScrollerModule,
  SearchIcon
} from "./chunk-TFGGB2UA.js";
import {
  CheckIcon
} from "./chunk-5H4UJ3MZ.js";
import "./chunk-LYTR4JMG.js";
import "./chunk-KTHIQ4K6.js";
import {
  Ripple,
  RippleModule
} from "./chunk-IU3OUXPD.js";
import {
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-UWA5HIAN.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-RXF6MOKB.js";
import {
  FilterService,
  Footer,
  Header,
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId
} from "./chunk-JETSECXG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  computed,
  forwardRef,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FH3LRDHN.js";
import "./chunk-XUHVH56V.js";
import "./chunk-QCROGVSR.js";
import "./chunk-77VH5D4N.js";

// node_modules/primeng/fesm2022/primeng-listbox.mjs
var _c0 = ["headerchkbox"];
var _c1 = ["filter"];
var _c2 = ["lastHiddenFocusableElement"];
var _c3 = ["firstHiddenFocusableElement"];
var _c4 = ["scroller"];
var _c5 = ["list"];
var _c6 = [[["p-header"]], [["p-footer"]]];
var _c7 = ["p-header", "p-footer"];
var _c8 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c9 = (a0) => ({
  "p-checkbox-disabled": a0
});
var _c10 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
var _c11 = (a0) => ({
  options: a0
});
var _c12 = (a0) => ({
  height: a0
});
var _c13 = () => ({});
var _c14 = (a0) => ({
  $implicit: a0
});
var _c15 = (a0, a1, a2) => ({
  "p-listbox-item": true,
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
var _c16 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
var _c17 = (a0) => ({
  "p-highlight": a0
});
function Listbox_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Listbox_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵprojection(1);
    ɵɵtemplate(2, Listbox_div_3_ng_container_2_Template, 1, 0, "ng-container", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c8, ctx_r1.modelValue(), ctx_r1.visibleOptions()));
  }
}
function Listbox_div_4_div_1_ng_container_5_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 29);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
    ɵɵattribute("aria-hidden", true);
  }
}
function Listbox_div_4_div_1_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Listbox_div_4_div_1_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Listbox_div_4_div_1_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_div_4_div_1_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 30);
    ɵɵtemplate(1, Listbox_div_4_div_1_ng_container_5_span_2_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.checkIconTemplate);
  }
}
function Listbox_div_4_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Listbox_div_4_div_1_ng_container_5_CheckIcon_1_Template, 1, 2, "CheckIcon", 27)(2, Listbox_div_4_div_1_ng_container_5_span_2_Template, 2, 2, "span", 28);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.checkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checkIconTemplate);
  }
}
function Listbox_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23);
    ɵɵlistener("click", function Listbox_div_4_div_1_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onToggleAll($event));
    })("keydown", function Listbox_div_4_div_1_Template_div_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onHeaderCheckboxKeyDown($event));
    });
    ɵɵelementStart(1, "div", 24)(2, "input", 25, 4);
    ɵɵlistener("focus", function Listbox_div_4_div_1_Template_input_focus_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onHeaderCheckboxFocus($event));
    })("blur", function Listbox_div_4_div_1_Template_input_blur_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onHeaderCheckboxBlur($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 26);
    ɵɵtemplate(5, Listbox_div_4_div_1_ng_container_5_Template, 3, 2, "ng-container", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c9, ctx_r1.disabled || ctx_r1.toggleAllDisabled));
    ɵɵadvance();
    ɵɵattribute("data-p-hidden-accessible", true);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled || ctx_r1.toggleAllDisabled);
    ɵɵattribute("checked", ctx_r1.allSelected())("aria-label", ctx_r1.toggleAllAriaLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction3(10, _c10, ctx_r1.allSelected(), ctx_r1.headerCheckboxFocus, ctx_r1.disabled || ctx_r1.toggleAllDisabled));
    ɵɵattribute("aria-checked", ctx_r1.allSelected());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.allSelected());
  }
}
function Listbox_div_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Listbox_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Listbox_div_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c11, ctx_r1.filterOptions));
  }
}
function Listbox_div_4_ng_template_3_div_0_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchIcon", 29);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-listbox-filter-icon");
    ɵɵattribute("aria-hidden", true);
  }
}
function Listbox_div_4_ng_template_3_div_0_span_4_1_ng_template_0_Template(rf, ctx) {
}
function Listbox_div_4_ng_template_3_div_0_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Listbox_div_4_ng_template_3_div_0_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_div_4_ng_template_3_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 37);
    ɵɵtemplate(1, Listbox_div_4_ng_template_3_div_0_span_4_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.filterIconTemplate);
  }
}
function Listbox_div_4_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 34)(1, "input", 35, 5);
    ɵɵlistener("input", function Listbox_div_4_ng_template_3_div_0_Template_input_input_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onFilterChange($event));
    })("keydown", function Listbox_div_4_ng_template_3_div_0_Template_input_keydown_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onFilterKeyDown($event));
    })("blur", function Listbox_div_4_ng_template_3_div_0_Template_input_blur_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onFilterBlur($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, Listbox_div_4_ng_template_3_div_0_SearchIcon_3_Template, 1, 2, "SearchIcon", 27)(4, Listbox_div_4_ng_template_3_div_0_span_4_Template, 2, 2, "span", 36);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("value", ctx_r1._filterValue() || "")("disabled", ctx_r1.disabled)("tabindex", !ctx_r1.disabled && !ctx_r1.focused ? ctx_r1.tabindex : -1);
    ɵɵattribute("aria-owns", ctx_r1.id + "_list")("aria-activedescendant", ctx_r1.focusedOptionId)("placeholder", ctx_r1.filterPlaceHolder)("aria-label", ctx_r1.ariaFilterLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterIconTemplate);
  }
}
function Listbox_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Listbox_div_4_ng_template_3_div_0_Template, 5, 9, "div", 32);
    ɵɵelementStart(1, "span", 33);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.filter);
    ɵɵadvance();
    ɵɵattribute("data-p-hidden-accessible", true);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.filterResultMessageText, " ");
  }
}
function Listbox_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, Listbox_div_4_div_1_Template, 6, 14, "div", 21)(2, Listbox_div_4_ng_container_2_Template, 2, 4, "ng-container", 22)(3, Listbox_div_4_ng_template_3_Template, 3, 3, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r5 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checkbox && ctx_r1.multiple && ctx_r1.showToggleAll);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterTemplate)("ngIfElse", builtInFilterElement_r5);
  }
}
function Listbox_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Listbox_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Listbox_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const items_r7 = ctx.$implicit;
    const scrollerOptions_r8 = ctx.options;
    ɵɵnextContext(2);
    const buildInItems_r9 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", buildInItems_r9)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c8, items_r7, scrollerOptions_r8));
  }
}
function Listbox_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Listbox_p_scroller_6_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Listbox_p_scroller_6_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const scrollerOptions_r10 = ctx.options;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c11, scrollerOptions_r10));
  }
}
function Listbox_p_scroller_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Listbox_p_scroller_6_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 40);
    ɵɵelementContainerEnd();
  }
}
function Listbox_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 38, 6);
    ɵɵlistener("onLazyLoad", function Listbox_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, Listbox_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", 39)(3, Listbox_p_scroller_6_ng_container_3_Template, 2, 0, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(9, _c12, ctx_r1.scrollHeight));
    ɵɵproperty("items", ctx_r1.visibleOptions())("itemSize", ctx_r1.virtualScrollItemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r1.lazy)("options", ctx_r1.virtualScrollOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.loaderTemplate);
  }
}
function Listbox_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Listbox_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Listbox_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const buildInItems_r9 = ɵɵreference(9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buildInItems_r9)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c8, ctx_r1.visibleOptions(), ɵɵpureFunction0(2, _c13)));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r12 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getOptionGroupLabel(option_r12.optionGroup));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 44);
    ɵɵtemplate(2, Listbox_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 15)(3, Listbox_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 20);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    const option_r12 = ctx_r12.$implicit;
    const i_r14 = ctx_r12.index;
    const scrollerOptions_r15 = ɵɵnextContext().options;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c12, scrollerOptions_r15.itemSize + "px"));
    ɵɵattribute("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r14, scrollerOptions_r15));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.groupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.groupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c14, option_r12.optionGroup));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 29);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
    ɵɵattribute("aria-hidden", true);
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 30);
    ɵɵtemplate(1, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.checkIconTemplate);
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_CheckIcon_1_Template, 1, 2, "CheckIcon", 27)(2, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_span_2_Template, 2, 2, "span", 28);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.checkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checkIconTemplate);
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 47)(1, "div", 48);
    ɵɵtemplate(2, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_ng_container_2_Template, 3, 2, "ng-container", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r12 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c9, ctx_r1.disabled || ctx_r1.isOptionDisabled(option_r12)));
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c17, ctx_r1.isSelected(option_r12)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isSelected(option_r12));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r12 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getOptionLabel(option_r12));
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Listbox_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 45);
    ɵɵlistener("click", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_click_1_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r12 = ɵɵnextContext();
      const option_r12 = ctx_r12.$implicit;
      const i_r14 = ctx_r12.index;
      const scrollerOptions_r15 = ɵɵnextContext().options;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOptionSelect($event, option_r12, ctx_r1.getOptionIndex(i_r14, scrollerOptions_r15)));
    })("dblclick", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_dblclick_1_listener($event) {
      ɵɵrestoreView(_r16);
      const option_r12 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onOptionDoubleClick($event, option_r12));
    })("mousedown", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_mousedown_1_listener($event) {
      ɵɵrestoreView(_r16);
      const i_r14 = ɵɵnextContext().index;
      const scrollerOptions_r15 = ɵɵnextContext().options;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOptionMouseDown($event, ctx_r1.getOptionIndex(i_r14, scrollerOptions_r15)));
    })("mouseenter", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      ɵɵrestoreView(_r16);
      const i_r14 = ɵɵnextContext().index;
      const scrollerOptions_r15 = ɵɵnextContext().options;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOptionMouseEnter($event, ctx_r1.getOptionIndex(i_r14, scrollerOptions_r15)));
    })("touchend", function Listbox_ng_template_8_ng_template_2_ng_container_1_Template_li_touchend_1_listener() {
      ɵɵrestoreView(_r16);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onOptionTouchEnd());
    });
    ɵɵtemplate(2, Listbox_ng_template_8_ng_template_2_ng_container_1_div_2_Template, 3, 7, "div", 46)(3, Listbox_ng_template_8_ng_template_2_ng_container_1_span_3_Template, 2, 1, "span", 15)(4, Listbox_ng_template_8_ng_template_2_ng_container_1_ng_container_4_Template, 1, 0, "ng-container", 20);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    const option_r12 = ctx_r12.$implicit;
    const i_r14 = ctx_r12.index;
    const scrollerOptions_r15 = ɵɵnextContext().options;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(12, _c12, scrollerOptions_r15.itemSize + "px"))("ngClass", ɵɵpureFunction3(14, _c15, ctx_r1.isSelected(option_r12), ctx_r1.focusedOptionIndex() === ctx_r1.getOptionIndex(i_r14, scrollerOptions_r15), ctx_r1.isOptionDisabled(option_r12)));
    ɵɵattribute("id", ctx_r1.id + "_" + ctx_r1.getOptionIndex(i_r14, scrollerOptions_r15))("aria-label", ctx_r1.getOptionLabel(option_r12))("aria-selected", ctx_r1.isSelected(option_r12))("aria-disabled", ctx_r1.isOptionDisabled(option_r12))("aria-setsize", ctx_r1.ariaSetSize)("ariaPosInset", ctx_r1.getAriaPosInset(ctx_r1.getOptionIndex(i_r14, scrollerOptions_r15)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checkbox && ctx_r1.multiple);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(18, _c16, option_r12, ctx_r1.getOptionIndex(i_r14, scrollerOptions_r15)));
  }
}
function Listbox_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Listbox_ng_template_8_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 15)(1, Listbox_ng_template_8_ng_template_2_ng_container_1_Template, 5, 21, "ng-container", 15);
  }
  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.isOptionGroup(option_r12));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isOptionGroup(option_r12));
  }
}
function Listbox_ng_template_8_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.emptyFilterMessageText, " ");
  }
}
function Listbox_ng_template_8_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 8);
  }
}
function Listbox_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 49);
    ɵɵtemplate(1, Listbox_ng_template_8_li_3_ng_container_1_Template, 2, 1, "ng-container", 22)(2, Listbox_ng_template_8_li_3_ng_container_2_Template, 2, 0, "ng-container", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.emptyFilterTemplate && !ctx_r1.emptyTemplate)("ngIfElse", ctx_r1.emptyFilter);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyFilterTemplate || ctx_r1.emptyTemplate);
  }
}
function Listbox_ng_template_8_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.emptyMessage, " ");
  }
}
function Listbox_ng_template_8_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 9);
  }
}
function Listbox_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 49);
    ɵɵtemplate(1, Listbox_ng_template_8_li_4_ng_container_1_Template, 2, 1, "ng-container", 22)(2, Listbox_ng_template_8_li_4_ng_container_2_Template, 2, 0, "ng-container", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.emptyTemplate)("ngIfElse", ctx_r1.empty);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyTemplate);
  }
}
function Listbox_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 41, 7);
    ɵɵlistener("focus", function Listbox_ng_template_8_Template_ul_focus_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListFocus($event));
    })("blur", function Listbox_ng_template_8_Template_ul_blur_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListBlur($event));
    })("keydown", function Listbox_ng_template_8_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onListKeyDown($event));
    });
    ɵɵtemplate(2, Listbox_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 42)(3, Listbox_ng_template_8_li_3_Template, 3, 3, "li", 43)(4, Listbox_ng_template_8_li_4_Template, 3, 3, "li", 43);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const items_r17 = ctx.$implicit;
    const scrollerOptions_r15 = ctx.options;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tabindex", -1)("ngClass", scrollerOptions_r15.contentStyleClass)("ngStyle", scrollerOptions_r15.contentStyle);
    ɵɵattribute("aria-multiselectable", true)("aria-activedescendant", ctx_r1.focused ? ctx_r1.focusedOptionId : void 0)("aria-label", ctx_r1.ariaLabel)("aria-multiselectable", ctx_r1.multiple)("aria-disabled", ctx_r1.disabled);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", items_r17);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasFilter() && ctx_r1.isEmpty());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.hasFilter() && ctx_r1.isEmpty());
  }
}
function Listbox_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Listbox_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 50);
    ɵɵprojection(1, 1);
    ɵɵtemplate(2, Listbox_div_10_ng_container_2_Template, 1, 0, "ng-container", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c8, ctx_r1.modelValue(), ctx_r1.visibleOptions()));
  }
}
function Listbox_span_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.emptyMessage, " ");
  }
}
var LISTBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Listbox),
  multi: true
};
var Listbox = class _Listbox {
  el;
  cd;
  filterService;
  config;
  renderer;
  /**
   * Unique identifier of the component.
   * @group Props
   */
  id;
  /**
   * Text to display when the search is active. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} results are available'
   */
  searchMessage;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue 'No selected item'
   */
  emptySelectionMessage;
  /**
   * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
   * @group Props
   * @defaultValue '{0} items selected'
   */
  selectionMessage;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = true;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * When enabled, the focused option is selected.
   * @group Props
   */
  selectOnFocus;
  /**
   * Locale to use in searching. The default locale is the host environment's current locale.
   * @group Props
   */
  searchLocale;
  /**
   * When enabled, the hovered option will be focused.
   * @group Props
   */
  focusOnHover;
  /**
   * Text to display when filtering.
   * @group Props
   */
  filterMessage;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Inline style of the container.
   * @group Props
   */
  style;
  /**
   * Style class of the container.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the list element.
   * @group Props
   */
  listStyle;
  /**
   * Style class of the list element.
   * @group Props
   */
  listStyleClass;
  /**
   * When present, it specifies that the element value cannot be changed.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * When specified, allows selecting items with checkboxes.
   * @group Props
   */
  checkbox = false;
  /**
   * When specified, displays a filter input at header.
   * @group Props
   */
  filter = false;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * Whether header checkbox is shown in multiple mode.
   * @group Props
   */
  showToggleAll = true;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines placeholder of the filter input.
   * @group Props
   */
  filterPlaceHolder;
  /**
   * Text to display when filtering does not return any results.
   * @group Props
   */
  emptyFilterMessage;
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage;
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  get options() {
    return this._options();
  }
  set options(val) {
    this._options.set(val);
  }
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    this._filterValue.set(val);
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selectAll;
  }
  set selectAll(value) {
    this._selectAll = value;
  }
  /**
   * Callback to invoke on value change.
   * @param {ListboxChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when option is clicked.
   * @param {ListboxClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when option is double clicked.
   * @param {ListboxDoubleClickEvent} event - Custom double click event.
   * @group Emits
   */
  onDblClick = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {ListboxFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when component receives focus.
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when component loses focus.
   * @param {FocusEvent} event - Blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when all data is selected.
   * @param {ListboxSelectAllChangeEvent} event - Custom select event.
   * @group Emits
   */
  onSelectAllChange = new EventEmitter();
  headerCheckboxViewChild;
  filterViewChild;
  lastHiddenFocusableElement;
  firstHiddenFocusableElement;
  scroller;
  listViewChild;
  headerFacet;
  footerFacet;
  templates;
  itemTemplate;
  groupTemplate;
  headerTemplate;
  filterTemplate;
  footerTemplate;
  emptyFilterTemplate;
  emptyTemplate;
  filterIconTemplate;
  checkIconTemplate;
  _filterValue = signal(null);
  _filteredOptions;
  filterOptions;
  filtered;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  optionTouched;
  focus;
  headerCheckboxFocus;
  translationSubscription;
  focused;
  get containerClass() {
    return {
      "p-listbox p-component": true,
      "p-disabled": this.disabled
    };
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  get filterResultMessageText() {
    return ObjectUtils.isNotEmpty(this.visibleOptions()) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions().length) : this.emptyFilterMessageText;
  }
  get filterMessageText() {
    return this.filterMessage || this.config.translation.searchMessage || "";
  }
  get searchMessageText() {
    return this.searchMessage || this.config.translation.searchMessage || "";
  }
  get emptyFilterMessageText() {
    return this.emptyFilterMessage || this.config.translation.emptySearchMessage || this.config.translation.emptyFilterMessage || "";
  }
  get selectionMessageText() {
    return this.selectionMessage || this.config.translation.selectionMessage || "";
  }
  get emptySelectionMessageText() {
    return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || "";
  }
  get selectedMessageText() {
    return this.hasSelectedOption() ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.modelValue().length : "1") : this.emptySelectionMessageText;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  get searchFields() {
    return this.filterFields || [this.optionLabel];
  }
  get toggleAllAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? "selectAll" : "unselectAll"] : void 0;
  }
  searchValue;
  searchTimeout;
  _selectAll = null;
  _options = signal(null);
  startRangeIndex = signal(-1);
  focusedOptionIndex = signal(-1);
  modelValue = signal(null);
  visibleOptions = computed(() => {
    const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
    const filterValue = this._filterValue();
    if (this.searchFields[0] === void 0) {
      return filterValue ? options.filter((option) => option.toString().toLocaleLowerCase(this.filterLocale).indexOf(filterValue.toLocaleLowerCase(this.filterLocale).trim()) !== -1) : options;
    } else
      return filterValue ? this.filterService.filter(options, this.searchFields, filterValue, this.filterMatchMode, this.filterLocale) : options;
  });
  constructor(el, cd, filterService, config, renderer) {
    this.el = el;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
    this.renderer = renderer;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        case "checkicon":
          this.checkIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  writeValue(value) {
    this.value = value;
    this.modelValue.set(this.value);
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption() && !this.multiple) {
      const focusedOptionIndex = this.findFirstFocusedOptionIndex();
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()]);
    }
  }
  /**
   * Updates the model value.
   * @group Method
   */
  updateModel(value, event) {
    this.value = value;
    this.modelValue.set(value);
    this.onModelChange(value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }
  removeOption(option) {
    return this.modelValue().filter((val) => !ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey()));
  }
  onOptionSelect(event, option, index = -1) {
    if (this.disabled || this.isOptionDisabled(option) || this.readonly) {
      return;
    }
    event && this.onClick.emit({
      originalEvent: event,
      option,
      value: this.value
    });
    this.multiple ? this.onOptionSelectMultiple(event, option) : this.onOptionSelectSingle(event, option);
    this.optionTouched = false;
    index !== -1 && this.focusedOptionIndex.set(index);
  }
  onOptionSelectMultiple(event, option) {
    let selected = this.isSelected(option);
    let value = null;
    let metaSelection = this.optionTouched ? false : this.metaKeySelection;
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey;
      if (selected) {
        value = metaKey ? this.removeOption(option) : [this.getOptionValue(option)];
      } else {
        value = metaKey ? this.modelValue() || [] : [];
        value = [...value, this.getOptionValue(option)];
      }
    } else {
      value = selected ? this.removeOption(option) : [...this.modelValue() || [], this.getOptionValue(option)];
    }
    this.updateModel(value, event);
  }
  onOptionSelectSingle(event, option) {
    let selected = this.isSelected(option);
    let valueChanged = false;
    let value = null;
    let metaSelection = this.optionTouched ? false : this.metaKeySelection;
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey;
      if (selected) {
        if (metaKey) {
          value = null;
          valueChanged = true;
        }
      } else {
        value = this.getOptionValue(option);
        valueChanged = true;
      }
    } else {
      value = selected ? null : this.getOptionValue(option);
      valueChanged = true;
    }
    if (valueChanged) {
      this.updateModel(value, event);
    }
  }
  onOptionSelectRange(event, start = -1, end = -1) {
    start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
    end === -1 && (end = this.findNearestSelectedOptionIndex(start));
    if (start !== -1 && end !== -1) {
      const rangeStart = Math.min(start, end);
      const rangeEnd = Math.max(start, end);
      const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
      this.updateModel(value, event);
    }
  }
  onToggleAll(event) {
    if (this.disabled || this.readonly) {
      return;
    }
    DomHandler.focus(this.headerCheckboxViewChild.nativeElement);
    if (this.selectAll !== null) {
      this.onSelectAllChange.emit({
        originalEvent: event,
        checked: !this.allSelected()
      });
    } else {
      const value = this.allSelected() ? [] : this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
      this.updateModel(value, event);
    }
    event.preventDefault();
  }
  allSelected() {
    return this.selectAll !== null ? this.selectAll : ObjectUtils.isNotEmpty(this.visibleOptions()) && this.visibleOptions().every((option) => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
  }
  onOptionTouchEnd() {
    if (this.disabled) {
      return;
    }
    this.optionTouched = true;
  }
  onOptionMouseDown(event, index) {
    this.changeFocusedOptionIndex(event, index);
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  onOptionDoubleClick(event, option) {
    if (this.disabled || this.isOptionDisabled(option) || this.readonly) {
      return;
    }
    this.onDblClick.emit({
      originalEvent: event,
      option,
      value: this.value
    });
  }
  onFirstHiddenFocus(event) {
    DomHandler.focus(this.listViewChild.nativeElement);
    const firstFocusableEl = DomHandler.getFirstFocusableElement(this.el.nativeElement, ':not([data-p-hidden-focusable="true"])');
    this.lastHiddenFocusableElement.nativeElement.tabIndex = ObjectUtils.isEmpty(firstFocusableEl) ? "-1" : void 0;
    this.firstHiddenFocusableElement.nativeElement.tabIndex = -1;
  }
  onLastHiddenFocus(event) {
    const relatedTarget = event.relatedTarget;
    if (relatedTarget === this.listViewChild.nativeElement) {
      const firstFocusableEl = DomHandler.getFirstFocusableElement(this.el.nativeElement, ":not(.p-hidden-focusable)");
      DomHandler.focus(firstFocusableEl);
      this.firstHiddenFocusableElement.nativeElement.tabIndex = void 0;
    } else {
      DomHandler.focus(this.firstHiddenFocusableElement.nativeElement);
    }
    this.lastHiddenFocusableElement.nativeElement.tabIndex = -1;
  }
  onFocusout(event) {
    if (!this.el.nativeElement.contains(event.relatedTarget) && this.lastHiddenFocusableElement && this.firstHiddenFocusableElement) {
      this.firstHiddenFocusableElement.nativeElement.tabIndex = this.lastHiddenFocusableElement.nativeElement.tabIndex = void 0;
    }
  }
  onListFocus(event) {
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.onFocus.emit(event);
  }
  onListBlur(event) {
    this.focused = false;
    this.focusedOptionIndex.set(-1);
    this.startRangeIndex.set(-1);
    this.searchValue = "";
  }
  onHeaderCheckboxFocus(event) {
    this.headerCheckboxFocus = true;
  }
  onHeaderCheckboxBlur() {
    this.headerCheckboxFocus = false;
  }
  onHeaderCheckboxKeyDown(event) {
    if (this.disabled) {
      event.preventDefault();
      return;
    }
    switch (event.code) {
      case "Space":
        this.onToggleAll(event);
        break;
      case "Enter":
        this.onToggleAll(event);
        break;
      case "Tab":
        this.onHeaderCheckboxTabKeyDown(event);
        break;
      default:
        break;
    }
  }
  onHeaderCheckboxTabKeyDown(event) {
    DomHandler.focus(this.listViewChild.nativeElement);
    event.preventDefault();
  }
  onFilterChange(event) {
    let value = event.target.value?.trim();
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.startRangeIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
    this.startRangeIndex.set(-1);
  }
  onListKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      case "Enter":
      case "Space":
      case "NumpadEnter":
        this.onSpaceKey(event);
        break;
      case "Tab":
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        if (this.multiple && event.code === "KeyA" && metaKey) {
          const value = this.visibleOptions().filter((option) => this.isValidOption(option)).map((option) => this.getOptionValue(option));
          this.updateModel(value, event);
          event.preventDefault();
          break;
        }
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          this.searchOptions(event, event.key);
          event.preventDefault();
        }
        break;
    }
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.onShiftKey();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
    if (this.multiple && event.shiftKey) {
      this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
    if (this.multiple && event.shiftKey) {
      this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
    }
    this.changeFocusedOptionIndex(event, optionIndex);
    event.preventDefault();
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      event.currentTarget.setSelectionRange(0, 0);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findFirstOptionIndex();
      if (this.multiple && event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
      }
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      const target = event.currentTarget;
      const len = target.value.length;
      target.setSelectionRange(len, len);
      this.focusedOptionIndex.set(-1);
    } else {
      let metaKey = event.metaKey || event.ctrlKey;
      let optionIndex = this.findLastOptionIndex();
      if (this.multiple && event.shiftKey && metaKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    if (this.focusedOptionIndex() !== -1) {
      if (this.multiple && event.shiftKey)
        this.onOptionSelectRange(event, this.focusedOptionIndex());
      else
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
    }
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onShiftKey() {
    const focusedOptionIndex = this.focusedOptionIndex();
    this.startRangeIndex.set(focusedOptionIndex);
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionLabel(option) {
    return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionValue(option) {
    return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  hasSelectedOption() {
    return ObjectUtils.isNotEmpty(this.modelValue());
  }
  isOptionGroup(option) {
    return this.optionGroupLabel && option.optionGroup && option.group;
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus && !this.multiple) {
        this.onOptionSelect(event, this.visibleOptions()[index]);
      }
    }
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    if (this.focusedOptionIndex() !== -1) {
      optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option));
      optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex((option) => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
    } else {
      optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    }
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    const element = DomHandler.findSingle(this.listViewChild.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    } else if (!this.virtualScrollerDisabled) {
      this.virtualScroll && this.scroller.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
    }
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findLastOptionIndex() {
    return ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findFirstSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findLastSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  findLastSelectedOptionIndex() {
    return this.hasSelectedOption() ? ObjectUtils.findLastIndex(this.visibleOptions(), (option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findNextSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
  }
  findPrevSelectedOptionIndex(index) {
    const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidSelectedOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
  }
  findFirstSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findNearestSelectedOptionIndex(index, firstCheckUp = false) {
    let matchedOptionIndex = -1;
    if (this.hasSelectedOption()) {
      if (firstCheckUp) {
        matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
      } else {
        matchedOptionIndex = this.findNextSelectedOptionIndex(index);
        matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
      }
    }
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
  }
  isSelected(option) {
    const optionValue = this.getOptionValue(option);
    if (this.multiple)
      return (this.modelValue() || []).some((value) => ObjectUtils.equals(value, optionValue, this.equalityKey()));
    else
      return ObjectUtils.equals(this.modelValue(), optionValue, this.equalityKey());
  }
  isValidOption(option) {
    return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isEmpty() {
    return !this._options()?.length || !this.visibleOptions()?.length;
  }
  hasFilter() {
    return this._filterValue() && this._filterValue().trim().length > 0;
  }
  resetFilter() {
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
    this._filterValue.set(null);
  }
  ngOnDestroy() {
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
  }
  static ɵfac = function Listbox_Factory(t) {
    return new (t || _Listbox)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FilterService), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Listbox,
    selectors: [["p-listbox"]],
    contentQueries: function Listbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Header, 5);
        ɵɵcontentQuery(dirIndex, Footer, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Listbox_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
        ɵɵviewQuery(_c3, 5);
        ɵɵviewQuery(_c4, 5);
        ɵɵviewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerCheckboxViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastHiddenFocusableElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstHiddenFocusableElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      searchMessage: "searchMessage",
      emptySelectionMessage: "emptySelectionMessage",
      selectionMessage: "selectionMessage",
      autoOptionFocus: [InputFlags.HasDecoratorInputTransform, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      ariaLabel: "ariaLabel",
      selectOnFocus: [InputFlags.HasDecoratorInputTransform, "selectOnFocus", "selectOnFocus", booleanAttribute],
      searchLocale: [InputFlags.HasDecoratorInputTransform, "searchLocale", "searchLocale", booleanAttribute],
      focusOnHover: [InputFlags.HasDecoratorInputTransform, "focusOnHover", "focusOnHover", booleanAttribute],
      filterMessage: "filterMessage",
      filterFields: "filterFields",
      lazy: [InputFlags.HasDecoratorInputTransform, "lazy", "lazy", booleanAttribute],
      virtualScroll: [InputFlags.HasDecoratorInputTransform, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [InputFlags.HasDecoratorInputTransform, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      scrollHeight: "scrollHeight",
      tabindex: [InputFlags.HasDecoratorInputTransform, "tabindex", "tabindex", numberAttribute],
      multiple: [InputFlags.HasDecoratorInputTransform, "multiple", "multiple", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      listStyle: "listStyle",
      listStyleClass: "listStyleClass",
      readonly: [InputFlags.HasDecoratorInputTransform, "readonly", "readonly", booleanAttribute],
      disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
      checkbox: [InputFlags.HasDecoratorInputTransform, "checkbox", "checkbox", booleanAttribute],
      filter: [InputFlags.HasDecoratorInputTransform, "filter", "filter", booleanAttribute],
      filterBy: "filterBy",
      filterMatchMode: "filterMatchMode",
      filterLocale: "filterLocale",
      metaKeySelection: [InputFlags.HasDecoratorInputTransform, "metaKeySelection", "metaKeySelection", booleanAttribute],
      dataKey: "dataKey",
      showToggleAll: [InputFlags.HasDecoratorInputTransform, "showToggleAll", "showToggleAll", booleanAttribute],
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionGroupChildren: "optionGroupChildren",
      optionGroupLabel: "optionGroupLabel",
      optionDisabled: "optionDisabled",
      ariaFilterLabel: "ariaFilterLabel",
      filterPlaceHolder: "filterPlaceHolder",
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      group: [InputFlags.HasDecoratorInputTransform, "group", "group", booleanAttribute],
      options: "options",
      filterValue: "filterValue",
      selectAll: "selectAll"
    },
    outputs: {
      onChange: "onChange",
      onClick: "onClick",
      onDblClick: "onDblClick",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onSelectAllChange: "onSelectAllChange"
    },
    features: [ɵɵProvidersFeature([LISTBOX_VALUE_ACCESSOR]), ɵɵInputTransformsFeature],
    ngContentSelectors: _c7,
    decls: 16,
    vars: 24,
    consts: [["firstHiddenFocusableElement", ""], ["buildInItems", ""], ["lastHiddenFocusableElement", ""], ["builtInFilterElement", ""], ["headerchkbox", ""], ["filterInput", ""], ["scroller", ""], ["list", ""], ["emptyFilter", ""], ["empty", ""], [3, "focusout", "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus", "tabindex"], ["class", "p-listbox-header", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["class", "p-listbox-footer", 4, "ngIf"], ["role", "status", "aria-live", "polite", "class", "p-hidden-accessible", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], [1, "p-listbox-header"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-checkbox p-component", 3, "ngClass", "click", "keydown", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "p-checkbox", "p-component", 3, "click", "keydown", "ngClass"], [1, "p-hidden-accessible"], ["type", "checkbox", "readonly", "readonly", 3, "focus", "blur", "disabled"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"], ["class", "p-listbox-filter-container", 4, "ngIf"], ["role", "status", "attr.aria-live", "polite", 1, "p-hidden-accessible"], [1, "p-listbox-filter-container"], ["type", "text", "role", "searchbox", 1, "p-listbox-filter", "p-inputtext", "p-component", 3, "input", "keydown", "blur", "value", "disabled", "tabindex"], ["class", "p-listbox-filter-icon", 4, "ngIf"], [1, "p-listbox-filter-icon"], [3, "onLazyLoad", "items", "itemSize", "autoSize", "tabindex", "lazy", "options"], ["pTemplate", "content"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-listbox-list", 3, "focus", "blur", "keydown", "tabindex", "ngClass", "ngStyle"], ["ngFor", "", 3, "ngForOf"], ["class", "p-listbox-empty-message", "role", "option", 4, "ngIf"], ["role", "option", 1, "p-listbox-item-group", 3, "ngStyle"], ["pRipple", "", "role", "option", 1, "p-listbox-item", 3, "click", "dblclick", "mousedown", "mouseenter", "touchend", "ngStyle", "ngClass"], ["class", "p-checkbox p-component", 3, "ngClass", 4, "ngIf"], [1, "p-checkbox", "p-component", 3, "ngClass"], [1, "p-checkbox-box", 3, "ngClass"], ["role", "option", 1, "p-listbox-empty-message"], [1, "p-listbox-footer"]],
    template: function Listbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c6);
        ɵɵelementStart(0, "div", 10);
        ɵɵlistener("focusout", function Listbox_Template_div_focusout_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocusout($event));
        });
        ɵɵelementStart(1, "span", 11, 0);
        ɵɵlistener("focus", function Listbox_Template_span_focus_1_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFirstHiddenFocus($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(3, Listbox_div_3_Template, 3, 5, "div", 12)(4, Listbox_div_4_Template, 5, 3, "div", 12);
        ɵɵelementStart(5, "div", 13);
        ɵɵtemplate(6, Listbox_p_scroller_6_Template, 4, 11, "p-scroller", 14)(7, Listbox_ng_container_7_Template, 2, 6, "ng-container", 15)(8, Listbox_ng_template_8_Template, 5, 11, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵtemplate(10, Listbox_div_10_Template, 3, 5, "div", 16)(11, Listbox_span_11_Template, 2, 1, "span", 17);
        ɵɵelementStart(12, "span", 18);
        ɵɵtext(13);
        ɵɵelementEnd();
        ɵɵelementStart(14, "span", 11, 2);
        ɵɵlistener("focus", function Listbox_Template_span_focus_14_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onLastHiddenFocus($event));
        });
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        ɵɵattribute("id", ctx.id);
        ɵɵadvance();
        ɵɵproperty("tabindex", !ctx.disabled ? ctx.tabindex : -1);
        ɵɵattribute("aria-hidden", true)("data-p-hidden-focusable", true);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.checkbox && ctx.multiple && ctx.showToggleAll || ctx.filter);
        ɵɵadvance();
        ɵɵclassMap(ctx.listStyleClass);
        ɵɵstyleProp("max-height", ctx.virtualScroll ? "auto" : ctx.scrollHeight || "auto");
        ɵɵproperty("ngClass", "p-listbox-list-wrapper")("ngStyle", ctx.listStyle);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.virtualScroll);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.virtualScroll);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.isEmpty());
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.selectedMessageText, " ");
        ɵɵadvance();
        ɵɵproperty("tabindex", !ctx.disabled ? ctx.tabindex : -1);
        ɵɵattribute("aria-hidden", true)("data-p-hidden-focusable", true);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, PrimeTemplate, Ripple, Scroller, SearchIcon, CheckIcon],
    styles: ["@layer primeng{.p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;-webkit-user-select:none;user-select:none}.p-listbox-header{display:flex;align-items:center}.p-listbox-filter-container{position:relative;flex:1 1 auto}.p-listbox-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-listbox-filter{width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Listbox, [{
    type: Component,
    args: [{
      selector: "p-listbox",
      template: `
        <div [attr.id]="id" [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" (focusout)="onFocusout($event)">
            <span
                #firstHiddenFocusableElement
                role="presentation"
                [attr.aria-hidden]="true"
                class="p-hidden-accessible p-hidden-focusable"
                [tabindex]="!disabled ? tabindex : -1"
                (focus)="onFirstHiddenFocus($event)"
                [attr.data-p-hidden-focusable]="true"
            >
            </span>
            <div class="p-listbox-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: modelValue(), options: visibleOptions() }"></ng-container>
            </div>
            <div class="p-listbox-header" *ngIf="(checkbox && multiple && showToggleAll) || filter">
                <div *ngIf="checkbox && multiple && showToggleAll" class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-disabled': disabled || toggleAllDisabled }" (click)="onToggleAll($event)" (keydown)="onHeaderCheckboxKeyDown($event)">
                    <div class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        <input
                            #headerchkbox
                            type="checkbox"
                            readonly="readonly"
                            [attr.checked]="allSelected()"
                            [disabled]="disabled || toggleAllDisabled"
                            (focus)="onHeaderCheckboxFocus($event)"
                            (blur)="onHeaderCheckboxBlur($event)"
                            [attr.aria-label]="toggleAllAriaLabel"
                        />
                    </div>
                    <div class="p-checkbox-box" role="checkbox" [attr.aria-checked]="allSelected()" [ngClass]="{ 'p-highlight': allSelected(), 'p-focus': headerCheckboxFocus, 'p-disabled': disabled || toggleAllDisabled }">
                        <ng-container *ngIf="allSelected()">
                            <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.aria-hidden]="true" />
                            <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                            </span>
                        </ng-container>
                    </div>
                </div>
                <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                    <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                </ng-container>
                <ng-template #builtInFilterElement>
                    <div class="p-listbox-filter-container" *ngIf="filter">
                        <input
                            #filterInput
                            type="text"
                            class="p-listbox-filter p-inputtext p-component"
                            role="searchbox"
                            [value]="_filterValue() || ''"
                            [disabled]="disabled"
                            [attr.aria-owns]="id + '_list'"
                            [attr.aria-activedescendant]="focusedOptionId"
                            [attr.placeholder]="filterPlaceHolder"
                            [attr.aria-label]="ariaFilterLabel"
                            [tabindex]="!disabled && !focused ? tabindex : -1"
                            (input)="onFilterChange($event)"
                            (keydown)="onFilterKeyDown($event)"
                            (blur)="onFilterBlur($event)"
                        />
                        <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-listbox-filter-icon'" [attr.aria-hidden]="true" />
                        <span *ngIf="filterIconTemplate" class="p-listbox-filter-icon" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                        </span>
                    </div>
                    <span role="status" attr.aria-live="polite" class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                        {{ filterResultMessageText }}
                    </span>
                </ng-template>
            </div>
            <div [ngClass]="'p-listbox-list-wrapper'" [ngStyle]="listStyle" [class]="listStyleClass" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                <p-scroller
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="visibleOptions()"
                    [style]="{ height: scrollHeight }"
                    [itemSize]="virtualScrollItemSize"
                    [autoSize]="true"
                    [tabindex]="-1"
                    [lazy]="lazy"
                    [options]="virtualScrollOptions"
                    (onLazyLoad)="onLazyLoad.emit($event)"
                >
                    <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                        <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                    </ng-template>
                    <ng-container *ngIf="loaderTemplate">
                        <ng-template pTemplate="loader" let-scrollerOptions="options">
                            <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                        </ng-template>
                    </ng-container>
                </p-scroller>
                <ng-container *ngIf="!virtualScroll">
                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                </ng-container>

                <ng-template #buildInItems let-items let-scrollerOptions="options">
                    <ul
                        #list
                        class="p-listbox-list"
                        role="listbox"
                        [tabindex]="-1"
                        [attr.aria-multiselectable]="true"
                        [ngClass]="scrollerOptions.contentStyleClass"
                        [ngStyle]="scrollerOptions.contentStyle"
                        [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                        [attr.aria-label]="ariaLabel"
                        [attr.aria-multiselectable]="multiple"
                        [attr.aria-disabled]="disabled"
                        (focus)="onListFocus($event)"
                        (blur)="onListBlur($event)"
                        (keydown)="onListKeyDown($event)"
                    >
                        <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                            <ng-container *ngIf="isOptionGroup(option)">
                                <li [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" class="p-listbox-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                    <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                </li>
                            </ng-container>
                            <ng-container *ngIf="!isOptionGroup(option)">
                                <li
                                    pRipple
                                    class="p-listbox-item"
                                    role="option"
                                    [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                    [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }"
                                    [ngClass]="{ 'p-listbox-item': true, 'p-highlight': isSelected(option), 'p-focus': focusedOptionIndex() === getOptionIndex(i, scrollerOptions), 'p-disabled': isOptionDisabled(option) }"
                                    [attr.aria-label]="getOptionLabel(option)"
                                    [attr.aria-selected]="isSelected(option)"
                                    [attr.aria-disabled]="isOptionDisabled(option)"
                                    [attr.aria-setsize]="ariaSetSize"
                                    [attr.ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                    (click)="onOptionSelect($event, option, getOptionIndex(i, scrollerOptions))"
                                    (dblclick)="onOptionDoubleClick($event, option)"
                                    (mousedown)="onOptionMouseDown($event, getOptionIndex(i, scrollerOptions))"
                                    (mouseenter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                    (touchend)="onOptionTouchEnd()"
                                >
                                    <div class="p-checkbox p-component" *ngIf="checkbox && multiple" [ngClass]="{ 'p-checkbox-disabled': disabled || isOptionDisabled(option) }">
                                        <div class="p-checkbox-box" [ngClass]="{ 'p-highlight': isSelected(option) }">
                                            <ng-container *ngIf="isSelected(option)">
                                                <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate" [attr.aria-hidden]="true" />
                                                <span *ngIf="checkIconTemplate" class="p-checkbox-icon" [attr.aria-hidden]="true">
                                                    <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                                                </span>
                                            </ng-container>
                                        </div>
                                    </div>
                                    <span *ngIf="!itemTemplate">{{ getOptionLabel(option) }}</span>
                                    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: option, index: getOptionIndex(i, scrollerOptions) }"></ng-container>
                                </li>
                            </ng-container>
                        </ng-template>
                        <li *ngIf="hasFilter() && isEmpty()" class="p-listbox-empty-message" role="option">
                            <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                {{ emptyFilterMessageText }}
                            </ng-container>
                            <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                        </li>
                        <li *ngIf="!hasFilter() && isEmpty()" class="p-listbox-empty-message" role="option">
                            <ng-container *ngIf="!emptyTemplate; else empty">
                                {{ emptyMessage }}
                            </ng-container>
                            <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                        </li>
                    </ul>
                </ng-template>
            </div>
            <div class="p-listbox-footer" *ngIf="footerFacet || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: modelValue(), options: visibleOptions() }"></ng-container>
            </div>
            <span *ngIf="isEmpty()" role="status" aria-live="polite" class="p-hidden-accessible">
                {{ emptyMessage }}
            </span>
            <span role="status" aria-live="polite" class="p-hidden-accessible">
                {{ selectedMessageText }}
            </span>
            <span
                #lastHiddenFocusableElement
                role="presentation"
                [attr.aria-hidden]="true"
                class="p-hidden-accessible p-hidden-focusable"
                [tabindex]="!disabled ? tabindex : -1"
                (focus)="onLastHiddenFocus($event)"
                [attr.data-p-hidden-focusable]="true"
            >
            </span>
        </div>
    `,
      providers: [LISTBOX_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-listbox-list-wrapper{overflow:auto}.p-listbox-list{list-style-type:none;margin:0;padding:0}.p-listbox-item{cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;-webkit-user-select:none;user-select:none}.p-listbox-header{display:flex;align-items:center}.p-listbox-filter-container{position:relative;flex:1 1 auto}.p-listbox-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-listbox-filter{width:100%}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }], {
    id: [{
      type: Input
    }],
    searchMessage: [{
      type: Input
    }],
    emptySelectionMessage: [{
      type: Input
    }],
    selectionMessage: [{
      type: Input
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    searchLocale: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterMessage: [{
      type: Input
    }],
    filterFields: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    listStyle: [{
      type: Input
    }],
    listStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkbox: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataKey: [{
      type: Input
    }],
    showToggleAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterPlaceHolder: [{
      type: Input
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    options: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onDblClick: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onSelectAllChange: [{
      type: Output
    }],
    headerCheckboxViewChild: [{
      type: ViewChild,
      args: ["headerchkbox"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    lastHiddenFocusableElement: [{
      type: ViewChild,
      args: ["lastHiddenFocusableElement"]
    }],
    firstHiddenFocusableElement: [{
      type: ViewChild,
      args: ["firstHiddenFocusableElement"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ListboxModule = class _ListboxModule {
  static ɵfac = function ListboxModule_Factory(t) {
    return new (t || _ListboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ListboxModule,
    declarations: [Listbox],
    imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, SearchIcon, CheckIcon],
    exports: [Listbox, SharedModule, ScrollerModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, SearchIcon, CheckIcon, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListboxModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, RippleModule, ScrollerModule, SearchIcon, CheckIcon],
      exports: [Listbox, SharedModule, ScrollerModule],
      declarations: [Listbox]
    }]
  }], null, null);
})();
export {
  LISTBOX_VALUE_ACCESSOR,
  Listbox,
  ListboxModule
};
//# sourceMappingURL=primeng_listbox.js.map
