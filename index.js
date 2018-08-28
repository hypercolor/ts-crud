(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! exports provided: GetRoute, PostRoute, DeleteRoute, MarkDeletedRoute, MarkUndeletedRoute, MultiPutRoute, MultiPatchRoute, PutByIdRoute, QueryRoute, PatchByIdRoute, CrudHandlers, CrudConfig, GetAllObjectsHandler, UpdateObjectFromJson, EUpdateType, FetchObject, CreateObjectFromJson, UpdatePivotTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/crud-routes */ "./src/crud-routes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["GetRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["PostRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["DeleteRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkDeletedRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["MarkDeletedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkUndeletedRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["MarkUndeletedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiPutRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["MultiPutRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultiPatchRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["MultiPatchRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PutByIdRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["PutByIdRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["QueryRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PatchByIdRoute", function() { return _src_crud_routes__WEBPACK_IMPORTED_MODULE_0__["PatchByIdRoute"]; });

/* harmony import */ var _src_crud_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/crud-handlers */ "./src/crud-handlers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CrudHandlers", function() { return _src_crud_handlers__WEBPACK_IMPORTED_MODULE_1__["CrudHandlers"]; });

/* harmony import */ var _src_crud_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/crud-config */ "./src/crud-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CrudConfig", function() { return _src_crud_config__WEBPACK_IMPORTED_MODULE_2__["CrudConfig"]; });

/* harmony import */ var _src_handlers_get_get_all_objects_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/handlers/get/get-all-objects-handler */ "./src/handlers/get/get-all-objects-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetAllObjectsHandler", function() { return _src_handlers_get_get_all_objects_handler__WEBPACK_IMPORTED_MODULE_3__["GetAllObjectsHandler"]; });

/* harmony import */ var _src_handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/handlers/shared/update-object-from-json */ "./src/handlers/shared/update-object-from-json.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateObjectFromJson", function() { return _src_handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_4__["UpdateObjectFromJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EUpdateType", function() { return _src_handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_4__["EUpdateType"]; });

/* harmony import */ var _src_handlers_shared_fetch_object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/handlers/shared/fetch-object */ "./src/handlers/shared/fetch-object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchObject", function() { return _src_handlers_shared_fetch_object__WEBPACK_IMPORTED_MODULE_5__["FetchObject"]; });

/* harmony import */ var _src_handlers_shared_create_object_from_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/handlers/shared/create-object-from-json */ "./src/handlers/shared/create-object-from-json.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateObjectFromJson", function() { return _src_handlers_shared_create_object_from_json__WEBPACK_IMPORTED_MODULE_6__["CreateObjectFromJson"]; });

/* harmony import */ var _src_handlers_shared_update_pivot_tables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/handlers/shared/update-pivot-tables */ "./src/handlers/shared/update-pivot-tables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePivotTables", function() { return _src_handlers_shared_update_pivot_tables__WEBPACK_IMPORTED_MODULE_7__["UpdatePivotTables"]; });












/***/ }),

/***/ "./src/crud-config.ts":
/*!****************************!*\
  !*** ./src/crud-config.ts ***!
  \****************************/
/*! exports provided: CrudConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudConfig", function() { return CrudConfig; });
/* harmony import */ var ts_express_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-express-controller */ "ts-express-controller");
/* harmony import */ var ts_express_controller__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_express_controller__WEBPACK_IMPORTED_MODULE_0__);


var CrudConfig = (function () {
    function CrudConfig() {
    }
    CrudConfig.setControllerConfig = function (name, description, version) {
        ts_express_controller__WEBPACK_IMPORTED_MODULE_0__["ControllerConfig"].packageConfig.packageName = name;
        ts_express_controller__WEBPACK_IMPORTED_MODULE_0__["ControllerConfig"].packageConfig.packageDescription = description;
        ts_express_controller__WEBPACK_IMPORTED_MODULE_0__["ControllerConfig"].packageConfig.packageVersion = version;
    };
    return CrudConfig;
}());



/***/ }),

/***/ "./src/crud-handlers.ts":
/*!******************************!*\
  !*** ./src/crud-handlers.ts ***!
  \******************************/
