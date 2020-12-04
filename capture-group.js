let re = /(\w+)\s(\w+)/;
let str = 'firstN lastN';
let newstr = str.replace(re, '$2, $1');
// console.log(newstr);

// OUTPUT
// lastN, firstN


let re2 = /\[(.*?)]\((http.*?)\)/gi;
let str2 = `
[this is the text](http://url.com)
[another text](http://another-url.com)
`;
let newstr2 = str2.replace(re2, '<a href="$2">$1</a>');
// console.log(newstr2);

// OUTPUT
// <a href="http://url.com">this is the text</a>
// <a href="http://another-url.com">another text</a>


let re3 = /\(?(\d{3})[-.)]\d{3}[-.]\d{4}/gi;
let str3 = `
222.111.2225,
888-999-7775,
(567)999-9995
`;
let newstr3 = str3.replace(re3, '$1-xxx-xxx');
// console.log(newstr3);

// OUTUPT
// 222-xxx-xxx,
// 888-xxx-xxx,
// 567-xxx-xxx




let re4 = /\b(\w+)\s\1\b/gi;
let str4 = `
hello my my name is is aman
[xyz xyz]  hello[abc87]
`;
let newstr4 = str4.replace(re4, '$1');
// console.log(newstr4);

// OUTUPT
// hello my name is aman
// [xyz]  hello[abc87]



r = /(\d{2})[-.]\d{3}/g;
var s = '11-222 and 33-444 and 55-666'
r.exec(s)[1] // 11
r.exec(s)[1] // 33
r.exec(s)[1] // 55

s.match(r) // [ '11-222', '33-444', '55-666' ]



var s = "abc xyz mno, guv";
console.log(s.split(/[\s]/)); // [ 'abc', 'xyz', 'mno,', 'guv' ]
console.log(s.split(/[,\s]/)); // [ 'abc', 'xyz', 'mno', '', 'guv' ]
console.log(s.split(/[,\s]+/)); // [ 'abc', 'xyz', 'mno', 'guv' ]

var p = 'hello, frds my name is aman. hello, frds my name is aman.';
// console.log(p.split(/(\w+)/)); // [ '', 'hello', ', ', 'frds', ' ', 'my', ' ', 'name', ' ', 'is', ' ', 'aman', '. ', 'hello', ', ', 'frds', ' ', 'my', ' ', 'name', ' ', 'is', ' ', 'aman', '.' ]




var s = "abc xyz mno, guv";
s = s.replace(/(\w+)/g, cbFun)
console.log(s); // abc xyz MNO, guv

function cbFun(match, group1) {
    if (match == 'mno') {
        // accessing group1 in this function
        return match.toUpperCase();
    } else {
        return match
    }
}