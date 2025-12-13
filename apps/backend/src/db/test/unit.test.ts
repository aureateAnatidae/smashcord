import { SQLiteDateTimeToISODateTime } from "@db/schemas";
import { expect, test } from "vitest";
import { z } from "zod";

test("Conversion of datetime between SQLite and ISO format", () => {
    const sqlite_datetime = "2025-12-11 20:17:59";
    const iso_datetime = z.iso.datetime().parse("2025-12-11T20:17:59Z");
    expect(
        SQLiteDateTimeToISODateTime.decode(sqlite_datetime),
        "Conversion from SQLite to ISO",
    ).toEqual(iso_datetime);
    expect(
        SQLiteDateTimeToISODateTime.encode(iso_datetime),
        "Conversion from ISO to SQLite",
    ).toEqual(sqlite_datetime);
    expect(
        SQLiteDateTimeToISODateTime.decode(iso_datetime),
        "No change when converting from ISO to ISO",
    ).toEqual(iso_datetime);
});