/*! exports provided: CrudHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudHandlers", function() { return CrudHandlers; });
/* harmony import */ var _promise_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promise_queue */ "./src/promise_queue.ts");
/* harmony import */ var _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/shared/update-object-from-json */ "./src/handlers/shared/update-object-from-json.ts");
/* harmony import */ var _handlers_shared_create_object_from_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/shared/create-object-from-json */ "./src/handlers/shared/create-object-from-json.ts");
/* harmony import */ var _handlers_shared_fetch_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/shared/fetch-object */ "./src/handlers/shared/fetch-object.ts");





var CrudHandlers = (function () {
    function CrudHandlers() {
    }
    CrudHandlers.postFromRequestBody = function (req, model) {
        if (req.body.constructor === Array) {
            var queue = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["PromiseQueue"](1);
            return queue.runAllPromiseFunctions(req.body.map(function (jsonObject) {
                return function () {
                    return new _handlers_shared_create_object_from_json__WEBPACK_IMPORTED_MODULE_2__["CreateObjectFromJson"](model, jsonObject, req.user).run();
                };
            }));
        }
        else {
            return new _handlers_shared_create_object_from_json__WEBPACK_IMPORTED_MODULE_2__["CreateObjectFromJson"](model, req.body, req.user).run();
        }
    };
    CrudHandlers.getObjectById = function (req, model, objectId) {
        return new _handlers_shared_fetch_object__WEBPACK_IMPORTED_MODULE_3__["FetchObject"](req.user, model, objectId, true).run()
            .then(function (object) {
            if (object === null) {
                return Promise.reject({ code: 404, error: model.instanceName + ' not found: ' + objectId });
            }
            else {
                return Promise.resolve(object);
            }
        });
    };
    CrudHandlers.putObject = function (req, model, objectId, transaction) {
        req.body.id = objectId;
        return new _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["UpdateObjectFromJson"](model, req.body, req.user, _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["EUpdateType"].PUT, transaction).run();
    };
    CrudHandlers.patchObject = function (req, model, objectId, transaction) {
        req.body.id = objectId;
        return new _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["UpdateObjectFromJson"](model, req.body, req.user, _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["EUpdateType"].PATCH, transaction).run();
    };
    CrudHandlers.putObjects = function (req, model, transaction) {
        if (req.body.constructor === Array) {
            var queue = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["PromiseQueue"](1);
            return queue.runAllPromiseFunctions(req.body.map(function (jsonObject) {
                return function () {
                    return new _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["UpdateObjectFromJson"](model, jsonObject, req.user, _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["EUpdateType"].PUT, transaction).run();
                };
            }));
        }
        else {
            return new _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["UpdateObjectFromJson"](model, req.body, req.user, _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["EUpdateType"].PUT, transaction).run();
        }
    };
    CrudHandlers.patchObjects = function (req, model, transaction) {
        if (req.body.constructor === Array) {
            var queue = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["PromiseQueue"](1);
            return queue.runAllPromiseFunctions(req.body.map(function (jsonObject) {
                return function () {
                    return new _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["UpdateObjectFromJson"](model, jsonObject, req.user, _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["EUpdateType"].PATCH, transaction).run();
                };
            }));
        }
        else {
            return new _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["UpdateObjectFromJson"](model, req.body, req.user, _handlers_shared_update_object_from_json__WEBPACK_IMPORTED_MODULE_1__["EUpdateType"].PATCH, transaction).run();
        }
    };
    CrudHandlers.deleteObject = function (req, model, objectId) {
        var object;
        return new _handlers_shared_fetch_object__WEBPACK_IMPORTED_MODULE_3__["FetchObject"](req.user, model, objectId, false).run()
            .then(function (o) {
            object = o;
            if (object === null) {
                return Promise.reject({ code: 404, error: model.instanceName + ' not found: ' + objectId });
            }
            else {
                return object.destroyForUser(req.user);
            }
        })
            .then(function () {
            return Promise.resolve();
        });
    };
    CrudHandlers.setObjectDeleted = function (req, model, objectId) {
        return new _handlers_shared_fetch_object__WEBPACK_IMPORTED_MODULE_3__["FetchObject"](req.user, model, objectId, false).run()
            .then(function (object) {
            if (object === null) {
                return Promise.reject({ code: 404, error: model.instanceName + ' not found: ' + objectId });
            }
            else {
                object.deleted = true;
                return object.saveForUser(req.user);
            }
        });
    };
    CrudHandlers.setObjectUndeleted = function (req, model, objectId) {
        return new _handlers_shared_fetch_object__WEBPACK_IMPORTED_MODULE_3__["FetchObject"](req.user, model, objectId, false).run()
            .then(function (object) {
            if (object === null) {
                return Promise.reject({ code: 404, error: model.instanceName + ' not found: ' + objectId });
            }
            else {
                object.deleted = false;
                return object.saveForUser(req.user);
            }
        });
    };
    return CrudHandlers;
}());

