import { readFile } from "./data.js"

export const data = async () => {
    const data =  await readFile()
    return  data 
}

data().then(data => console.log(data.cars.length))

export const carsInRace = async () => {
    const dataRace = await data()

    const carsInRaceNumber = dataRace.cars.length

    return carsInRaceNumber
}



export const carWaiting = async () => {
    const dataRace = await data()

    const carInWaiting = await dataRace.cars.filter(data  => data.status === "waiting" )
    
    return carInWaiting
}



export const  nextCar = async () => {
    const dataRace = await data()

    const nextCar = await dataRace.cars.find(data  => data.status === "waiting" )

    return nextCar

}



export const carDone = async () => {
    const  dataRace = await data()
    const done = dataRace.cars.filter(data => data.status === "done")
    return done.length
}

