const { Cart } = require("../models/Cart");
const { Product } = require("../models/Product");

const getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

const getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

const getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

const postCart = (req,res, next) => {
  const prodId = req.body.productId;
  Product.fetchById(prodId, (product) => {
    Cart.addProduct(product.id, product.price)
  })
  res.redirect('/');
}

const getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

const getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

const getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.fetchById(productId, product => {
    // console.log(product);
    res.render('shop/product-detail', {
      product: product,
      pageTitle: 'Product Detail',
      path: '/products'
    })
  })
  // res.render('shop/product-detail');
}

module.exports = {getProducts, getOrders, getCart, getIndex, getProducts, getCheckout, getProduct, postCart}
