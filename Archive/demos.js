const fs = require('fs')

// Creating File
fs.writeFile('./sample-two.txt', "Learning is great", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Created File")
    }
})

// Reading File
fs.readFile('./sample.txt','utf8', (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// Delete File
fs.unlink('./del.txt', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Successfully deleted file")
    }
})





















// const addition = require('./add')
// const multiply = require('./multiply')
// import addition from "./add.js"
// import multiply from "./multiply.js"
// Usage
// console.log("Sum", addition(9, 4))
// console.log("Product", multiply(8, 6))


