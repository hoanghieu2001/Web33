// Api của trình duyệt
// Đặt lịch cho 1 thao tác và hành động sẽ xảy ra sau này tại 1 thời thiểm mà mk khai báo (Dellay 1 thao tác chạy sau 1 thời gian)
// setTimeout(callback, milisecond)
// console.log("trước setTimeout");

// let now = Date.now();
// while(Date.now() - start<3000){
//     console.log("Hoàng văn Hiệu");
// }
// setTimeout(function(){
//     console.log("in ra sau 3s")
// },3000)
// console.log("sau setTiemout");
// // Đặt lịch tự động lặp đi lặp lại các thao tác với mỗi khoảng thời gian
// // setInterval(callback, milisecond)
// setInterval(function(){
//     console.log(new Date().toLocaleTimeString());console.log("Hiệu");
// },1000)
// Promise: lời hứa (async awail)
// Hứa hẹn thực hiện 1 công việc và sẽ xong 1 thời điểm nào đó trong tương lai
// Chỉ định 1 hành động diễn ra tiếp theo sau khi lời hứa hoàn thành
// Nếu lời hứa thành công
// .then()
// Nếu lời hứa thất bại
//. catch()
// Cuối cùng thì dù thành công hay thất bại thì đều trả về even
// .finally()
// Làm việc A
// Nếu A thành công thì làm tiếp B
// Nếu B thành công thì làm tiếp C
// ...

// Es7 bổ xung cú pháp Async await rút gọn khá nhiều thứ
// async khai báo trước 1 function
// Coi các câu lệnh bên trong là 1 lời hứa, là 1 promise
// Bên trong các hàm có thể sử dụng cú pháp await với 1 promise
// async function doTaskaA() { }
// async function doTaskaB() { }
// async function doTaskaC() { }
// async function doTaskaD() { }
// async function doTaskaE() { }
// async function main() {
//     try {
//         const resultA = await doTaskaA();
//         const resultB = await doTaskaB(resultA);
//         const resultC = await doTaskaC(resultB);
//         const resultD = await doTaskaD(resultC);
//         const resultE = await doTaskaE(resultD);
//         console.log(resultE);
//     } catch (error) {

//     } finally {

//     }

// }
// doTaska().then().then().then()

// Bất kì các trao đổi nào giữa client và server thì gọi chung là HTTP Message
// HTTP message được gửi từ client đến server thì gọi là HTTP Request (yêu cầu)
// HTTP Message được gửi từ server đến client thì được gọi là HTTP Response (Phản hồi)
// Với mỗi 1 request thì tương ứng sẽ có 1 response

// Cấu trúc của HTTP message
// Request
// start (bao gồm Method (Verb) |Path (Resoure) | Protocol)
// Header ( bao gồm các thông tin đính kèm)
// Body( dữ liệu gửi đến server)
// ví dụ truy cập vào trang techmaster.vn => http://techmaster.vn/
// Get / HTTP1.1

// Response
// start: mở trạng thái (Status Code)
// Header : bao gồm các thong tin bổ sung cho phản hồi
// Body : Là dữ liệu mà server gửi đi


// Ví dụ phản hồi  Response từ HTTPS: techmaster.vn/
// 200
// <div></div>

// HTTP Methos:
// Get : lấy dữ liệu
// Post : Tạo dữ liệu
// Put (path): Chỉnh sửa dữ liệu
// Delete: xóa dữ liệu

// Patch  ( Resource):
// có thể là file, dữ liệu trong database,...

// Header: Bao gồm các thông tin về trình duyệt, thông tin xác thực. cookies, sesstion
// Body : Nội dung gửi đi có nhiều định dạng khác nhau, phổ biến nhất là JSON
// HTTP status code
// 1xx - đã tiếp nhận yêu cầu, đang chờ xử lý
// 2xx - Thành công (200 ok (get ,Put), 201 created (Post),204 no content(Delete))
// 3xx - Chuyển hướng( 301, 302,305)
// 4xx - Lỗi phía client( 400 bad Request, 401 Unauthorized , 403 Forbiden, 404 Not Found, 405 Method Not Allowed)
// 5xx - Lỗi phí server (500 internal server error - code ngu)
// Post ( cho phép lấy dữ liệu và chỉnh sửa tạo dữ liệu nhưng không được phép xóa (Chỉ tiếp nhận các method Get Post Put))
// 600 mã trạng thái

// tạo hàm để lấy thông tin người dùng 
// Bất kỳ trao đổi nào giữa client và server thì gọi chung là HTTP Message
// HTTP Message được gửi từ client đến server thì gọi là HTTP Request (yêu cầu)
// HTTP Message được gửi từ server đến client thì gọi là HTTP Response (phản hồi)
// Với mỗi 1 request thì tương ứng sẽ có 1 response

