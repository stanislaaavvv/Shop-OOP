/**
 * Created by user on 9/2/16.
 */

function Smallclient(money,productname,productquantity,price) {
    Client.call(this,money,productname,productquantity,price);
}

Smallclient.prototype = Object.create (Client.prototype);
Smallclient.prototype.constructor = Smallclient;
