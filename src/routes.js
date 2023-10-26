const { Router } = require("express");
const routes = new Router();
const reg = require("../src/controllers/registro.controller");
const documentacaoController = require("./controllers/documentacao.controller");
const validador = require("../src/schema/create.user.schema.json");
const schemavalidador = require("../src/middlewares/schemavalidator");

//rotas
routes.post("/create", schemavalidador(validador), reg.register);
routes.get("/documentation", documentacaoController.renderDocumentation);

//rota de teste
routes.get("/server", (req, res) => {
  return res.send({ message: "ligação com sucesso ao servidor  :)  " });
});

module.exports = routes;
