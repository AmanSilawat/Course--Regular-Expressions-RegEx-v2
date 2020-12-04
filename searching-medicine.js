// pattern one
function searchTablate(tablateName, searchStr) {
    let newVal = searchStr.replace(/ |$/gi, '.* ').trim();
    
    var matcher = new RegExp(`^${newVal}$`, 'gi');
    console.log(matcher);
    return matcher.test(tablateName);
}

// let tablateName = "Thyronorm 150MG Tablet";
// let searchStr = 'thy 150'

// let tablateName = "THYRONORM 112MCG TABLET ";
// let searchStr = 'THY 112';

// let tablateName = "PIOZ 30MG TABLET";
// let searchStr = 'PIO 30 TAB';

let tablateName = "LANTUS SOLOSTAR 3ML 100IU INJECTION";
let searchStr = 'LAN SOLO 3ML 100';

console.log( searchTablate(tablateName, searchStr) );




// pattern two
let search_string = 'LAN SOLO 3ML 100';
let med_name = 'LANTUS SOLOSTAR 3ML 100IU INJECTION';

let charAry = search_string.trim().replace(/-/g, '@@#').replace(/ /g, '@@#').split('@@#');

var first = charAry[0];
charAry.shift();

var char = charAry.join(')(?=.*');
char = '^' + first + '(?=.*' + char + ').*$';
var matcher = new RegExp(char);
matcher.test(med_name)