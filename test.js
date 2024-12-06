let str = "https://dummyjson.com/users?key=value"

let keyIndex = str.indexOf('?') 
let nameKey = str.slice(keyIndex + 1)

console.log(nameKey.split('='));




// let newStr = str.split('/')[str.split('/').length -1]
// let newStr2 = str.split('/').pop()

// console.log(newStr, str);
// console.log(newStr2, str);

