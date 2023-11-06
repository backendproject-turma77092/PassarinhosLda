const {
  fornecedores,
  tipopagamento,
  status,
  usertype,
} = require("../database/models");
const { Sequelize } = require("sequelize");
class FornecerdorController {
  async getAll(req, res) {
    try {
      const allFornecedores = await fornecedores.findAll({
        attributes: [
          "id",
          "username",
          "email",
          "nif",
          "telefone",
          "localidade",
          "codigoPostal",
        ],
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
      });
      if (allFornecedores.length === 0) {
        return res
          .status(404)
          .json({ message: "Nenhum Fornecedor encontrado." });
      }
      res.status(200).json({ Fornecedores: allFornecedores });
    } catch (error) {
      console.error("Erro ao carregar Fornecedores:", error);
      res
        .status(500)
        .json({ error: "Ocorreu um erro ao carregar os Fornecedores." });
    }
  }
  async findFornecedorById(req, res) {
    try {
      const { id } = req.params;
      const cliente = await fornecedores.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ message: "ID não encontrado." });
      }
      res.status(200).json({ cliente });
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
      res.status(500).json({ error: "Ocorreu um erro ao carregar o cliente." });
    }
  }
  async updateFornecedor(req, res) {
    const { email } = req.body;
    const cliente = await fornecedores.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: "Fornecedor não encontrado" });
    }
    const existingFornecedor = await fornecedores.findOne({
      where: {
        email,
        id: {
          [Sequelize.Op.not]: cliente.id,
        },
      },
    });
    if (existingFornecedor) {
      return res
        .status(400)
        .json({ error: "Email já está em uso por outro Fornecedor" });
    }
    await cliente.update(req.body);
    return res.status(200).json(cliente);
  }
  async desativarFornecedor(req, res) {
    const fornecedor = await fornecedores.findByPk(req.params.id);
    if (fornecedor) {
      fornecedor.statusId = 2;
      await fornecedor.save();
      res.status(200).json({ message: "Fornecedor desativado com sucesso" });
    } else {
      res.status(404).json({ error: "Fornecedor não encontrado" });
    }
  }
  async activarFornecedor(req, res) {
    const fornecedor = await fornecedores.findByPk(req.params.id);
    if (fornecedor) {
      fornecedor.statusId = 1;
      await fornecedor.save();
      res.status(200).json({ message: "Fornecedor activo com sucesso" });
    } else {
      res.status(404).json({ error: "Fornecedor não encontrado" });
    }
  }
  async deleteFornecedor(req, res) {
    const fornecedor = await fornecedores.findByPk(req.params.id);
    if (fornecedor) {
      await fornecedor.destroy();
      res.status(200).json({ message: "Fornecedor removido com sucesso" });
    } else {
      res.status(404).json({ error: "Fornecedor nao encontrado" });
    }
  }
}

module.exports = new FornecerdorController();
