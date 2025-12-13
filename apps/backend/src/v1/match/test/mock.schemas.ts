import { rand_character_array, randint, snowflake } from "@test/mock";
import { MatchPlayer, type MatchReport } from "@v1/match/schemas";

export const mock_MatchPlayer = (match_player?: Partial<MatchPlayer>): MatchPlayer => {
    return MatchPlayer.parse({
        user_id: snowflake(),
        win_count: randint(5),
        character: rand_character_array(),
        ...match_player,
    });
};

export const mock_MatchReport = (match_report?: Partial<MatchReport>): MatchReport => {
    return {
        guild_id: snowflake(),
        players:
            match_report?.players ??
            (() => {
                const winnerWinCount = randint(5);
                const loserWinCount = randint(winnerWinCount);
                return [
                    mock_MatchPlayer({ win_count: winnerWinCount }),
                    mock_MatchPlayer({ win_count: loserWinCount }),
                ];
            })(),
        ...match_report,
    };
};
