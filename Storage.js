/**
 * Created by user on 9/1/16.
 */


function Storage(arrayOfProducts) {
    this.storage = arrayOfProducts;
}

Storage.prototype.emptyStorage = function (name,quantity) {
   var indexOfname = this.storage.indexOf(name);
    this.storage[indexOfname + 2] = this.storage[indexOfname + 2] - quantity;
};