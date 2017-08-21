var map = {
    "thanh pho": "city",
    "tinh": "province",
    "huyen": "district",
    "quan": "district",
    "xa": "commune",
    "thon": "hamlet",
    "phuong": "ward",
    "duong": "street",
    "ngach": "alley",
    "ngo": "lane"
};

var numberMap = {
    "huyen": "district",
    "quan": "district",
    "phuong": "ward",
    "so nha": "No",
    "duong": "street"
};

var flatWord = function (str) {
    // language=JSRegexp
    str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a");
    str = str.replace(/[èéẹẻẽêềếệểễ]/g, "e");
    str = str.replace(/[ìíịỉĩ]/g, "i");
    str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o");
    str = str.replace(/[ùúụủũưừứựửữ]/g, "u");
    str = str.replace(/[ỳýỵỷỹ]/g, "y");
    str = str.replace(/đ/g, "d");

    str = str.replace(/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, "A");
    str = str.replace(/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, "E");
    str = str.replace(/[ÌÍỊỈĨ]/g, "I");
    str = str.replace(/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, "O");
    str = str.replace(/[ÙÚỤỦŨƯỪỨỰỬỮ]/g, "U");
    str = str.replace(/[ỲÝỴỶỸ]/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str
};

var convertMulti = function (str) {
    var arr = str.split(',');
    if (arr.length > 1) {
        var tmpArr = [];
        for (var index in arr) {
            tmpArr.push(convert(arr[index]))
        }
        return tmpArr.join(', ')
    } else {
        return convert(str)
    }
};
var convert = function (str) {
    str = str.trim();
    str = flatWord(str);
    var keys = Object.keys(map);
    var numberKeys = Object.keys(numberMap);
    for (var key in numberKeys) {
        if (str.toLowerCase().startsWith(numberKeys[key])) {
            if (str.split(/\s+/g).pop().match(/[0-9]+/g)) {
                return (numberMap[numberKeys[key]] + str.substring(numberKeys[key].length)).trim();
            }
        }
    }
    for (var key in keys) {
        if (str.toLowerCase().startsWith(keys[key])) {
            return (str.substring(keys[key].length) + " " + map[keys[key]]).trim();
        }
    }
    return str;
};

module.exports = {convertMulti: convertMulti, convert: convert}