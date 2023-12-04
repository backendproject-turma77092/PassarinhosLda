const { Encomenda, EncomendaArtigos } = require("../database/models");
const { sequelize } = require("../database/models");

const criarEncomenda = async (req, res) => {
  const { clienteId, artigos, transportadoraId } = req.body;
  console.log("Dados recebidos para nova encomenda:", req.body);
  const t = await sequelize.transaction();

  try {
    const total = artigos.reduce(
      (sum, artigo) => sum + artigo.quantidade * artigo.preco,
      0
    );

    // Criando a encomenda
    const novaEncomenda = await Encomenda.create(
      {
        clienteId,
        transportadoraId,
        dataEncomenda: new Date(),
        status: "Pendente",
        total,
      },
      { transaction: t }
    );

    // Criando registros em EncomendaArtigos
    for (const artigo of artigos) {
      console.log("Criando encomenda de artigo:", artigo);
      await EncomendaArtigos.create(
        {
          encomendaId: novaEncomenda.id,
          artigoId: artigo.artigoId,
          quantidade: artigo.quantidade,
          preco: artigo.preco,
        },

        { transaction: t }
      );
    }

    await t.commit();
    res.status(201).json({
      message: "Encomenda criada com sucesso!",
      encomenda: novaEncomenda,
    });
  } catch (error) {
    await t.rollback();
    console.error("Erro ao criar encomenda:", error);
    res.status(500).json({ error: "Erro interno ao criar encomenda." });
  }
};

module.exports = { criarEncomenda };
