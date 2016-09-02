/**
 * 
 */

function SingleProduct(name,quantity,price) {
	Product.call(this,name,quantity,price);
}

SingleProduct.prototype = Object.create (Product.prototype);
SingleProduct.prototype.constructor = SingleProduct;

