class Person {
    name:string;
    age:number;
    address: string;
    constructor(name:string, age:number,address:string) {
        this.name = name;
        this.age = age;
        this.address=address;
    }
    getFullName():string{
        return `${this.name},${this.age}${this.address}`
    }
}
let full= new Person('Hoàng Văn Hiệu',12,'HaNoi');
console.log(full);

class Dogs {
    name:string;
    age:number;
    color:string;
    weight:number
    constructor(name:string,age:number,color:string,weight:number) {
        this.name =name;
        this.age=age;
        this.color=color;
        this.weight=weight;
    }
    getDogs():string{
        return `${this.name} ${this.age} ${this.color} ${this.weight}`
    }
}
let fullDogs = new Dogs("Quang",22,"Đen",58);
console.log(fullDogs);