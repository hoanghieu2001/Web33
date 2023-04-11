const h1Element = document.querySelector("#heading");
console.log(h1Element);

// Đói tượng $ vừa là obj vừa là function

// chọn ra phần tử 
const $h1 = $("#heading");
console.log($h1);

// Trả về đối tượng Jquery bất kể có phần tử nào hay không


// in ra nội dung của thẻ
console.log(h1Element.textContent);

console.log($h1.text());

// Thay đổi nội dung
h1Element.textContent = "Goodbye Jquery";
$h1.text("Hoàng Hiệu");

// lấy ra thuộc tính 
console.log($h1.attr("id"));

// thay đổi thuộc tính
$h1.attr("id", "changed-heading");

// thêm class
$h1.addClass("abc");

//xóa class
$h1.removeClass("abc");

// Bật tắt / toggle class
$h1.toggle("show");

// Kiểm tra xem có class hay không
console.log($h1.hasClass("show"));

// tạo 1 hàng loạt phần tử
const $div = $("<div id ='div' class = 'div'> Nội dung của thẻ div </div> ");
console.log($div);

// thêm phần tử vào trang
$div.appendTo(document.body);
// xóa phần tử
$div.remove();

// 
// $h1.click(function(e){

// })
// thêm trình xử lý sự kiện
$h1.on("click", function (e) {
    console.log("ư ứ ừ");
});
// thêm trình xử lý 1 lần
$h1.one("click", { x: 1, y: 2 }, function (e) {
    console.log("Hàm này chạy 1 lần duy nhất");
    console.log(e.data);
});

// Truyền thêm các giá trị tùy chỉnh cho hàm xử lý sự kiện

//vidu
$("li")
    .filter(function (index) {
        return $("strong", this).length === 2;
    })
    .css("background-color", "red");