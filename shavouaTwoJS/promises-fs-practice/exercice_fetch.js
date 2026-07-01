// //1


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => {
//         if (!res.ok) {
//             throw Error(res.status)
//         }
//         return res.json()
//     }).then(data => {
//         console.log({ title: data.title })
//     }).catch(console.log())

// //2

// fetch('https://jsonplaceholder.typicode.com/notfound')
//     .then(res => {
//         if (!res.ok) {
//             throw Error(res.status)
//         }
//     }).catch(console.log)

//3

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => {
//         if (!res.ok) {
//             throw Error(res.status)
//         }
//         return res.json()
//     }).then(data => {
//         let dataId = 0
//         for (const id of data) {
//             console.log(dataId++, id.title)
//         }
//     })

//4

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: 'POST',
//     headers: { "Content-Type": 'Application/json' },

//     body: JSON.stringify({
//         title: "New title",
//         body: "balblabalalalbalbalbllala",
//         userId: 1
//     })
// }).then(res => {
//     if (!res.ok) {
//         throw Error(res.status)
//     }
//     return res.json()
// }).then(data => console.log(data))

//5

// const getUserById = id => {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(res => {
//             if (!res.ok) {
//                 throw Error(res.status)
//             }
//             return res.json()
//         }).then(data => console.log(data))
//         .catch(console.error)

// }

// getUserById(5)

//6

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => {
//         if (!res.ok) {
//             throw Error(res.status)
//         }
//         return res.json()
//     }).then(post => {
//         return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
//             .then(res => {
//                 if (!res.ok) {
//                     throw Error(res.status)
//                 }
//                 return res.json()
//             }).then(data => console.log(data.name, post.title))
//     })

//7

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(res => {
//         if (!res.ok) {
//             throw Error(res.status)
//         }
//         return res.json()
//     })
//     .then(user1 => {
//         return fetch('https://jsonplaceholder.typicode.com/posts/1')
//             .then(res => {
//                 if (!res.ok) {
//                     throw Error(res.status)
//                 }
//                 return res.json()
//             }).then(post1 => {
//                 return fetch('https://jsonplaceholder.typicode.com/todos/1')
//                     .then(res => {
//                         if (!res.ok) {
//                             throw Error(res.status)
//                         }
//                         return res.json()
//                     }).then(todo1 => console.log({
//                         user: user1,
//                         post: post1,
//                         todo: todo1

//                     }))
//             })
//     })

//8

// const controller = new AbortController()

// const timer = setTimeout(() => { controller.abort() }, 3000)

// fetch('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal })
//     .then(res => {
//         if (!res.ok) {
//             throw new Error(res.status)
//         }
//         return res.json()
//     }).then(data => {
//         clearTimeout(timer);
//         console.log(data)
//     }).catch(err => {
//         if (err.name === "AbortError") {
//             console.log("The server take too mush time")
//         } else {
//             console.log(err.message)
//         }
//     })

// //9

// async function fetchWithRetry(url, retry) {
//     let tentative = 0
//     while (retry > tentative) {
//         const res = await fetch(url)
//         if (!res.ok) {
//             tentative++
//             console.log(res.status)
//         } else {
//             const data = await res.json()
//             return data
//         }
//     }
// }


// fetchWithRetry('https://jsonplaceholder.typicode.com/pots', 3)
//     .then(console.log).catch(console.error)

//10 

const cache = {}

const catchedFetch = async (url) => {
    if (cache[url]) {
        console.log("from the cache")
        return cache[url]
    }
    else {
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error(res.message)
            } const data = await res.json()
            cache[url] = data
            return data


        } catch (err) {
            return err.message
        }
    }
}

catchedFetch('https://jsonplaceholder.typicode.com/users/1')
    .then(() => catchedFetch('https://jsonplaceholder.typicode.com/users/1'))
    .then(console.log);
