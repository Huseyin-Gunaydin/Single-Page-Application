function isZero(number){
    return new Promise((resolve, reject)=>{
        if(number==0){
            resolve("is Zero")
        }else{
            reject("not Zero")
        }
    })
}
isZero(0)
.then((resolvedValue)=>{
    console.log(resolvedValue)
})
.catch((rejectedValue)=>{
    console.log(rejectedValue)
})

async function isZeroAdvanced(number)