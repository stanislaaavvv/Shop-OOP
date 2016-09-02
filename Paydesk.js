/**
 * Created by user on 9/2/16.
 */
function Paydesk(client) {
    this.client = client;
    this.totalMoney = 0;
}

Paydesk.prototype.clientPay = function (shop) {
  this.totalMoney += this.client.totalPurchase;
    for (var i = 0; i < this.client.cart.length ; i += 3) {
        shop.removefromShop(this.client.cart[i],this.client.cart[i+1]);
    }
};

Paydesk.prototype.getInfo = function () {
    var info = 'ima oborot:'+this.totalMoney+'!';
    return info;
};