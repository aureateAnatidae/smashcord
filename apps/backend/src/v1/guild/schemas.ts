import { z } from "zod";

export const GuildSeason = z.object({
    season_id: z.int(),
    guild_id: z.string(),
    start_at: z.iso.datetime(),
    end_at: z.iso.datetime(),
});
export type GuildSeason = z.infer<typeof GuildSeason>;