/**
 * Worker method for PUT
 *
 * @param model
 * @param jsonObject
 * @param req
 * @param transaction
 * @returns {Promise|*}
 */
// export function handlePutForJsonObject<T extends PostgresModel<T>>(model: IPostgresModelClass<T>, jsonObject: any, req: IUserRequest, transaction?: Transaction): Promise<T> {
//   if (jsonObject.id === undefined || jsonObject.id === '') {
//     return handlePostForJsonObject(model, jsonObject, req);
//   } else {
//     return fetchObjectForRequest(req, model, jsonObject.id)
//     .then(object => {
//       if (object === null) {
//         return Promise.reject({code: 404, error: model.instanceName + ' not found: ' + jsonObject.id});
//       } else {
//         if (transaction){
//           return object.updateWithParams(jsonObject,req, {transacting: transaction});
//         } else {
//           return object.updateWithParams(jsonObject,req);
//         }
//       }
//     })
//     .then(object => {
//       if (req.query.p === undefined) {
//         return Promise.resolve(object);
//       } else {
//         return validateFetchOptions(model, req.query.p)
//         .then((fetchOptions: any) => {
//           return new model().where({id: object.id}).fetchForUser(req, {withRelated: fetchOptions});
//         });
//       }
//     });
//   }
// }
/**
 * Worker method for POST
 *
 * @param model
 * @param jsonObject
 * @param req
 * @returns {Promise|*}
 */
// function handlePostForJsonObject<T extends PostgresModel<T>>(model: IPostgresModelClass<T>, jsonObject: any, req: IUserRequest) {
//   // if (!req.user){
//   //   return Promise.reject({code: 500, error: 'Request had no user.'});
//   // } else {
//     jsonObject = jsonObject || {};
//     // if (((new model().columns) as any)['userId']) {
//     //   jsonObject.userId = jsonObject.userId || req.user.id;
//     // }
//     const object = new model();
//     return object.updateWithParams(jsonObject, req.user)
//     .then(savedObject => {
//       if (req.query.p === undefined) {
//         return Promise.resolve(savedObject);
//       } else {
//         return validateFetchOptions(model, req.query.p)
//         .then((fetchOptions: any) => {
//           return new model().where({id: object.id}).fetchForUser(req.user, {withRelated: fetchOptions});
//         });
//       }
//     });
//   // }
// }
/**
 * Fetch an object for a req.
 *
 * @param req
 * @param model
 * @param id
 * @param [fetchParams] - Fetch options
 * @returns {*|Promise.<Model|null>}
 */
// export function fetchObjectForRequest<T extends PostgresModel<T>>(req: IUserRequest, model: IPostgresModelClass<T>, id: number, fetchParams?: any) {
//   let query = new model().where({id});
//   return query.fetchForUser(req, fetchParams);
// }


/***/ }),

/***/ "./src/crud-routes.ts":
/*!****************************!*\
  !*** ./src/crud-routes.ts ***!
  \****************************/
/*! exports provided: GetRoute, PostRoute, PutByIdRoute, PatchByIdRoute, MultiPutRoute, MultiPatchRoute, DeleteRoute, QueryRoute, MarkDeletedRoute, MarkUndeletedRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoute", function() { return GetRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRoute", function() { return PostRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutByIdRoute", function() { return PutByIdRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatchByIdRoute", function() { return PatchByIdRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiPutRoute", function() { return MultiPutRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiPatchRoute", function() { return MultiPatchRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRoute", function() { return DeleteRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryRoute", function() { return QueryRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkDeletedRoute", function() { return MarkDeletedRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkUndeletedRoute", function() { return MarkUndeletedRoute; });
/* harmony import */ var _crud_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-handlers */ "./src/crud-handlers.ts");
/* harmony import */ var ts_express_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-express-controller */ "ts-express-controller");
/* harmony import */ var ts_express_controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _handlers_get_get_all_objects_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/get/get-all-objects-handler */ "./src/handlers/get/get-all-objects-handler.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import {PostgresModel, IPostgresModelClass} from '../../models/shared/base';
// import {IUserRequest} from '../../util/auth';
// import {Controller, Response} from './base';



