import { MockSeedSource } from "./MockSeedSource.js";
import knex from "knex";
export var test_config = {
    client: "better-sqlite3",
    connection: {
        filename: ":memory:"
    },
    seeds: {
        seedSource: new MockSeedSource()
    },
    useNullAsDefault: true
};
export var test_knexDb = knex(test_config);
