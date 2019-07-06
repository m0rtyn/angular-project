(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-layout>\n  <router-outlet></router-outlet>\n</app-page-layout>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-layout/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-layout/header/header.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <img\n    class=\"header_logo\"\n    src=\"../../../assets/icons/logo__legacy_icon.svg\"\n  />\n  <div\n    class=\"header_dropdown-menu\"\n    [ngClass]=\"{'header_dropdown-menu--opened': opened}\"\n    (click)=\"toggleDropdown()\"\n  >\n    <user-badge\n    size=\"small\"\n    firstName=\"Ivan\"\n    position=\"Wrike Team\"\n    >\n    </user-badge>\n    <nav class=\"header_dropdown-nav nav\">\n      <ul class=\"header_dropdown-list nav_list\">\n        <li class=\"nav_item\">\n          <a class=\"header_dropdown-link nav-link\" href=\"#\">\n            Profile settings\n          </a>\n        </li>\n        <li class=\"nav_item\">\n          <a class=\"header_dropdown-link nav-link\" href=\"#\">\n            Team directory\n          </a>\n        </li>\n        <li class=\"nav_item\">\n          <a class=\"header_dropdown-link nav-link\" href=\"#\">\n            Apps & integrations\n          </a>\n        </li>\n        <li class=\"nav_item\">\n          <a class=\"header_dropdown-link nav-link\" href=\"#\">\n            Mobile apps\n          </a>\n        </li>\n        <li class=\"nav_item\">\n          <a class=\"header_dropdown-link nav-link\" href=\"#\">\n            Help\n          </a>\n        </li>\n        <hr class=\"header_dropdown-divider\">\n        <li class=\"nav_item\">\n          <a class=\"header_dropdown-link nav-link\" href=\"#\">\n            Log out\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <img class=\"header_dropdown-arrow\" src=\"../../../assets/icons/down-semibold_icon.svg\" />\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-layout/page-layout.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-layout/page-layout.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout\">\n  <app-header></app-header>\n  <h1 class=\"visually-hidden\">\n    Focusality\n  </h1>\n  <div class=\"page-layout_wrapper\">\n    <app-sidebar></app-sidebar>\n    <div class=\"page-layout_content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-layout/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-layout/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\">\n  <nav class=\"nav-sidebar_wrapper nav_wrapper\">\n    <span class=\"nav-sidebar_section-title\">\n      <img src=\"../../../assets/icons/user-small_icon.svg\" class=\"nav-sidebar_section-icon\"/>\n      PERSONAL SETTINGS\n    </span>\n    <ul class=\"nav-sidebar_list nav_list text-secondary\">\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Profile details\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Account info\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Email preferences\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Work schedule\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Password & security\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Apps access\n        </a>\n      </li>\n    </ul>\n\n    <hr class=\"nav-sidebar_divider nav_divider\">\n\n    <span class=\"nav-sidebar_section-title\">\n      <img src=\"../../../assets/icons/settigns-gearwheel_icon.svg\" class=\"nav-sidebar_section-icon\"/>\n      ACCOUNT MANAGEMENT\n    </span>\n    <ul class=\"nav-sidebar_list nav_list text-secondary\">\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Subscription\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Billing\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Users & Groups\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Request from builder\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Custom workflows\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Activity reports\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Calendars\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Account settings\n        </a>\n      </li>\n      <li class=\"nav-sidebar_item nav_item\">\n        <a class=\"nav-sidebar_link nav_link\" href=\"#\">\n          Advanced security\n        </a>\n      </li>\n    </ul>\n  </nav>\n</aside>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile-edit-details/profile-edit-details.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile-edit-details/profile-edit-details.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"profile_edit-details\">\n  <h2>Profile details</h2>\n  <!-- <user-badge\n    size=\"medium\"\n    fullName=\"Ivan Doev\"\n    position=\"UI developer (crafting Team)\"\n  >\n  </user-badge> -->\n  <form class=\"profile_form\" action=\"saveDetailsChanges\">\n    <div>\n      <!-- <app-input [(ngModel)]=\"model.firstName\")]>First name</app-input> -->\n      <app-input>First name</app-input>\n      <app-input>Last name</app-input>\n    </div>\n    <div>\n      <app-input>Company name</app-input>\n      <app-input>Job title</app-input>\n    </div>\n    <div>\n      <app-input>Location</app-input>\n      <app-input type=\"tel\">Phone number</app-input>\n    </div>\n\n    <app-button>Save changes</app-button>\n    <app-button pseudo=\"true\">Cancel</app-button>\n  </form>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"profile_edit-details\">\n  <h2>Workspace settings</h2>\n  <form action=\"saveDetailsChanges\">\n    <div>\n      <app-dropdown options=\"timezones\">Time zone</app-dropdown>\n      <!-- <app-dropdown options=\"languages\">Language</app-dropdown> -->\n    </div>\n    <div>\n      <!-- <app-dropdown options=\"tasks\">New task created by default as</app-dropdown> -->\n    </div>\n    <div>\n      <app-checkbox>\n        Show pop-up with suggestion to align the dates of tasks and subtasks.\n        <br>\n        <a>How does subtask alignment work?</a>\n      </app-checkbox>\n    </div>\n\n    <app-button>Save settings</app-button>\n  </form>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <profile-edit-details></profile-edit-details>\n  <profile-workspace-settings></profile-workspace-settings>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/button/button.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/button/button.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [ngClass]=\"['button', pseudo ? 'button--pseudo' : '']\" [disabled]=\"disabled\">\n  <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/checkbox/checkbox.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/checkbox/checkbox.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label\n  class=\"checkbox\"\n  [class.checkbox--checked]=\"isChecked\"\n  [class.checkbox--error]=\"error\"\n  [class.checkbox--disabled]=\"disabled\"\n>\n  <input\n    class=\"checkbox_field\"\n    type=\"checkbox\"\n    [disabled]=\"disabled\"\n    (click)=\"handleClick()\"\n  />\n  <span class=\"checkbox_label\">\n    <ng-content></ng-content>\n  </span>\n</label>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/dropdown/dropdown.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/dropdown/dropdown.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label\n  class=\"dropdown\"\n  [class.dropdown--error]=\"error\"\n  [class.dropdown--disabled]=\"disabled\"\n>\n  <span class=\"dropdown_label\">\n    <ng-content></ng-content>\n  </span>\n  <select\n    class=\"dropdown_field\"\n    [disabled]=\"disabled\"\n  >\n    <option class=\"dropdown_placeholder\">{{placeholder}}</option>\n    <option value=\"'test'\">test</option>\n    <!-- <option value=\"value-2\">Value 2</option>\n    <option value=\"value-3\">Value 3</option> -->\n  </select>\n  <!-- <img class=\"dropdown_arrow\" src=\"../../../assets/icons/down-semibold_icon.svg\"/> -->\n</label>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/input/input.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/input/input.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label\n  class=\"input\"\n  [class.input--error]=\"error\"\n  [class.input--disabled]=\"disabled\"\n>\n  <span class=\"input_label\">\n    <ng-content></ng-content>\n  </span>\n  <input\n    class=\"input_field\"\n    [placeholder]=\"placeholder\"\n    [disabled]=\"disabled\"\n    [type]=\"type\"\n  />\n</label>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/user-badge/user-badge.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/user-badge/user-badge.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"user-badge\"\n>\n  <div [ngClass]=\"['user-badge_avatar', 'user-badge_avatar--' + size]\">\n    <img src=\"../../../assets/images/m-i.jpg\">\n  </div>\n  <div [ngClass]=\"['user-badge_info', 'user-badge_info--' + size]\">\n    <h3 class=\"user-badge_name\">{{ fullName }}</h3>\n    <span>{{ position }}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ui-kit/ui-kit.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ui-kit/ui-kit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-ui-kit\">\n  <h1>Header 1</h1>\n  <h2>Header 2</h2>\n  <h3>Header 3</h3>\n  <p>Main text</p>\n  <p class=\"text-secondary\">Secondary text</p>\n  <p>Some multiline text Some multiline text Some multiline text Some multiline textSome multiline text Some multiline text Some multiline textSome multiline textSome multiline text Some multiline text Some multiline text Some multiline textSome multiline text Some multiline textSome multiline textSome multiline text Some multiline text. <a>unusable link</a></p>\n\n  <p>\n    <app-button>Default button</app-button>\n    <app-button disabled=\"true\">Disabled button</app-button>\n    <br>\n    <app-button pseudo=\"true\">Pseudo button</app-button>\n    <app-button pseudo=\"true\" [disabled]=\"true\">Disabled pseudo button</app-button>\n  </p>\n\n  <p>\n    <app-input></app-input>\n    <app-input placeholder=\"Placeholder\">Input</app-input>\n    <app-input placeholder=\"Placeholder\" error=\"true\">With error</app-input>\n    <app-input placeholder=\"Placeholder\" disabled=\"true\">Disabled input</app-input>\n  </p>\n\n  <p>\n    <app-dropdown></app-dropdown>\n    <app-dropdown placeholder=\"Placeholder\">Dropdown</app-dropdown>\n    <app-dropdown placeholder=\"Placeholder\" error=\"true\">With error</app-dropdown>\n    <app-dropdown placeholder=\"Placeholder\" disabled=\"true\">Disabled dropdown</app-dropdown>\n  </p>\n\n  <p>\n    <app-checkbox></app-checkbox>\n    <app-checkbox>Checkbox</app-checkbox>\n    <app-checkbox error=\"true\">Checkbox with error</app-checkbox>\n    <app-checkbox disabled=\"true\">Disabled checkbox</app-checkbox>\n  </p>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-project';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-layout/page-layout.module */ "./src/app/page-layout/page-layout.module.ts");
/* harmony import */ var _ui_kit_ui_kit_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-kit/ui-kit.module */ "./src/app/ui-kit/ui-kit.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_kit_ui_kit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui-kit/ui-kit.component */ "./src/app/ui-kit/ui-kit.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");










// import { UserBadgeComponent } from './shared/user-badge/user-badge.component';
const appRoutes = [
    // { path: '', component: AppComponent },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: 'ui-kit', component: _ui_kit_ui_kit_component__WEBPACK_IMPORTED_MODULE_8__["UiKitComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"],
            _ui_kit_ui_kit_module__WEBPACK_IMPORTED_MODULE_5__["UiKitModule"],
            _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/page-layout/header/header.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/page-layout/header/header.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  display: flex;\n  background-color: var(--color-panel);\n  color: var(--color-font-inverted);\n  height: var(--height-header);\n  padding: 0 16px;\n  align-items: center;\n}\n.header_logo {\n  height: 22px;\n  box-sizing: content-box;\n}\n.header_dropdown-menu {\n  width: 264px;\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n.header_dropdown-nav {\n  position: absolute;\n  background-color: var(--color-white);\n  border-radius: 2px;\n  padding: 8px 24px;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.16), 0 2px 8px 0 rgba(0, 0, 0, 0.16);\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n  opacity: 0;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  transition-duration: 0.3s;\n  transition-timing-function: ease-out;\n}\n.header_dropdown-menu--opened .header_dropdown-nav {\n  -webkit-transform: translateY(60%);\n          transform: translateY(60%);\n  opacity: 1;\n}\n.header_dropdown-menu--opened .header_dropdown-arrow {\n  -webkit-transform: rotateX(0);\n          transform: rotateX(0);\n}\n.header_dropdown-list {\n  padding-left: 8px;\n}\n.header_dropdown-link {\n  color: var(--color-font-main);\n}\n.header_dropdown-divider {\n  border-color: var(--color-border);\n  margin: 8px 0;\n}\n.header_dropdown-arrow {\n  margin-left: 4px;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3BhZ2UtbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UtbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3RUFDRTtFQUVGLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7RUFBQSx1Q0FBQTtFQUFBLDBEQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQ0hKO0FETUU7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsVUFBQTtBQ0pKO0FET0U7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDTEo7QURRRTtFQUNFLGlCQUFBO0FDTko7QURTRTtFQUNFLDZCQUFBO0FDUEo7QURVRTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtBQ1JKO0FEV0U7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFuZWwpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1pbnZlcnRlZCk7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0LWhlYWRlcik7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmX2xvZ28ge1xuICAgIGhlaWdodDogMjJweDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgfVxuXG4gICZfZHJvcGRvd24tbWVudSB7XG4gICAgd2lkdGg6IDI2NHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICZfZHJvcGRvd24tbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICBib3gtc2hhZG93OlxuICAgICAgMCAxcHggMCByZ2JhKDAsMCwwLDAuMTYpLFxuICAgICAgMCAycHggOHB4IDAgcmdiYSgwLDAsMCwwLjE2KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cblxuICAmX2Ryb3Bkb3duLW1lbnUtLW9wZW5lZCAmX2Ryb3Bkb3duLW5hdiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gICZfZHJvcGRvd24tbWVudS0tb3BlbmVkICZfZHJvcGRvd24tYXJyb3cge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgfVxuXG4gICZfZHJvcGRvd24tbGlzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cblxuICAmX2Ryb3Bkb3duLWxpbmsge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICB9XG5cbiAgJl9kcm9wZG93bi1kaXZpZGVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gICZfZHJvcGRvd24tYXJyb3cge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG4gIH1cbn1cbiIsIi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYW5lbCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LWludmVydGVkKTtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQtaGVhZGVyKTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9sb2dvIHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5oZWFkZXJfZHJvcGRvd24tbWVudSB7XG4gIHdpZHRoOiAyNjRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX2Ryb3Bkb3duLW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuLmhlYWRlcl9kcm9wZG93bi1tZW51LS1vcGVuZWQgLmhlYWRlcl9kcm9wZG93bi1uYXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjAlKTtcbiAgb3BhY2l0eTogMTtcbn1cbi5oZWFkZXJfZHJvcGRvd24tbWVudS0tb3BlbmVkIC5oZWFkZXJfZHJvcGRvd24tYXJyb3cge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XG59XG4uaGVhZGVyX2Ryb3Bkb3duLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5oZWFkZXJfZHJvcGRvd24tbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xufVxuLmhlYWRlcl9kcm9wZG93bi1kaXZpZGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBtYXJnaW46IDhweCAwO1xufVxuLmhlYWRlcl9kcm9wZG93bi1hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-layout/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/page-layout/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.opened = false;
    }
    toggleDropdown() {
        this.opened = !this.opened;
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ../page-layout.component.scss */ "./src/app/page-layout/page-layout.component.scss"), __webpack_require__(/*! ./header.component.scss */ "./src/app/page-layout/header/header.component.scss")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/page-layout/page-layout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/page-layout/page-layout.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-layout {\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n  overflow: hidden;\n  background-color: var(--color-panel);\n  padding: 0 8px;\n}\n\n.page-layout_wrapper {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: calc(100vh - var(--height-header));\n}\n\n.page-layout_content {\n  height: 100%;\n  overflow: scroll;\n  background-color: var(--color-white);\n  border-radius: 2px;\n  padding: 0 48px;\n  flex-grow: 1;\n}\n\n.nav_list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav_item {\n  display: inline-block;\n  line-height: 32px;\n  width: 100%;\n}\n\n.nav_link {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n\n.nav_divider {\n  margin: 16px 0;\n  border-color: rgba(255, 255, 255, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3BhZ2UtbGF5b3V0L3BhZ2UtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FESUU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1FO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYW5lbCk7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4ucGFnZS1sYXlvdXRfd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWlnaHQtaGVhZGVyKSk7XG59XG5cbi5wYWdlLWxheW91dF9jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMCA0OHB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5uYXYge1xuXG4gICZfbGlzdCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgJl9pdGVtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX2xpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAmX2RpdmlkZXIge1xuICAgIG1hcmdpbjogMTZweCAwO1xuICAgIGJvcmRlci1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4xMik7XG4gIH1cbn1cbiIsIi5wYWdlLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYW5lbCk7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4ucGFnZS1sYXlvdXRfd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1oZWlnaHQtaGVhZGVyKSk7XG59XG5cbi5wYWdlLWxheW91dF9jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMCA0OHB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5uYXZfbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLm5hdl9pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2X2xpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubmF2X2RpdmlkZXIge1xuICBtYXJnaW46IDE2cHggMDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/page-layout/page-layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-layout/page-layout.component.ts ***!
  \******************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLayoutComponent = class PageLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-layout',
        template: __webpack_require__(/*! raw-loader!./page-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-layout/page-layout.component.html"),
        styles: [__webpack_require__(/*! ./page-layout.component.scss */ "./src/app/page-layout/page-layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageLayoutComponent);



/***/ }),

/***/ "./src/app/page-layout/page-layout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/page-layout/page-layout.module.ts ***!
  \***************************************************/
/*! exports provided: PageLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutModule", function() { return PageLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout.component */ "./src/app/page-layout/page-layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/page-layout/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/page-layout/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_user_badge_user_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/user-badge/user-badge.component */ "./src/app/shared/user-badge/user-badge.component.ts");







let PageLayoutModule = class PageLayoutModule {
};
PageLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
            _shared_user_badge_user_badge_component__WEBPACK_IMPORTED_MODULE_6__["UserBadgeComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_page_layout_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutComponent"]]
    })
], PageLayoutModule);



