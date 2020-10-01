exports.createProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;

  res.json({
    message: "Create Product Success",
    data: {
      id: 1,
      nama: name,
      price: price,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  // console.log("url: ", req.originalUrl);
  // console.log("method: ", req.method);
  res.json({
    message: "Get All Products Success",
    data: [
      {
        id: 1,
        nama: "Sari Gandum",
        price: 8000,
      },
    ],
  });
  next();
};
