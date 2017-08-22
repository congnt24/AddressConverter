var map = {
    "thanh pho": "City",
    "tp": "City",
    "tp.": "City",
    "t.p": "City",
    "thi tran": "Town",
    "tt": "Town",
    "tt.": "Town",
    "tinh": "Province",
    "huyen": "District",
    "quan": "District",
    "xa": "Commune",
    "thi xa": "Commune",
    "thon": "Hamlet",
    "phuong": "Ward",
    "duong": "Street",
    "ngach": "Alley",
    "ngo": "Lane"
};

var numberMap = {
    "huyen": "District",
    "quan": "District",
    "phuong": "Ward",
    "so nha": "No",
    "duong": "Street",
    "to": "Group"
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
        arr.forEach(function (item) {
            tmpArr.push(convert(item))
        })
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
    numberKeys.forEach(function (item, index) {
        if (str.toLowerCase().startsWith(item)) {
            if (str.split(/\s+/g).pop().match(/[0-9]+/g)) {
                return (numberMap[item] + str.substring(item.length)).trim();
            }
        }
    });
    keys.forEach(function (item) {
        if (str.toLowerCase().startsWith(item)) {
            return (str.substring(item.length) + " " + map[item]).trim();
        }
    });
    return str;
};

module.exports = {convertMulti: convertMulti, convert: convert}