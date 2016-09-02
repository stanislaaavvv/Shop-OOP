/**
 * Created by user on 9/1/16.
 */


var productForStorage = ["Milka",5,20,"Orehite",10,30,"Vereq",1,50,"Nescafe",7,20,"Jameson",27,15,"Bochko",1,30,"Bob",7,30,"Leki",5,15,"Borovec",1,20,"Staropramen",2,50];
var storage = new Storage(productForStorage);

var product1 = new SingleProduct("Milka",5,10);
storage.emptyStorage("Milka",10);
var product2 = new SingleProduct("Jameson",27,10);
storage.emptyStorage("Jameson",10);
var product3 = new SingleProduct("Bob",7,10);
storage.emptyStorage("Bob",10);
var product4 = new SingleProduct("Leki",7,10);
storage.emptyStorage("Leki",10);
var product5 = new SingleProduct("Staropramen",2,30);
storage.emptyStorage("Staropramen",30);
var product6 = new SingleProduct("Orehite",10,10);
storage.emptyStorage("Orehite",30);

var bundle1 = new BundleProduct(10);
var bundle2 = new BundleProduct(10);
bundle1.makeBundle(product1,product2);
bundle2.makeBundle(product3,product4);


var shop = new Shop(3,product5.getArrayProducts(),bundle1.getArrayProducts());

shop.addSingleProducts(product6.getArrayProducts());
shop.addBundleProducts(bundle2.getArrayProducts());

console.log('V magazina bqha zaredeni komplekti(ime,cena,broi):'+shop.bundles+" i edinichni produkti(ime,cena,broi):"+shop.singleProducts+'!');

var bigclient = new Bigclient("faktura","Staropramen",10,2);
bigclient.addToCart("Orehite",5,10);
bigclient.priceOfPurchase();
console.log(bigclient.infoShopping());

var smallclient = new Smallclient(1000,"Milka+Jameson",10,32);
smallclient.addToCart("Bob+Leki",5,14);
smallclient.priceOfPurchase();
console.log(smallclient.infoShopping());

var smallclient2 = new Smallclient(1000,"Bob+Leki",2,14);
smallclient2.addToCart("Orehite",1,10);
smallclient2.priceOfPurchase();
console.log(smallclient2.infoShopping());

var paydesk1 = new Paydesk(bigclient);
paydesk1.clientPay(shop);
console.log('Kasa 1 '+paydesk1.getInfo());
var paydesk2 = new Paydesk(smallclient);
paydesk2.clientPay(shop);
console.log('Kasa 2 '+paydesk2.getInfo());
var paydesk3 = new Paydesk(smallclient2);
paydesk3.clientPay(shop);
console.log('Kasa 3 '+paydesk3.getInfo());
console.log('Vsichko zakupeno ot magazina dnes beshe na stoinost:'+shop.totalSales+'!Ostanalite produkti sa (ime,cena,broi):'+shop.bundles+' i '+shop.singleProducts+'!');
console.log(' Rezultata ot reviziqta na magazina e,che '+shop.revision(paydesk1,paydesk2,paydesk3));