/***/ }),

/***/ "./src/app/page-layout/sidebar/sidebar.component.scss":
/*!************************************************************!*\
  !*** ./src/app/page-layout/sidebar/sidebar.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  background-color: var(--color-panel);\n  color: var(--color-font-inverted);\n  width: 256px;\n  padding: 0 32px;\n}\n\n.nav-sidebar_section-title {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  width: 100%;\n}\n\n.nav-sidebar_section-icon {\n  position: absolute;\n  margin-right: 16px;\n  left: -24px;\n}\n\n.nav-sidebar_link {\n  color: var(--color-font-inverted);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3BhZ2UtbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS1sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEUUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ05KOztBRGVFO0VBQ0UsaUNBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtbGF5b3V0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFuZWwpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1pbnZlcnRlZCk7XG4gIHdpZHRoOiAyNTZweDtcbiAgcGFkZGluZzogMCAzMnB4O1xufVxuXG4ubmF2LXNpZGViYXIge1xuXG4gICZfd3JhcHBlciB7XG5cbiAgfVxuXG4gICZfc2VjdGlvbi10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAmX3NlY3Rpb24taWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBsZWZ0OiAtMjRweDtcbiAgfVxuXG4gICZfbGlzdCB7XG4gIH1cblxuICAmX2l0ZW0ge1xuICB9XG5cbiAgJl9saW5rIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1pbnZlcnRlZCk7XG4gIH1cblxuICAmX2RpdmlkZXIge1xuICB9XG59XG5cbiIsIi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFuZWwpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1pbnZlcnRlZCk7XG4gIHdpZHRoOiAyNTZweDtcbiAgcGFkZGluZzogMCAzMnB4O1xufVxuXG4ubmF2LXNpZGViYXJfc2VjdGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtc2lkZWJhcl9zZWN0aW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgbGVmdDogLTI0cHg7XG59XG4ubmF2LXNpZGViYXJfbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LWludmVydGVkKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page-layout/sidebar/sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page-layout/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-layout/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/page-layout/sidebar/sidebar.component.scss"), __webpack_require__(/*! ../page-layout.component.scss */ "./src/app/page-layout/page-layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SidebarComponent);



