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
/*! exports provided: GetRoute, PostRoute, DeleteRoute, MarkDeletedRoute, MarkUndeletedRoute, MultiPutRoute, MultiPatchRoute, PutByIdRoute, QueryRoute, PatchByIdRoute, CrudHandlers, CrudConfig */
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
    CrudConfig.prototype.setControllerConfig = function (name, description, version) {
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


var CrudHandlers = (function () {
    function CrudHandlers() {
    }
    CrudHandlers.getAllObjects = function (req, model, fetchParams, allowDeleted) {
        var query = allowDeleted ? {} : { deleted: false };
        return new model().where(query).fetchAllForUser(req.user, fetchParams)
            .then(function (objects) {
            return Promise.resolve(objects.toJSON());
        });
    };
    CrudHandlers.postFromRequestBody = function (req, model) {
        if (req.body.constructor === Array) {
            var queue = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["PromiseQueue"](1);
            return queue.runAllPromiseFunctions(req.body.map(function (jsonObject) {
                return function () {
                    return handlePostForJsonObject(model, jsonObject, req);
                };
            }));
        }
        else {
            return handlePostForJsonObject(model, req.body, req);
        }
    };
    CrudHandlers.getObjectById = function (req, model, objectId) {
        return this.fetchObjectForRequest(req, model, objectId)
            .then(function (object) {
            if (object === null) {
                return Promise.reject({ code: 404, error: model.instanceName + ' not found: ' + objectId });
            }
            else {
                return Promise.resolve(object);
            }
        });
    };
    CrudHandlers.putObject = function (req, model, objectId) {
        req.body.id = objectId;
        return this.handlePutForJsonObject(model, req.body, req);
    };
    CrudHandlers.patchObject = function (req, model, objectId) {
        req.body.id = objectId;
        return this.handlePatchForJsonObject(model, req.body, req);
    };
    CrudHandlers.putObjects = function (req, model) {
        var _this = this;
        if (req.body.constructor === Array) {
            var queue = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["PromiseQueue"](1);
            return queue.runAllPromiseFunctions(req.body.map(function (jsonObject) {
                return function () {
                    return _this.handlePutForJsonObject(model, jsonObject, req);
                };
            }));
        }
        else {
            return this.handlePutForJsonObject(model, req.body, req);
        }
    };
    CrudHandlers.patchObjects = function (req, model) {
        var _this = this;
        if (req.body.constructor === Array) {
            var queue = new _promise_queue__WEBPACK_IMPORTED_MODULE_0__["PromiseQueue"](1);
            return queue.runAllPromiseFunctions(req.body.map(function (jsonObject) {
                return function () {
                    return _this.handlePatchForJsonObject(model, jsonObject, req);
                };
            }));
        }
        else {
            return this.handlePatchForJsonObject(model, req.body, req);
        }
    };
    CrudHandlers.deleteObject = function (req, model, objectId) {
        var object;
        return this.fetchObjectForRequest(req, model, objectId, null)
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
        return this.fetchObjectForRequest(req, model, objectId)
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
        return this.fetchObjectForRequest(req, model, objectId, null)
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
    CrudHandlers.handlePutForJsonObject = function (model, jsonObject, req, transaction) {
        if (jsonObject.id === undefined || jsonObject.id === '') {
            return handlePostForJsonObject(model, jsonObject, req);
        }
        else {
            return this.fetchObjectForRequest(req, model, jsonObject.id)
                .then(function (object) {
                if (object === null) {
                    return Promise.reject({ code: 404, error: model.instanceName + ' not found: ' + jsonObject.id });
                }
                else {
                    // For PUT requests, we want to clear out any existing data, then update from the request
                    Object.values(object.columns).forEach(function (columnName) {
                        object[columnName] = null;
                    });
                    if (transaction) {
                        return object.updateWithParams(jsonObject, req.user, { transacting: transaction });
                    }
                    else {
                        return object.updateWithParams(jsonObject, req.user);
                    }
                }
            })
                .then(function (object) {
                if (req.query.p === undefined) {
                    return Promise.resolve(object);
                }
                else {
                    return validateFetchOptions(model, req.query.p)
                        .then(function (fetchOptions) {
                        return new model().where({ id: object.id }).fetchForUser(req.user, { withRelated: fetchOptions });
                    });
                }
            });
        }
    };
    CrudHandlers.handlePatchForJsonObject = function (model, jsonObject, req, transaction) {
        if (jsonObject.id === undefined || jsonObject.id === '') {
            return handlePostForJsonObject(model, jsonObject, req);
        }
        else {
            return this.fetchObjectForRequest(req, model, jsonObject.id)
                .then(function (object) {
                if (object === null) {
                    return Promise.reject({ code: 404, error: model.instanceName + ' not found: ' + jsonObject.id });
                }
                else {
                    if (transaction) {
                        return object.updateWithParams(jsonObject, req.user, { transacting: transaction });
                    }
                    else {
                        return object.updateWithParams(jsonObject, req.user);
                    }
                }
            })
                .then(function (object) {
                if (req.query.p === undefined) {
                    return Promise.resolve(object);
                }
                else {
                    return validateFetchOptions(model, req.query.p)
                        .then(function (fetchOptions) {
                        return new model().where({ id: object.id }).fetchForUser(req.user, { withRelated: fetchOptions });
                    });
                }
            });
        }
    };
    CrudHandlers.fetchObjectForRequest = function (req, model, id, fetchParams) {
        var query = new model().where({ id: id });
        return query.fetchForUser(req.user, fetchParams);
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
function handlePostForJsonObject(model, jsonObject, req) {
    // if (!req.user){
    //   return Promise.reject({code: 500, error: 'Request had no user.'});
    // } else {
    jsonObject = jsonObject || {};
    // if (((new model().columns) as any)['userId']) {
    //   jsonObject.userId = jsonObject.userId || req.user.id;
    // }
    var object = new model();
    return object.updateWithParams(jsonObject, req.user)
        .then(function (savedObject) {
        if (req.query.p === undefined) {
            return Promise.resolve(savedObject);
        }
        else {
            return validateFetchOptions(model, req.query.p)
                .then(function (fetchOptions) {
                return new model().where({ id: object.id }).fetchForUser(req.user, { withRelated: fetchOptions });
            });
        }
    });
    // }
}
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
/**
 * Validate the fetch parameters specified in population-enabled routes.
 *
 * @param model
 * @param fetchOptionsString
 * @returns {*}
 */
function validateFetchOptions(model, fetchOptionsString) {
    // console.log("Validating fetch options for " + model.model.MODEL_NAME + ": " + fetchOptionsString);
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
                return Promise.resolve(fetchOptions);
            }
        }
        else if (fetchOptions instanceof Array) {
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
        else {
            return Promise.reject({
                code: 400,
                error: 'Invalid population for ' + model.constructor.name + ': ' + fetchOptions
            });
        }
    });
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
            resolve(options);
        }
        catch (err) {
            reject('Invalid JSON for fetch options: ' + fetchOptionsString + ' - ' + err.message);
        }
    });
}


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
        return _crud_handlers__WEBPACK_IMPORTED_MODULE_0__["CrudHandlers"].getAllObjects(req, this._type, this.fetchParams, this._allowDeleted);
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