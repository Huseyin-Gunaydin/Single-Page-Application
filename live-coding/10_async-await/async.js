/* function isZero(number){
    return new Promise((resolve, reject)=>{
        if(number==0){
            resolve("is Zero")
        }else{
            reject("not Zero")
        }
    })
}
isZero(1000)
.then((resolvedValue)=>{
    console.log(resolvedValue)
})
.catch((rejectedValue)=>{
    console.log(rejectedValue)
})

 */


async function isZeroAdvanced(number){
    if(number == 0){
        return setTimeout(()=>"Is Zero", 1000)
    }else{
        return "Not Zero"
    }
}

const returnIsZeroAdvanced = isZeroAdvanced(0)
console.log(returnIsZeroAdvanced)


isZeroAdvanced(0)
.then(resolvedValue =>{
    console.log(resolvedValue)
})
.catch((rejectedValue)=>{
    console.log(rejectedValue)
}) 