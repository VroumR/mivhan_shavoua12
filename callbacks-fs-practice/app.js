import { error } from 'console';
import fs from 'fs';

const data = "Hello from Node fs"
const filename = 'data/message.txt'

function writeFile(fileData, data) {
    fileData.push(data)
    fs.writeFile('data/message.txt', JSON.stringify(fileData), (err) => {
        if (err) {
            return console.log(`error :  ${err}`)
        }
    })
}
function readFile(cb) {
    fs.readFile('data/message.txt', 'utf-8', (err, data) => {
        if (err) return console.log(err)
        cb(JSON.parse(data))
    })
}

const user = { name: "Avroumi" };

// // readFile((users) => console.log(users))

// // console.log("start")
// // fs.readFile('data/messages.txt', 'utf-8', (err, data) => {
// //     if (err) {
// //         console.log("Could not read file ")
// //         console.log(err)
// //     }
// //     else console.log(data);
// // })
// // console.log("END");

// //5

// const readTextFile = (filename, cb) => {
//     fs.readFile(filename, 'utf-8', (err, data) => {
//         if (err) {
//             cb(err, null)
//             return
//         }
//         cb(null, data)
//     }
//     )
// }


// readTextFile('data/log.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data)
// })


//6

// fs.appendFile('data/log.txt', 'Second action completed', (err) => {
//     if (err) return console.log(err)
// })

//8

// fs.mkdir('data/users', { recursive: true }, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("users created or already exist")
// })

//9

// const content = { name: "david", age: 25 }

// fs.exists('data/users/', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     fs.writeFile('data/users/user1.txt', JSON.stringify(content), (err) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//     })
// })

//10

// fs.readdir('data', (err, files) => {
//     if (err) return err
//     console.log(files)
// })

//11

// fs.writeFile('data/step1.txt', 'Step 1 completed', (err) => {
//     if (err) return err
//     fs.writeFile('data/step2.txt', 'Step 2 completed', (err) => {
//         if (err) return err
//         fs.writeFile('data/step3.txt', 'Step 3 completed', (err) => {
//             if (err) return err

//             console.log("all step completed")

//         })
//     })

// })

//12

// fs.readFile('data/step1.txt', 'utf-8', (err, data) => {
//     const content = []
//     content.push(data)
//     fs.readFile('data/step2.txt', 'utf-8', (err, data) => {
//         content.push(`\n ${data}`)
//         fs.readFile('data/step3.txt', 'utf-8', (err, data) => {
//             content.push(`\n ${data}`)
//             console.log(content)
//         })
//     })
// })

//13 
// fs.writeFile('data/report-title.txt', 'Daily report ', (err) => {
//     if (err) return err
//     fs.writeFile('data/report-body.txt', 'Everithing is working', (err) => {
//         if (err) return err
//         fs.readFile('data/report-title.txt', 'utf-8', (err, data) => {
//             if (err) return err
//             let newData = data
//             fs.readFile('data/report-body.txt', 'utf-8', (err, data) => {
//                 if (err) return err
//                 newData += `\n${data} `
//                 fs.writeFile('data/final-report.txt', newData, (err) => {
//                     if (err) return err
//                     console.log(newData)
//                 })
//             })
//         })
//     })
// }
// )

//14
fs.writeFile('data/original.txt', 'Original file content', (err) => {
    if (err) return err
    fs.readFile('data/original.txt', 'utf-8', (err, data) => {
        if (err) return err
        const copy = data
        fs.writeFile('data/copy.txt', copy, (err) => {
            if (err) return err
            console.log('copy apllied')
        })
    })
})