/***/ }),

/***/ "./src/app/profile/profile-edit-details/details.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/profile-edit-details/details.ts ***!
  \*********************************************************/
/*! exports provided: Details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Details", function() { return Details; });
class Details {
    constructor(firstName, lastName, companyName, jobTitle, location, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.location = location;
        this.phoneNumber = phoneNumber;
    }
}


/***/ }),

/***/ "./src/app/profile/profile-edit-details/profile-edit-details.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/profile/profile-edit-details/profile-edit-details.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1lZGl0LWRldGFpbHMvcHJvZmlsZS1lZGl0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profile-edit-details/profile-edit-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/profile/profile-edit-details/profile-edit-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileEditDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditDetailsComponent", function() { return ProfileEditDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details */ "./src/app/profile/profile-edit-details/details.ts");



let ProfileEditDetailsComponent = class ProfileEditDetailsComponent {
    constructor() {
        this.model = new _details__WEBPACK_IMPORTED_MODULE_2__["Details"]();
    }
};
ProfileEditDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-edit-details',
        template: __webpack_require__(/*! raw-loader!./profile-edit-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile-edit-details/profile-edit-details.component.html"),
        styles: [__webpack_require__(/*! ../profile.component.scss */ "./src/app/profile/profile.component.scss"), __webpack_require__(/*! ./profile-edit-details.component.scss */ "./src/app/profile/profile-edit-details/profile-edit-details.component.scss")]
    })
], ProfileEditDetailsComponent);



