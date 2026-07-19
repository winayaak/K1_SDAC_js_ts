const arr=[1,2,3,4,5,6,7,7,8]
 
function High(score){
    return Math.max(...score)
}
console.log(High(arr))