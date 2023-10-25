const users = require("../database/models");

class IndexController {
  async index(req, res) {
    try {
      const usergetall = await users.user.findAll();

      return res.json(usergetall);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

module.exports = new IndexController();
