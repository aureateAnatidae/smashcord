import { init_tables, init_views, teardown } from "./db/init_tables.js";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { trimTrailingSlash } from "hono/trailing-slash";
import { openAPIRouteHandler } from "hono-openapi";
var app = new Hono();
await teardown();
await init_tables();
await init_views();
app.use(trimTrailingSlash());
app.get("/", function(c) {
    return c.text("Hello Hono!");
});
app.get("/docs", openAPIRouteHandler(app, {
    documentation: {
        info: {
            title: "Grindcord REST API",
            version: "0.0.1",
            description: "Grindcord OpenAPI Reference"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local Server"
            }
        ]
    }
}));
serve({
    fetch: app.fetch,
    port: 3000
}, function(info) {
    console.log("Server is running on http://localhost:".concat(info.port));
});
