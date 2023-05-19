let sum5 = (a:number,b:number,c?:number)=>{
    if(c){
        return a+b+c
    }
    return a+b
}
console.log(">>>Check Sum5",sum5(1,2),sum5(2,9,55));