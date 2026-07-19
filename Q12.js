"use strict";
class Order {
    orderId;
    Customername;
    totalAmount;
    constructor(orderID, Customername, totalAmount) {
        this.orderId = orderID;
        this.Customername = Customername;
        this.totalAmount = totalAmount;
    }
    displayinfo() {
        console.log(this.orderId);
        console.log(this.Customername);
        console.log(this.totalAmount);
    }
}
const o = new Order(123, "vinayak", 1234);
o.displayinfo();
