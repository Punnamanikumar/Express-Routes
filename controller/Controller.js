const get = (req, res) => {
  const category = [
    { id: 1, title: "Tollywood" },
    { id: 2, title: "Technology" },
    { id: 3, title: "JOb" },
  ];
  res.send(category);
};

module.exports.controllerGet = get;
