// lấy ra các hàng
const rows= document.querySelectorAll("tr")
// lấy ra cột
rows.forEach(function(row){
    row.cells[row.rowIndex].classList.add("bg-red")
    row.cells[row.cells.length -row.rowIndex-1].classList.add("bg-red")
})
// tìm ra cột có chỉ mục bằng với của mảng
// Áp dụng kiểu css


const imgEL = document.createElement("img");
imgEl.alt= "girl xinh";
imgEl.width="300";
imgEl.classList.add("girl")
imgEL.src="anh.jpg";
console.log(imgEl);



const aEL= document.createElement("a");
aEL.href="https://google.com";
aEL.textContent="Google"

aEL.append(imgEl)
const p =document.createElement("p");
p.alt="girl";
p.textContent="Hoàng Văn Hiệu"

const inputEL= document.createElement("input");
inputEL.type="text";

const divEl =document.createElement("div");
divEl.textContent=" ";

const audioEL = document.createElement("audio");
audioEL.controls= true;
audioEL.src ="";
console.log(audioEL);

const tableEL = document.querySelector("table");

tableEL.before(imgEL)
tableEL.after(aEL)
document.body.append(aEL)

document.body.append(aEL);
tableEL.before(imgEL.cloneNode());
//tim tạo,di chuyển, tìm kiếm