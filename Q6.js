function payment(status){
    return new Promise(resolve,reject)
    if (status) {
        resolve("payment recevied..")
        
    } else {
        reject("Payment not received")
        
    }
}
payment(true).then((result) => {
        console.log(result)    
}).catch((err) => {
    console.log(err);
    
});