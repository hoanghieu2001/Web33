let sum=(a:number ,b:number):number => {
    return a+b;
}
const handleLogs = (message:string):void => {
    console.log(">>> message:",message);
}

// "void" trong lập trình là một kiểu dữ liệu không có giá trị trả về.Thường được sử dụng khi chúng ta muốn chỉ 
// thực hiện một hành động nào đó mà không cần trả về kết quả.Trong TypeScript, "void" được sử dụng để đánh dấu
//  một hàm không trả về bất kỳ giá trị nào