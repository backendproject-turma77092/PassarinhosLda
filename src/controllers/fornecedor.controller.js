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

  //aqui e transferido por token uuid :) tanto cliente como fornecedor mix :)
  async findFornecedorByToken(req, res) {
    try {
      const userResult = req.user;

      if (!userResult) {
        return res.status(404).json({ message: "perfil não encontrado." });
      }
      const perfil = {
        nome: userResult.username,
        email: userResult.email,
        nif: userResult.nif,
      };

      res.status(200).json({ perfil });
    } catch (error) {
      console.error("Erro ao carregar perfil:", error);
      res.status(500).json({ error: "Ocorreu um erro ao carregar o  perfil." });
    }
  }

  async updatePerfilFornecedor(req, res) {
    try {
      // Fornecedor autenticado do middleware Passport
      const fornecedorAutenticado = req.user;

      if (!fornecedorAutenticado) {
        return res.status(404).json({ error: "Fornecedor não encontrado" });
      }

      const { email } = req.body;
      const existingFornecedor = await fornecedores.findOne({
        where: {
          email,
          id: {
            [Sequelize.Op.not]: fornecedorAutenticado.id,
          },
        },
      });

      if (existingFornecedor) {
        return res
          .status(400)
          .json({ error: "Email já está em uso por outro fornecedor" });
      }

      await fornecedorAutenticado.update(req.body);
      return res.status(200).json(fornecedorAutenticado);
    } catch (error) {
      console.error("Erro ao atualizar perfil do fornecedor:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
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
