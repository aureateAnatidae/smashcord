import knex, { type Knex } from "knex";

// TODO: https://knexjs.org/guide/#log
export const config: Knex.Config<Knex.Sqlite3ConnectionConfig> = {
    client: "better-sqlite3",
    connection: {
        filename: "./bot_data.db",
    },
    useNullAsDefault: true,
};

export const knexDb: Knex = knex(config);
