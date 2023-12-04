module.exports.renderDocumentation = (req, res) => {
  const endpoints = [
    { name: "GET /api/users", description: "Retorna a lista de user." },
    { name: "POST /api/users", description: "Cria um novo user." },
  ];

  res.render("documentation", { endpoints });
};
