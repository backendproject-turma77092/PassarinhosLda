const { gestor, usertype } = require("../database/models");

class GestorController {
  async getAll(req, res) {
    try {
      const allgestor = await gestor.findAll({
        include: [
          {
            model: usertype,
            as: "usertype",
            attributes: ["id", "nome"],
          },
        ],
        attributes: [
          "id",
          "username",
          "email",
          "nif",
          "telefone",
          "localidade",
          "codigoPostal",
        ],
      });

      if (allgestor.length === 0) {
        return res.status(404).json({ message: "Nenhum gestor encontrado." });
      }

      res.status(200).json({ gestor: allgestor });
    } catch (error) {
      console.error("Erro ao carregar gestor:", error);
      res.status(500).json({ error: "Ocorreu um erro ao carregar os gestor." });
    }
  }

  async buscarClientePorId(req, res) {
    try {
      const { id } = req.params;

      const cliente = await gestor.findByPk(id);

      if (!cliente) {
        return res.status(404).json({ message: "ID não encontrado." });
      }

      res.status(200).json({ cliente });
    } catch (error) {
      console.error("Erro ao carregar gestor:", error);
      res.status(500).json({ error: "Ocorreu um erro ao carregar o gestor." });
    }
  }
}

module.exports = new GestorController();
