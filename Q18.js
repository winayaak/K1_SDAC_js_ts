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

const a= arr.filter((arr)=>{
    return arr.price>1500;
})
console.log(a);
