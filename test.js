var converter = require('./index')

var arrs = ["Huyện Thanh Oai", "Huyện Chương Mỹ", "Thành Phố Hà Nội", "Tỉnh Thanh Hoá", "Xã Cao Viên"
    , "Quận Tân Bình, Thành phố Hồ Chí Minh"
    , "xã Hải Minh, huyện Hải Hậu, tỉnh Nam Định"
    , "Ngách 71D, ngõ 32, đường Phan Đình Phùng, phường Quán Thánh, quận Ba Đình, Hà Nội, Việt Nam"
    , "Ngách 26, ngõ 16, đường C, phường A, quận B"
    , "Số nhà 83/16, Nguyễn Thị Minh Khai, Quận 1, Thành phố Hồ Chí Minh"];

// console.log(flatWord(arr[0]))
for (var arr in arrs) {
    console.log(converter.convertMulti(arrs[arr]))
}