const express = require("express");
const categoryRouter = express.Router();
const controller = require("../controller/Controller");

categoryRouter.route("/getCategory").get(controller.controllerGet);
categoryRouter.route("/postCategory").post(controller.controllerGet);

module.exports = categoryRouter;