// Cấu trúc của HTTP Message
// Request
// Start: Bao gồm HTTP Method (Verb) | Path (Resource) | Protocol
// Header: Bao gồm các thông tin bổ sung cho yêu cầu
// Body: Dữ liệu gửi đến server

// Ví dụ truy cập vào trang https://techmaster.vn/
// GET / HTTP1.1

// Response
// Start: Mã trạng thái (Status Code)
// Header: Bao gồm các thông tin bổ sung cho phản hồi
// Body: Là dữ liệu mà server gửi đi

// Ví dụ response từ https://techmaster.vn/
// 200
// <div></div>

// HTTP Methdos:
// - GET: Lấy dữ liệu
// - POST: Tạo dữ liệu
// - PUT (PATCH): Chỉnh sửa dữ liệu
// - DELETE: Xóa dữ liệu

// Patch (Resource):
// Có thể file, dữ liệu trong database, ...

// Header: Bao gồm các thông tin về trình duyệt, loại nội dung

// Body: Nội dung gửi đi (Có nhiều định dạng khác nhau, phổ biến nhất là JSON)

// HTTP Status Code
// 1xx - Đã tiếp nhận yêu cầu, đang chờ xử lý
// 2xx - Thành công (200 OK (GET, PUT), 201 Created (POST), 204 No Content (DELETE))
// 3xx - Chuyển hướng (301, 302, 305)
// 4xx - Lỗi phía client (400 Bad Request, 401 Unauthorized, 403 Forbiden, 404 Not Found, 405 Method Not Allowed)
// 5xx - Lỗi phía server (500 Internal Server Error, 501, 502)

// Tạo hàm async để lấy thông tin người dùng
async function getUsers() {
    // Gửi request đến server, chờ response
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check trạng thái response
    // Nếu không ok thì ném ra lỗi
    if (!res.ok) throw new Error("Failed to load data");

    // Nếu oke thì convert dữ liệu trong body thành JSON
    const users = await res.json();

    // Và trả về kết quả
    return users;
}

// Tạo hàm để gửi request create user
async function createUser(data) {
    // Cấu hình header
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    // Body
    const raw = JSON.stringify(data);

    // Cấu hình request
    const requestOptions = {
        method: "POST",
        headers,
        body: raw
    };

    // Gửi request, chờ response
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        requestOptions
    );

    // Check trạng thái
    // Nếu không ok thì ném ra lỗi
    if (!res.ok) throw new Error("Failed to create user");

    // Nếu ok thì convert dữ liệu trong body
    const newUser = await res.json();

    // Và trả về kết quả
    return newUser;
}

// Luồng chính
// Lấy dữ liệu và render lên trình duyệt
async function main() {
    try {
        // Gọi hàm để lấy dữ liệu, chờ response
        const users = await getUsers();

        // Thay thế thẻ tr loading thành mảng tr với thông tin user
        $("tbody tr").replaceWith(
            $.map(users, function (user, index) {
                return $(`
        <tr>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td><a href="mailto:${user.email}">${user.email}</a></td>
          <td>${user.address.street}, ${user.address.city}</a></td>
          <td><a href="${user.website}">${user.website}</a></td>
          <td>${user.company.name} </td>
          <td>Xóa</td>
        </tr>
      `);
            })
        );
    } catch (error) {
        // Nếu có lỗi xảy ra
        console.error(error);
        // Thay thế nội dung tr loading thành thông báo lỗi
        $("tbody tr").text(error.message);
    }
}

main();
// main.spplice(0,1);

// Gán sự kiện cho form
$("form").on("submit", async function (e) {
    // Ngăn load lại trang
    e.preventDefault();

    // Thu thập dữ liệu trong form
    const name = $("#name").val();
    const username = $("#username").val();
    const email = $("#email").val();
    const address = $("#address").val();
    const website = $("#website").val();
    const company = $("#company").val();
    

    try {
        // Gọi hàm để tạo user
        const newUser = await createUser({ name, username, email,address,website,company });

        // Thêm thông tin người dùng mới vào giao diện
        $(`
        <tr>
          <td>${newUser.name}</td>
          <td>${newUser.username}</td>
          <td><a href="mailto:${newUser.email}">${newUser.email}</a></td>

          <td>${newUser.address}, ${newUser.address}</a></td>
          <td><a href="${newUser.website}">${newUser.website}</a></td>
          <td>${newUser.company}</td>
        </tr>
      `).appendTo("tbody");
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});

// getUsers();
// content-type là gì> => JSON
// Lấy ra như nào => JSON()