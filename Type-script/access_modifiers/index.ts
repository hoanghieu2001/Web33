class Employee{
    public empName:string;
    protected empCode:number;
    constructor(name:string,code:number){
        this.empName=name;
        this.empCode=code;
    }
}
// class salesEmployee extends Employee {
//     private department: string;
//     constructor(name:string,code:number,department:string) {
//         super(name,code),
//         this.department=department;
//     }
// }
let emp = new Employee("Hiệu",123);
emp.empCode=123; // không cho truy cập
// readonly chỉ dùng để đọc