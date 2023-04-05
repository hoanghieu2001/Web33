// mảng chứa danh sách công việc
const todos = [
    // Mỗi công việc là 1 obj
    // Chứa thông tin mo tả về công việc đó
    // {
    //     id: 1,
    //     title: "Làm bài tập DOM",
    //     status: false,
    // },
    // {
    //     id: 2,
    //     title: "Làm bài tập HTML",
    //     status: true,
    // }
];

// Lấy ra thẻ danh sách công việc
const todoListElement = document.querySelector('.todo__list');
const createFormElement = document.querySelector(".create__form");
const titleInputElement = createFormElement.querySelector(".form__control");

function createNewtodo(title) {
    return {
        id: Date.now(),
        title,
        status: false,
    }
}
function deleteTodo(e) {
    const buttonElement = e.target;
    const liElement = buttonElement.prentElement;
    liElement.remove();
}
// tạo 1 thẻ công việc
function createTodoItem(todo) {
    const liElement = document.createElement("li");
    liElement.classList.add("todo__item");
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.classList.add("todo__checkbox");
    checkboxElement.addEventListener("change", update);
    // Nếu công việc đã hoàn thành
    if (todo.status) {
        
        checkboxElement.checked = true;
    }
    const titleElement = document.createElement("span");
    titleElement.classList.add("todo__title");
    titleElement.textContent = todo.title;

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("todo__delete__button");
    buttonElement.textContent = "Delete";
    buttonElement.addEventListener("click", deleteTodo);

    liElement.append(checkboxElement, titleElement, buttonElement);
    // liElement.setAttribute("todo__")?
    return liElement;
}

function renderTodoList(todos) {
    todoListElement.innerHTML = "";
    todos.forEach(function (todo) {
        const item = createTodoItem(todo);

        todoListElement.append(item);
    })
}

createFormElement.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = titleInputElement.ariaValueMax;
    const newTodo = createNewtodo(title);
    todos.push(newTodo);
    const newTodoItem = createTodoItem(newTodo);
    todoListElement.append(newTodo);
})
renderTodoList(todos);