---
title: Database Design
---

This file outlines the structure of the entities stored by Grindcord, and the rationale in their design. An emphasis is placed on database entities in their role as storage, rather than their function.

In an effort to support compatibility with every database management system (DBMS) supported by Knex.js, we avoid the use of arrays and enums.

Matches are reported to the backend. These reports contain the data:

- The Discord server in which the match was played
- The users who played
- Match count (3-0)
- The fighters used by each respective user

##### External Dependencies

A user of Grindcord SHOULD NOT be stored explicitly in our database. A [`GuildMember`](https://discord.com/developers/docs/resources/guild#get-guild-member) is an external dependency provided by Discord. A [`GuildMember`](https://discord.com/developers/docs/resources/guild#get-guild-member)'s `user_id` on the [`user`](https://discord.com/developers/docs/resources/user#user-object) field SHOULD be considered a primary key for our purposes.

A guild SHOULD NOT be stored explicitly in our database. A [`Guild`](https://discord.com/developers/docs/resources/guild#get-guild) is an external dependency provided by Discord. A `Guild`'s `guild_id` SHOULD be considered a primary key for our purposes.

```mermaid
erDiagram
    direction LR
    Guild
    GuildMember
```

We split this into three tables.

```mermaid
erDiagram
    direction LR
    Match {
        int         match_id    PK
        int         season_id   PK
        datetime    created_at
    }
    MatchPlayer {
        int         match_id    FK,PK
        string      user_id     PK
        int         win_count
    }
    MatchCharacter {
        int         match_id    FK,PK
        string      user_id
        int         fighter_number
    }
    Match ||--|{ MatchPlayer: "is played by"
    MatchPlayer ||..|{ MatchCharacter: "uses"
```

##### Entity Relation Diagram for Matches, storing the data that would be reported by a user.

The winner of the match can be inferred by selecting the `MatchPlayer` record with the highest `win_count` among records with the same `match_id`.

Note that `guild_id` is not stored by the `Match` table. When a match is reported for a particular `guild_id` (a unique ID assigned by Discord for a particular Discord server), the match is reported for that "guild's" current season (see below).

```mermaid
erDiagram
    direction LR
    Match {
        int         match_id
        int         season_id
        datetime    created_at
    }
    Season {
        int         season_id
        string      guild_id
        datetime    start_at
        datetime    end_at
    }
    Match }|--|| Season: "was played during"
    Guild ||--o{ Season: "has a current or past"
```

##### Entity Relation Diagram for Seasons.

A guild's "current" season is a `Season` record for which the `guild_id` matches, and the system datetime is between `start_at` and `end_at`.

In addition, a `Season` in which participants will be designated an individual tier. Participants in a `Season` are `GuildMember` who report having participated in a `Match` during a `Season`.