/**
 * Default GET by ID
 */
var GetRoute = (function (_super) {
    __extends(GetRoute, _super);
    function GetRoute(_type, idParamName) {
        var _this = _super.call(this, {
            routeParams: [idParamName]
        }) || this;
        _this._type = _type;
        _this.idParamName = idParamName;
        return _this;
    }
    GetRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].getObjectById(req, this._type, params[this.idParamName]);
    };
    return GetRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

/**
 * Default POST from request JSON body
 */
var PostRoute = (function (_super) {
    __extends(PostRoute, _super);
    function PostRoute(_type) {
        var _this = _super.call(this) || this;
        _this._type = _type;
        return _this;
    }
    PostRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].postFromRequestBody(req, this._type);
    };
    return PostRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

/**
 * Default PUT by ID from request JSON body
 */
var PutByIdRoute = (function (_super) {
    __extends(PutByIdRoute, _super);
    function PutByIdRoute(_type, idParamName) {
        var _this = _super.call(this, {
            routeParams: [idParamName]
        }) || this;
        _this._type = _type;
        _this.idParamName = idParamName;
        return _this;
    }
    PutByIdRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].putObject(req, this._type, params[this.idParamName]);
    };
    return PutByIdRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

/**
 * Default PATCH by ID from request JSON body
 */
var PatchByIdRoute = (function (_super) {
    __extends(PatchByIdRoute, _super);
    function PatchByIdRoute(_type, idParamName) {
        var _this = _super.call(this, {
            routeParams: [idParamName]
        }) || this;
        _this._type = _type;
        _this.idParamName = idParamName;
        return _this;
    }
    PatchByIdRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].patchObject(req, this._type, params[this.idParamName]);
    };
    return PatchByIdRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

/**
 * Default PUT by ID from request JSON body
 */
var MultiPutRoute = (function (_super) {
    __extends(MultiPutRoute, _super);
    function MultiPutRoute(_type) {
        var _this = _super.call(this) || this;
        _this._type = _type;
        return _this;
    }
    MultiPutRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].putObjects(req, this._type);
    };
    return MultiPutRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

/**
 * Default PUT by ID from request JSON body
 */
var MultiPatchRoute = (function (_super) {
    __extends(MultiPatchRoute, _super);
    function MultiPatchRoute(_type) {
        var _this = _super.call(this) || this;
        _this._type = _type;
        return _this;
    }
    MultiPatchRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].patchObjects(req, this._type);
    };
    return MultiPatchRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

/**
 * Default DELETE by ID
 */
var DeleteRoute = (function (_super) {
    __extends(DeleteRoute, _super);
    function DeleteRoute(_type, idParamName) {
        var _this = _super.call(this, {
            routeParams: [idParamName]
        }) || this;
        _this._type = _type;
        _this.idParamName = idParamName;
        return _this;
    }
    DeleteRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].deleteObject(req, this._type, params[this.idParamName]);
    };
    return DeleteRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

/**
 * Default Query for all objects of a type
 */
var QueryRoute = (function (_super) {
    __extends(QueryRoute, _super);
    function QueryRoute(_type, fetchParams, _allowDeleted) {
        var _this = _super.call(this) || this;
        _this._type = _type;
        _this.fetchParams = fetchParams;
        _this._allowDeleted = _allowDeleted;
        return _this;
    }
    QueryRoute.prototype.handleRequest = function (params, req, res) {
        return new _handlers_get_get_all_objects_handler__WEBPACK_IMPORTED_MODULE_2__["GetAllObjectsHandler"](req, this._type, this.fetchParams, this._allowDeleted).run();
    };
    return QueryRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

var MarkDeletedRoute = (function (_super) {
    __extends(MarkDeletedRoute, _super);
    function MarkDeletedRoute(_type, idParamName) {
        var _this = _super.call(this, {
            routeParams: [idParamName]
        }) || this;
        _this._type = _type;
        _this.idParamName = idParamName;
        return _this;
    }
    MarkDeletedRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].setObjectDeleted(req, this._type, params[this.idParamName]);
    };
    return MarkDeletedRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));

