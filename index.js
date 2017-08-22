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
        for (var i = 0; i < arr.length; i++) {
            if (i === 0) {
                var str2 = arr[i].replace(/Ngõ/g, "Lane").replace(/ngõ/g, "Lane");
                str2 = str2.replace(/Số/g, "").replace(/số/g, "");
                str2 = str2.replace(/Nhà/g, "").replace(/nhà/g, "");
                tmpArr.push(convert(str2))
            }else{

                tmpArr.push(convert(arr[i]))
            }
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
    for (var i = 0; i < numberKeys.length; i++) {
        if (str.toLowerCase().startsWith(numberKeys[i])) {
            if (str.split(/\s+/g).pop().match(/[0-9]+/g)) {
                return (numberMap[numberKeys[i]] + str.substring(numberKeys[i].length)).trim();
            }
        }
    }
    for (var i = 0; i < keys.length; i++) {
        if (str.toLowerCase().startsWith(keys[i])) {
            return (str.substring(keys[i].length) + " " + map[keys[i]]).trim();
        }
    }
    return str;
};

module.exports = {convertMulti: convertMulti, convert: convert}