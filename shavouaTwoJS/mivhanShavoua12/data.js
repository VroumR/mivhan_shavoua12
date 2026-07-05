import fs from "fs/promises"

const linkFile = "https://server-for-test-week-13.onrender.com/api/race"

export const catchData = async () => {
    try{
    const res = await fetch(linkFile)
    if (!res.ok){
        return res.status
    }
    const data = await res.json()
    await fs.writeFile("./course-info.js", JSON.stringify(data, null , 2), "utf-8")
    return  data
    
}catch(err){
    throw new Error("file Not found")
}
};



export const readFile = async () => {
    const data = await fs.readFile("./course-info.js", "utf-8")
    const readble =   await JSON.parse(data)
    return readble
}