var MarkUndeletedRoute = (function (_super) {
    __extends(MarkUndeletedRoute, _super);
    function MarkUndeletedRoute(_type, idParamName) {
        var _this = _super.call(this, {
            routeParams: [idParamName]
        }) || this;
        _this._type = _type;
        _this.idParamName = idParamName;
        return _this;
    }
    MarkUndeletedRoute.prototype.handleRequest = function (params, req, res) {
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].setObjectUndeleted(req, this._type, params[this.idParamName]);
    };
    return MarkUndeletedRoute;
}(ts_express_controller__WEBPACK_IMPORTED_MODULE_1__["Controller"]));



/***/ }),

/***/ "./src/handlers/get/get-all-objects-handler.ts":
/*!*****************************************************!*\
  !*** ./src/handlers/get/get-all-objects-handler.ts ***!
  \*****************************************************/
/*! exports provided: GetAllObjectsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllObjectsHandler", function() { return GetAllObjectsHandler; });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler */ "./src/handlers/handler.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var GetAllObjectsHandler = (function (_super) {
    __extends(GetAllObjectsHandler, _super);
    function GetAllObjectsHandler(req, model, fetchParams, allowDeleted) {
        var _this = _super.call(this) || this;
        _this.req = req;
        _this.model = model;
        _this.fetchParams = fetchParams;
        _this.allowDeleted = allowDeleted;
        return _this;
    }
    GetAllObjectsHandler.prototype.run = function () {
        var query = this.allowDeleted ? {} : { deleted: false };
        return new this.model().where(query).fetchAllForUser(this.req.user, this.fetchParams)
            .then(function (objects) {
            return Promise.resolve(objects.toJSON());
        });
    };
    return GetAllObjectsHandler;
}(_handler__WEBPACK_IMPORTED_MODULE_0__["Handler"]));



/***/ }),

/***/ "./src/handlers/handler.ts":
/*!*********************************!*\
  !*** ./src/handlers/handler.ts ***!
  \*********************************/
/*! exports provided: Handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handler", function() { return Handler; });

var Handler = (function () {
    function Handler() {
    }
    return Handler;
}());



/***/ }),

/***/ "./src/handlers/shared/create-object-from-json.ts":
/*!********************************************************!*\
  !*** ./src/handlers/shared/create-object-from-json.ts ***!
  \********************************************************/
/*! exports provided: CreateObjectFromJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObjectFromJson", function() { return CreateObjectFromJson; });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler */ "./src/handlers/handler.ts");
/* harmony import */ var _fetch_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-object */ "./src/handlers/shared/fetch-object.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CreateObjectFromJson = (function (_super) {
    __extends(CreateObjectFromJson, _super);
    function CreateObjectFromJson(model, jsonObject, requestingUser, transaction, populationString) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.jsonObject = jsonObject;
        _this.requestingUser = requestingUser;
        _this.transaction = transaction;
        _this.populationString = populationString;
        _this.jsonObject = jsonObject || {};
        return _this;
    }
    CreateObjectFromJson.prototype.run = function () {
        var _this = this;
        var object = new this.model();
        return Promise.resolve()
            .then(function () {
            if (_this.transaction) {
                return object.updateWithParams(_this.jsonObject, _this.requestingUser);
            }
            else {
                return object.updateWithParams(_this.jsonObject, _this.requestingUser, { transacting: _this.transaction });
            }
        })
            .then(function (savedObject) {
            if (_this.populationString === undefined) {
                return Promise.resolve(savedObject);
            }
            else {
                return new _fetch_object__WEBPACK_IMPORTED_MODULE_1__["FetchObject"](_this.requestingUser, _this.model, _this.jsonObject.id, true, _this.populationString).run();
            }
        });
    };
    return CreateObjectFromJson;
}(_handler__WEBPACK_IMPORTED_MODULE_0__["Handler"]));



/***/ }),

/***/ "./src/handlers/shared/fetch-object.ts":
/*!*********************************************!*\
  !*** ./src/handlers/shared/fetch-object.ts ***!
  \*********************************************/
