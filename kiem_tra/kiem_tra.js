// Hàm để lấy về danh sách các giống chó
async function getBlogs() {
    // Gọi API
    const res = await fetch("https://dummyjson.com/posts");

    // Kiểm tra thành công hay thất bại
    // Nếu không thành công
    if (!res.ok) throw new Error("Failed to load data");

    // Nếu thành công thì convert dữ liệu trong body ra JSON
    const data = await res.json();
    // console.log(data);
    // Tạo 1 mảng chứa các thông tin của blog
    const blogs = [];
    // Lặp qua từng key trong object
    for (let i = 0; i < data.posts.length; i++) {
        blogs.push(data.posts[i]);
    }

    // Trả về kết quả

    return blogs;
}
getBlogs();

// Gọi hàm để lấy dữ liệu
// Và render ra danh sách các item blog
async function showBlogs() {
    const $mainBlog = $(".main_blog");

    try {
        const blogs = await getBlogs();
        $mainBlog.append(
            $.map(blogs, function (blog) {
                return $(`
            <div class="blog_item" data-id="${blog.id}"><a href="?postId=${blog.id}">
                    <div class="card post">
                        <div class="post-thumbnail"><img
                                src="https://media.techmaster.vn/api/static/bub3enc51co7s932dsk0/ui_jMy0O"
                                alt="${blog.title}">
                        </div>
                        <div class="card-body">
                            <div class="card-title">${blog.title}</div>
                            <p class="card-text">${blog.body}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <div class="view-count"><i class="far fa-eye"></i>${blog.userId}</div>
                            <div class="published-at">17-04-2023</div>
                        </div>
                    </div>
                </a>
            </div>
        `);
            })
        );
    } catch (error) {
        console.error(error);
        // Nếu có lỗi thì hiển thị thông báo lỗi cho người dùng biết
        alert("Lỗi mẹ rồi, nhìn cái gì nữa. F5 đi");
    }
    a;
}

showBlogs();

//Click vào xem tất cả thì hiển thị bảng tags
$(".btn-search").on("click", function () {
    $(".category_list").toggleClass("hidden");
});

//List các tags
