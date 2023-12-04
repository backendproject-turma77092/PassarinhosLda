const {
  Encomenda,
  EncomendaArtigos,
  artigos,
  clientes,
  transportadora,
  fornecedores,
} = require("../database/models");

class EncomendasController {
  async getEncomendasComDetalhes(req, res) {
    try {
      const userId = req.user.id;
      const encomendas = await Encomenda.findAll({
        where: { clienteId: userId },
        include: [
          {
            model: clientes,
            as: "clientes",
            attributes: ["username"],
          },
          {
            model: artigos,
            as: "artigos",
            through: {
              model: EncomendaArtigos,
              as: "detalhes",
              attributes: ["quantidade", "preco"],
            },
            attributes: ["id", "nome", "descricao"],
          },
          {
            model: transportadora,
            as: "transportadora",
            attributes: ["username"],
          },
        ],
      });

      const encomendasComTotal = encomendas.map((encomenda) => {
        const total = encomenda.artigos.reduce((acc, artigo) => {
          return acc + artigo.detalhes.quantidade * artigo.detalhes.preco;
        }, 0);

        return {
          ...encomenda.toJSON(),
          total: total.toFixed(2),
        };
      });

      res.status(200).json(encomendasComTotal);
    } catch (error) {
      console.error("Erro ao buscar encomendas:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async getAllEncomendas(req, res) {
    try {
      const encomendas = await Encomenda.findAll({
        where: {
          status: "Pendente",
        },
        include: [
          {
            model: clientes,
            as: "clientes",
            attributes: ["username"],
          },
          {
            model: transportadora,
            as: "transportadora",
            attributes: ["username"],
          },
        ],
      });

      res.status(200).json(encomendas);
    } catch (error) {
      console.error("Erro ao buscar encomendas:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async updateEncomenda(req, res) {
    try {
      const { id } = req.params;
      const { dataEntrega, status } = req.body;

      const encomenda = await Encomenda.findByPk(id);
      if (!encomenda) {
        return res.status(404).json({ error: "Encomenda não encontrada." });
      }

      await encomenda.update({ dataEntrega, status });

      res.status(200).json(encomenda);
    } catch (error) {
      console.error("Erro ao atualizar encomenda:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async getEncomendasEntregues(req, res) {
    try {
      const encomendas = await Encomenda.findAll({
        where: {
          status: "Realizada",
        },
        include: [
          {
            model: clientes,
            as: "clientes",
            attributes: ["username"],
          },
          {
            model: transportadora,
            as: "transportadora",
            attributes: ["username"],
          },
        ],
      });

      res.status(200).json(encomendas);
    } catch (error) {
      console.error("Erro ao buscar encomendas:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async listarEncomendasPorClienteComDataEntrega(req, res) {
    try {
      const clienteId = req.params.clienteId;

      const encomendasDoCliente = await Encomenda.findAll({
        where: { clienteId: clienteId },
        attributes: ["id", "dataEncomenda", "status", "total", "dataEntrega"],
      });

      if (encomendasDoCliente.length === 0) {
        return res
          .status(404)
          .json({ message: "Nenhuma encomenda encontrada para o cliente." });
      }

      res.json(encomendasDoCliente);
    } catch (error) {
      console.error(
        "Erro ao listar encomendas por cliente com data de entrega:",
        error
      );
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
}

module.exports = new EncomendasController();