/*! exports provided: FetchObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchObject", function() { return FetchObject; });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler */ "./src/handlers/handler.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FetchObject = (function (_super) {
    __extends(FetchObject, _super);
    function FetchObject(requestingUser, model, objectId, allowQueryPopulation, fetchParams, populationString) {
        var _this = _super.call(this) || this;
        _this.requestingUser = requestingUser;
        _this.model = model;
        _this.objectId = objectId;
        _this.allowQueryPopulation = allowQueryPopulation;
        _this.fetchParams = fetchParams;
        _this.populationString = populationString;
        _this.fetchParams = fetchParams || {};
        if (!_this.fetchParams.withRelated) {
            _this.fetchParams.withRelated = [];
        }
        return _this;
    }
    FetchObject.prototype.run = function () {
        var _this = this;
        if (this.allowQueryPopulation && this.populationString) {
            return validateFetchOptions(this.model, this.populationString)
                .then(function (fetchOptions) {
                fetchOptions.forEach(function (option) {
                    _this.fetchParams.withRelated.push(option);
                });
                return _this.doQuery();
            });
        }
        else {
            return this.doQuery();
        }
    };
    FetchObject.prototype.doQuery = function () {
        return new this.model().where({ id: this.objectId }).fetchForUser(this.requestingUser, this.fetchParams);
    };
    return FetchObject;
}(_handler__WEBPACK_IMPORTED_MODULE_0__["Handler"]));

/**
 * Validate the fetch parameters specified in population-enabled routes.
 *
 * @param model
 * @param fetchOptionsString
 * @returns {*}
 */
function validateFetchOptions(model, fetchOptionsString) {
    // console.log("Validating fetch options for " + model.model.MODEL_NAME + ": " + fetchOptionsString);
    if (!fetchOptionsString) {
        return Promise.resolve([]);
    }
    else {
        return parseFetchOptions(fetchOptionsString)
            .then(function (fetchOptions) {
            if (typeof fetchOptions === 'string') {
                if (!isValidRelationship(model, fetchOptions)) {
                    return Promise.reject({
                        code: 400,
                        error: 'Invalid population for ' + model.constructor.name + ': ' + fetchOptions
                    });
                }
                else {
                    return Promise.resolve([fetchOptions]);
                }
            }
            else {
                return Promise.all(fetchOptions.map(function (fetchOption) {
                    if (!isValidRelationship(model, fetchOption)) {
                        return Promise.reject({
                            code: 400,
                            error: 'Invalid population for ' + model.constructor.name + ': ' + fetchOption
                        });
                    }
                    else {
                        return Promise.resolve();
                    }
                }))
                    .then(function () {
                    return Promise.resolve(fetchOptions);
                });
            }
        });
    }
    function isValidRelationship(testModel, testRelationship) {
        if (!testModel.relationships) {
            return false;
        }
        else {
            var isValid_1 = false;
            Object.values(testModel.relationships).forEach(function (relationship) {
                if (relationship === testRelationship) {
                    isValid_1 = true;
                }
            });
            return isValid_1;
        }
    }
}
/**
 * Convert a fetch options string from the URL into a JSON object.
 *
 * @param fetchOptionsString
 * @returns {*}
 */
function parseFetchOptions(fetchOptionsString) {
    return new Promise(function (resolve, reject) {
        try {
            var options = JSON.parse(fetchOptionsString);
            if (options.constructor !== String && options.constructor !== Array) {
                reject('Invalid JSON type for fetch options: ' + options.constructor.name);
            }
            else {
                resolve(options);
            }
        }
        catch (err) {
            reject('Invalid JSON for fetch options: ' + fetchOptionsString + ' - ' + err.message);
        }
    });
}


/***/ }),

/***/ "./src/handlers/shared/update-object-from-json.ts":
/*!********************************************************!*\
  !*** ./src/handlers/shared/update-object-from-json.ts ***!
  \********************************************************/
