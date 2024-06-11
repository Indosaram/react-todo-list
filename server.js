import pkg from "json-server";
const { create, defaults, router: _router } = pkg;
import { join } from "path";
import { static as expressStatic } from "express";

const app = create();
const middlewares = defaults();
const router = _router("src/db/data.json");

app.use("/api", middlewares, router);
app.use(expressStatic(join("dist")));
app.get("/*", function (req, res) {
  res.sendFile(join("dist", "index.html"));
});
app.listen(3000);
console.log(`Start server with port 3000`);
