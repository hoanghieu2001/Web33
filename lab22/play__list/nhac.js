// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const playlist = $(".playlist");

const songs = [
    {
        name: "Độ Tộc 2",
        singer: "Dộ mixi, Phúc Du",
        path: './music/song1.mp3',
        image: "https://i.ytimg.com/vi/Jk38OqdAQxc/maxresdefault.jpg",
    },
    {
        name: " Đừng chờ anh nữa",
        singer: "Tăng Phúc",
        path: "./music/song2.mp3",
        image: "https://i.ytimg.com/vi/C3GqqnJ9ID0/maxresdefault.jpg"
    },
    {
        name: "Nàng Thơ",
        singer: "Hoàng Dũng",
        path: "./music/song3.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b273248295fbbb32d0e4d71cc7ea",
    },
    {
        name: "Nơi này có anh",
        singer: "Sơn Tùng MTP",
        path: "./music/song4.mp3",
        image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/3/a/3a9e48bc4df7bbde3acea30cc267f609_1487066528.jpg',
    },];

$.each(songs, function (index, song) {
    const $song = $(`
                 <div class="song">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
                    `);
    $song.appendTo($(".playlist"));



    // console.log(song);
});