/***/ }),

/***/ "./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS13b3Jrc3BhY2Utc2V0dGluZ3MvcHJvZmlsZS13b3Jrc3BhY2Utc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProfileWorkspaceSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileWorkspaceSettingsComponent", function() { return ProfileWorkspaceSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileWorkspaceSettingsComponent = class ProfileWorkspaceSettingsComponent {
    constructor() {
        // settings = new Settings();
        this.timezones = [
            { name: 'gmt+7', value: '(GMT+7) Pacific day time' },
            { name: 'gmt+6', value: '(GMT+6) Somewhere' },
            { name: 'gmt+5', value: '(GMT+5) Somewhere' },
            { name: 'gmt+4', value: '(GMT+4) Somewhere' },
            { name: 'gmt+3', value: '(GMT+3) Somewhere' },
        ];
        // languages: {
        //   { name: 'en', value: 'English' },
        //   { name: 'ru', value: 'Russian' },
        //   { name: 'de', value: 'Deughcths' },
        //   { name: 'ch', value: 'Chinese' },
        //   { name: 'uk', value: 'Seven Unated Kingdoms' },
        // },
    }
};
ProfileWorkspaceSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile-workspace-settings',
        template: __webpack_require__(/*! raw-loader!./profile-workspace-settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.html"),
        styles: [__webpack_require__(/*! ./profile-workspace-settings.component.scss */ "./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.scss")]
    })
], ProfileWorkspaceSettingsComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_edit-details {\n  margin: 42px 0;\n}\n.profile_form {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsY0FBQTtBQ0RKO0FESUU7RUFDRSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUge1xuXG4gICZfZWRpdC1kZXRhaWxzIHtcbiAgICBtYXJnaW46IDQycHggMDtcbiAgfVxuXG4gICZfZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxufVxuIiwiLnByb2ZpbGVfZWRpdC1kZXRhaWxzIHtcbiAgbWFyZ2luOiA0MnB4IDA7XG59XG4ucHJvZmlsZV9mb3JtIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_edit_details_profile_edit_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-edit-details/profile-edit-details.component */ "./src/app/profile/profile-edit-details/profile-edit-details.component.ts");
/* harmony import */ var _profile_workspace_settings_profile_workspace_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-workspace-settings/profile-workspace-settings.component */ "./src/app/profile/profile-workspace-settings/profile-workspace-settings.component.ts");





// import { UserBadgeComponent } from '../shared/user-badge/user-badge.component';


