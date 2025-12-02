// General utilities for generating mock data
import { faker } from "@faker-js/faker";
import { ssbu_character_names } from "../../seeds/SSBUCharacters.js";
export var snowflake = function() {
    return faker.string.numeric({
        length: 18
    });
};
export var randint = function(max) {
    return Math.floor(Math.random() * max);
};
export var rand_character_array = function() {
    return Array.from({
        length: 1 + randint(4)
    }, function() {
        return ssbu_character_names[randint(ssbu_character_names.length)];
    });
};
