import { z } from "zod";

// https://github.com/knex/knex/issues/6283
const SQLITE_DT_RE = /^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}:\d{2}(?:\.\d{1,6})?$/;
const SQLiteDatetime = z.stringFormat("YYYY-MM-DD HH:MM:SS", SQLITE_DT_RE);

export const SQLiteDateTimeToISODateTime = z.codec(
    z.union([SQLiteDatetime, z.iso.datetime()]),
    z.iso.datetime(),
    {
        decode: (sqlite_datetime: string) => {
            if (z.iso.datetime().safeParse(sqlite_datetime).success) {
                return sqlite_datetime
            }
            const withT = sqlite_datetime.replace(" ", "T");
            const hasTz = /([zZ]|[+-]\d{2}:\d{2})$/.test(withT);
            return hasTz ? withT : `${withT}Z`;
        },

        encode: (iso_datetime: string) => {
            return iso_datetime.replace(/Z$/i, "").replace("T", " ");
        },
    },
);
