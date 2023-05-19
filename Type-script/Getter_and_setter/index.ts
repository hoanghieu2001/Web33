class Client {
    private name: string;
    private _age: number;
    address: string;
    constructor(name: string, _age: number, address: string) {
        this.name = name;
        this._age = _age;
        this.address = address;
    }
    // getFullName(): string {
    //     return `${this.name},${this.age}${this.address}`
    // }
    get age(){
        return this._age;
    }
    set age(age2:number){
        if(age2 <0 || age2 >100){
            throw Error("Bài sai rồi")
        }else
        this._age=age2;
    }
}
let client2 = new Client('Hoàng Văn Hiệu', 12, 'HaNoi');
let checkAge = client2.age;

client2.age=90; // setter
console.log(client2);



class Chickens {
    private name:string;
    weight:number;
    color:string;
    constructor(name:string,weight:number,color:string) {
        this.name=name;
        this.weight=weight;
        this.color= color;
    }
    get currentName(){
        return this.name;
    }
    set currentWeight(weight2:number){
        if(weight2<0){
            throw Error ("Không có con gà nào hết")
        }else{

            this.weight=weight2;
        }
    }

}
// class cat extends Chickens {
//     speed:number;
//     constructor(name:string,speed:number,weight:number,color:string) {
//         super(name, weight, color,);
//         this.speed=speed
//     }
//     get cats(){
//         return this.name;
//     }
// }
let Chicken = new Chickens("Do",4,"red")
Chicken.currentWeight=100;
console.log(Chicken.currentName);
console.log(Chicken);