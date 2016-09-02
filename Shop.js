/**
 * 
 */
function Shop(numberOfPaydesk,singleProducts,Bundles) {
	this.numberOfPaydesk = numberOfPaydesk;
    this.singleProducts = singleProducts;
    this.bundles = Bundles;
    this.totalSales = 0;

	
}

Shop.prototype.addSingleProducts = function (arr) {
  for(var i = 0;i < arr.length; i++) {
      this.singleProducts.push(arr[i]);

  }
};

Shop.prototype.addBundleProducts = function (arr) {
    for(var i = 0;i < arr.length; i++) {
        this.bundles.push(arr[i]);

    }
};



Shop.prototype.removefromShop = function (name,quantity) {
    if (this.singleProducts.indexOf(name) == -1) {
        var indexOfname = this.bundles.indexOf(name);
        var name = this.bundles;
    }else {
        var indexOfname = this.singleProducts.indexOf(name);
        var name = this.singleProducts;
    }
    name[indexOfname + 2] = name[indexOfname + 2] - quantity;
    var valueToSales = name[indexOfname + 1] * quantity;
    this.totalSales += valueToSales;
};

Shop.prototype.revision = function (paydesk1,paydesk2,paydesk3) {
    var text1 = ' VSICHKO E TOCHNO!';
    var text2 = ' NQKOI E KRAL!';
    if (parseInt(paydesk1.totalMoney) + parseInt(paydesk2.totalMoney) + parseInt(paydesk3.totalMoney) == parseInt(this.totalSales)) {
        return text1;
    }else {
        return text2;
    }
};

