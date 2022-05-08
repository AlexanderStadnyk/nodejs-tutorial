const {readFile} = require('fs')

console.log("started a first task")
//CHECK FILE PATH
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log("completed firt stask")
})

console.log('startnig first task')

