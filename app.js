const express = require("express");
const app = express();
const router = require("./router/router");

app.use("/api/v1", router);

app.listen(4004);
