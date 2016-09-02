/**
 * Created by user on 9/1/16.
 */

function Client(money,productname,productquantity,price){
    this.money = money;
    this.cart = [];
    this.cart.push(productname,productquantity,price);
    this.totalPurchase = 0;
    this.price = price
}


Client.prototype.addToCart = function (productname,productquantity,price){
    this.cart.push(productname,productquantity,price);
};

Client.prototype.priceOfPurchase = function () {
    for (var i = 0; i < this.cart.length ; i += 3) {
        this.totalPurchase += this.cart[i+1] * this.cart[i+2];
    }
};

Client.prototype.infoShopping = function () {
    var infoShoppingText = '';
    for (var i = 0; i < this.cart.length ; i += 3) {
        infoShoppingText += this.cart[i]+',kolichestvo:' + this.cart[i+1]+',';
    }
    if (this.constructor == Bigclient) {
        infoShoppingText = 'Klient na edro kupuva:'+infoShoppingText+'na obshta cena ot:'+
             this.totalPurchase+'!';
    }else {
        infoShoppingText = 'Klient na drebno kupuva:'+infoShoppingText+'na obshta cena ot:'+
            this.totalPurchase+'!';
    }
    return infoShoppingText;
};