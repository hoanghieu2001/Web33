abstract class Client3 {
    name: string; weight: number; height: number;
    constructor(name: string, weight: number, height: number) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
    fullName(){
        return `${this.name} ${this.weight} ${this.height}`
    }
}
 class Person4 extends Client3{
    pain:string;
    constructor(name: string, weight: number, height: number,pain:string){
        super(name,weight,height)
        this.pain=pain
    }
    getFullName(){
        return `${this.name} ${this.weight} ${this.height}`
    }
}
let human=new Person4("Hoàng Hiệu",58,1700,'xanh')
console.log(human.getFullName());