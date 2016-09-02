/**
 * 
 */
function BundleProduct(quantity) {
	Product.call(this);
	this._quantity = quantity;
	
}

BundleProduct.prototype = Object.create (Product.prototype);
BundleProduct.prototype.constructor = BundleProduct;

BundleProduct.prototype.makeBundle = function (singleProduct1,singleProduct2) {
	this.setArrayProducts(0,singleProduct1.getName()+'+'+singleProduct2.getName());
	this.setArrayProducts(1,parseInt(singleProduct1.getPrice())
			+parseInt(singleProduct2.getPrice()));
	this.setArrayProducts(2,this._quantity);
	return this.getArrayProducts();
};