let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
            _profile_edit_details_profile_edit_details_component__WEBPACK_IMPORTED_MODULE_5__["ProfileEditDetailsComponent"],
            _profile_workspace_settings_profile_workspace_settings_component__WEBPACK_IMPORTED_MODULE_6__["ProfileWorkspaceSettingsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ]
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/shared/button/button.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/button/button.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  background-color: var(--color-highlight);\n  color: var(--color-white);\n  border-radius: 2px;\n  padding: 8px 16px;\n  margin: 8px;\n  margin-left: 0;\n  border: none;\n}\n.button:hover, .button:focus {\n  background-color: var(--color-highlight-3);\n}\n.button:active {\n  background-color: var(--color-highlight-2);\n}\n.button[disabled] {\n  background-color: var(--color-white);\n  color: var(--color-hinted);\n  border: 1px solid currentColor;\n}\n.button--pseudo {\n  background-color: transparent;\n  color: var(--color-highlight);\n}\n.button--pseudo:hover, .button--pseudo:focus {\n  background-color: transparent;\n  color: var(--color-highlight-3);\n}\n.button--pseudo:active {\n  background-color: transparent;\n  color: var(--color-highlight-2);\n}\n.button--pseudo[disabled] {\n  background-color: transparent;\n  color: var(--color-hinted);\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3NoYXJlZC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLDBDQUFBO0FDQ0o7QURFRTtFQUNFLDBDQUFBO0FDQUo7QURHRTtFQUNFLG9DQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtBQ0RKO0FES0E7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0FDRkY7QURJRTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7QUNGSjtBREtFO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtBQ0hKO0FETUU7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGlnaGxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgbWFyZ2luOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGlnaGxpZ2h0LTMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWhpZ2hsaWdodC0yKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICB9XG59XG5cbi5idXR0b24tLXBzZXVkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tY29sb3ItaGlnaGxpZ2h0KTtcblxuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGlnaGxpZ2h0LTMpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQtMik7XG4gIH1cblxuICAmW2Rpc2FibGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG59XG4iLCIuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGlnaGxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgbWFyZ2luOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGlnaGxpZ2h0LTMpO1xufVxuLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQtMik7XG59XG4uYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbn1cblxuLmJ1dHRvbi0tcHNldWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xufVxuLmJ1dHRvbi0tcHNldWRvOmhvdmVyLCAuYnV0dG9uLS1wc2V1ZG86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhpZ2hsaWdodC0zKTtcbn1cbi5idXR0b24tLXBzZXVkbzphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhpZ2hsaWdodC0yKTtcbn1cbi5idXR0b24tLXBzZXVkb1tkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/button/button.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonComponent = class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ButtonComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ButtonComponent.prototype, "pseudo", void 0);
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button',
        template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/button/button.component.html"),
        styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/shared/button/button.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ButtonComponent);



/***/ }),

/***/ "./src/app/shared/checkbox/checkbox.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/checkbox/checkbox.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n  min-width: 256px;\n}\n\n.checkbox {\n  display: block;\n  margin-right: 32px;\n  margin-bottom: 24px;\n  color: var(--color-font-main);\n  max-width: 100%;\n  max-width: 50%;\n}\n\n.checkbox::before {\n  content: \"\";\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  vertical-align: middle;\n  background-image: url('https//:martyn.guru/angular-project/normal1.svg');\n}\n\n.checkbox--checked::before {\n  background-image: url('https//:martyn.guru/angular-project/normal.svg');\n}\n\n.checkbox--error .checkbox_label {\n  color: var(--color-error);\n}\n\n.checkbox--error .checkbox_field {\n  border-color: var(--color-error);\n}\n\n.checkbox--disabled .checkbox_label {\n  color: var(--color-hinted);\n}\n\n.checkbox--disabled .checkbox_field {\n  border-color: var(--color-hinted);\n}\n\n.checkbox_label {\n  font-size: var(--font-size-small);\n  margin-left: 4px;\n}\n\n.checkbox_field {\n  height: 16px;\n  width: 16px;\n  border: 1px solid var(--color-hinted);\n  border-radius: 2px;\n  padding: 0 10px;\n  display: none;\n}\n\n.checkbox_field[disabled] {\n  background-color: var(--color-white);\n}\n\n.checkbox_field:placeholder-shown {\n  color: var(--color-hinted);\n}\n\n.checkbox_field:focus {\n  border-color: var(--color-highlight);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3NoYXJlZC9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hcnR5bnMwbi9wcm9qZWN0cy5kZXYvcGVyc29uYWwvYW5ndWxhci1wcm9qZWN0L3NyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VFTEUsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUZHQSxjQUFBO0FDR0Y7O0FEREU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUNHSjs7QURFRTtFQUNFLHVFQUFBO0FDQ0o7O0FES0U7RUFDRSx5QkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0NBQUE7QUNISjs7QURTRTtFQUNFLDBCQUFBO0FDTko7O0FEU0U7RUFDRSxpQ0FBQTtBQ1BKOztBRFdBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNSRjs7QURVRTtFQUNFLG9DQUFBO0FDUko7O0FEV0U7RUFDRSwwQkFBQTtBQ1RKOztBRFlFO0VBQ0Usb0NBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9taXhpbnMnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAyNTZweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgQGluY2x1ZGUgZm9ybS1lbGVtZW50O1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25zL3VuY2hlY2tlZC9ub3JtYWwxLnN2ZylcbiAgfVxufVxuXG4uY2hlY2tib3gtLWNoZWNrZWQge1xuICAmOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbnMvY2hlY2tlZC9ub3JtYWwuc3ZnKVxuICB9XG59XG5cbi5jaGVja2JveC0tZXJyb3Ige1xuXG4gIC5jaGVja2JveF9sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcbiAgfVxuXG4gIC5jaGVja2JveF9maWVsZCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XG4gIH1cbn1cblxuLmNoZWNrYm94LS1kaXNhYmxlZCB7XG5cbiAgLmNoZWNrYm94X2xhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbiAgfVxuXG4gIC5jaGVja2JveF9maWVsZCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oaW50ZWQpO1xuICB9XG59XG5cbi5jaGVja2JveF9sYWJlbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmNoZWNrYm94X2ZpZWxkIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItaGludGVkKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgfVxuXG4gICY6cGxhY2Vob2xkZXItc2hvd24ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oaW50ZWQpO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAyNTZweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4uY2hlY2tib3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy91bmNoZWNrZWQvbm9ybWFsMS5zdmcpO1xufVxuXG4uY2hlY2tib3gtLWNoZWNrZWQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbnMvY2hlY2tlZC9ub3JtYWwuc3ZnKTtcbn1cblxuLmNoZWNrYm94LS1lcnJvciAuY2hlY2tib3hfbGFiZWwge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xufVxuLmNoZWNrYm94LS1lcnJvciAuY2hlY2tib3hfZmllbGQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcbn1cblxuLmNoZWNrYm94LS1kaXNhYmxlZCAuY2hlY2tib3hfbGFiZWwge1xuICBjb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbn1cbi5jaGVja2JveC0tZGlzYWJsZWQgLmNoZWNrYm94X2ZpZWxkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oaW50ZWQpO1xufVxuXG4uY2hlY2tib3hfbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5jaGVja2JveF9maWVsZCB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNoZWNrYm94X2ZpZWxkW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi5jaGVja2JveF9maWVsZDpwbGFjZWhvbGRlci1zaG93biB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1oaW50ZWQpO1xufVxuLmNoZWNrYm94X2ZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xufSIsIlxuQG1peGluIGZvcm0tZWxlbWVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtaXhpbiBmb3JtLWVsZW1lbnQtZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItaGludGVkKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWhpZ2hsaWdodCk7XG4gIH1cbn1cblxuQG1peGluIGZvcm0tZWxlbWVudC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtYWxsKTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/checkbox/checkbox.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/checkbox/checkbox.component.ts ***!
  \*******************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckboxComponent = class CheckboxComponent {
    constructor() {
        this.error = false;
        this.disabled = false;
        this.checked = false;
        this.isChecked = this.checked;
    }
    ngOnInit() {
    }
    handleClick() {
        console.log(this.isChecked);
        this.isChecked = !this.isChecked;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CheckboxComponent.prototype, "checked", void 0);
CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkbox',
        template: __webpack_require__(/*! raw-loader!./checkbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/checkbox/checkbox.component.html"),
        styles: [__webpack_require__(/*! ./checkbox.component.scss */ "./src/app/shared/checkbox/checkbox.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CheckboxComponent);



/***/ }),

