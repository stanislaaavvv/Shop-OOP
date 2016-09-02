/**
 * Created by user on 9/2/16.
 */
function Bigclient(money,productname,productquantity,price) {
    Client.call(this,money,productname,productquantity,price);
}

Bigclient.prototype = Object.create (Client.prototype);
Bigclient.prototype.constructor = Bigclient;
