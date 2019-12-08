(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"wrapper\">\n    <div class=\"slider\">\n        <app-form-slider class=\"slider-app\"></app-form-slider>\n    </div>\n    <div class=\"form\">\n        <router-outlet (activate)=\"clickedStateFunction($event)\"></router-outlet>\n    </div>\n    <div class=\"modal modal__backdrop\" \n    *ngIf=\"clickedState\"\n    #modal \n    (click)=\"closedModal($event)\"\n    @showState>\n      <div class=\"modal__content\">\n        <div class=\"modal__content--header\">\n          <span class=\"modal__content--header-close\" #closeSharp>&times;</span>\n          <p>WARNING!</p>\n        </div>\n        <div class=\"modal__content--text\">\n          <p>If you click 'continue' the all information will be deleted. <br>Close this window if you don't want this to happen.</p>\n        </div>\n        <div class=\"modal__content--button\">\n          <button class=\"modal__content--button-btn\" #continueButton>Continue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-slider/form-slider.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-slider/form-slider.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slider__container\">\n    <div class=\"slider__container--wavy\">\n        <div class=\"slider__container--wavy-element slider__container--wavy-element-1 convex\"></div>\n        <div class=\"slider__container--wavy-element slider__container--wavy-element-2\">\n            <div class=\"concave\"></div>\n        </div>\n        <div class=\"slider__container--wavy-element slider__container--wavy-element-3 convex\"></div>\n        <div class=\"slider__container--wavy-element slider__container--wavy-element-4\">\n            <div class=\"concave\"></div>\n        </div>\n    </div>\n    <div class=\"slider__container--nav\">\n        <div class=\"slider__container--nav-arrow slider__container--nav-UpRightArrow\"\n        (click)=\"moveUp()\">\n            <i class=\"far fa-arrow-alt-circle-up fa-7x\"></i>\n        </div>\n        <div class=\"slider__container--nav-dots\">\n            <div class=\"slider__container--nav-dots-dot-highlighted\" \n            [@componentChanged] = \"componentActiveName\"></div>\n            <div class=\"slider__container--nav-dots-dot slider__container--nav-dots-dot1\"></div>\n            <div class=\"slider__container--nav-dots-dot slider__container--nav-dots-dot2\"></div>\n            <div class=\"slider__container--nav-dots-dot slider__container--nav-dots-dot3\"></div>\n            <div class=\"slider__container--nav-dots-dot slider__container--nav-dots-dot4\"></div>\n        </div>\n        <div class=\"slider__container--nav-arrow slider__container--nav-DownLeftArrow\"\n        (click)=\"moveDown()\">\n                <i class=\"far fa-arrow-alt-circle-down fa-7x\" [ngStyle]=\"{'color': formValidity ? 'goldenrod' : 'white'}\"\n                style=\"cursor: pointer; color: goldenrod !important\"></i>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form-logined-user/form-logined-user.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form-logined-user/form-logined-user.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <p>\n        Hello to you {{activeUserFName}} {{activeUserLName}}!\n    </p>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Basic Details</h2>\n<form class=\"form\" [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form__group form__group--name\">\n    <div class=\"form__control form__first-name\">\n      <input\n        type=\"text\"\n        name=\"Fname\"\n        required\n        formControlName=\"firstName\"\n      />\n      <label>First Name</label>\n      <span\n        *ngIf=\"\n          (!signUpForm.get('firstName').valid &&\n            signUpForm.get('firstName').touched) ||\n          (!formValid &&\n            !signUpForm.get('firstName').valid &&\n            statusArr[0] === 'INVALID')\n        \"\n        class=\"error-block\"\n        >{{ invalidMessages[0] }}</span\n      >\n    </div>\n    <div class=\"form__control form__last-name\">\n      <input type=\"text\" name=\"Lname\" required formControlName=\"lastName\" />\n      <label>Last Name</label>\n      <span\n        *ngIf=\"\n          (!signUpForm.get('lastName').valid &&\n            signUpForm.get('lastName').touched) ||\n          (!formValid &&\n            !signUpForm.get('lastName').valid &&\n            statusArr[4] === 'INVALID')\n        \"\n        class=\"error-block\"\n        >{{ invalidMessages[4] }}</span\n      >\n    </div>\n  </div>\n  <div class=\"form__group form__group--id\">\n    <div class=\"form__control form__email\">\n      <input\n        type=\"text\"\n        name=\"email\"\n        required\n        formControlName=\"email\"\n        class=\"email\"\n      />\n      <label>Email ID</label>\n      <i\n        class=\"fa fa-check fa-lg input__valid\"\n        *ngIf=\"signUpForm.get('email').valid && signUpForm.get('email').touched\"\n      ></i>\n      <i\n        class=\"fa fa-times fa-lg input__invalid\"\n        *ngIf=\"\n          !signUpForm.get('email').valid && signUpForm.get('email').touched\n        \"\n      ></i>\n      <span\n        *ngIf=\"\n          (!signUpForm.get('email').valid && signUpForm.get('email').touched) ||\n          (!formValid &&\n            !signUpForm.get('email').valid &&\n            statusArr[1] === 'INVALID')\n        \"\n        class=\"error-block\"\n        >{{ invalidMessages[1] }}</span\n      >\n    </div>\n    <div class=\"form__control form__ID\">\n      <input\n        type=\"text\"\n        name=\"ID\"\n        required\n        formControlName=\"id\"\n        class=\"ID\"\n        (blur)=\"getColor()\"\n      />\n      <label>Your User ID</label>\n      <i class=\"fa fa-lock fa-lg\" [ngStyle]=\"{ color: IDColor }\"></i>\n      <span\n        *ngIf=\"\n          (!signUpForm.get('id').valid && signUpForm.get('id').touched) ||\n          (!formValid &&\n            !signUpForm.get('id').valid &&\n            statusArr[5] === 'INVALID')\n        \"\n        class=\"error-block\"\n        >{{ invalidMessages[5] }}</span\n      >\n    </div>\n  </div>\n  <div class=\"form__group form__group--location form-group\">\n    <div class=\"form__control form__country\">\n      <span>Country</span>\n      <select\n        class=\"form-control\"\n        name=\"country\"\n        formControlName=\"country\"\n        (change)=\"onChange()\"\n      >\n        <option [value]=\"null\" disabled>Choose your country</option>\n        <option *ngFor=\"let country of countries\" [value]=\"country.value\">{{\n          country.value\n        }}</option>\n      </select>\n      <span\n        *ngIf=\"\n          !formValid &&\n          !signUpForm.get('country').valid &&\n          statusArr[2] === 'INVALID'\n        \"\n        class=\"error-block\"\n        style=\"margin-top: 5px\"\n        >{{ invalidMessages[2] }}</span\n      >\n    </div>\n    <div class=\"form__control form__location\">\n      <div\n        class=\"form__location--state\"\n        [ngSwitch]=\"this.signUpForm.get('country').value\"\n      >\n        <span>State</span>\n        <select name=\"state\" formControlName=\"state\" *ngSwitchCase=\"'USA'\">\n          <option [value]=\"null\" disabled>Choose state</option>\n          <option *ngFor=\"let state of statesUSA\" [value]=\"state.value\">{{\n            state.value\n          }}</option>\n        </select>\n        <select name=\"state\" formControlName=\"state\" *ngSwitchCase=\"'India'\">\n          <option [value]=\"null\" disabled>Choose state</option>\n          <option *ngFor=\"let state of statesIndia\" [value]=\"state.value\">{{\n            state.value\n          }}</option>\n        </select>\n        <select name=\"state\" formControlName=\"state\" *ngSwitchCase=\"undefined\">\n          <option [value]=\"null\" disabled>Choose state</option>\n        </select>\n        <span\n          *ngIf=\"\n            !formValid &&\n            !signUpForm.get('state').valid &&\n            statusArr[6] === 'INVALID'\n          \"\n          class=\"error-block\"\n          style=\"margin-top: 5px\"\n          >{{ invalidMessages[6] }}</span\n        >\n      </div>\n      <div\n        class=\"form__location--city\"\n        [ngSwitch]=\"this.signUpForm.get('state').value\"\n      >\n        <span>City</span>\n        <select name=\"city\" formControlName=\"city\" *ngSwitchCase=\"'New York'\">\n          <option [value]=\"null\" disabled>Choose city</option>\n          <option *ngFor=\"let city of citiesNY\" [value]=\"city.value\">{{\n            city.value\n          }}</option>\n        </select>\n        <select name=\"city\" formControlName=\"city\" *ngSwitchCase=\"'California'\">\n          <option [value]=\"null\" disabled>Choose city</option>\n          <option *ngFor=\"let city of citiesCali\" [value]=\"city.value\">{{\n            city.value\n          }}</option>\n        </select>\n        <select\n          name=\"city\"\n          formControlName=\"city\"\n          *ngSwitchCase=\"'Andhra Pradesh'\"\n        >\n          <option [value]=\"null\" disabled>Choose city</option>\n          <option *ngFor=\"let city of citiesAndhra\" [value]=\"city.value\">{{\n            city.value\n          }}</option>\n        </select>\n        <select name=\"city\" formControlName=\"city\" *ngSwitchCase=\"'Goa'\">\n          <option [value]=\"null\" disabled>Choose city</option>\n          <option *ngFor=\"let city of citiesGoa\" [value]=\"city.value\">{{\n            city.value\n          }}</option>\n        </select>\n        <select name=\"city\" formControlName=\"city\" *ngSwitchCase=\"undefined\">\n          <option [value]=\"null\" disabled>Choose city</option>\n        </select>\n        <span\n          *ngIf=\"\n            !formValid &&\n            !signUpForm.get('city').valid &&\n            statusArr[7] === 'INVALID'\n          \"\n          class=\"error-block\"\n          style=\"margin-top: 5px\"\n          >{{ invalidMessages[7] }}</span\n        >\n      </div>\n    </div>\n  </div>\n  <div class=\"form__group form__control--data\" style=\"margin-top: 7px\">\n    <div class=\"form__control form__phone\">\n      <input\n        type=\"text\"\n        name=\"phone\"\n        required\n        formControlName=\"phone\"\n        #phoneInput\n        [imask]=\"{ mask: '+{38}(000)000-00-00' }\"\n        [unmask]=\"true\"\n      />\n      <label>Phone Number</label>\n      <span\n        *ngIf=\"\n          (!signUpForm.get('phone').valid && signUpForm.get('phone').touched) ||\n          (!formValid &&\n            !signUpForm.get('phone').valid &&\n            statusArr[3] === 'INVALID')\n        \"\n        class=\"error-block\"\n        >{{ invalidMessages[3] }}</span\n      >\n    </div>\n    <div class=\"form__control form__code\">\n      <input\n        type=\"text\"\n        name=\"code\"\n        class=\"ref-code\"\n        formControlName=\"code\"\n        style=\"text-transform: uppercase;\"\n        [ngClass]=\"{ touched: this.signUpForm.value.code }\"\n      />\n      <label>Reference Code</label>\n      <span\n        *ngIf=\"\n          (!signUpForm.get('code').valid && signUpForm.get('code').touched) ||\n          (!formValid &&\n            !signUpForm.get('code').valid &&\n            statusArr[8] === 'INVALID')\n        \"\n        class=\"error-block\"\n        >{{ invalidMessages[8] }}</span\n      >\n    </div>\n  </div>\n  <div class=\"form__group form__group--buttons\">\n    <a type=\"button\" (click)=\"onReset()\" class=\"form__group--buttons-reset\"\n      >Reset All</a\n    >\n    <button type=\"submit\" class=\"form__group--buttons-submit\">Continue</button>\n  </div>\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/animations.ts": 
        /*!*******************************!*\
          !*** ./src/app/animations.ts ***!
          \*******************************/
        /*! exports provided: showStateTrigger */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showStateTrigger", function () { return showStateTrigger; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var showStateTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('showState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0
                    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in')]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 0
                })))
            ]);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrapper {\n  margin-right: auto;\n  margin-left: auto;\n  display: grid;\n  height: 100vh;\n  width: 95vw;\n  grid-template-rows: 20vh 2fr;\n}\n\n@media (min-width: 700px) {\n  .wrapper {\n    display: grid;\n    grid-template-columns: 160px 2fr;\n    grid-template-rows: 1fr 1fr;\n    width: 1000px;\n    height: 95vh;\n  }\n}\n\n.wrapper .slider {\n  grid-column: 1/3;\n  grid-row: 1/2;\n  height: 20vh;\n  display: block;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  position: relative;\n  z-index: 1;\n  background-color: #48a5ea;\n}\n\n@media screen and (min-width: 700px) {\n  .wrapper .slider {\n    grid-column: 1/2;\n    grid-row: 1/3;\n    height: 100%;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    display: block;\n    position: relative;\n    z-index: 1;\n  }\n}\n\n.wrapper .slider-app {\n  background-color: #48a5ea;\n  width: 100%;\n  height: 100%;\n  display: block;\n  border-bottom-left-radius: 20px;\n  border-top-left-radius: 20px;\n  position: relative;\n  z-index: 2;\n}\n\n.wrapper .form {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  background-color: #fff;\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n}\n\n@media screen and (min-width: 700px) {\n  .wrapper .form {\n    grid-column: 2/3;\n    grid-row: 1/3;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n}\n\n.wrapper .modal {\n  display: block;\n  opacity: 1;\n  position: fixed;\n  z-index: 99;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.wrapper .modal__content {\n  background-color: #fff;\n  margin: 20% auto;\n  width: 50vw;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n}\n\n.wrapper .modal__content--header {\n  font-size: 1.6rem;\n  position: relative;\n  background-color: #48a5ea;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.wrapper .modal__content--header p {\n  text-align: center;\n  color: #fff;\n}\n\n.wrapper .modal__content--header span {\n  position: absolute;\n  top: 0;\n  right: 2%;\n  color: #fff;\n  transition: 0.4s all ease;\n}\n\n.wrapper .modal__content--header span:hover {\n  color: #000000;\n  cursor: pointer;\n}\n\n.wrapper .modal__content--text {\n  width: 100%;\n  padding: 1rem;\n}\n\n.wrapper .modal__content--text p {\n  color: #000;\n  font-size: 1.4rem;\n}\n\n.wrapper .modal__content--button {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.wrapper .modal__content--button button {\n  margin-bottom: 0.5rem;\n  background-color: #48a5ea;\n  height: 3rem;\n  width: 7rem;\n  color: #fff;\n  font-size: 1rem;\n  text-align: center;\n  line-height: 1rem;\n  border-radius: 5rem;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  padding: 0;\n  border: none;\n  outline: none;\n}\n\n.wrapper .modal__content--button button:hover {\n  transform: scale(1.02);\n  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);\n}\n\n.wrapper .modal__content--button button:active {\n  transform: scale(0.95);\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxGb3JtX3Rhc2tcXEF3ZXNvbWVGb3JtVGFzay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ0FKOztBRElJO0VBVko7SUFXUSxhQUFBO0lBQ0EsZ0NBQUE7SUFDQSwyQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VDRE47QUFDRjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQVlBLHlCQUFBO0FDWlI7O0FEQ1E7RUFUSjtJQVVRLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQ0VWO0FBQ0Y7O0FERVE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNBWjs7QURPSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNMUjs7QURNUTtFQVBKO0lBUVEsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxnQ0FBQTtFQ0hWO0FBQ0Y7O0FETUk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQ0pSOztBRE1RO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyRUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSlo7O0FES1k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDSGhCOztBRElnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0ZwQjs7QURLZ0I7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDSHBCOztBREtvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDSHhCOztBRFFZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNOaEI7O0FEUWdCO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDTnBCOztBRFVZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDUmhCOztBRFVnQjtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUnBCOztBRFVvQjtFQUNJLHNCQUFBO0VBQ0EsOENBQUE7QUNSeEI7O0FEV29CO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQ1R4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogOTV2dztcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAyZnI7XHJcbiAgICBcclxuXHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2MHB4IDJmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDk1dmg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlciB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcclxuICAgICAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xyXG5cclxuICAgICAgICAmLWFwcCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OGE1ZWE7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KXtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcblxyXG4gICAgICAgICZfX2NvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwJSBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNTB2dztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDdweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAmLS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cyBhbGwgZWFzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLS10ZXh0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi0tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OGE1ZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiA5NXZ3O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwdmggMmZyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYwcHggMmZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGhlaWdodDogOTV2aDtcbiAgfVxufVxuLndyYXBwZXIgLnNsaWRlciB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGhlaWdodDogMjB2aDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YTVlYTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC53cmFwcGVyIC5zbGlkZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG4ud3JhcHBlciAuc2xpZGVyLWFwcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OGE1ZWE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4ud3JhcHBlciAuZm9ybSB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIGdyaWQtcm93OiAyLzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAud3JhcHBlciAuZm9ybSB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICBncmlkLXJvdzogMS8zO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICB9XG59XG4ud3JhcHBlciAubW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLndyYXBwZXIgLm1vZGFsX19jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAyMCUgYXV0bztcbiAgd2lkdGg6IDUwdnc7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA3cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53cmFwcGVyIC5tb2RhbF9fY29udGVudC0taGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YTVlYTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4ud3JhcHBlciAubW9kYWxfX2NvbnRlbnQtLWhlYWRlciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi53cmFwcGVyIC5tb2RhbF9fY29udGVudC0taGVhZGVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDIlO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGwgZWFzZTtcbn1cbi53cmFwcGVyIC5tb2RhbF9fY29udGVudC0taGVhZGVyIHNwYW46aG92ZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndyYXBwZXIgLm1vZGFsX19jb250ZW50LS10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4ud3JhcHBlciAubW9kYWxfX2NvbnRlbnQtLXRleHQgcCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi53cmFwcGVyIC5tb2RhbF9fY29udGVudC0tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLndyYXBwZXIgLm1vZGFsX19jb250ZW50LS1idXR0b24gYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiA3cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi53cmFwcGVyIC5tb2RhbF9fY29udGVudC0tYnV0dG9uIGJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ud3JhcHBlciAubW9kYWxfX2NvbnRlbnQtLWJ1dHRvbiBidXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'AwesomeFormTask';
                    this.clickedState = false;
                }
                AppComponent.prototype.clickedStateFunction = function (componentRef) {
                    var _this = this;
                    this.formComponent = componentRef;
                    this.formComponent.formReseted.subscribe(function (data) {
                        _this.clickedState = data;
                    });
                };
                AppComponent.prototype.closedModal = function (event) {
                    if (this.modal.nativeElement === event.target
                        || this.closeSharp.nativeElement === event.target
                        || this.continueButton.nativeElement === event.target) {
                        this.clickedState = !this.clickedState;
                        if (this.continueButton.nativeElement === event.target) {
                            this.formComponent.resetForm(true);
                        }
                    }
                };
                return AppComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modal", { static: false })
            ], AppComponent.prototype, "modal", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("closeSharp", { static: false })
            ], AppComponent.prototype, "closeSharp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("continueButton", { static: false })
            ], AppComponent.prototype, "continueButton", void 0);
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["showStateTrigger"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
            /* harmony import */ var _form_form_logined_user_form_logined_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form-logined-user/form-logined-user.component */ "./src/app/form/form-logined-user/form-logined-user.component.ts");
            /* harmony import */ var _form_slider_form_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-slider/form-slider.component */ "./src/app/form-slider/form-slider.component.ts");
            /* harmony import */ var angular_imask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-imask */ "./node_modules/angular-imask/dist/fesm2015/angular-imask.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            var routes = [
                { path: '', redirectTo: '/form', pathMatch: 'full' },
                { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"] },
                { path: 'logined-user', component: _form_form_logined_user_form_logined_user_component__WEBPACK_IMPORTED_MODULE_6__["FormLoginedUserComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
                        _form_form_logined_user_form_logined_user_component__WEBPACK_IMPORTED_MODULE_6__["FormLoginedUserComponent"],
                        _form_slider_form_slider_component__WEBPACK_IMPORTED_MODULE_7__["FormSliderComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        angular_imask__WEBPACK_IMPORTED_MODULE_8__["IMaskModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes),
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/form-slider/animations.ts": 
        /*!*******************************************!*\
          !*** ./src/app/form-slider/animations.ts ***!
          \*******************************************/
        /*! exports provided: componentChangedState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentChangedState", function () { return componentChangedState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var componentChangedState = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('componentChanged', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    top: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loginedUser', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    top: '25%'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('default <=> loginedUser', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500))
            ]);
            /***/ 
        }),
        /***/ "./src/app/form-slider/form-slider.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/form-slider/form-slider.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".slider__container {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 3;\n  display: block;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (min-width: 700px) {\n  .slider__container {\n    border-bottom-left-radius: 20px;\n    border-top-left-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n.slider__container--wavy {\n  display: none;\n}\n@media screen and (min-width: 1000px) {\n  .slider__container--wavy {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 9.55rem;\n    width: 100%;\n    background-color: transparent;\n    z-index: 4;\n  }\n  .slider__container--wavy-element {\n    position: absolute;\n    width: 100%;\n    display: block;\n    z-index: 5;\n  }\n  .slider__container--wavy-element-1 {\n    top: 0;\n    right: 0;\n    background-color: #48a5ea;\n    width: 194px;\n    height: 25%;\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n  }\n  .slider__container--wavy-element-2 {\n    background-color: #48a5ea;\n    top: 25%;\n    width: 100%;\n    height: 25%;\n  }\n  .slider__container--wavy-element-2 .concave {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 18px;\n    background-color: #f0f0f0;\n    z-index: 6;\n    border-top-right-radius: 50px;\n    border-bottom-right-radius: 50px;\n  }\n  .slider__container--wavy-element-3 {\n    background-color: #48a5ea;\n    top: 50%;\n    right: 0;\n    width: 177.2px;\n    height: 25%;\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n  }\n  .slider__container--wavy-element-4 {\n    background-color: #48a5ea;\n    top: 75%;\n    width: 100%;\n    height: 25%;\n  }\n  .slider__container--wavy-element-4 .concave {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 17px;\n    background-color: #f0f0f0;\n    z-index: 6;\n    border-top-right-radius: 100px;\n    border-bottom-right-radius: 100px;\n  }\n}\n.slider__container--nav {\n  position: absolute;\n  z-index: 10;\n  width: 90%;\n  height: 90%;\n  left: 5%;\n  align-items: stretch;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n@media screen and (min-width: 700px) {\n  .slider__container--nav {\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    top: 5%;\n  }\n}\n.slider__container--nav-arrow {\n  display: block;\n  z-index: 20;\n  cursor: pointer;\n}\n.slider__container--nav-arrow i {\n  color: #fff;\n}\n.slider__container--nav-arrow i:hover {\n  color: goldenrod;\n}\n@media screen and (max-width: 700px) {\n  .slider__container--nav-arrow i {\n    transform: rotate(-90deg);\n  }\n}\n.slider__container--nav-dots {\n  z-index: 20;\n  width: 15%;\n  display: block;\n  align-items: center;\n  position: relative;\n}\n@media screen and (min-width: 700px) {\n  .slider__container--nav-dots {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 15%;\n  }\n}\n.slider__container--nav-dots-dot {\n  height: 0.55rem;\n  width: 0.55rem;\n  border-radius: 50%;\n  background-color: #fff;\n  margin: 0 0.25rem;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n@media screen and (min-width: 700px) {\n  .slider__container--nav-dots-dot {\n    margin: 0.25rem 0;\n    position: absolute;\n    right: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n.slider__container--nav-dots-dot1 {\n  right: 0;\n}\n@media screen and (min-width: 700px) {\n  .slider__container--nav-dots-dot1 {\n    right: 0;\n    top: 0;\n  }\n}\n.slider__container--nav-dots-dot2 {\n  right: 25%;\n}\n@media screen and (min-width: 700px) {\n  .slider__container--nav-dots-dot2 {\n    right: 0;\n    top: 25%;\n  }\n}\n.slider__container--nav-dots-dot3 {\n  right: 50%;\n}\n@media screen and (min-width: 700px) {\n  .slider__container--nav-dots-dot3 {\n    right: 0;\n    top: 50%;\n  }\n}\n.slider__container--nav-dots-dot4 {\n  right: 75%;\n}\n@media screen and (min-width: 700px) {\n  .slider__container--nav-dots-dot4 {\n    top: 75%;\n    right: 0;\n  }\n}\n.slider__container--nav-dots-dot-highlighted {\n  height: 0.75rem;\n  width: 0.75rem;\n  border-radius: 50%;\n  background-color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(-25%, -50%);\n}\n@media screen and (min-width: 700px) {\n  .slider__container--nav-dots-dot-highlighted {\n    top: 0;\n    left: 0;\n    transform: translate(58%, -25%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1zbGlkZXIvRDpcXFByb2plY3RzXFxGb3JtX3Rhc2tcXEF3ZXNvbWVGb3JtVGFzay9zcmNcXGFwcFxcZm9ybS1zbGlkZXJcXGZvcm0tc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtLXNsaWRlci9mb3JtLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBV0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1RKO0FESEk7RUFSSjtJQVNRLCtCQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VDTU47QUFDRjtBREVRO0VBQ0ksYUFBQTtBQ0FaO0FERVk7RUFISjtJQUlRLGNBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxRQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSw2QkFBQTtJQUNBLFVBQUE7RUNDZDtFRENjO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7RUNDbEI7RURDa0I7SUFDSSxNQUFBO0lBQ0EsUUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0VDQ3RCO0VEQ2tCO0lBQ0kseUJBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNDdEI7RURDc0I7SUFDSSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLFVBQUE7SUFDQSw2QkFBQTtJQUNBLGdDQUFBO0VDQzFCO0VERWtCO0lBQ0kseUJBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtFQ0F0QjtFREVrQjtJQUNJLHlCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VDQXRCO0VERXNCO0lBQ0ksa0JBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7SUFDQSxpQ0FBQTtFQ0ExQjtBQUNGO0FES0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFVQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNaUjtBREFRO0VBUEo7SUFRUSxvQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxPQUFBO0VDR1Y7QUFDRjtBRElRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRlo7QURJWTtFQUtJLFdBQUE7QUNOaEI7QURFZ0I7RUFDSSxnQkFBQTtBQ0FwQjtBREtnQjtFQVBKO0lBUVEseUJBQUE7RUNGbEI7QUFDRjtBRE9RO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xaO0FET1k7RUFQSjtJQVFRLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUNKZDtBQUNGO0FETVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FDSmhCO0FETWdCO0VBVko7SUFXUSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGdDQUFBO0VDSGxCO0FBQ0Y7QURLZ0I7RUFDSSxRQUFBO0FDSHBCO0FESW9CO0VBRko7SUFHUSxRQUFBO0lBQ0EsTUFBQTtFQ0R0QjtBQUNGO0FESWdCO0VBQ0ksVUFBQTtBQ0ZwQjtBREdvQjtFQUZKO0lBR1EsUUFBQTtJQUNBLFFBQUE7RUNBdEI7QUFDRjtBREdnQjtFQUNJLFVBQUE7QUNEcEI7QURFb0I7RUFGSjtJQUdRLFFBQUE7SUFDQSxRQUFBO0VDQ3RCO0FBQ0Y7QURFZ0I7RUFDSSxVQUFBO0FDQXBCO0FEQ29CO0VBRko7SUFHUSxRQUFBO0lBQ0EsUUFBQTtFQ0V0QjtBQUNGO0FEQ2dCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0FDQ3BCO0FEQ29CO0VBVko7SUFXUSxNQUFBO0lBQ0EsT0FBQTtJQUNBLCtCQUFBO0VDRXRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3JtLXNsaWRlci9mb3JtLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXJfX2NvbnRhaW5lciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBcclxuICAgICAgICAmLS13YXZ5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOS41NXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA0O1xyXG5cclxuICAgICAgICAgICAgICAgICYtZWxlbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAmLTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTk0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLTIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLTMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzcuMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi00IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YTVlYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1JTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICYtLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgbGVmdDogNSU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgIFxyXG4gICAgICAgICAgICB0b3A6IDUlOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJi1hcnJvdyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ29sZGVucm9kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtZG90cyB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi1kb3Qge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjU1cmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAuNTVyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4yNXJlbSA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuMjVyZW0gMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYyIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYzIHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY0IHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDc1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYtaGlnaGxpZ2h0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTglLCAtMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIi5zbGlkZXJfX2NvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5zbGlkZXJfX2NvbnRhaW5lciB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLnNsaWRlcl9fY29udGFpbmVyLS13YXZ5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuc2xpZGVyX19jb250YWluZXItLXdhdnkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA5LjU1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHotaW5kZXg6IDQ7XG4gIH1cbiAgLnNsaWRlcl9fY29udGFpbmVyLS13YXZ5LWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiA1O1xuICB9XG4gIC5zbGlkZXJfX2NvbnRhaW5lci0td2F2eS1lbGVtZW50LTEge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xuICAgIHdpZHRoOiAxOTRweDtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XG4gIH1cbiAgLnNsaWRlcl9fY29udGFpbmVyLS13YXZ5LWVsZW1lbnQtMiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YTVlYTtcbiAgICB0b3A6IDI1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgfVxuICAuc2xpZGVyX19jb250YWluZXItLXdhdnktZWxlbWVudC0yIC5jb25jYXZlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgei1pbmRleDogNjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgfVxuICAuc2xpZGVyX19jb250YWluZXItLXdhdnktZWxlbWVudC0zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNzcuMnB4O1xuICAgIGhlaWdodDogMjUlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcbiAgfVxuICAuc2xpZGVyX19jb250YWluZXItLXdhdnktZWxlbWVudC00IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xuICAgIHRvcDogNzUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUlO1xuICB9XG4gIC5zbGlkZXJfX2NvbnRhaW5lci0td2F2eS1lbGVtZW50LTQgLmNvbmNhdmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICB6LWluZGV4OiA2O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwcHg7XG4gIH1cbn1cbi5zbGlkZXJfX2NvbnRhaW5lci0tbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGxlZnQ6IDUlO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLnNsaWRlcl9fY29udGFpbmVyLS1uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0b3A6IDUlO1xuICB9XG59XG4uc2xpZGVyX19jb250YWluZXItLW5hdi1hcnJvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAyMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNsaWRlcl9fY29udGFpbmVyLS1uYXYtYXJyb3cgaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNsaWRlcl9fY29udGFpbmVyLS1uYXYtYXJyb3cgaTpob3ZlciB7XG4gIGNvbG9yOiBnb2xkZW5yb2Q7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuc2xpZGVyX19jb250YWluZXItLW5hdi1hcnJvdyBpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB9XG59XG4uc2xpZGVyX19jb250YWluZXItLW5hdi1kb3RzIHtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAxNSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAuc2xpZGVyX19jb250YWluZXItLW5hdi1kb3RzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNSU7XG4gIH1cbn1cbi5zbGlkZXJfX2NvbnRhaW5lci0tbmF2LWRvdHMtZG90IHtcbiAgaGVpZ2h0OiAwLjU1cmVtO1xuICB3aWR0aDogMC41NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAuc2xpZGVyX19jb250YWluZXItLW5hdi1kb3RzLWRvdCB7XG4gICAgbWFyZ2luOiAwLjI1cmVtIDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbn1cbi5zbGlkZXJfX2NvbnRhaW5lci0tbmF2LWRvdHMtZG90MSB7XG4gIHJpZ2h0OiAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLnNsaWRlcl9fY29udGFpbmVyLS1uYXYtZG90cy1kb3QxIHtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbi5zbGlkZXJfX2NvbnRhaW5lci0tbmF2LWRvdHMtZG90MiB7XG4gIHJpZ2h0OiAyNSU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAuc2xpZGVyX19jb250YWluZXItLW5hdi1kb3RzLWRvdDIge1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMjUlO1xuICB9XG59XG4uc2xpZGVyX19jb250YWluZXItLW5hdi1kb3RzLWRvdDMge1xuICByaWdodDogNTAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLnNsaWRlcl9fY29udGFpbmVyLS1uYXYtZG90cy1kb3QzIHtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgfVxufVxuLnNsaWRlcl9fY29udGFpbmVyLS1uYXYtZG90cy1kb3Q0IHtcbiAgcmlnaHQ6IDc1JTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5zbGlkZXJfX2NvbnRhaW5lci0tbmF2LWRvdHMtZG90NCB7XG4gICAgdG9wOiA3NSU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbi5zbGlkZXJfX2NvbnRhaW5lci0tbmF2LWRvdHMtZG90LWhpZ2hsaWdodGVkIHtcbiAgaGVpZ2h0OiAwLjc1cmVtO1xuICB3aWR0aDogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJSk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAuc2xpZGVyX19jb250YWluZXItLW5hdi1kb3RzLWRvdC1oaWdobGlnaHRlZCB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTglLCAtMjUlKTtcbiAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/form-slider/form-slider.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/form-slider/form-slider.component.ts ***!
          \******************************************************/
        /*! exports provided: FormSliderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSliderComponent", function () { return FormSliderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _storage_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-service.component */ "./src/app/storage-service.component.ts");
            /* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/app/form-slider/animations.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var FormSliderComponent = /** @class */ (function () {
                function FormSliderComponent(storageService, router) {
                    this.storageService = storageService;
                    this.router = router;
                    this.componentActiveName = 'default';
                }
                FormSliderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.componentChangedSub = this.storageService.componentChanged
                        .subscribe(function (componentName) {
                        _this.componentActiveName = componentName;
                        console.log(_this.componentActiveName);
                    });
                    this.isLoginFormValidSub = this.storageService.isFormValid.subscribe(function (isVal) {
                        _this.formValidity = isVal;
                    });
                };
                FormSliderComponent.prototype.moveUp = function () {
                    this.router.navigate(["/form"]);
                    this.storageService.componentActive('default');
                };
                FormSliderComponent.prototype.moveDown = function () {
                    if (this.formValidity)
                        this.router.navigate(["/logined-user"]);
                    this.storageService.componentActive('loginedUser');
                };
                return FormSliderComponent;
            }());
            FormSliderComponent.ctorParameters = function () { return [
                { type: _storage_service_component__WEBPACK_IMPORTED_MODULE_2__["storageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            FormSliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form-slider',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form-slider/form-slider.component.html")).default,
                    animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["componentChangedState"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-slider.component.scss */ "./src/app/form-slider/form-slider.component.scss")).default]
                })
            ], FormSliderComponent);
            /***/ 
        }),
        /***/ "./src/app/form/form-logined-user/form-logined-user.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/form/form-logined-user/form-logined-user.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div {\n  position: relative;\n  margin: 1.2rem 1.2rem;\n  padding: 0 0 0.5rem 0;\n  width: 100%;\n  box-sizing: border-box;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #d8d8d8;\n  color: #333333;\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLWxvZ2luZWQtdXNlci9EOlxcUHJvamVjdHNcXEZvcm1fdGFza1xcQXdlc29tZUZvcm1UYXNrL3NyY1xcYXBwXFxmb3JtXFxmb3JtLWxvZ2luZWQtdXNlclxcZm9ybS1sb2dpbmVkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm0vZm9ybS1sb2dpbmVkLXVzZXIvZm9ybS1sb2dpbmVkLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS1sb2dpbmVkLXVzZXIvZm9ybS1sb2dpbmVkLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxLjJyZW0gMS4ycmVtO1xyXG4gICAgcGFkZGluZzogMCAwIC41cmVtIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufSIsImRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxLjJyZW0gMS4ycmVtO1xuICBwYWRkaW5nOiAwIDAgMC41cmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAxLjJyZW07XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/form/form-logined-user/form-logined-user.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/form/form-logined-user/form-logined-user.component.ts ***!
          \***********************************************************************/
        /*! exports provided: FormLoginedUserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginedUserComponent", function () { return FormLoginedUserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_storage_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/storage-service.component */ "./src/app/storage-service.component.ts");
            var FormLoginedUserComponent = /** @class */ (function () {
                function FormLoginedUserComponent(storageService) {
                    this.storageService = storageService;
                    this.activeUserFName = this.storageService.savedForm.firstName;
                    this.activeUserLName = this.storageService.savedForm.lastName;
                }
                return FormLoginedUserComponent;
            }());
            FormLoginedUserComponent.ctorParameters = function () { return [
                { type: src_app_storage_service_component__WEBPACK_IMPORTED_MODULE_2__["storageService"] }
            ]; };
            FormLoginedUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form-logined-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-logined-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form-logined-user/form-logined-user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-logined-user.component.scss */ "./src/app/form/form-logined-user/form-logined-user.component.scss")).default]
                })
            ], FormLoginedUserComponent);
            /***/ 
        }),
        /***/ "./src/app/form/form.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/form/form.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("* {\n  box-sizing: border-box;\n}\n\nh2 {\n  font-size: 1.6rem;\n  font-family: \"ProximaNovaSemibold\", sans-serif;\n  color: #3897d9;\n  margin: 1.8rem;\n}\n\n/* Form styles */\n\n.form {\n  display: flex;\n  margin: 6rem 1.8rem 1.8rem 1.8rem;\n  padding: 0;\n  flex-direction: column;\n}\n\n.form__group {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media screen and (min-width: 700px) {\n  .form__group {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n\n.form__group .form__control {\n  width: 100%;\n  position: relative;\n}\n\n@media screen and (min-width: 700px) {\n  .form__group .form__control {\n    width: 48%;\n  }\n}\n\n.form__group .form__control span.error-block {\n  position: absolute;\n  top: 80%;\n  left: 0;\n  width: 100%;\n  color: red;\n  font-size: 0.8rem;\n  z-index: 10;\n  line-height: 1;\n}\n\n.form__group--buttons {\n  margin-top: 4rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  position: relative;\n}\n\n@media (min-width: 700px) {\n  .form__group--buttons {\n    margin-top: 8rem;\n  }\n}\n\n.form__group--buttons-submit {\n  background-color: #48a5ea;\n  height: 3rem;\n  width: 9rem;\n  color: #fff;\n  font-size: 1rem;\n  text-align: center;\n  line-height: 3rem;\n  border-radius: 5rem;\n  cursor: pointer;\n  transition: all 0.5s ease;\n  padding: 0;\n  border: none;\n  outline: none;\n}\n\n.form__group--buttons-submit:hover {\n  transform: scale(1.02);\n  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.3);\n}\n\n.form__group--buttons-submit:active {\n  transform: scale(0.95);\n  box-shadow: none;\n}\n\n.form__group--buttons-reset {\n  color: #b8b8b8;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: 0.5s all ease;\n}\n\n.form__group--buttons-reset:hover {\n  color: #48a5ea;\n}\n\n.form__group--id {\n  margin-bottom: 0.6rem;\n}\n\n.form div {\n  position: relative;\n}\n\n.form div input {\n  position: relative;\n  margin: 1.2rem 0;\n  padding: 0 0 0.5rem 0;\n  width: 100%;\n  box-sizing: border-box;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #d8d8d8;\n  color: #333333;\n  transition: 0.5s all ease;\n  font-size: 1.2rem;\n}\n\n.form div input.email ~ i {\n  min-width: 10px;\n  min-height: 10px;\n  text-align: center;\n  position: absolute;\n  right: 2%;\n  top: 40%;\n}\n\n.form div input.email ~ i.input__valid {\n  color: green;\n}\n\n.form div input.email ~ i.input__invalid {\n  color: red;\n}\n\n.form div input.ID ~ i {\n  min-width: 10px;\n  min-height: 10px;\n  text-align: center;\n  position: absolute;\n  right: 2%;\n  top: 40%;\n}\n\n.form div input:not(.ref-code).ng-invalid.ng-touched {\n  border-bottom: 1px solid red;\n}\n\n.form div input:not(.ref-code).ng-invalid.ng-touched:focus ~ label, .form div input:not(.ref-code).ng-invalid.ng-touched:valid ~ label {\n  color: red;\n}\n\n.form div input:not(.ref-code).ng-invalid.ng-touched ~ label {\n  color: red;\n}\n\n.form div input:focus ~ label {\n  top: -0.2rem;\n  left: 0;\n  font-size: 0.8rem;\n  color: #48a5ea;\n}\n\n.form div input:not(.ref-code):valid ~ label {\n  top: -0.2rem;\n  left: 0;\n  font-size: 0.8rem;\n  color: #807272;\n}\n\n.form div input:focus {\n  border-bottom: 1px solid #48a5ea;\n}\n\n.form div input:valid {\n  border-bottom: 1px solid #b8b8b8;\n}\n\n.form div input.ref-code.touched:valid ~ label {\n  top: -0.2rem;\n  left: 0;\n  font-size: 0.8rem;\n  color: #b8b8b8;\n}\n\n.form div input.ref-code.ng-touched.ng-dirty:focus ~ label {\n  top: -0.2rem;\n  left: 0;\n  font-size: 0.8rem;\n  color: #48a5ea;\n}\n\n.form div label {\n  position: absolute;\n  top: 1.2rem;\n  left: 0;\n  font-size: 1.2rem;\n  color: #333333;\n  z-index: 1;\n  pointer-events: none;\n  transition: all 0.5s ease;\n}\n\n.form__location {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media screen and (min-width: 1000px) {\n  .form__location {\n    flex-direction: row;\n  }\n}\n\n.form__location div {\n  display: flex;\n  flex-direction: column;\n}\n\n.form__location div span {\n  position: absolute;\n  font-size: 0.8rem;\n  z-index: 5;\n}\n\n.form__location div select {\n  position: relative;\n  margin-top: 0.62rem;\n  margin-bottom: 0.82rem;\n  width: 100%;\n  border: none;\n  outline: none;\n  height: 2.7rem;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  border-bottom: 1px solid #d8d8d8;\n  font-size: 1rem;\n  color: #333333;\n  cursor: pointer;\n}\n\n.form__location div select option {\n  width: 80vw;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 1000px) {\n  .form__location div select option {\n    width: 100%;\n  }\n}\n\n.form__location div::after {\n  content: \"\";\n  position: absolute;\n  height: 0.3rem;\n  width: 0.3rem;\n  border-top: 1px solid #333333;\n  border-left: 1px solid #333333;\n  z-index: 3;\n  position: absolute;\n  top: 50%;\n  right: 0.5rem;\n  transform: translateY(-50%) rotate(-135deg);\n  transition: all 0.4s ease-in-out;\n  pointer-events: none;\n}\n\n.form__location div:hover::after {\n  transform: rotate(45deg);\n}\n\n.form__location--state {\n  width: 100%;\n  margin: 0;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 1000px) {\n  .form__location--state {\n    width: 45%;\n  }\n}\n\n.form__location--city {\n  margin: 0;\n  width: 100%;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 1000px) {\n  .form__location--city {\n    width: 45%;\n  }\n}\n\n.form__country {\n  display: flex;\n  flex-direction: row;\n}\n\n.form__country span {\n  position: absolute;\n  font-size: 0.8rem;\n  z-index: 3;\n}\n\n.form__country select {\n  position: relative;\n  margin-top: 0.82rem;\n  margin-bottom: 0.82rem;\n  width: 100%;\n  border: none;\n  outline: none;\n  height: 2.5rem;\n  border-bottom: 1px solid #d8d8d8;\n  appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.form__country::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 0.5rem;\n  transform: translateY(-50%) rotate(45deg);\n  width: 0.3rem;\n  height: 0.3rem;\n  border-bottom: 1px solid #333333;\n  border-right: 1px solid #333333;\n  pointer-events: none;\n  transition: all 0.4s ease-in-out;\n}\n\n.form__country:hover::after {\n  transform: rotate(225deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9EOlxcUHJvamVjdHNcXEZvcm1fdGFza1xcQXdlc29tZUZvcm1UYXNrL3NyY1xcYXBwXFxmb3JtXFxmb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUEsZ0JBQUE7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBUjs7QURFUTtFQU5KO0lBT1EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0VDQ1Y7QUFDRjs7QURDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NaOztBRENZO0VBSko7SUFLUSxVQUFBO0VDRWQ7QUFDRjs7QURBWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNFaEI7O0FERVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURFWTtFQVBKO0lBUVEsZ0JBQUE7RUNDZDtBQUNGOztBRENZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ2hCOztBRENnQjtFQUNJLHNCQUFBO0VBQ0EsOENBQUE7QUNDcEI7O0FERWdCO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQ0FwQjs7QURJWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRmhCOztBRElnQjtFQUNJLGNBQUE7QUNGcEI7O0FET1E7RUFDSSxxQkFBQTtBQ0xaOztBRFdJO0VBQ0ksa0JBQUE7QUNUUjs7QURXUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDVFo7O0FEWVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNWaEI7O0FEWWdCO0VBQ0ksWUFBQTtBQ1ZwQjs7QURhZ0I7RUFDSSxVQUFBO0FDWHBCOztBRGVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDYmhCOztBRGdCWTtFQVdJLDRCQUFBO0FDeEJoQjs7QURlZ0I7RUFFSSxVQUFBO0FDZHBCOztBRGlCZ0I7RUFDSSxVQUFBO0FDZnBCOztBRHFCWTtFQUNJLFlBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbkJoQjs7QURzQlk7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3BCaEI7O0FEdUJZO0VBQ0ksZ0NBQUE7QUNyQmhCOztBRHdCWTtFQUNJLGdDQUFBO0FDdEJoQjs7QUQyQm9CO0VBQ0ksWUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN6QnhCOztBRDhCb0I7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQzVCeEI7O0FEa0NRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDaENaOztBRG9DSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNsQ1I7O0FEb0NRO0VBTko7SUFPUSxtQkFBQTtFQ2pDVjtBQUNGOztBRG1DUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ2pDWjs7QURtQ1k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ2pDaEI7O0FEb0NZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDbENoQjs7QURvQ2dCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNsQ3BCOztBRG9Db0I7RUFKSjtJQUtRLFdBQUE7RUNqQ3RCO0FBQ0Y7O0FEcUNZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNuQ2hCOztBRHNDWTtFQUNJLHdCQUFBO0FDcENoQjs7QUR3Q1E7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUN0Q1o7O0FEd0NZO0VBTEo7SUFNUSxVQUFBO0VDckNkO0FBQ0Y7O0FEd0NRO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDdENaOztBRHdDWTtFQUxKO0lBTVEsVUFBQTtFQ3JDZDtBQUNGOztBRHlDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ3ZDUjs7QUR5Q1E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ3ZDWjs7QUQwQ1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ3hDWjs7QUQyQ1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtBQ3pDWjs7QUQ0Q1E7RUFDSSx5QkFBQTtBQzFDWiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1Byb3hpbWFOb3ZhU2VtaWJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMzODk3ZDk7XHJcbiAgICBtYXJnaW46IDEuOHJlbTtcclxufVxyXG5cclxuLyogRm9ybSBzdHlsZXMgKi9cclxuXHJcbi5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDZyZW0gMS44cmVtIDEuOHJlbSAxLjhyZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAmX19ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybV9fY29udHJvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3Bhbi5lcnJvci1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDgwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi1zdWJtaXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YTVlYTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDNweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLXJlc2V0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjhiOGI4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDhhNWVhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLS1pZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC42cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjJyZW0gMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIC41cmVtIDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuXHJcblxyXG4gICAgICAgICAgICAmLmVtYWlsfmkge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgIHRvcDogNDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICYuaW5wdXRfX3ZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5pbnB1dF9faW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5JRH5pIHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMiU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpub3QoLnJlZi1jb2RlKS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG5cclxuICAgICAgICAgICAgICAgICY6Zm9jdXN+bGFiZWwsXHJcbiAgICAgICAgICAgICAgICAmOnZhbGlkfmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmZvY3VzfmxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ4YTVlYTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpub3QoLnJlZi1jb2RlKTp2YWxpZH5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0uMnJlbTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MDcyNzI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0OGE1ZWE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6dmFsaWQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiOGI4Yjg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYucmVmLWNvZGUge1xyXG4gICAgICAgICAgICAgICAgJi50b3VjaGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAmOnZhbGlkfmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjhiOGI4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLm5nLXRvdWNoZWQubmctZGlydHkge1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXN+bGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0uMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0OGE1ZWE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbG9jYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNjJyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuODJyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuN3JlbTtcclxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogLjNyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogLjNyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAuNXJlbTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi0tc3RhdGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtLWNpdHkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY291bnRyeSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjgycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuODJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IC41cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgd2lkdGg6IC4zcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IC4zcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMzMzMztcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWFOb3ZhU2VtaWJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMzODk3ZDk7XG4gIG1hcmdpbjogMS44cmVtO1xufVxuXG4vKiBGb3JtIHN0eWxlcyAqL1xuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDZyZW0gMS44cmVtIDEuOHJlbSAxLjhyZW07XG4gIHBhZGRpbmc6IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9ybV9fZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAuZm9ybV9fZ3JvdXAge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbi5mb3JtX19ncm91cCAuZm9ybV9fY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAuZm9ybV9fZ3JvdXAgLmZvcm1fX2NvbnRyb2wge1xuICAgIHdpZHRoOiA0OCU7XG4gIH1cbn1cbi5mb3JtX19ncm91cCAuZm9ybV9fY29udHJvbCBzcGFuLmVycm9yLWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB6LWluZGV4OiAxMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uZm9ybV9fZ3JvdXAtLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAuZm9ybV9fZ3JvdXAtLWJ1dHRvbnMge1xuICAgIG1hcmdpbi10b3A6IDhyZW07XG4gIH1cbn1cbi5mb3JtX19ncm91cC0tYnV0dG9ucy1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhhNWVhO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiA5cmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtX19ncm91cC0tYnV0dG9ucy1zdWJtaXQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmZvcm1fX2dyb3VwLS1idXR0b25zLXN1Ym1pdDphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmZvcm1fX2dyb3VwLS1idXR0b25zLXJlc2V0IHtcbiAgY29sb3I6ICNiOGI4Yjg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xufVxuLmZvcm1fX2dyb3VwLS1idXR0b25zLXJlc2V0OmhvdmVyIHtcbiAgY29sb3I6ICM0OGE1ZWE7XG59XG4uZm9ybV9fZ3JvdXAtLWlkIHtcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xufVxuLmZvcm0gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm0gZGl2IGlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEuMnJlbSAwO1xuICBwYWRkaW5nOiAwIDAgMC41cmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZm9ybSBkaXYgaW5wdXQuZW1haWwgfiBpIHtcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDQwJTtcbn1cbi5mb3JtIGRpdiBpbnB1dC5lbWFpbCB+IGkuaW5wdXRfX3ZhbGlkIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLmZvcm0gZGl2IGlucHV0LmVtYWlsIH4gaS5pbnB1dF9faW52YWxpZCB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZm9ybSBkaXYgaW5wdXQuSUQgfiBpIHtcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDQwJTtcbn1cbi5mb3JtIGRpdiBpbnB1dDpub3QoLnJlZi1jb2RlKS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmVkO1xufVxuLmZvcm0gZGl2IGlucHV0Om5vdCgucmVmLWNvZGUpLm5nLWludmFsaWQubmctdG91Y2hlZDpmb2N1cyB+IGxhYmVsLCAuZm9ybSBkaXYgaW5wdXQ6bm90KC5yZWYtY29kZSkubmctaW52YWxpZC5uZy10b3VjaGVkOnZhbGlkIH4gbGFiZWwge1xuICBjb2xvcjogcmVkO1xufVxuLmZvcm0gZGl2IGlucHV0Om5vdCgucmVmLWNvZGUpLm5nLWludmFsaWQubmctdG91Y2hlZCB+IGxhYmVsIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5mb3JtIGRpdiBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcbiAgdG9wOiAtMC4ycmVtO1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM0OGE1ZWE7XG59XG4uZm9ybSBkaXYgaW5wdXQ6bm90KC5yZWYtY29kZSk6dmFsaWQgfiBsYWJlbCB7XG4gIHRvcDogLTAuMnJlbTtcbiAgbGVmdDogMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjODA3MjcyO1xufVxuLmZvcm0gZGl2IGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0OGE1ZWE7XG59XG4uZm9ybSBkaXYgaW5wdXQ6dmFsaWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4YjhiODtcbn1cbi5mb3JtIGRpdiBpbnB1dC5yZWYtY29kZS50b3VjaGVkOnZhbGlkIH4gbGFiZWwge1xuICB0b3A6IC0wLjJyZW07XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogI2I4YjhiODtcbn1cbi5mb3JtIGRpdiBpbnB1dC5yZWYtY29kZS5uZy10b3VjaGVkLm5nLWRpcnR5OmZvY3VzIH4gbGFiZWwge1xuICB0b3A6IC0wLjJyZW07XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzQ4YTVlYTtcbn1cbi5mb3JtIGRpdiBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxLjJyZW07XG4gIGxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzMzMzMzMztcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4uZm9ybV9fbG9jYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvcm1fX2xvY2F0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG4uZm9ybV9fbG9jYXRpb24gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtX19sb2NhdGlvbiBkaXYgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHotaW5kZXg6IDU7XG59XG4uZm9ybV9fbG9jYXRpb24gZGl2IHNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMC42MnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC44MnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiAyLjdyZW07XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzMzMzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm1fX2xvY2F0aW9uIGRpdiBzZWxlY3Qgb3B0aW9uIHtcbiAgd2lkdGg6IDgwdnc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuZm9ybV9fbG9jYXRpb24gZGl2IHNlbGVjdCBvcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZm9ybV9fbG9jYXRpb24gZGl2OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAwLjNyZW07XG4gIHdpZHRoOiAwLjNyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzMzMzM7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoLTEzNWRlZyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5mb3JtX19sb2NhdGlvbiBkaXY6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmZvcm1fX2xvY2F0aW9uLS1zdGF0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAuZm9ybV9fbG9jYXRpb24tLXN0YXRlIHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG59XG4uZm9ybV9fbG9jYXRpb24tLWNpdHkge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZvcm1fX2xvY2F0aW9uLS1jaXR5IHtcbiAgICB3aWR0aDogNDUlO1xuICB9XG59XG4uZm9ybV9fY291bnRyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZm9ybV9fY291bnRyeSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgei1pbmRleDogMztcbn1cbi5mb3JtX19jb3VudHJ5IHNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMC44MnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC44MnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybV9fY291bnRyeTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMC41cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgd2lkdGg6IDAuM3JlbTtcbiAgaGVpZ2h0OiAwLjNyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzMzMzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG4uZm9ybV9fY291bnRyeTpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/form/form.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/form/form.component.ts ***!
          \****************************************/
        /*! exports provided: FormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function () { return FormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _storage_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.component */ "./src/app/storage-service.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var FormComponent = /** @class */ (function () {
                function FormComponent(storageService, router) {
                    this.storageService = storageService;
                    this.router = router;
                    this.countries = [new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("USA"), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("India")];
                    this.statesUSA = [new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("New York"), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("California")];
                    this.statesIndia = [new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Andhra Pradesh"), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Goa")];
                    this.citiesNY = [new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Albany"), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("New York City")];
                    this.citiesCali = [
                        new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Sacramento"),
                        new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Los Angeles"),
                        new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("San Francisco")
                    ];
                    this.citiesAndhra = [
                        new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Visakhapatnam"),
                        new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Amaravati")
                    ];
                    this.citiesGoa = [new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Panaji"), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Vasco da Gama")];
                    this.formReseted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.mask = {
                        mask: "+{38}(0__)000-00-00",
                        lazy: false
                    };
                    this.formValid = false;
                    this.DeleteMessage = 'Are you sure you want to reset the form? Click "Continue" if you aren\'t sure about that. Click again to reset the form.';
                    this.IDColor = "#a0a0a0";
                    this.invalidMessages = [
                        "This field is required and has to contain 2-32 cyrillic characters!",
                        "This field is required and has to be a valid email address!",
                        "This is a required field!",
                        'This is a required field! Please enter your telephone number, formated as "0__-___-__-__"',
                        "This field is required and has to contain 2-32 cyrillic characters",
                        'This is a required field! It has to contain from 5 to 30 latin characters and "_"',
                        "This is a required field!",
                        "This is a required field!",
                        "This field has to contain from 1 to 10 latin characters or numbers."
                    ];
                    this.statusArr = [];
                }
                FormComponent.prototype.ngOnInit = function () {
                    this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[а-яА-ЯёЁіІїЇ]{2,32}$/iu)
                        ]),
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\S{2,255}@\S+\.\S+$/iu)
                        ]),
                        country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\b[0-9]{12}\b/)
                        ]),
                        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[а-яА-ЯёЁіІїЇ]{2,32}$/iu)
                        ]),
                        id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\b[A-Za-z_]{5,30}\b/)
                        ]),
                        state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\b[A-Za-z_0-9]{1,10}\b/))
                    });
                    if (this.storageService.savedForm)
                        this.signUpForm.setValue(this.storageService.savedForm);
                };
                FormComponent.prototype.getColor = function () {
                    if (this.signUpForm.get("id").pristine == false &&
                        this.signUpForm.get("id").status === "VALID") {
                        this.IDColor = "green";
                    }
                    else {
                        this.IDColor = "red";
                    }
                    console.log(this.IDColor);
                };
                FormComponent.prototype.onSubmit = function () {
                    if (this.signUpForm.status === "VALID") {
                        this.storageService.savedForm = this.signUpForm.value;
                        console.log(this.signUpForm);
                        this.formValid = true;
                        this.storageService.formValidation(true);
                        alert('Form Saved!');
                    }
                    else {
                        var namesArr = Object.keys(this.signUpForm.controls);
                        console.log(namesArr);
                        for (var i = 0; i < namesArr.length; i++) {
                            this.statusArr.push(this.signUpForm.controls[namesArr[i]].status);
                        }
                        this.formValid = false;
                        console.log(this.statusArr);
                    }
                };
                FormComponent.prototype.onReset = function () {
                    this.formReseted.emit(true);
                };
                FormComponent.prototype.resetForm = function (action) {
                    if (action) {
                        var namesArr = Object.keys(this.signUpForm.controls);
                        for (var i = 0; i < namesArr.length; i++) {
                            this.signUpForm.controls[namesArr[i]].setValue(null);
                        }
                        this.storageService.savedForm = {
                            city: "",
                            code: null,
                            country: "",
                            email: "",
                            firstName: "",
                            id: "",
                            lastName: "",
                            phone: null,
                            state: null
                        };
                        this.statusArr = [];
                        this.formValid = false;
                        this.IDColor = '#a0a0a0';
                        this.signUpForm.get("firstName").touched = false;
                        this.signUpForm.get('firstName').pristine = true;
                        this.signUpForm.get("id").touched = false;
                        this.signUpForm.get('id').pristine = true;
                        this.signUpForm.get("email").touched = false;
                        this.signUpForm.get('email').pristine = true;
                        this.signUpForm.get("country").touched = false;
                        this.signUpForm.get('country').pristine = true;
                        this.signUpForm.get("phone").touched = false;
                        this.signUpForm.get('phone').pristine = true;
                        this.signUpForm.get("lastName").touched = false;
                        this.signUpForm.get('lastName').pristine = true;
                        this.signUpForm.get("state").touched = false;
                        this.signUpForm.get('state').pristine = true;
                        this.signUpForm.get("city").touched = false;
                        this.signUpForm.get('city').pristine = true;
                        this.signUpForm.get("code").touched = false;
                        this.signUpForm.get('code').pristine = true;
                    }
                };
                FormComponent.prototype.onChange = function () {
                    this.signUpForm.get("state").value = null;
                    this.signUpForm.get("city").value = null;
                };
                return FormComponent;
            }());
            FormComponent.ctorParameters = function () { return [
                { type: _storage_service_component__WEBPACK_IMPORTED_MODULE_3__["storageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("phoneInput", { static: false })
            ], FormComponent.prototype, "phoneInput", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FormComponent.prototype, "formReseted", void 0);
            FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-form",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.scss */ "./src/app/form/form.component.scss")).default]
                })
            ], FormComponent);
            /***/ 
        }),
        /***/ "./src/app/storage-service.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/storage-service.component.ts ***!
          \**********************************************/
        /*! exports provided: storageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageService", function () { return storageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var storageService = /** @class */ (function () {
                function storageService() {
                    this.componentChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    this.isFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                storageService.prototype.componentActive = function (componentName) {
                    this.componentChanged.next(componentName);
                };
                storageService.prototype.formValidation = function (isVal) {
                    this.isFormValid.next(isVal);
                };
                return storageService;
            }());
            storageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], storageService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\Projects\Form_task\AwesomeFormTask\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map