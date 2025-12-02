import { z } from "zod";
export var guildMemberQuery = z.object({
    user_id: z.string(),
    guild_id: z.string()
});
