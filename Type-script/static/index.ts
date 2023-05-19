class Duckys {
    static pi:number=3.14
    test="Đoán xem nào"
    static average(num:number){
        return this.pi *num*num
    }
}
console.log(Duckys.pi);
let tests =new Duckys;
console.log(tests.test);
console.log(Duckys.average(10));