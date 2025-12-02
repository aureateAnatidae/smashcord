function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
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
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { knexDb } from "./knexfile.js";
import { MatchCharacterTable, MatchPlayerTable, MatchTable, SSBUCharTable } from "../v1/match/models.js";
import { MatchWinnerView } from "../v1/match/views.js";
import pino from "pino";
var log = pino();
var tables = [
    MatchTable,
    MatchPlayerTable,
    MatchCharacterTable,
    SSBUCharTable
];
var views = [
    MatchWinnerView
];
function create_table_if_notexists(_0, _1) {
    return _async_to_generator(function() {
        var db, tableName, callback, exists;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    db = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : knexDb, tableName = _arguments.length > 1 ? _arguments[1] : void 0, callback = _arguments.length > 2 ? _arguments[2] : void 0;
                    return [
                        4,
                        db.schema.hasTable(tableName)
                    ];
                case 1:
                    exists = _state.sent();
                    if (!!exists) return [
                        3,
                        3
                    ];
                    log.info("".concat(tableName, " table not found. Creating table for ").concat(tableName, "."));
                    return [
                        4,
                        db.schema.createTable(tableName, callback)
                    ];
                case 2:
                    _state.sent();
                    log.info("".concat(tableName, " table successfully initialized."));
                    return [
                        3,
                        4
                    ];
                case 3:
                    log.info("Database already contains ".concat(tableName, " table. Skipping initialization."));
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
export function init_tables() {
    return _async_to_generator(function() {
        var db, trx, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, table, err;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    db = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : knexDb;
                    return [
                        4,
                        db.transaction()
                    ];
                case 1:
                    trx = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        7,
                        8,
                        9
                    ]);
                    _iterator = tables[Symbol.iterator]();
                    _state.label = 3;
                case 3:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        6
                    ];
                    table = _step.value;
                    return [
                        4,
                        create_table_if_notexists(trx, table.table_name, table.initialize)
                    ];
                case 4:
                    _state.sent();
                    _state.label = 5;
                case 5:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        4,
                        trx.seed.run()
                    ];
                case 10:
                    _state.sent();
                    return [
                        4,
                        trx.commit()
                    ];
                case 11:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
export function init_views() {
    return _async_to_generator(function() {
        var db, trx, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _view, view, err;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    db = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : knexDb;
                    return [
                        4,
                        db.transaction()
                    ];
                case 1:
                    trx = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        7,
                        8,
                        9
                    ]);
                    _iterator = views[Symbol.iterator]();
                    _state.label = 3;
                case 3:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        6
                    ];
                    _view = _step.value;
                    view = _view(db);
                    return [
                        4,
                        trx.schema.createViewOrReplace(view.view_name, view.initialize)
                    ];
                case 4:
                    _state.sent();
                    log.info("".concat(view.view_name, " view successfully initialized."));
                    _state.label = 5;
                case 5:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        4,
                        trx.commit()
                    ];
                case 10:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
export function teardown() {
    return _async_to_generator(function() {
        var db, trx, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, table, err;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    db = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : knexDb;
                    if (process.env.NODE_ENV === "production") {
                        log.error("`teardown` was called on a production database -- no action will be performed");
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        db.transaction()
                    ];
                case 1:
                    trx = _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        7,
                        8,
                        9
                    ]);
                    _iterator = tables[Symbol.iterator]();
                    _state.label = 3;
                case 3:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        6
                    ];
                    table = _step.value;
                    return [
                        4,
                        trx.schema.dropTableIfExists(table.table_name)
                    ];
                case 4:
                    _state.sent();
                    _state.label = 5;
                case 5:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        4,
                        trx.commit()
                    ];
                case 10:
                    _state.sent();
                    log.info("Successfully performed `teardown` on database");
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
