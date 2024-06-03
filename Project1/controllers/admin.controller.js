const Product = require('../models/Product')

const getAddProduct = (req, res, next) => {
  console.log("Add prod");
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false
  });
};

const postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // const product = new Product(null, title, imageUrl, description, price);
  // product.save();
  // res.redirect("/");
  Product.create({
    title,
    imageUrl,
    price,
    description
  }).then((result) => {
    console.log(result)
    console.log("Product created");
  }).catch((err) => {
    console.log(err)
  })
};

const getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.fetchById(prodId, (product) => {
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product
    });
  });
};

const postEditProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedProduct = new Product(prodId, updatedTitle, updatedImageUrl, updatedDescription, updatedPrice);
  updatedProduct.save();
  res.redirect('/admin/products');
}

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

const postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.deleteById(prodId);
    res.redirect('/admin/products');
}

module.exports = { getProducts, getAddProduct, postAddProduct, getEditProduct, postEditProduct, postDeleteProduct};