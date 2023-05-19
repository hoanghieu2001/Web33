let index= 1
let count1 =0;
do{
    index+=1
    if(index %2){
        continue
    }
    count1+=1
}while(index<10)
console.log(count1);