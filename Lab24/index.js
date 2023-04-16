// Hàm để lấy về danh sách các giống chó
async function getBreeds() {
    // Gọi API
    const res = await fetch("https://dog.ceo/api/breeds/list/all");

    // Kiểm tra thành công hay thất bại
    // Nếu không thành công
    if (!res.ok) throw new Error("Failed to load data");

    // Nếu thành công thì convert dữ liệu trong body ra JSON
    const data = await res.json();

    // Tạo 1 mảng chứa các giống chó
    const breeds = [];

    // Lặp qua từng key trong object
    for (let masterBreed in data.message) {
        breeds.push(masterBreed);
    }

    // Trả về kết quả
    return breeds;
}

// Hàm để lấy về danh sách sub breed
async function getSubBreeds(masterBreed) {
    // Gọi API
    const res = await fetch(`https://dog.ceo/api/breed/${masterBreed}/list`);

    // Kiểm tra thành công hay thất bại
    // Nếu không thành công
    if (!res.ok) throw new Error("Failed to load data");

    // Nếu thành công thì convert dữ liệu trong body ra JSON
    const data = await res.json();

    // Trả về kết quả
    return data.message;
}

// Hàm để lấy về hình ảnh ngẫu nhiên theo master breed
async function getRandomImage(masterBreed) {
    // Gọi API
    const res = await fetch(
        `https://dog.ceo/api/breed/${masterBreed}/images/random`
    );

    // Kiểm tra thành công hay thất bại
    // Nếu không thành công
    if (!res.ok) throw new Error("Failed to load data");

    // Nếu thành công thì convert dữ liệu trong body ra JSON
    const data = await res.json();

    // Trả về kết quả
    return data.message;
}

// Gọi hàm để lấy dữ liệu
// Và render ra danh sách các giống chóa
async function showBreeds() {
    const $breedsList = $(".breeds-list");
    const $subBreedButton = $(".sub-breed");
    const $subBreedImageButton = $(".sub-breed-image");

    try {
        const breeds = await getBreeds();

        // Select ra thẻ select.breeds-list
        // Thêm vào một mảng các option
        $breedsList.append(
            // Sử dụng hàm map để chuyển mảng chuỗi thành mảng các thẻ options
            $.map(breeds, function (breed) {
                return $(`<option value="${breed}">${breed}</option>`);
            })
        );

        // Thay text loading thành Select master breed để người dùng biết là có thể chọn
        $("option:first-child", $breedsList).text("Select master breed");
        // Enable select và button
        $breedsList.removeAttr("disabled");
        $subBreedButton.removeAttr("disabled");
        $subBreedImageButton.removeAttr("disabled");
    } catch (error) {
        console.error(error);

        // Nếu có lỗi thì hiển thị thông báo lỗi cho người dùng biết
        $("option:first-child", $breedsList).text(error.message);
    }
}

// Gán sự kiện cho nút
$(".sub-breed").on("click", async function () {
    // Lấy giá trị của ô select
    const masterBreed = $(".breeds-list").val();

    if (!masterBreed) return;

    $(".master-breed-name").text(masterBreed);

    const $subBreedsList = $(".sub-breeds-list");

    try {
        // Hiển thị sub breeds
        $(".sub-breeds").removeAttr("hidden");

        $subBreedsList.empty();
        $subBreedsList.append("<li>Loading...</li>");

        const subBreeds = await getSubBreeds(masterBreed);

        // Kiểm tra xem có sub breeds hay không
        if (subBreeds.length === 0) {
            // Nếu không có thì hiển thị text không có
            $subBreedsList.empty();
            $subBreedsList.append("<li>No sub-breeds</li>");
        } else {
            // Nếu có thì thêm mảng sub breed vào list
            $subBreedsList.empty();
            $subBreedsList.append(
                $.map(subBreeds, function (subBreed) {
                    return $(`<li><a href='#'>${subBreed}</a></li>`);
                })
            );
        }
    } catch (error) {
        console.error(error);
        $subBreedsList.empty();
        $subBreedsList.append(`<li>${error.message}</li>`);
    }
});

// Gán sự kiện cho nút
$(".sub-breed-image").on("click", async function () {
    // Lấy giá trị của ô select
    const masterBreed = $(".breeds-list").val();

    if (!masterBreed) return;

    $(".master-breed-name").text(masterBreed);
    const $wrapper = $(".random-image-wrapper");

    try {
        // Hiển thị sub breeds
        $wrapper.addClass("loading");

        $(".breed-image").removeAttr("hidden");
        const randomImage = await getRandomImage(masterBreed);

        $(".random-image").prop("src", randomImage);
    } catch (error) {
        console.error(error);
    } finally {
        $wrapper.removeClass("loading");
    }
});

showBreeds();
