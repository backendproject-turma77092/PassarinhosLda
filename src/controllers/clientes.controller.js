const {
  clientes,
  tipopagamento,
  status,
  usertype,
  Encomenda,
  artigos,
  Armazem,
  transportadora,
} = require("../database/models");
const { Sequelize } = require("sequelize");

class ClientesController {
  async getAll(req, res) {
    try {
      const allClientes = await clientes.findAll({
        include: [
          {
            model: usertype,
            as: "usertype",
            attributes: ["nome"],
          },
          {
            model: tipopagamento,
            as: "tipopagamento",
            attributes: [
              "descricao",
              "condicoespagamento",
              "tipo",
              "prazopagamento",
            ],
          },
          {
            model: status,
            as: "statuses",
            attributes: ["nome"],
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
      if (allClientes.length === 0) {
        return res.status(404).json({ message: "Nenhum cliente encontrado." });
      }
      res.status(200).json({ clientes: allClientes });
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
      res
        .status(500)
        .json({ error: "Ocorreu um erro ao carregar os clientes." });
    }
  }
  async findClienteById(req, res) {
    try {
      const { id } = req.params;
      const cliente = await clientes.findByPk(id, {
        attributes: ["username", "email", "nif", "telefone", "localidade"],
      });
      if (!cliente) {
        return res.status(404).json({ message: "ID não encontrado." });
      }
      res.status(200).json({ cliente });
    } catch (error) {
      console.error("Erro ao carregar cliente:", error);
      res.status(500).json({ error: "Ocorreu um erro ao carregar o cliente." });
    }
  }
  async updateCliente(req, res) {
    const { email } = req.body;
    const cliente = await clientes.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    const existingCliente = await clientes.findOne({
      where: {
        email,
        id: {
          [Sequelize.Op.not]: cliente.id,
        },
      },
    });
    if (existingCliente) {
      return res
        .status(400)
        .json({ error: "Email já está em uso por outro cliente" });
    }
    await cliente.update(req.body);
    return res.status(200).json(cliente);
  }
  async desativarCliente(req, res) {
    const cliente = await clientes.findByPk(req.params.id);
    if (cliente) {
      cliente.statusId = 2;
      await cliente.save();
      res.status(200).json({ message: "Cliente desativado com sucesso" });
    } else {
      res.status(404).json({ error: "Cliente não encontrado" });
    }
  }
  async activarCliente(req, res) {
    const cliente = await clientes.findByPk(req.params.id);
    if (cliente) {
      cliente.statusId = 1;
      await cliente.save();
      res.status(200).json({ message: "Cliente activo com sucesso" });
    } else {
      res.status(404).json({ error: "Cliente não encontrado" });
    }
  }
  async deleteCliente(req, res) {
    const cliente = await clientes.findByPk(req.params.id);
    if (cliente) {
      await cliente.destroy();
      res.status(200).json({ message: "Cliente removido com sucesso" });
    } else {
      res.status(404).json({ error: "Cliente nao encontrado" });
    }
  }
  //novas

  async getClienteComEncomendas(req, res) {
    const clienteId = req.params.clienteId;
    console.log(clienteId);
    try {
      const cliente = await clientes.findByPk(clienteId, {
        include: [
          {
            model: Encomenda,
            as: "encomendas",
            include: [
              {
                model: transportadora,
                as: "transportadora",
              },
              {
                model: artigos,
                as: "artigos",
                include: [
                  {
                    model: Armazem,
                    as: "armazens",
                  },
                ],
                through: { attributes: [] },
              },
            ],
          },
        ],
      });

      if (!cliente) {
        return res.status(404).json({ message: "Cliente não encontrado." });
      }

      res.status(200).json(cliente);
    } catch (error) {
      console.error("Erro ao buscar cliente e encomendas:", error);
      res.status(500).json({ message: "Erro ao processar a solicitação." });
    }
  }
}

module.exports = new ClientesController();
