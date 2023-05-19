class Person3 {
    firstName: string; lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    decribe(): string {
        return `${this.firstName} ${this.lastName}`
    }
}
// kế thừa từ cha
class Employee1 extends Person3 {
    private jobTitle:string;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle:string
    ){
        super(firstName,lastName);
        this.jobTitle=jobTitle;
    }
    decribe(): string {
        return `${this.firstName} ${this.lastName} ${this.jobTitle}`
    }
}
let Employee=new Employee1("Hoàng","Hiệu","Hit")
console.log(Employee.getFullName());