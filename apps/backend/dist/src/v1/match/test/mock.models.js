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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
import { randint, snowflake } from "../../../test/mock.js";
export var mock_MatchRecord = function(match_record) {
    return _object_spread({
        guild_id: snowflake()
    }, match_record);
};
export var mock_MatchPlayerRecord = function(match_player_record) {
    return _object_spread({
        match_id: randint(1000),
        user_id: snowflake(),
        win_count: randint(50)
    }, match_player_record);
};
export var mock_MatchCharacterRecord = function(match_character_record) {
    return _object_spread({
        user_id: snowflake(),
        figther_number: randint(87)
    }, match_character_record);
};
export function seed(knex) {
    return _async_to_generator(function() {
        var guild_id, user_id_list, possible_pairs, i, j, _, pair, max_score, scores, match_id, swap, swap_score, swap_user_id;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Ten total players, one hundred games between them in a single guild.
                    guild_id = snowflake();
                    user_id_list = Array.from({
                        length: 10
                    }, snowflake);
                    // Generate all distinct pairs (i,j); i != j of users
                    possible_pairs = [];
                    for(i = 0; i < 10; i++){
                        for(j = i + 1; j < 10; j++){
                            possible_pairs.push([
                                i,
                                j
                            ]);
                        }
                    }
                    _ = 0;
                    _state.label = 1;
                case 1:
                    if (!(_ < 40)) return [
                        3,
                        6
                    ];
                    pair = possible_pairs[randint(possible_pairs.length)];
                    max_score = 1 + 2 * randint(25);
                    scores = function(w) {
                        return [
                            w,
                            randint(w)
                        ];
                    }(randint(max_score) + 1);
                    return [
                        4,
                        knex("Match").insert({
                            guild_id: guild_id
                        })
                    ];
                case 2:
                    match_id = _state.sent()[0];
                    // Randomize who gets inserted first
                    // Randomize who gets the winning score
                    swap = randint(4);
                    swap_score = Math.floor(swap / 2);
                    swap_user_id = Number(swap % 2 === 0);
                    return [
                        4,
                        knex("MatchPlayer").insert({
                            match_id: match_id,
                            user_id: user_id_list[pair[swap_user_id]],
                            win_count: scores[swap_score]
                        })
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        knex("MatchPlayer").insert({
                            match_id: match_id,
                            user_id: user_id_list[pair[swap_user_id + 1 % 2]],
                            win_count: scores[swap_score + 1 % 2]
                        })
                    ];
                case 4:
                    _state.sent();
                    _state.label = 5;
                case 5:
                    _++;
                    return [
                        3,
                        1
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    })();
}
