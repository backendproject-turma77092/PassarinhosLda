module.exports.renderDocumentation = (req, res) => {
  const endpoints = [
    { name: "GET /api/users", description: "Retorna a lista de usuários." },
    { name: "POST /api/users", description: "Cria um novo usuário." },
  ];

  res.render("documentation", { endpoints });
};
