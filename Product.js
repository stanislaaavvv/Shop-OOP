/**
 * 
 */

function Product(name,price,quantity) {
	var _name = name;
	var _price = price;
	var _quantity = quantity;
	var _arrayProducts = [];
	_arrayProducts.push(name,price,quantity);
	
	this.getName = function () {
		return _name;
	};
	this.getPrice = function () {
		return _price;
	};
	this.getQuantity = function () {
		return _quantity;
	};
	this.setQuantity = function (value) {
		_quantity = value;
	};
	this.getArrayProducts = function () {
		return _arrayProducts;
	};
	this.setArrayProducts = function (key,value) {
		 _arrayProducts[key] = value;
	}
}

