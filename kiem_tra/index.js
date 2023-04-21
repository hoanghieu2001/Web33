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
    const $mainBlog = $(".grid");

    try {
        const blogs = await getBlogs();
        $mainBlog.append(
            $.map(blogs, function (blog) {
                return $(`
            <div class="grid-item">
                                <a href="/posts/37587/doi-net-ve-iam">
                                    <div class="card post">
                                        <div class="post-thumbnail">
                                            <img src="https://media.techmaster.vn/api/static/8EQITjjJ/gWrSm1EV"
                                                alt="${blog.title}"
                                                onError="this.onerror=null;this.src='/resources/image/thumbnail.jpg'" />
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title">${blog.title}</div>
                                            <p class="card-text">${blog.body}</p>
                                        </div>
                                        <div class="card-footer d-flex justify-content-between">
                                            <div class="view-count">
                                                <i class="far fa-eye"></i>
                                                23
                                            </div>
                                            <div class="published-at">16-04-2023</div>
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
    ;
}

showBlogs();

//Click vào xem tất cả thì hiển thị bảng tags
// $(".btn-search").on("click", function () {
//     $(".category_list").toggleClass("hidden");
// });

//List các tags

$(document).ready(function () {
    // Lắng nghe sự kiện nhập từ khóa vào ô tìm kiếm
    $("#keyword").on("keyup", function () {
        // Lấy từ khóa tìm kiếm và chuyển thành chữ thường
        var searchKeyword = $(this).val().toLowerCase();
        // Lọc danh sách bài viết theo từ khóa tìm kiếm
        $(".list-posts .grid-item").filter(function () {
            // Hiển thị bài viết phù hợp với từ khóa tìm kiếm
            $(this).toggle($(this).text().toLowerCase().indexOf(searchKeyword) > -1);
            //Trong đoạn mã trên, ta đã sử dụng hàm toggle() của jQuery để hiển thị hoặc
            // ẩn các bài viết phù hợp với từ khóa tìm kiếm. Nếu chỉ số của từ khóa trong
            //nội dung của bài viết là -1, nghĩa là từ khóa không xuất hiện trong bài viết,
            // chúng ta sẽ ẩn bài viết đó bằng cách gọi phương thức toggle(false), ngược lại, chúng ta sẽ hiển thị bài viết đó bằng cách gọi phương thức toggle(true).
        });
    });
});
let productContainer = document.querySelector('.grid');
let productItems = document.querySelectorAll('.grid-item');

productItems.forEach((productItem, index) => {
    if (index !== 0) {
        productItem.style.display = 'none';
    }
});

productContainer.addEventListener('scroll', () => {
    let scrollTop = productContainer.scrollTop;
    let visibleHeight = productContainer.offsetHeight;
    let totalHeight = productContainer.scrollHeight;

    if (scrollTop + visibleHeight === totalHeight) {
        let nextProductItem = productItems[Array.from(productItems).findIndex(productItem => productItem.style.display !== 'block')];

        if (nextProductItem) {
            nextProductItem.style.display = 'block';
        }
    }
});
