type van= string|number
type dog=string|number
function sum(a:dog,b:van){
    if(typeof a === 'number' && typeof b ==="number"){
        return a+b;
    }
    if(typeof a ==="string" && typeof b ==="string"){
        return a.concat(b)
    }
    throw new Error("Paraghrap")
}
console.log("tổng của 2 giá trị là : =", sum("2","Hoàng Văn Hiệu"))