const { Router } = require("express");
const usersAll = require("../src/controllers/findall.controller");
const documentacaoController = require("./controllers/documentacao.controller");
const routes = new Router();

routes.get("/documentation", documentacaoController.renderDocumentation);
routes.get("/all", usersAll.index);
routes.get("/server", (req, res) => {
  return res.send({ message: "connect with success! :)  " });
});

module.exports = routes;
