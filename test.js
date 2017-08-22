var converter = require('./index')

Array.prototype.asdasd = function(){
    console.log("ASdasd")
}

var arrs = ["Huyện Thanh Oai", "Huyện Chương Mỹ", "Thành Phố Hà Nội", "Tỉnh Thanh Hoá", "Xã Cao Viên"
    , "Quận Tân Bình, Thành phố Hồ Chí Minh"
    , "xã Hải Minh, huyện Hải Hậu, tỉnh Nam Định"
    , "Ngách 71D, ngõ 32, đường Phan Đình Phùng, phường Quán Thánh, quận Ba Đình, Hà Nội, Việt Nam"
    , "Ngách 26, ngõ 16, đường C, phường A, quận B"
    , "Số nhà 83/16, Nguyễn Thị Minh Khai, Quận 1, Thành phố Hồ Chí Minh"];

var arr2 = ["109, Mã Mây, Hàng Bạc, Quận Hoàn Kiếm, Hà Nội", "14, Hà Huy Tập, Phường 3, Thành phố Đà Lạt, Lâm Đồng", "96A/6/7A, Tran Phú, Thành phố Nha Trang, Khánh Hòa", "Đảo Ngọc Xanh, tt. Thanh Thủy, Phú Thọ, Việt Nam", "53 , Nguyễn Thái Bình, Phường 4, Quận Tân Bình, TP Hồ Chí Minh", "10, Mường Hoa , Huyện Sa Pa, Lào Cai", "7A, Huỳnh Thúc Kháng, Mũi Né, Thành phố Phan Thiết, Bình Thuận", "54 Đặng Dung, Hồ Chí Minh, Quận 1, Việt Nam", "Tổ 5, Hải Trung, Long Hải, Huyện Long Điền, Bà Rịa - Vũng Tàu", "1 , Nguyễn Thị Minh khai, Thành phố Đà Lạt, Lâm Đồng", "3, La Văn Cầu, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu", "531, Nguyễn Oanh, phường 17, Quận Gò Vấp, TP Hồ Chí Minh", "Phong Nha, Sơn Trạch, Huyện Bố Trạch, Quảng Bình", "12/1 , Phạm Ngũ Lão, Thành phố Đà Lạt, Lâm Đồng", "164A, Phan Đình Phùng, phường 2, Thành phố Đà Lạt, Lâm Đồng", "Cầu cảng Bến Bèo, Cát Bà, Huyện Cát Hải, Hải Phòng", "S35, Sealink, Nguyễn Thông, Thành phố Phan Thiết, Bình Thuận"
, "TP Hồ chí minh", "60, Trần phú, Thành phố Nha Trang, Khánh Hòa", "60, Trần Phú, Lộc Thọ, Thành phố Nha Trang, Khánh Hòa"
,"Tổ 5, Ấp Cây Sao, Hàm Ninh, Huyện Phú Quốc, Kiên Giang"]
// console.log(flatWord(arr[0]))
for (var arr of arr2) {

    console.log(converter.convertMulti(arr))
}