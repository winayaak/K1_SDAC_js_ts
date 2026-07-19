class Product{
    productname="Phone"
    productId=1234
    price=400000
    category="Flagship"

    displayinfo(){
        console.log(this.productId);
        console.log(this.productname);
        console.log(this.price);
        console.log(this.category);

        
        
        
    }
}

const c= new Product();
c.displayinfo();