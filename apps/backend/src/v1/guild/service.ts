import type { GuildSeasonRecord } from "@v1/guild/models";
import type { Knex } from "knex";

/** Find the `season_id` of the current Seasons of a Guild with a `guild_id` */
export async function getCurrentGuildSeasons(
    guild_id: string,
    db: Knex,
): Promise<Array<GuildSeasonRecord>> {
    return await db<GuildSeasonRecord>("GuildSeason")
        .select()
        .where({ guild_id })
        .where(db.fn.now(), "<=", "end_at")
        .where(db.fn.now(), ">=", "start_at");
}
