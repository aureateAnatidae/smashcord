import { getUserPoints } from "./service.js";
import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { z } from "zod";
var app = new Hono();
app.get("/:user_id", describeRoute({
    description: "Get a user's points in a guild",
    responses: {
        200: {
            description: "Successful response",
            content: {
                "application/json": {
                    schema: {
                        points: z.number()
                    }
                }
            }
        }
    }
}), function(c) {
    var user_id = c.req.param("user_id");
    return getUserPoints(user_id);
});
// Get a guild's leaderboard
// app.get("/:guild_id", c);
export default app;
