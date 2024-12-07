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


// emitter.on('iradarcutyun', (chunk)=> console.log(chunk))  
// emitter.emit('iradarcutyun', 'de tesnenq')

let newUser = {
        id:new Date().getTime().toString(),
        firstName: "Karen",
        lastName: "Andreasyan",
        maidenName: "Mais",
        age: 31,
        gender: "female"
        }


fetch('http://localhost:5000/api/users',{
    method:'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(newUser)
})


