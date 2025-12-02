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
import { init_tables, init_views, teardown } from "../../../db/init_tables.js";
import { test_knexDb } from "../../../test/test_knexfile.js";
import { MatchReport } from "../schemas.js";
import { createMatch, createMatchPlayer } from "../service.js";
import { beforeEach, describe, expect, expectTypeOf, test } from "vitest";
var mockMatchReport = MatchReport.parse({
    guild_id: "19283746",
    players: [
        {
            user_id: "12345678",
            win_count: 5,
            character: [
                "Link"
            ]
        },
        {
            user_id: "87654321",
            win_count: 2,
            character: [
                "Kazuya",
                "Cloud"
            ]
        }
    ]
});
describe("Match DB operations", function() {
    beforeEach(function() {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            teardown(test_knexDb)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            init_tables(test_knexDb)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            init_views(test_knexDb)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    });
    describe("Match record operations", function() {
        test("Insert a mock Match record", function() {
            return _async_to_generator(function() {
                var match_id, created_match;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                createMatch(mockMatchReport.guild_id, test_knexDb)
                            ];
                        case 1:
                            match_id = _state.sent();
                            expectTypeOf(match_id, "A Match record is created").toEqualTypeOf;
                            return [
                                4,
                                test_knexDb("Match").first().where({
                                    match_id: match_id
                                })
                            ];
                        case 2:
                            created_match = _state.sent();
                            expectTypeOf(created_match, "When retrieved, a Match record is an instance of MatchRecord").toEqualTypeOf;
                            expect(created_match.guild_id, "When retrieved, the Match record has the same data as is provided").toEqual(mockMatchReport.guild_id);
                            return [
                                2
                            ];
                    }
                });
            })();
        });
    });
    describe("Inserting MatchPlayer records", function() {
        test("Insert a pair of mock MatchPlayer records", function() {
            return _async_to_generator(function() {
                var match_id, created_match_player;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                createMatch(mockMatchReport.guild_id, test_knexDb)
                            ];
                        case 1:
                            match_id = _state.sent();
                            expectTypeOf(match_id, "A MatchPlayer record is created").toEqualTypeOf;
                            return [
                                4,
                                createMatchPlayer(match_id, mockMatchReport.players[0], test_knexDb)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                test_knexDb("MatchPlayer").first().where({
                                    match_id: match_id
                                })
                            ];
                        case 3:
                            created_match_player = _state.sent();
                            expectTypeOf(created_match_player, "When retrieved, a MatchPlayer record is an instance of MatchPlayerRecord").toEqualTypeOf;
                            expect(created_match_player, "When retrieved, the MatchPlayer record has the same data as is provided").toEqual({
                                match_id: match_id,
                                user_id: mockMatchReport.players[0].user_id,
                                win_count: mockMatchReport.players[0].win_count
                            });
                            return [
                                2
                            ];
                    }
                });
            })();
        });
    });
    describe("Illegal insertions of MatchPlayer", function() {
        test.fails("Cannot insert MatchResult where [match_id, user_id] is not unique", function() {
            return _async_to_generator(function() {
                var match_id;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                createMatch(mockMatchReport.guild_id, test_knexDb)
                            ];
                        case 1:
                            match_id = _state.sent();
                            return [
                                4,
                                createMatchPlayer(match_id, mockMatchReport.players[0], test_knexDb)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                createMatchPlayer(match_id, mockMatchReport.players[0], test_knexDb)
                            ];
                        case 3:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            })();
        });
    });
    describe.todo("Cannot insert MatchResult where there is no Match record with matching match_id");
    describe.todo("Inserting MatchCharacter records");
    describe.todo("Verify the created MatchCharacter records");
    describe.todo("Cannot insert MatchCharacter where [match_id, user_id, fighter_number] is not unique");
    describe.todo("Cannot insert MatchCharacter where a fighter_number is not in the SSBUCharTable");
});
