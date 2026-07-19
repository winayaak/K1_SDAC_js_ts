function payment(amount){
    return new Promise((resolve, reject) => {
        if(amount){
            resolve("ok")
        }
        else{
            reject("no")
        }
    });
}
async function order(){
    try{
        const result=await payment(100)
        if(result){
                console.log(result);
        }
        
    }
catch(error){
    console.error(error);
}
}
order()