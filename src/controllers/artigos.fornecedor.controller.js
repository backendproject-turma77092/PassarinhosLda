const {
  artigos,
  fornecedores,
  Armazem,
  ArtigoArmazem,
} = require("../database/models");

class ArtigoController {
  async getAll(req, res) {
    try {
      const allArtigos = await artigos.findAll({
        attributes: ["id", "nome", "descricao", "preco"],
        include: [
          {
            model: fornecedores,
            as: "fornecedor",
            attributes: ["id", "username", "email"],
          },
          {
            model: Armazem,
            as: "armazens",
            through: {
              attributes: ["stock"],
            },
            attributes: ["id", "nome", "localizacao"],
          },
        ],
      });
      if (allArtigos.length === 0) {
        return res.status(404).json({ message: "Nenhum artigo encontrado." });
      }
      res.status(200).json({ artigos: allArtigos });
    } catch (error) {
      console.error("Erro ao carregar artigos:", error);
      res
        .status(500)
        .json({ error: "Ocorreu um erro ao carregar os artigos." });
    }
  }
  async create(req, res) {
    try {
      const { nome, descricao, preco, fornecedorId } = req.body;

      if (!nome || !descricao || !preco || !fornecedorId) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios." });
      }

      const fornecedor = await fornecedores.findByPk(fornecedorId);
      if (!fornecedor) {
        return res.status(404).json({ message: "Fornecedor não encontrado." });
      }

      // Cria o artigo
      const novoArtigo = await artigos.create({
        nome,
        descricao,
        preco,
        fornecedorId,
      });

      res
        .status(201)
        .json({ message: "Artigo criado com sucesso!", artigos: novoArtigo });
    } catch (error) {
      console.error("Erro ao criar o artigo:", error);
      res.status(500).json({ error: "Ocorreu um erro ao criar o artigo." });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const artigo = await artigos.findByPk(id, {
        include: [
          {
            model: fornecedores,
            as: "fornecedor",
          },
        ],
      });
      if (!artigo) {
        return res.status(404).json({ message: "Artigo não encontrado." });
      }
      res.status(200).json({ artigo });
    } catch (error) {
      console.error("Erro ao encontrar o artigo:", error);
      res.status(500).json({ error: "Ocorreu um erro ao encontrar o artigo." });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      let Artigo = await artigos.findByPk(id);
      if (!Artigo) {
        return res.status(404).json({ error: "Artigo não encontrado" });
      }
      await Artigo.update(req.body);
      res
        .status(200)
        .json({ message: "Artigo atualizado com sucesso", Artigo });
    } catch (error) {
      console.error("Erro ao atualizar o artigo:", error);
      res.status(500).json({ error: "Ocorreu um erro ao atualizar o artigo." });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      let artigo = await artigos.findByPk(id);
      if (!artigo) {
        return res.status(404).json({ error: "Artigo não encontrado" });
      }
      await artigo.destroy();
      res.status(200).json({ message: "Artigo deletado com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar o artigo:", error);
      res.status(500).json({ error: "Ocorreu um erro ao deletar o artigo." });
    }
  }
  async adicionarArtigoAoArmazem(req, res) {
    const { artigoId, armazemId, stock } = req.body;
    try {
      const artigoExiste = await artigos.findByPk(artigoId);
      const armazemExiste = await Armazem.findByPk(armazemId);

      if (!artigoExiste || !armazemExiste) {
        return res
          .status(404)
          .json({ message: "Artigo ou Armazem não encontrado." });
      }

      const novoArtigoArmazem = await ArtigoArmazem.create({
        artigoId,
        armazemId,
        stock,
      });

      return res.status(201).json(novoArtigoArmazem);
    } catch (error) {
      console.error("Erro ao adicionar artigo ao armazem:", error);
      return res
        .status(500)
        .json({ message: "Erro ao adicionar artigo ao armazem." });
    }
  }

  async listarArtigosDoArmazem(req, res) {
    const { armazemId } = req.params;
    try {
      const armazemComArtigos = await Armazem.findByPk(armazemId, {
        include: [
          {
            model: artigos,
            as: "artigos",
            through: {
              attributes: ["stock"],
            },
          },
        ],
      });

      if (!armazemComArtigos) {
        return res.status(404).json({ message: "Armazem não encontrado." });
      }

      return res.status(200).json(armazemComArtigos);
    } catch (error) {
      console.error("Erro ao listar artigos do armazem:", error);
      return res
        .status(500)
        .json({ message: "Erro ao listar artigos do armazem." });
    }
  }

  async removerArtigoDoArmazem(req, res) {
    const { artigoId, armazemId } = req.params;
    try {
      const artigoArmazemExistente = await ArtigoArmazem.findOne({
        where: {
          artigoId,
          armazemId,
        },
      });

      if (!artigoArmazemExistente) {
        return res
          .status(404)
          .json({ message: "Relação Artigo-Armazem não encontrada." });
      }

      await artigoArmazemExistente.destroy();
      return res
        .status(200)
        .json({ message: "Artigo removido do armazem com sucesso." });
    } catch (error) {
      console.error("Erro ao remover artigo do armazem:", error);
      return res
        .status(500)
        .json({ message: "Erro ao remover artigo do armazem." });
    }
  }

  //novo para frontend listar artigo armazem , com fornecedor token
  async getArtigosByFornecedorIdFromToken(req, res) {
    try {
      const fornecedorId = req.user.id;

      const artigosDoFornecedor = await artigos.findAll({
        where: { fornecedorId: fornecedorId },
        include: [
          {
            model: fornecedores,
            as: "fornecedor",
            attributes: ["username", "email"],
          },
          {
            model: Armazem,
            as: "armazens",
            through: { attributes: ["stock"] },
            attributes: ["nome", "localizacao"],
          },
        ],
      });

      res.json(artigosDoFornecedor);
    } catch (error) {
      console.error("Erro ao buscar artigos:", error);
      res.status(500).send("Erro interno do servidor");
    }
  }
  async adicionarArtigo(req, res) {
    const fornecedorIdDoToken = req.user.id;
    const { nome, descricao, preco, armazemId, stock } = req.body;

    try {
      // Criar novo artigo
      const novoArtigo = await artigos.create({
        nome,
        descricao,
        preco,
        fornecedorId: fornecedorIdDoToken,
      });

      // Verificar se o armazém existe
      const armazemExiste = await Armazem.findByPk(armazemId);
      if (!armazemExiste) {
        return res.status(404).json({ message: "Armazém não encontrado." });
      }

      // Associar o artigo ao armazém
      const novoArtigoArmazem = await ArtigoArmazem.create({
        artigoId: novoArtigo.id,
        armazemId,
        stock,
      });

      // Retornar resposta com o artigo e sua associação ao armazém
      return res.status(201).json({
        artigo: novoArtigo,
        artigoArmazem: novoArtigoArmazem,
      });
    } catch (error) {
      console.error("Erro ao adicionar artigo:", error);
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

module.exports = new ArtigoController();
