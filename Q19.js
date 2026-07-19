const arr=[
    {
        name:"Phone",
        price:"1234"

    },
    {
        name:"HeadPhone",
        price:"123"
    },
    {
        name:"laptop",
        price:2999999
    }
]
 const banana= arr.reduce((total,arr)=>{
    return total=total+arr.price;
 },0);

 console.log(banana);
 