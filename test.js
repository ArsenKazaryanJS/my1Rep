// let str = "https://dummyjson.com/users?key=value"

// let keyIndex = str.indexOf('?')
// let nameKey = str.slice(keyIndex + 1)

// console.log(nameKey.split('='));

// let newStr = str.split('/')[str.split('/').length -1]
// let newStr2 = str.split('/').pop()

// console.log(newStr, str);
// console.log(newStr2, str);

// const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('iradarcutyun', (chunk) => console.log(chunk))
// emitter.emit('iradarcutyun', 'de tesnenq')



// let number = 1;

// if (number === 0) {
//   console.log("nothing");
// } else if (number === 1 || number === 2) {
//   console.log("Small");
// } else {
//   console.log("Nope");
// }

// switch (number) {
//   case 0:
//     console.log("number === 0");
//     break;
//   case 1:
//   case 2:
//     console.log("number === 1 === 2");
//     break;

//     default :console.log('Nope');
    
// }



let newUser = {
    id:new Date().getTime(),
    firstName: "NONAME",
    lastName: "NONAME",
    maidenName: "NONAME",
    age: '?',
    gender: "?"
    }

fetch('http://localhost:3001/api/users',{
method:'POST',
headers: {'content-type': 'application/json'},
body: JSON.stringify(newUser)
})