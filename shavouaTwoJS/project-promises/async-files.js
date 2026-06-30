import { count } from 'console'
import fs from 'fs/promises'
//1

// fs.readFile('input.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log({ dataFile: JSON.stringify(data) })
// })


//2

// fs.writeFile('output.txt', 'writing succesfully with Node js ', (err) => {
//     if (err) {
//         console.log({ error: err })
//         return
//     } console.log("file write succesfullly")
// })

//3

// fs.readFile('input.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const dataUpper = JSON.stringify(data.toUpperCase())
//     fs.writeFile('output-upper.txt', dataUpper, (err) => {
//         if (err) {
//             console.log({ error: err })
//             return
//         } console.log("file write succesfullly")
//     })
// })


/////////////////////////////////////////////////////////////////////
//PARTIE 2 
fs.readFile('input.txt', 'utf-8')
    .then(data => console.log(data, '\n i read with promise fs ouououuh'))
    .catch(err => console.log({ error: err }))


fs.readFile('input.txt', 'utf-8')
    .then(data => {
        const Upper = data.toUpperCase()
        return fs.writeFile('output-upper.txt', Upper)
    })
    .then(() => console.log("write succesfully"))
    .catch(console.error)

//////////////////////////////////////////////////////////////////////
////BONUS 

Promise.all([
    fs.readFile("input.txt", 'utf-8'),
    fs.readFile("output.txt", 'utf-8')
]).then(([data1, data2]) => {
    const lenghtData1 = data1.length
    const lenghtData2 = data2.length
    console.log({ file2: lenghtData2 })
    console.log({ file1: lenghtData1 })

})
    .catch(console.error)


///////////////////////////////////////////////////////////////////
//// QUESTION

//1 the difference is one have promise to default and help to catch and simplify error and maintenance
//2 you know is difficult to manage and build and maintain
//3 is start after the response then before him , is utile to ordering async action
//4 If we forget return inside .then(), the next .then() may receive undefined or may not wait for the Promise.



