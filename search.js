var u = window.u || {};
u.isArray=function(o) {
    return typeof o=='object'&&Object.prototype.toString.call(o).slice(8,-1).toLowerCase()=='array';
};

/*
* 對json資料按照一定規則進行排列
* @param {array} array [需要排序的陣列]
* @param {string} type [排序時所依據的欄位]
* @param {boolean} asc  [可選引數，預設降序，設定為true即為升序]
* @return {none}    [無返回值]
*/

u.sort = function(array, type, asc) {
    if(!u.isArray(array)) throw new Error('第一個引數必須是陣列型別');
    var asc = asc || false;
    array.sort(function(a,b) {
        if(!asc) {
            return parseFloat(b[type])-parseFloat(a[type]);
        } else {
            return parseFloat(a[type])-parseFloat(b[type]);
        }
    });
};

/*
* 對json陣列進行搜尋
* @param {array} array [需要排序的陣列]
* @param {string} type [需要檢索的欄位]
* @param {string} value [欄位中應包含的值]
* @return {array}    [包含指定資訊的陣列]
*/

u.search=function(array,type,value) {
    if(!u.isArray(array)) throw new Error('第一個引數必須是陣列型別');
    var arr = [];
    arr = array.filter(function(a) { 
        return a[type].toString().indexOf(value)!=-1;
    });
    return arr;
};