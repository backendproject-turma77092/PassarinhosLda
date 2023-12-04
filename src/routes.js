const { Router } = require("express");
const passport = require("passport");
const routes = new Router();
const reg = require("./controllers/registo.controller");
const documentacaoController = require("./controllers/documentacao.controller");
const validador = require("../src/schema/create.user.schema.json");
const schemavalidador = require("../src/middlewares/schemavalidator");
const clientes = require("./controllers/clientes.controller");
const fornecedores = require("./controllers/fornecedor.controller");
const gestor = require("../src/controllers/gestor.controller");
const artigosFornecedor = require("../src/controllers/artigos.fornecedor.controller");
const login = require("../src/controllers/login.controller");
const encomenda = require("../src/controllers/encomendaartigos.controller");
const documento = require("../src/controllers/encomenda.controller");
const mudar = require("../src/controllers/mudarpassword.controller");
const artigodata = require("../src/controllers/artgigosespecificos.controller");
//documentação
routes.get("/documentation", documentacaoController.renderDocumentation);

//registro

routes.post("/create", reg.register);
routes.post("/sessao", login.login);
routes.put(
  "/mudarpass",
  passport.authenticate("jwt", { session: false }),
  mudar.changePassword
);

//rota clientes
routes.get("/todosClientes", clientes.getAll);
routes.get("/clientes/:id", clientes.findClienteById);
routes.put("/updateClientes/:id", clientes.updateCliente);
routes.put("/clientes/:id/activar", clientes.activarCliente);
routes.put("/clientes/:id/desativar", clientes.desativarCliente);
routes.delete("/deleteClientes/:id", clientes.deleteCliente);
routes.get("/encomendaclientes/:clienteId", clientes.getClienteComEncomendas);

//rota fornecedores
routes.get("/todosFornecedores", fornecedores.getAll);
routes.put("/fornecedor/:id/desativar", fornecedores.desativarFornecedor);
routes.put("/fornecedor/:id/activar", fornecedores.activarFornecedor);
routes.delete("/deletefornecedor/:id/", fornecedores.deleteFornecedor);
routes.get(
  "/fornecedores",
  passport.authenticate("jwt", { session: false }),
  fornecedores.findFornecedorByToken
);
routes.put(
  "/fornecedoreseditar",
  passport.authenticate("jwt", { session: false }),
  fornecedores.updatePerfilFornecedor
);
routes.get(
  "/fornecedorartigo",
  passport.authenticate("jwt", { session: false }),
  artigosFornecedor.getArtigosByFornecedorIdFromToken
);

routes.get(
  "/perfil",
  passport.authenticate("jwt", { session: false }),
  fornecedores.findFornecedorByToken
);

//rota Gestor
routes.get("/todosgestores", gestor.getAll);

//artigos fornecedor
routes.get("/artigosF", artigosFornecedor.getAll);

routes.post(
  "/criarartigo",
  passport.authenticate("jwt", { session: false }),
  artigosFornecedor.adicionarArtigo
);

//encomenda
routes.post("/encomenda", encomenda.criarEncomenda);
routes.get(
  "/documentoencomenda",
  passport.authenticate("jwt", { session: false }),
  documento.getEncomendasComDetalhes
);
routes.get(
  "/documentoencomenda/:id",
  passport.authenticate("jwt", { session: false }),
  documento.getEncomendasComDetalhes
);
routes.get(
  "/documentoencomenda/:id",
  passport.authenticate("jwt", { session: false }),
  documento.listarEncomendasPorClienteComDataEntrega
);
routes.get(
  "/todasemcomendas",
  passport.authenticate("jwt", { session: false }),
  documento.getAllEncomendas
);
routes.get(
  "/encomendasentregues",
  passport.authenticate("jwt", { session: false }),
  documento.getEncomendasEntregues
);
routes.put(
  "/fecharencomenda/:id",
  passport.authenticate("jwt", { session: false }),
  documento.updateEncomenda
);

//artigos data desc e stock
routes.get("/artigodata", artigodata.listarArtigosPorData);
routes.get("/artigoarmazemstock/:artigoId", artigodata.consultarStockArtigo);
routes.get("/artigomaisvendido", artigodata.artigoMaisEncomendado);

routes.post("/artigoarmazem", artigosFornecedor.adicionarArtigoAoArmazem);

//rota de teste
routes.get("/server", (req, res) => {
  return res.send({ message: "ligação com sucesso ao servidor  :)  " });
});

module.exports = routes;
