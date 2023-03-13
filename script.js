function delay(milseconds){
    return new Promise((resolve, reject)=>{
if(milseconds){
resolve (`${milseconds}`)

}else{

    const err=new Error(`error`);
    reject(err)
}

    })
}

delay(1000)
.then((milseconds)=>{
console.log(`${milseconds}`)

})
.catch((err)=>{
console.log(err)

})

.finally(()=>{
console.log(`end`)
})