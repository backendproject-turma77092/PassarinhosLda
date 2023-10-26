const {
  user,
  clientes,
  fornecedores,
  transportadora,
  fielarmazem,
  gestor,
  plataforma,
} = require("../database/models");

const bcrypt = require("bcrypt");

const encrypt = (process.env.PW, 10);
class IndexController {
  async register(req, res) {
    try {
      const {
        username,
        email,
        morada,
        nif,
        telefone,
        localidade,
        codigoPostal,
        userTypeId,
        password,
      } = req.body;

      const [
        userResult,
        fornecedoresResult,
        transportadoraResult,
        clientesResult,
      ] = await Promise.all([
        user.findOne({ where: { email } }),
        fornecedores.findOne({ where: { email } }),
        transportadora.findOne({ where: { email } }),
        clientes.findOne({ where: { email } }),
        gestor.findOne({ where: { email } }),
        fielarmazem.findOne({ where: { email } }),
        plataforma.findOne({ where: { email } }),
      ]);

      if (
        userResult ||
        fornecedoresResult ||
        transportadoraResult ||
        clientesResult
      ) {
        return res.status(409).json({ error: "Email already in use" });
      }
      const hashedPassword = await bcrypt.hash(password, encrypt);
      let newUser;

      switch (userTypeId) {
        case 1:
          newUser = await clientes.create({
            username,
            email,
            morada,
            nif,
            telefone,
            localidade,
            codigoPostal,
            userTypeId,
            password: hashedPassword,
          });
          break;
        case 2:
          newUser = await fornecedores.create({
            username,
            email,
            morada,
            nif,
            telefone,
            localidade,
            codigoPostal,
            userTypeId,
            password: hashedPassword,
          });
          break;
        case 3:
          newUser = await plataforma.create({
            username,
            email,
            morada,
            nif,
            telefone,
            localidade,
            codigoPostal,
            userTypeId,
            password: hashedPassword,
          });
        case 4:
          newUser = await transportadora.create({
            username,
            email,
            morada,
            nif,
            telefone,
            localidade,
            codigoPostal,
            userTypeId,
            password: hashedPassword,
          });
          break;

        case 5:
          newUser = await gestor.create({
            username,
            email,
            morada,
            nif,
            telefone,
            localidade,
            codigoPostal,
            userTypeId,
            password: hashedPassword,
          });
          break;
        case 6:
          newUser = await fielarmazem.create({
            username,
            email,
            morada,
            nif,
            telefone,
            localidade,
            codigoPostal,
            userTypeId,
            password: hashedPassword,
          });
          break;
        default:
          return res.status(400).json({ error: "Tipo de associação inválida" });
      }

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Erro interno do servidor ,contatar administrador de servidor",
      });
    }
  }
}

module.exports = new IndexController();
