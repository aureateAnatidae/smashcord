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
import { knexDb } from "../../db/knexfile.js";
/** Report a match.
 * Transactionally, create a record in the Match table, then create the matching pair
 * of records in MatchResult table, then the records for the MatchCharacter table.
 */ export function reportMatchResult(_0) {
    return _async_to_generator(function(match_report) {
        var db, trx;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    db = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : knexDb;
                    return [
                        4,
                        db.transaction()
                    ];
                case 1:
                    trx = _state.sent();
                    trx.commit();
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
/** Create a match, returning the incrementing match_id.
 * @param {guild_id} string - The guild in which the match was recorded.
 */ export function createMatch(_0) {
    return _async_to_generator(function(guild_id) {
        var db, match_id;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    db = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : knexDb;
                    return [
                        4,
                        db("Match").insert({
                            guild_id: guild_id
                        })
                    ];
                case 1:
                    match_id = _state.sent();
                    return [
                        2,
                        match_id[0]
                    ];
            }
        });
    }).apply(this, arguments);
}
/** Create a record in MatchPlayer. */ export function createMatchPlayer(_0, _1) {
    return _async_to_generator(function(match_id, match_player) {
        var db, user_id, win_count;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    db = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : knexDb;
                    user_id = match_player.user_id, win_count = match_player.win_count;
                    return [
                        4,
                        db("MatchPlayer").insert({
                            match_id: match_id,
                            user_id: user_id,
                            win_count: win_count
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
/** Create a record in MatchCharacterTable. */ export function createMatchCharacter(_0) {
    return _async_to_generator(function(characters) {
        var db;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    db = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : knexDb;
                    return [
                        4,
                        db("MatchCharacter").insert({})
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }).apply(this, arguments);
}
// Consider some sort of fighly flexible minimal abstraction over SQL so that developer/user can provide any bounds to search in table
export function getMatches(user_id) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2
            ];
        });
    })();
}
export function getMatchesNLast(user_id, n) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2
            ];
        });
    })();
}
export function getMatchesDateRange(user_id, start, end) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2
            ];
        });
    })();
}