/***/ "./src/app/shared/dropdown/dropdown.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/dropdown/dropdown.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n  min-width: 256px;\n}\n\n.dropdown {\n  display: block;\n  margin-right: 32px;\n  margin-bottom: 24px;\n  color: var(--color-font-main);\n  max-width: 100%;\n  position: relative;\n}\n\n.dropdown_label {\n  font-size: var(--font-size-small);\n  line-height: 24px;\n}\n\n.dropdown_field {\n  display: block;\n  height: 32px;\n  width: 100%;\n  border: 1px solid var(--color-hinted);\n  border-radius: 2px;\n  color: var(--color-font-main);\n  background-color: var(--color-white);\n  padding: 0 10px;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.dropdown_field[disabled] {\n  color: var(--color-hinted);\n  background-color: var(--color-white);\n}\n\n.dropdown_field:focus {\n  border-color: var(--color-highlight);\n}\n\n.dropdown_field::after {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #2f2f2f;\n  font-size: 0;\n  line-height: 0;\n}\n\n.dropdown_field::-ms-expand {\n  display: none;\n}\n\n.dropdown_placeholder {\n  color: var(--color-hinted);\n}\n\n.dropdown ::after {\n  display: block;\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  background-image: url('https//:martyn.guru/angular-project/down-semibold_icon.svg');\n  position: absolute;\n  right: 8px;\n  top: 32px;\n}\n\n.dropdown--error .dropdown_label {\n  color: var(--color-error);\n}\n\n.dropdown--error .dropdown_field {\n  border-color: var(--color-error);\n}\n\n.dropdown--disabled {\n  color: var(--color-hinted);\n}\n\n.dropdown--disabled .dropdown_label {\n  color: currentColor;\n}\n\n.dropdown--disabled .dropdown_field {\n  border-color: var(--color-hinted);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3NoYXJlZC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hcnR5bnMwbi9wcm9qZWN0cy5kZXYvcGVyc29uYWwvYW5ndWxhci1wcm9qZWN0L3NyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VFTEUsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUZHQSxrQkFBQTtBQ0dGOztBRERFO0VFa0JBLGlDQUFBO0VBQ0EsaUJBQUE7QURkRjs7QURERTtFRUxBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VGQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ1NKOztBQ1hFO0VBQ0UsMEJBQUE7RUFDQSxvQ0FBQTtBRGFKOztBQ1ZFO0VBQ0Usb0NBQUE7QURZSjs7QURkSTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNnQk47O0FEYkk7RUFDSSxhQUFBO0FDZVI7O0FEWEU7RUFDRSwwQkFBQTtBQ2FKOztBRFZFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1GQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ1lKOztBRE5FO0VBQ0UseUJBQUE7QUNTSjs7QURORTtFQUNFLGdDQUFBO0FDUUo7O0FESkE7RUFDRSwwQkFBQTtBQ09GOztBRExFO0VBQ0UsbUJBQUE7QUNPSjs7QURKRTtFQUNFLGlDQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGluc1wiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAyNTZweDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgQGluY2x1ZGUgZm9ybS1lbGVtZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJl9sYWJlbCB7XG4gICAgQGluY2x1ZGUgZm9ybS1lbGVtZW50LWxhYmVsO1xuICB9XG5cbiAgJl9maWVsZCB7XG4gICAgQGluY2x1ZGUgZm9ybS1lbGVtZW50LWZpZWxkO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMmYyZjJmO1xuICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJjo6LW1zLWV4cGFuZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJl9wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIH1cblxuICA6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9kb3duLXNlbWlib2xkX2ljb24uc3ZnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDhweDtcbiAgICB0b3A6IDMycHg7XG4gIH1cbn1cblxuLmRyb3Bkb3duLS1lcnJvciB7XG5cbiAgLmRyb3Bkb3duX2xhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xuICB9XG5cbiAgLmRyb3Bkb3duX2ZpZWxkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcbiAgfVxufVxuXG4uZHJvcGRvd24tLWRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG5cbiAgLmRyb3Bkb3duX2xhYmVsIHtcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLmRyb3Bkb3duX2ZpZWxkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDI1NnB4O1xufVxuXG4uZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZHJvcGRvd25fbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuLmRyb3Bkb3duX2ZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5kcm9wZG93bl9maWVsZFtkaXNhYmxlZF0ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuLmRyb3Bkb3duX2ZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xufVxuLmRyb3Bkb3duX2ZpZWxkOjphZnRlciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgIzJmMmYyZjtcbiAgZm9udC1zaXplOiAwO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5kcm9wZG93bl9maWVsZDo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJvcGRvd25fcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbn1cbi5kcm9wZG93biA6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbnMvZG93bi1zZW1pYm9sZF9pY29uLnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgdG9wOiAzMnB4O1xufVxuXG4uZHJvcGRvd24tLWVycm9yIC5kcm9wZG93bl9sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XG59XG4uZHJvcGRvd24tLWVycm9yIC5kcm9wZG93bl9maWVsZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xufVxuXG4uZHJvcGRvd24tLWRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG59XG4uZHJvcGRvd24tLWRpc2FibGVkIC5kcm9wZG93bl9sYWJlbCB7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG4uZHJvcGRvd24tLWRpc2FibGVkIC5kcm9wZG93bl9maWVsZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbn0iLCJcbkBtaXhpbiBmb3JtLWVsZW1lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWl4aW4gZm9ybS1lbGVtZW50LWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xuICB9XG59XG5cbkBtaXhpbiBmb3JtLWVsZW1lbnQtbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/dropdown/dropdown.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/dropdown/dropdown.component.ts ***!
  \*******************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownComponent = class DropdownComponent {
    constructor() {
        this.placeholder = '';
        this.error = false;
        this.disabled = false;
        this.options = {};
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownComponent.prototype, "options", void 0);
DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dropdown',
        template: __webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/dropdown/dropdown.component.html"),
        styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/shared/dropdown/dropdown.component.scss")]
    })
], DropdownComponent);