/*! exports provided: EUpdateType, UpdateObjectFromJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUpdateType", function() { return EUpdateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateObjectFromJson", function() { return UpdateObjectFromJson; });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler */ "./src/handlers/handler.ts");
/* harmony import */ var _create_object_from_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-object-from-json */ "./src/handlers/shared/create-object-from-json.ts");
/* harmony import */ var _fetch_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch-object */ "./src/handlers/shared/fetch-object.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var EUpdateType;
(function (EUpdateType) {
    EUpdateType[EUpdateType["PUT"] = 0] = "PUT";
    EUpdateType[EUpdateType["PATCH"] = 1] = "PATCH";
})(EUpdateType = EUpdateType || (EUpdateType = {}));
var UpdateObjectFromJson = (function (_super) {
    __extends(UpdateObjectFromJson, _super);
    function UpdateObjectFromJson(model, jsonObject, requestingUser, updateType, transaction, populationString) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.jsonObject = jsonObject;
        _this.requestingUser = requestingUser;
        _this.updateType = updateType;
        _this.transaction = transaction;
        _this.populationString = populationString;
        return _this;
    }
    UpdateObjectFromJson.prototype.run = function () {
        var _this = this;
        if (this.jsonObject.id === undefined || this.jsonObject.id === '') {
            return new _create_object_from_json__WEBPACK_IMPORTED_MODULE_1__["CreateObjectFromJson"](this.model, this.jsonObject, this.requestingUser, this.transaction, this.populationString).run();
        }
        else {
            return new _fetch_object__WEBPACK_IMPORTED_MODULE_2__["FetchObject"](this.requestingUser, this.model, this.jsonObject.id, false).run()
                .then(function (object) {
                if (object === null) {
                    return Promise.reject({ code: 404, error: _this.model.instanceName + ' not found: ' + _this.jsonObject.id });
                }
                else {
                    // For PUT requests, we want to clear out any existing data, then update from the request
                    if (_this.updateType === EUpdateType.PUT) {
                        Object.values(object.columns).forEach(function (columnName) {
                            delete object[columnName];
                        });
                    }
                    if (_this.transaction) {
                        return object.updateWithParams(_this.jsonObject, _this.requestingUser, { transacting: _this.transaction });
                    }
                    else {
                        return object.updateWithParams(_this.jsonObject, _this.requestingUser);
                    }
                }
            })
                .then(function (object) {
                if (_this.populationString === undefined) {
                    return Promise.resolve(object);
                }
                else {
                    return new _fetch_object__WEBPACK_IMPORTED_MODULE_2__["FetchObject"](_this.requestingUser, _this.model, _this.jsonObject.id, true, _this.populationString).run();
                }
            });
        }
    };
    return UpdateObjectFromJson;
}(_handler__WEBPACK_IMPORTED_MODULE_0__["Handler"]));



/***/ }),

/***/ "./src/handlers/shared/update-pivot-tables.ts":
/*!****************************************************!*\
  !*** ./src/handlers/shared/update-pivot-tables.ts ***!
  \****************************************************/
/*! exports provided: UpdatePivotTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePivotTables", function() { return UpdatePivotTables; });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handler */ "./src/handlers/handler.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

//
//    Item    <->     Pivot       <->       Foreign
//    * id            * id                  * id
//    * "foreigns"    * item id
//                    * foreign id
var UpdatePivotTables = (function (_super) {
    __extends(UpdatePivotTables, _super);
    function UpdatePivotTables(user, objectJson, localObjectId, pivotConfig, transaction) {
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.objectJson = objectJson;
        _this.localObjectId = localObjectId;
        _this.pivotConfig = pivotConfig;
        _this.transaction = transaction;
        return _this;
    }
    UpdatePivotTables.prototype.run = function () {
        // console.log('updating pivot table for ' + pivotConfig.foreignArrayPropertyName);
        var _this = this;
        var desiredForeignObjects = this.objectJson[this.pivotConfig.foreignArrayPropertyName];
        // console.log('User desires ' + desiredForeignObjects.length + ' pivot entries');
        if (!desiredForeignObjects) {
            return Promise.resolve();
        }
        else if (desiredForeignObjects.constructor !== Array) {
            return Promise.reject({ code: 500, error: 'Cant update non-array pivot table property: ' + this.pivotConfig.foreignArrayPropertyName + ' - found ' + desiredForeignObjects.constructor.name });
        }
        else {
            // 1.  Fetch all objects currently in pivot table
            var pivotQuery = {};
            pivotQuery[this.pivotConfig.pivotKeyLocalItemId] = this.localObjectId;
            return new this.pivotConfig.pivotModel().where(pivotQuery).fetchAllForUser(this.user)
                .then(function (currentPivotEntries) {
                var foreignObjectsToAdd = [];
                var pivotEntriesToRemove = [];
                // 2.  Create new pivot table objects for ones not found
                desiredForeignObjects.forEach(function (desiredForeignObject) {
                    var found = false;
                    currentPivotEntries.forEach(function (pivotEntry) {
                        if (pivotEntry.id === desiredForeignObject.id) {
                            found = true;
                        }
                    });
                    if (!found) {
                        foreignObjectsToAdd.push(desiredForeignObject);
                    }
                });
                // 3.  Delete pivot table objects for ones not found
                currentPivotEntries.forEach(function (pivotEntry) {
                    var found = false;
                    desiredForeignObjects.forEach(function (desiredPivotEntry) {
                        if (pivotEntry.id === desiredPivotEntry.id) {
                            found = true;
                        }
                    });
                    if (!found) {
                        pivotEntriesToRemove.push(pivotEntry);
                    }
                });
                // console.log('We need to add ' + foreignObjectsToAdd.length + ' entries and remove ' + pivotEntriesToRemove.length + ' entries.');
                return Promise.all([
                    createPivotEntries(_this.user, _this.localObjectId, _this.pivotConfig, foreignObjectsToAdd, _this.transaction),
                    removePivotEntries(_this.user, _this.pivotConfig, pivotEntriesToRemove, _this.transaction)
                ]);
            })
                .then(function () {
                return Promise.resolve();
            });
        }
    };
    return UpdatePivotTables;
}(_handler__WEBPACK_IMPORTED_MODULE_0__["Handler"]));

