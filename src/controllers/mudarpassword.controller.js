const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  clientes,
  fornecedores,
  transportadora,
} = require("../database/models");

class MudarPasswordController {
  async changePassword(req, res) {
    try {
      const { oldPassword, newPassword } = req.body;
      const authHeader = req.headers.authorization;

      if (!authHeader) {
        return res.status(401).json({ error: "Token não fornecido." });
      }

      const token = authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({ error: "Token não fornecido." });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;
      const userTypeId = decoded.userTypeId;
      let userTable;

      switch (userTypeId) {
        case "cliente":
          userTable = clientes;
          break;
        case "fornecedor":
          userTable = fornecedores;
          break;
        case "transportadora":
          userTable = transportadora;
          break;
        default:
          return res
            .status(400)
            .json({ error: "Tipo de utilizador inválido." });
      }

      const user = await userTable.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: "Utilizador não encontrado." });
      }

      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: "Senha antiga incorreta." });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      user.password = hashedPassword;
      await user.save();

      res.status(200).json({ message: "Senha alterada com sucesso." });
    } catch (error) {
      if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ error: "Token inválido." });
      }
      console.error("Erro ao alterar a senha:", error);
      res.status(500).json({ error: "Ocorreu um erro ao alterar a senha." });
    }
  }
}

module.exports = new MudarPasswordController();
