class Animal {
    name: string;
    created: number; // Thêm thuộc tính "created" vào lớp Animal

    constructor(name: string) {
        this.name = name;
    }
}

class Rabbit extends Animal {
    constructor(name: string) {
        super(name);
        this.created = Date.now(); // Gán giá trị cho thuộc tính "created"
    }
}

let rabbit = new Rabbit("White Rabbit");
// alert(rabbit.name); // Hiển thị "White Rabbit"
console.log(rabbit.name);
