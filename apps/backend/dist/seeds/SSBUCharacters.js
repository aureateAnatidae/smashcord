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
export var ssbu_character_names = [
    "Mario",
    "Donkey Kong",
    "Link",
    "Samus",
    "Dark Samus",
    "Yoshi",
    "Kirby",
    "Fox",
    "Pikachu",
    "Luigi",
    "Ness",
    "Captain Falcon",
    "Jigglypuff",
    "Peach",
    "Daisy",
    "Bowser",
    "Ice Climbers",
    "Sheik",
    "Zelda",
    "Dr. Mario",
    "Pichu",
    "Falco",
    "Marth",
    "Lucina",
    "Young Link",
    "Ganondorf",
    "Mewtwo",
    "Roy",
    "Chrom",
    "Mr. Game & Watch",
    "Meta Knight",
    "Pit",
    "Dark Pit",
    "Zero Suit Samus",
    "Wario",
    "Snake",
    "Ike",
    "Pokémon Trainer",
    "Diddy Kong",
    "Lucas",
    "Sonic",
    "King Dedede",
    "Olimar",
    "Lucario",
    "R.O.B.",
    "Toon Link",
    "Wolf",
    "Villager",
    "Mega Man",
    "Wii Fit Trainer",
    "Rosalina & Luma",
    "Little Mac",
    "Greninja",
    "Mii Brawler",
    "Mii Swordfigher",
    "Mii Gunner",
    "Palutena",
    "Pac-Man",
    "Robin",
    "Shulk",
    "Bowser Jr.",
    "Duck Hunt Duo",
    "Ryu",
    "Ken",
    "Cloud",
    "Corrin",
    "Bayonetta",
    "Inkling",
    "Ridley",
    "Simon",
    "Richter",
    "King K. Rool",
    "Isabelle",
    "Incineroar",
    "Piranha Plant",
    "Joker",
    "Hero",
    "Banjo & Kazooie",
    "Terry",
    "Byleth",
    "Min Min",
    "Steve/Alex",
    "Sephiroth",
    "Pyra/Mythra",
    "Kazuya",
    "Sora"
];
export function seed(knex) {
    return _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        knex("SSBUChar").del()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        knex("SSBUChar").insert(ssbu_character_names.map(function(character_name) {
                            return {
                                character_name: character_name
                            };
                        }))
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    })();
}
