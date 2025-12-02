import { ssbu_character_names } from "../../../seeds/SSBUCharacters.js";
import { z } from "zod";
export var Match = z.object({
    match_id: z.int(),
    guild_id: z.string(),
    created_at: z.iso.datetime()
});
export var MatchPlayer = z.object({
    user_id: z.string(),
    win_count: z.int(),
    character: z.array(z.enum(ssbu_character_names))
});
export var MatchReport = z.object({
    guild_id: z.string(),
    players: z.array(MatchPlayer)
});
