class Order{
    orderId:Number;
    Customername:string;
    totalAmount:Number;

    constructor(orderID:Number,Customername:string,totalAmount:Number){
        this.orderId=orderID;
        this.Customername=Customername;
        this.totalAmount=totalAmount;

    }
    displayinfo():void{
        console.log(this.orderId);
        console.log(this.Customername);
        console.log(this.totalAmount);
        
    }
}

const o= new Order(123,"vinayak",1234);
o.displayinfo();
