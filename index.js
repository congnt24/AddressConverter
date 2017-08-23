var map = {
    "thành phố ": "City",
    "tp ": "City",
    "tp. ": "City",
    "tp.": "City",
    "t.p ": "City",
    "thị trấn ": "Town",
    "tt ": "Town",
    "tt. ": "Town",
    "phố ": "Town",
    "tỉnh ": "Province",
    "huyện ": "District",
    "quận ": "District",
    "xã ": "Commune",
    "thị xã ": "Commune",
    "thôn ": "Hamlet",
    "phường ": "Ward",
    "đường số ": "Street",
    "đường ": "Street",
    "ngách ": "Alley",
    "ngõ ": "Lane",
    "hẻm ": "Lane"
};

var numberMap = {
    "huyện ": "District",
    "quận ": "District",
    "phường ": "Ward",
    "đường số ": "Street",
    "đường ": "Street",
    "tổ ": "Group",
    "số ": "No",
    "số nhà ": "No"
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
    var rsAstralRange = '\\ud800-\\udfff',
        rsComboMarksRange = '\\u0300-\\u036f',
        reComboHalfMarksRange = '\\ufe20-\\ufe2f',
        rsComboSymbolsRange = '\\u20d0-\\u20ff',
        rsComboRange = '[' + rsAstralRange + rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + ']';
    str = str.replace(RegExp(rsComboRange, 'g'), '');
    return str
};

var convertMulti = function (str) {
    var arr = str.split(',');
    if (arr.length > 1) {
        var tmpArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (i === 0) {
                var str2 = arr[i].replace(/Ngõ/g, "Lane").replace(/ngõ/g, "Lane");
                tmpArr.push(convert(str2))
            } else {

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
    // str = flatWord(str);
    var keys = Object.keys(map);
    var numberKeys = Object.keys(numberMap);
    for (var i = 0; i < numberKeys.length; i++) {
        if (str.toLowerCase().startsWith(numberKeys[i])) {
            if (numberMap[numberKeys[i]] == 'No') {
                return flatWord((numberMap[numberKeys[i]] + " " + str.substring(numberKeys[i].length)).trim());
            }
            if (str.split(/\s+/g).pop().match(/[0-9]+/g)) {
                return flatWord((numberMap[numberKeys[i]] + " " + str.substring(numberKeys[i].length)).trim());
            }
        }
    }
    for (var i = 0; i < keys.length; i++) {
        if (str.toLowerCase().startsWith(keys[i])) {
            return flatWord((str.substring(keys[i].length) + " " + map[keys[i]]).trim());
        }
    }
    return flatWord(str);
};

module.exports = {convertMulti: convertMulti, convert: convert}