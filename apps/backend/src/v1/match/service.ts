import { knexDb } from "@db/knexfile";
import type { ssbu_character_names } from "@seeds/SSBUCharacters";
import type { MatchPlayer, MatchReport } from "@v1/match/schemas";
import type { Knex } from "knex";

/** Report a match.
 * Transactionally, create a record in the Match table, then create the matching pair
 * of records in MatchResult table, then the records for the MatchCharacter table.
 */
export async function reportMatchResult(
    match_report: MatchReport,
    db: Knex = knexDb,
): Promise<void> {
    const trx = await db.transaction();

    trx.commit();
}

/** Create a match, returning the incrementing match_id.
 * @param {guild_id} string - The guild in which the match was recorded.
 */
export async function createMatch(
    guild_id: string,
    db: Knex = knexDb,
): Promise<number> {
    const match_id = await db("Match").insert({ guild_id });
    return match_id[0];
}

/** Create a record in MatchPlayer. */
export async function createMatchPlayer(
    match_id: number,
    user_id: string,
    win_count: number,
    db: Knex = knexDb,
): Promise<void> {
    await db("MatchPlayer").insert({ match_id, user_id, win_count });
    return;
}

/** Create a record in MatchCharacterTable. */
export async function createMatchCharacter(
    match_id: number,
    user_id: string,
    character: Array<number>,
    db: Knex = knexDb,
): Promise<void> {
    for (let i = 0; i < character.length; i++) {
        await db("MatchCharacter").insert({
            match_id,
            user_id,
            fighter_number: character[i],
        });
    }
    return;
}

// Consider some sort of fighly flexible minimal abstraction over SQL so that developer/user can provide any bounds to search in table
// export async function getMatches(user_id: string): Promise<Array<MatchRecord>> {}
// export async function getMatchesNLast(
//     user_id: string,
//     n: number,
// ): Promise<Array<MatchRecord>> {}
// export async function getMatchesDateRange(
//     user_id: string,
//     start: string,
//     end: string,
// ): Promise<Array<MatchRecord>> {}
