const {
  artigos,
  Armazem,
  ArtigoArmazem,
  EncomendaArtigos,
} = require("../database/models");
const { Sequelize } = require("sequelize");
class ArtigosController {
  async listarArtigosPorData(req, res) {
    try {
      const artigo = await artigos.findAll({
        order: [["createdAt", "DESC"]],
      });

      res.json(artigo);
    } catch (error) {
      console.error("Erro ao listar artigos:", error);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  }

  async consultarStockArtigo(req, res) {
    try {
      const artigoId = req.params.artigoId;

      const artigoComStock = await artigos.findByPk(artigoId, {
        include: [
          {
            model: Armazem,
            as: "armazens",
            through: {
              model: ArtigoArmazem,
              attributes: ["stock"],
            },
            attributes: ["id", "nome"],
          },
        ],
        attributes: ["id", "nome"],
      });

      if (!artigoComStock) {
        return res.status(404).json({ message: "Artigo não encontrado." });
      }

      res.json(artigoComStock);
    } catch (error) {
      console.error("Erro ao consultar stock do artigo:", error);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
  async artigoMaisEncomendado(req, res) {
    try {
      const maisEncomendado = await EncomendaArtigos.findAll({
        attributes: [
          "artigoId",
          [
            Sequelize.fn("SUM", Sequelize.col("quantidade")),
            "totalEncomendado",
          ],
        ],
        group: "artigoId",
        order: [[Sequelize.literal("totalEncomendado"), "DESC"]],
        limit: 1,
        include: [
          {
            model: artigos,
            as: "artigos",
            attributes: ["nome", "descricao"],
          },
        ],
      });

      if (maisEncomendado.length === 0) {
        return res.status(404).json({ message: "Nenhum artigo encomendado." });
      }

      res.json(maisEncomendado[0]);
    } catch (error) {
      console.error("Erro ao buscar o artigo mais encomendado:", error);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

module.exports = new ArtigosController();
