import { students } from "./data.js";

export const findStudentById = (id, cb) => {
    setTimeout(() => {
        for (const student of students) {
            if (student.id === id) {
                cb(null, student)
                return
            }
        }

        cb(`Error : student ${id} not found `, null)

    }, 1000)
}
export const showStudentResult = (err, student) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Student Found :", student)
    return
}

findStudentById(1, showStudentResult)