const { where } = require('sequelize');
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
  req.user.createProduct({
    title,
    imageUrl,
    price,
    description
  })
  .then((result) => {
    console.log(result)
    console.log("Product created");
    res.redirect("/");
  })
  .catch((err) => {
    console.log(err)
  })
};

const getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  req.user.getProducts({where: {id: prodId}})
  // Product.findByPk(prodId)
  .then(
    (products) => {
      const product = products[0]
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product
      });
    }
  )
  .catch(err => console.log(err));
};

const postEditProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  Product.findByPk(prodId).then(
    product => {
      product.title = updatedTitle,
      product.imageUrl = updatedImageUrl,
      product.price = updatedPrice,
      product.description = updatedDescription
      return product.save()
    }
  )
  .then(result =>{
    console.log("Product updated")
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err))
}

const getProducts = (req, res, next) => {
  // Product.findAll()
  req.user.getProducts()
  .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    }
  )
  .catch(err => console.log(err));
};

const postDeleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.findByPk(prodId).then(
    product => {
      return product.destroy()
    }
  )
  .then(result => {
    console.log("product deleted")
    res.redirect('/admin/products');
  })
  .catch(err => {console.log(err)});
}

module.exports = { getProducts, getAddProduct, postAddProduct, getEditProduct, postEditProduct, postDeleteProduct};
