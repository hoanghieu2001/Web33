interface IPerson{
    firstName:string;
    lastName:string;
}
function human1(person:IPerson){
    return `${person.firstName} ${person.lastName}`
}
let person40={
    firstName:"Hoàng",
    lastName:"Hiệu"
}
console.log(human1(person40));

type TClient={
    said:string;
    fun:string;
}
function client22(client:TClient){
    return `${client.said} ${client.fun}`
}
let client99={
    said:"Buồn",
    fun:"Vui"
}
console.log(client22(client99));
