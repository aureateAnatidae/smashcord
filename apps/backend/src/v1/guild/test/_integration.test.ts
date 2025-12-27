import { init_tables, init_views, teardown } from "@db/init_tables";
import { test_knexDb } from "@test/test_knexfile";
import { GuildSeasonRecord } from "@v1/guild/models";
import { GuildSeason } from "@v1/guild/schemas";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

// const _mockGuildSeasonRecord = GuildSeason.parse({
//     guild_id: "19283746",

// });
// const mockMatchReport = mock_MatchReport();

describe("Match DB operations", () => {
    beforeEach(async () => {
        await init_tables(test_knexDb);
        await init_views(test_knexDb);
    });
    afterEach(async () => {
        await teardown(test_knexDb);
    });
    describe("Match record operations", () => {
        test("Insert a mock Match record", async () => {
            // const match_id = await createMatch(mockMatchReport.guild_id, test_knexDb);
            // const created_match = await test_knexDb("Match")
            //     .first()
            //     .where({ match_id });
            // expect(
            //     created_match.guild_id,
            //     "When retrieved, the Match record has the same data as is provided",
            // ).toEqual(mockMatchReport.guild_id);
        });
    });
});