function createPivotEntries(user, localObjectId, pivotConfig, foreignObjectsToAdd, transaction) {
    return Promise.all(foreignObjectsToAdd.map(function (foreignObjectToAdd) {
        // console.log('creating new pivot entry for foreign object: ' + JSON.stringify(foreignObjectToAdd));
        var pivotEntry = new pivotConfig.pivotModel();
        pivotEntry[pivotConfig.pivotKeyForeignItemId] = foreignObjectToAdd.id;
        pivotEntry[pivotConfig.pivotKeyLocalItemId] = localObjectId;
        // console.log('Created ' + JSON.stringify(pivotEntry));
        if (transaction) {
            return pivotEntry.saveForUser(user, { transacting: transaction });
        }
        else {
            return pivotEntry.saveForUser(user);
        }
    }));
}
function removePivotEntries(user, pivotConfig, pivotEntriesToRemove, transaction) {
    return Promise.all(pivotEntriesToRemove.map(function (pivotEntry) {
        if (transaction) {
            return pivotEntry.destroyForUser(user, { transacting: transaction });
        }
        else {
            return pivotEntry.destroyForUser(user);
        }
    }));
}


/***/ }),

/***/ "./src/promise_queue.ts":
/*!******************************!*\
  !*** ./src/promise_queue.ts ***!
  \******************************/
/*! exports provided: PromiseQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseQueue", function() { return PromiseQueue; });
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p-queue */ "p-queue");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p_queue__WEBPACK_IMPORTED_MODULE_0__);


var PromiseQueue = (function () {
    function PromiseQueue(maxConcurrent) {
        this.queue = new p_queue__WEBPACK_IMPORTED_MODULE_0__({ concurrency: maxConcurrent });
    }
    PromiseQueue.prototype.add = function (promiseFunction) {
        return this.queue.add(promiseFunction);
    };
    PromiseQueue.prototype.runAllPromiseFunctions = function (promiseFunctions) {
        var _this = this;
        if (!promiseFunctions) {
            return Promise.reject('promiseFunctions was not supplied');
        }
        else if (promiseFunctions.length === 0) {
            return Promise.resolve();
        }
        else {
            var addedPromises_1 = [];
            promiseFunctions.forEach(function (promiseFunction) {
                // console.log("Adding promiseFunction to queue...");
                addedPromises_1.push(_this.add(promiseFunction));
            });
            return new Promise(function (resolve, reject) {
                Promise.all(addedPromises_1)
                    .then(function (results) {
                    // console.log("All promises resolved.");
                    resolve(results);
                })
                    .catch(function (err) {
                    // console.log("Queue promise failed...");
                    reject(err);
                });
            });
            // return Q.all(addedPromises);
        }
    };
    return PromiseQueue;
}());



/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.ts */"./index.ts");


/***/ }),

/***/ "p-queue":
/*!**************************!*\
  !*** external "p-queue" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("p-queue");

/***/ }),

/***/ "ts-express-controller":
/*!****************************************!*\
  !*** external "ts-express-controller" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-express-controller");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map