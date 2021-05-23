
let str = `

010-4535-4353
thesecond@gamil.com
https://0rich.com?movie=frozen
노인과 바다의 게임
The happy fox is the dog.
daffa dsdfgsd adasd
http:/naver.com
aaabbbcccdddd
동해물과_백두산이 잼잼

d`

const h = `  the hello   world          fggds  !

`
// const regexp = new RegExp('the', 'gi');
console.log(str.match(/^t/gim))

console.log(str.match(/h..p/g))
console.log(str.match(/fox|dog/g))
console.log(str.match(/https?/g))
console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9]{2,}/g))
console.log(str.match(/[가-힣]{1,}/g))

console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g))

console.log(str.match(/\d{2,}/g))
console.log(h.replace(/\s/g, ""))

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
// console.log(str.match(regexp));
// str = str.replace(regexp, 'AAA');
// console.log(str);


console.log(123);