/***/ }),

/***/ "./src/app/shared/input/input.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/input/input.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n  min-width: 256px;\n}\n\n.input {\n  display: block;\n  margin-right: 32px;\n  margin-bottom: 24px;\n  color: var(--color-font-main);\n  max-width: 100%;\n}\n\n.input_label {\n  font-size: var(--font-size-small);\n  line-height: 24px;\n}\n\n.input_field {\n  display: block;\n  height: 32px;\n  width: 100%;\n  border: 1px solid var(--color-hinted);\n  border-radius: 2px;\n  color: var(--color-font-main);\n  background-color: var(--color-white);\n  padding: 0 10px;\n}\n\n.input_field[disabled] {\n  color: var(--color-hinted);\n  background-color: var(--color-white);\n}\n\n.input_field:focus {\n  border-color: var(--color-highlight);\n}\n\n.input_field:placeholder-shown {\n  color: var(--color-hinted);\n}\n\n.input--error .input_label {\n  color: var(--color-error);\n}\n\n.input--error .input_field {\n  border-color: var(--color-error);\n}\n\n.input--disabled .input_label {\n  color: var(--color-hinted);\n}\n\n.input--disabled .input_field {\n  border-color: var(--color-hinted);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3NoYXJlZC9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hcnR5bnMwbi9wcm9qZWN0cy5kZXYvcGVyc29uYWwvYW5ndWxhci1wcm9qZWN0L3NyYy9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VFTEUsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QURLRjs7QURERTtFRW1CQSxpQ0FBQTtFQUNBLGlCQUFBO0FEZkY7O0FEREU7RUVKQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFRkFFLGVBQUE7QUNTSjs7QUNQRTtFQUNFLDBCQUFBO0VBQ0Esb0NBQUE7QURTSjs7QUNORTtFQUNFLG9DQUFBO0FEUUo7O0FEZEk7RUFDRSwwQkFBQTtBQ2dCTjs7QURURTtFQUNFLHlCQUFBO0FDWUo7O0FEVEU7RUFDRSxnQ0FBQTtBQ1dKOztBRExFO0VBQ0UsMEJBQUE7QUNRSjs7QURMRTtFQUNFLGlDQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbWl4aW5zJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMjU2cHg7XG59XG5cbi5pbnB1dCB7XG4gIEBpbmNsdWRlIGZvcm0tZWxlbWVudDtcblxuICAmX2xhYmVsIHtcbiAgICBAaW5jbHVkZSBmb3JtLWVsZW1lbnQtbGFiZWw7XG4gIH1cblxuICAmX2ZpZWxkIHtcbiAgICBAaW5jbHVkZSBmb3JtLWVsZW1lbnQtZmllbGQ7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuXG4gICAgJjpwbGFjZWhvbGRlci1zaG93biB7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbiAgICB9XG4gIH1cbn1cblxuLmlucHV0LS1lcnJvciB7XG5cbiAgLmlucHV0X2xhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xuICB9XG5cbiAgLmlucHV0X2ZpZWxkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcbiAgfVxufVxuXG4uaW5wdXQtLWRpc2FibGVkIHtcblxuICAuaW5wdXRfbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1oaW50ZWQpO1xuICB9XG5cbiAgLmlucHV0X2ZpZWxkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDI1NnB4O1xufVxuXG4uaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmlucHV0X2xhYmVsIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5pbnB1dF9maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1oaW50ZWQpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LW1haW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5pbnB1dF9maWVsZFtkaXNhYmxlZF0ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuLmlucHV0X2ZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xufVxuLmlucHV0X2ZpZWxkOnBsYWNlaG9sZGVyLXNob3duIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG59XG5cbi5pbnB1dC0tZXJyb3IgLmlucHV0X2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcbn1cbi5pbnB1dC0tZXJyb3IgLmlucHV0X2ZpZWxkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XG59XG5cbi5pbnB1dC0tZGlzYWJsZWQgLmlucHV0X2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG59XG4uaW5wdXQtLWRpc2FibGVkIC5pbnB1dF9maWVsZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItaGludGVkKTtcbn0iLCJcbkBtaXhpbiBmb3JtLWVsZW1lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItZm9udC1tYWluKTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWl4aW4gZm9ybS1lbGVtZW50LWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtbWFpbik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcblxuICAmW2Rpc2FibGVkXSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhpbnRlZCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xuICB9XG59XG5cbkBtaXhpbiBmb3JtLWVsZW1lbnQtbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/input/input.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputComponent = class InputComponent {
    constructor() {
        this.placeholder = '';
        this.error = false;
        this.disabled = false;
        this.type = 'text';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "error", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "disabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "type", void 0);
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/input/input.component.html"),
        styles: [__webpack_require__(/*! ./input.component.scss */ "./src/app/shared/input/input.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/input.component */ "./src/app/shared/input/input.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/button.component */ "./src/app/shared/button/button.component.ts");
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown/dropdown.component */ "./src/app/shared/dropdown/dropdown.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/shared/checkbox/checkbox.component.ts");







const components = [_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_5__["DropdownComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...components, _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [...components]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/user-badge/user-badge.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/user-badge/user-badge.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-left: auto;\n}\n\n.user-badge {\n  display: flex;\n  align-items: center;\n}\n\n.user-badge_avatar {\n  border-radius: 50%;\n  position: relative;\n  overflow: hidden;\n}\n\n.user-badge_avatar img {\n  width: 100%;\n}\n\n.user-badge_avatar--small {\n  width: 32px;\n  height: 32px;\n}\n\n.user-badge_avatar--medium {\n  width: 80px;\n  height: 80px;\n}\n\n.user-badge_info--medium {\n  margin-left: 24px;\n}\n\n.user-badge_info--small {\n  margin-left: 8px;\n}\n\n.user-badge_info--small .user-badge_name {\n  font-size: var(--font-size-default);\n  line-height: 1;\n  font-weight: normal;\n}\n\n.user-badge_info--small span {\n  font-size: var(--font-size-small);\n  color: rgba(255, 255, 255, 0.64);\n}\n\n.user-badge_name {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3NoYXJlZC91c2VyLWJhZGdlL3VzZXItYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC91c2VyLWJhZGdlL3VzZXItYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDSTtFQUNFLFdBQUE7QUNDTjs7QURpQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2ZKOztBRGtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDaEJKOztBRHNCRTtFQUNFLGlCQUFBO0FDcEJKOztBRHVCRTtFQUNFLGdCQUFBO0FDckJKOztBRHVCSTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDckJOOztBRHdCSTtFQUNFLGlDQUFBO0VBQ0EsZ0NBQUE7QUN0Qk47O0FEMEJFO0VBQ0UsU0FBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWJhZGdlL3VzZXItYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udXNlci1iYWRnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJl9hdmF0YXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAvLyAmOmhvdmVyOjphZnRlcntcbiAgICAvLyAgIGNvbnRlbnQ6ICd1cGxvYWQnO1xuICAgIC8vICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XG4gICAgLy8gICB3aWR0aDogMTAwJTtcbiAgICAvLyAgIGhlaWdodDogMTAwJTtcbiAgICAvLyAgIHRvcDogMDtcbiAgICAvLyAgIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LWludmVydGVkKTtcbiAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gfVxuICB9XG5cbiAgJl9hdmF0YXItLXNtYWxsIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gIH1cblxuICAmX2F2YXRhci0tbWVkaXVtIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICAmX2luZm8ge1xuICB9XG5cbiAgJl9pbmZvLS1tZWRpdW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICB9XG5cbiAgJl9pbmZvLS1zbWFsbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcblxuICAgIC51c2VyLWJhZGdlX25hbWUge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVmYXVsdCk7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbWFsbCk7XG4gICAgICBjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC42NCk7XG4gICAgfVxuICB9XG5cbiAgJl9uYW1lIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cbiIsIjpob3N0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi51c2VyLWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyLWJhZGdlX2F2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVzZXItYmFkZ2VfYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVzZXItYmFkZ2VfYXZhdGFyLS1zbWFsbCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG4udXNlci1iYWRnZV9hdmF0YXItLW1lZGl1bSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4udXNlci1iYWRnZV9pbmZvLS1tZWRpdW0ge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cbi51c2VyLWJhZGdlX2luZm8tLXNtYWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi51c2VyLWJhZGdlX2luZm8tLXNtYWxsIC51c2VyLWJhZGdlX25hbWUge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udXNlci1iYWRnZV9pbmZvLS1zbWFsbCBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc21hbGwpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0KTtcbn1cbi51c2VyLWJhZGdlX25hbWUge1xuICBtYXJnaW46IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/user-badge/user-badge.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/user-badge/user-badge.component.ts ***!
  \***********************************************************/
/*! exports provided: UserBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBadgeComponent", function() { return UserBadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserBadgeComponent = class UserBadgeComponent {
    constructor() {
        this.size = 'small';
        this.firstName = 'Константин';
        this.lastName = 'Константинопольский';
        this.position = '—';
        this.fullName = `${this.firstName}${this.size !== 'small' ? ' ' + this.lastName : ''}`;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserBadgeComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserBadgeComponent.prototype, "firstName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserBadgeComponent.prototype, "lastName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], UserBadgeComponent.prototype, "position", void 0);
UserBadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-badge',
        template: __webpack_require__(/*! raw-loader!./user-badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/user-badge/user-badge.component.html"),
        styles: [__webpack_require__(/*! ./user-badge.component.scss */ "./src/app/shared/user-badge/user-badge.component.scss")]
    })
], UserBadgeComponent);



