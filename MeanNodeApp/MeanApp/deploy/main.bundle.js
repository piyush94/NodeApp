webpackJsonp(["main"],{

/***/ "../../../../../models/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee(_id, empName, empDesig) {
        this._id = _id;
        this.empName = empName;
        this.empDesig = empDesig;
    }
    return Employee;
}());



/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div> -->\n\n<div class=\"container\" >\n  <router-outlet></router-outlet>\n</div>\n\n<!-- <h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li> \n</ul>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__empdata_empdata_component__ = __webpack_require__("../../../../../src/app/empdata/empdata.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__empdata_empdata_component__["a" /* EmpdataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'app-empdata', pathMatch: 'full' },
                    { path: 'app-empdata', component: __WEBPACK_IMPORTED_MODULE_6__empdata_empdata_component__["a" /* EmpdataComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/empdata/empdata.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrollit { height:400px; overflow-y:scroll; overflow-x: scroll; }\r\n.fixedcol {\r\n    max-width: 45px;\r\n}\r\n.notfixedcol {\r\n    min-width: 80px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/empdata/empdata.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div>\n    <h3>Employee Data</h3>\n    <p>This component demonstrates fetching data from the server.</p>\n</div>\n\n<p *ngIf=\"!employees\">\n    <em>{{ server_status }}</em>\n</p>\n\n<hr>\n\n<div class=\"row\">\n    <div class=\"col-9\">\n        <div class=\"scrollit\" *ngIf=\"employees\">\n            <table class=\"table table-bordered table-striped\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th class=\"fixedcol\">Id</th>\n                        <th class=\"notfixedcol\">Name</th>\n                        <th class=\"notfixedcol\">Designation</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let employee of employees\">\n                        <td class=\"fixedcol\">\n                            <input readonly class=\"form-control\" type=\"text\" [(ngModel)]=\"employee._id\" value=\"{{ employee._id }}\" />\n                        </td>\n                        <td class=\"notfixedcol\">\n                            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.empName\" value=\"{{ employee.empName }}\" />\n                        </td>\n                        <td class=\"notfixedcol\">\n                            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.empDesig\" value=\"{{ employee.empDesig }}\" />\n                        </td>\n                        <td>\n                            <button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee)\">Delete</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <hr />\n        <div *ngIf=\"employees\">\n            <button class=\"btn btn-primary\" (click)=\"updateEmployees(employees)\">Update</button>\n            <span *ngIf=\"updating\">Updating...</span>\n            <span>\n                <button class=\"btn btn-light\" (click)=\"refreshEmployees()\">Refresh</button>\n            </span>\n        </div>\n    </div>\n    <div class=\"col-3\">\n        <form class=\"form-group\" #form=\"ngForm\">\n            <h3>Add Employee</h3>\n            <hr />\n            <label for=\"empName\">Employee Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"empName\" [(ngModel)]=\"newEmployee.empName\" #empName=\"ngModel\" required />\n\n            <label for=\"empDesig\">Employee Designation</label>\n            <input type=\"text\" class=\"form-control\" name=\"empDesig\" [(ngModel)]=\"newEmployee.empDesig\" />\n            <hr />\n            <button [disabled]=\"!form.form.valid\" class=\"btn btn-primary\" (click)=\"addEmployee(newEmployee)\">Add Employee</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/empdata/empdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_employee_model__ = __webpack_require__("../../../../../models/employee.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpdataComponent = /** @class */ (function () {
    function EmpdataComponent(http) {
        var _this = this;
        this.http = http;
        this.updating = false;
        this.newEmployee = new __WEBPACK_IMPORTED_MODULE_2__models_employee_model__["a" /* Employee */](0, '', '');
        this.baseUrl = 'http://inblr-vm-2295.eu.uis.unisys.com:8080/';
        this.server_status = 'Loading...';
        http.get(this.baseUrl + 'api/Employees').subscribe(function (result) {
            if (result.ok) {
                _this.employees = result.json();
            }
        }, function (error) {
            _this.server_status = 'No employees';
            console.error(error);
        });
    }
    EmpdataComponent.prototype.addEmployee = function () {
        var _this = this;
        console.log(this.newEmployee.empName);
        this.http.post(this.baseUrl + 'api/Employees', this.newEmployee).subscribe(function (result) {
            if (result.ok) {
                // alert('employee added');
                _this.newEmployee.empName = '';
                _this.newEmployee.empDesig = '';
                if (_this.employees != null) {
                    _this.employees.push(result.json());
                }
                else {
                    _this.employees = [result.json()];
                    // console.log(this.employees);
                }
            }
        }, function (error) { return console.error(error); });
    };
    EmpdataComponent.prototype.deleteEmployee = function (emp) {
        var _this = this;
        console.log(emp._id);
        this.http.delete(this.baseUrl + 'api/Employees/' + emp._id).subscribe(function (result) {
            if (result.ok) {
                // alert('employee deleted');
                _this.employees.splice(_this.employees.indexOf(emp), 1);
                if (_this.employees.length === 0) {
                    _this.employees = undefined;
                    _this.server_status = 'No employees';
                }
            }
        }, function (error) { return console.error(error); });
    };
    EmpdataComponent.prototype.updateEmployees = function (newemployees) {
        var _this = this;
        this.updating = true;
        console.log('updating');
        this.http.put(this.baseUrl + 'api/Employees/', newemployees).subscribe(function (result) {
            if (result.ok) {
                _this.http.get(_this.baseUrl + 'api/Employees').subscribe(function (newres) {
                    if (newres.ok) {
                        // alert('Updated');
                        _this.employees = newres.json();
                    }
                    _this.updating = false;
                }, function (error) { return console.error(error); });
            }
            else {
                _this.updating = false;
            }
        }, function (error) { return console.error(error); });
    };
    EmpdataComponent.prototype.refreshEmployees = function () {
        var _this = this;
        this.http.get(this.baseUrl + 'api/Employees').subscribe(function (result) {
            if (result.ok) {
                _this.employees = result.json();
            }
        }, function (error) { return console.error(error); });
    };
    EmpdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-empdata',
            template: __webpack_require__("../../../../../src/app/empdata/empdata.component.html"),
            styles: [__webpack_require__("../../../../../src/app/empdata/empdata.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EmpdataComponent);
    return EmpdataComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map