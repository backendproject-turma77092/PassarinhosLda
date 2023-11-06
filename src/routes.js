const { Router } = require("express");
const routes = new Router();
const reg = require("./controllers/registro.controller");
const documentacaoController = require("./controllers/documentacao.controller");
const validador = require("../src/schema/create.user.schema.json");
const schemavalidador = require("../src/middlewares/schemavalidator");
const clientes = require("./controllers/clientes.controller");
const fornecedores = require("./controllers/fornecedor.controller");
const gestor = require("../src/controllers/gestor.controller");

//documentação
routes.get("/documentation", documentacaoController.renderDocumentation);

//registro
routes.post("/create", schemavalidador(validador), reg.register);

//rota clientes
routes.get("/todosClientes", clientes.getAll);
routes.get("/clientes/:id", clientes.findClienteById);
routes.put("/updateClientes/:id", clientes.updateCliente);
routes.put("/clientes/:id/activar", clientes.activarCliente);
routes.put("/clientes/:id/desativar", clientes.desativarCliente);
routes.delete("/deleteClientes/:id", clientes.deleteCliente);

//rota fornecedores
routes.get("/todosFornecedores", fornecedores.getAll);
routes.get("/fornecedor/:id", fornecedores.findFornecedorById);
routes.put("/upudateFornecedor/:id", fornecedores.updateFornecedor);
routes.put("/fornecedor/:id/desativar", fornecedores.desativarFornecedor);
routes.put("/fornecedor/:id/activar", fornecedores.activarFornecedor);
routes.delete("/deletefornecedor/:id/", fornecedores.deleteFornecedor);

//rota Gestor
routes.get("/todosgestores", gestor.getAll);

//rota de teste
routes.get("/server", (req, res) => {
  return res.send({ message: "ligação com sucesso ao servidor  :)  " });
});

module.exports = routes;