/***/ }),

/***/ "./src/app/ui-kit/ui-kit.component.scss":
/*!**********************************************!*\
  !*** ./src/app/ui-kit/ui-kit.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ0eW5zMG4vcHJvamVjdHMuZGV2L3BlcnNvbmFsL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3VpLWtpdC91aS1raXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWtpdC91aS1raXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91aS1raXQvdWkta2l0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui-kit/ui-kit.component.ts":
/*!********************************************!*\
  !*** ./src/app/ui-kit/ui-kit.component.ts ***!
  \********************************************/
/*! exports provided: UiKitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitComponent", function() { return UiKitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UiKitComponent = class UiKitComponent {
    constructor() { }
    ngOnInit() {
    }
};
UiKitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ui-kit',
        template: __webpack_require__(/*! raw-loader!./ui-kit.component.html */ "./node_modules/raw-loader/index.js!./src/app/ui-kit/ui-kit.component.html"),
        styles: [__webpack_require__(/*! ./ui-kit.component.scss */ "./src/app/ui-kit/ui-kit.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UiKitComponent);



/***/ }),

/***/ "./src/app/ui-kit/ui-kit.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ui-kit/ui-kit.module.ts ***!
  \*****************************************/
/*! exports provided: UiKitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiKitModule", function() { return UiKitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ui_kit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-kit.component */ "./src/app/ui-kit/ui-kit.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");




// import { ButtonComponent } from '../shared/button/button.component';
// import { InputComponent } from '../shared/input/input.component';
// import { DropdownComponent } from '../shared/dropdown/dropdown.component';
// import { CheckboxComponent } from '../shared/checkbox/checkbox.component';

let UiKitModule = class UiKitModule {
};
UiKitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ui_kit_component__WEBPACK_IMPORTED_MODULE_3__["UiKitComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
    })
], UiKitModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/martyns0n/projects.dev/personal/angular-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map