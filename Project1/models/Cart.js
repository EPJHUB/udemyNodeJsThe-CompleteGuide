const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'cart.json'
);

class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, contentFile) => {
            let cart= {products: [], totalPrice: 0}
            if(!err){
                cart = JSON.parse(contentFile);
            }
            const productIndex = cart.products.findIndex((product) => product.id == id);
            const product = cart.products[productIndex];
            let updatedProduct; 
            if(product){
                updatedProduct = {...product};
                updatedProduct.qty = updatedProduct.qty + 1
                cart.products = [...cart.products]
                cart.products[productIndex] = updatedProduct;
            }
            else{
                updatedProduct = {id: id, qty: 1}
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            })
        })
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, contentFile) => {
            if(err){
                return;
            }
            const updatedCar = {...JSON.parse(contentFile)}
            const product = updatedCar.products.find((product) => product.id == id);
            const productQty = product.qty;
            updatedCar.products = updatedCar.products.filter((product) => product.id != id);
            updatedCar.totalPrice = updatedCar.totalPrice - (productQty * productPrice);
            fs.writeFile(p, JSON.stringify(updatedCar), (err) => {
                console.log(err);
            })
        })
    }

}

module.exports = {Cart}