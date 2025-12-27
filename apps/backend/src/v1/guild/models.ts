import type { Knex } from "knex";
import { z } from "zod";

export const GuildSeasonRecord = z.object({
    season_id: z.int(),
    guild_id: z.string(),
    start_at: z.iso.datetime(),
    end_at: z.iso.datetime(),
});
export type GuildSeasonRecord = z.infer<typeof GuildSeasonRecord>;
export const GuildSeasonRecordTable = {
    table_name: "GuildSeason",
    initialize(table: Knex.TableBuilder) {
        table.primary(["season_id", "guild_id"]);

        table.increments("season_id");
        table.string("guild_id");

        table.dateTime("start_at");
        table.dateTime("end_at");
    },
};
