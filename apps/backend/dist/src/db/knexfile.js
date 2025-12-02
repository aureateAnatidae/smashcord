import { SeedSource } from "./SeedSource.js";
import knex from "knex";
// TODO: https://knexjs.org/guide/#log
export var config = {
    client: "better-sqlite3",
    connection: {
        filename: "./bot_data.db"
    },
    seeds: {
        seedSource: new SeedSource()
    },
    useNullAsDefault: true
};
export var knexDb = knex(config);
