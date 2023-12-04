const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const {
  clientes,
  fornecedores,
  transportadora,
  gestor,
  fielarmazem,
  plataforma,
} = require("../database/models");

class IndexController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email e senha são necessários." });
      }

      let userResult;
      let userTypeId;
      const tables = [
        clientes,
        fornecedores,
        transportadora,
        // gestor,
        // fielarmazem,
        // plataforma,
      ];

      for (let table of tables) {
        userResult = await table.findOne({ where: { email } });
        if (userResult) {
          if (table === clientes) {
            userTypeId = "cliente";
          } else if (table === fornecedores) {
            userTypeId = "fornecedor";
          } else if (table === transportadora) {
            userTypeId = "transportadora";
          }
          break;
        }
      }

      if (!userResult) {
        return res.status(404).json({ error: "Utilizador não encontrado." });
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        userResult.password
      );
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Senha incorreta." });
      }

      const tokenIdentifier = uuidv4();

      await userResult.update({ tokenIdentifier });

      const token = jwt.sign(
        { userId: userResult.id, tokenIdentifier, userTypeId },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.json({
        message: "Login bem-sucedido.",
        token,
        userId: userResult.id,
      });
    } catch (error) {
      console.error("Erro no login:", error);
      res.status(500).json({
        error: "Erro interno do servidor, por favor contacte o administrador.",
      });
    }
  }
}

module.exports = new IndexController();
