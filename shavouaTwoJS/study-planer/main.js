import { findStudentById } from "./callback.js";
import { buildStudyPlan } from "./promises.js";
import { prepareReminder } from "./asyncAwait.js";
import { loadSavedPlan, savePLan } from "./storage.js";


const getStudentWithCallback = id => {
    return new Promise(res => {
        findStudentById(id, (err, student) => {
            if (err) {
                console.log(err)
                res(null)
                return
            }

            console.log(`Studnent found ${student.name}`)
            res(student)
        })
    })
}

const runApp = async () => {
    console.log("Study Planner started")
    console.log('-----------------------------')

    console.log('Loading previous saved plan')

    try {
        const previousPlan = await loadSavedPlan()

        if (previousPlan) {
            console.log(`Previous plan found : ${previousPlan.task}`)
        } else {
            console.log("No previous plan found")
        }
    } catch (err) {
        console.log("Could not load previous plan ", err.message)
    }

    console.log("-------------------------------")

    console.log("Searching studnet wit callback.....")

    const studentPromise = getStudentWithCallback(1)

    console.log("waiting ....")

    const student = await studentPromise

    console.log("----------------------")

    console.log('Seraching missing student with callback ...')
    await getStudentWithCallback(999)

    console.log("---------------------")

    let validPlan = null
    console.log("Building valid study plan with Promises ....")
    await buildStudyPlan(["callback", "promises", "async", "json-file", "test"])
        .then(plan => {
            console.log(`Total time ${plan.totalMinutes} minutes`)
            return plan
        })
        .then(plan => {
            console.log('Tasks')
            for (const task of plan.tasks) {
                console.log(`- ${task.title}: ${task.minutes} minutes`)
            }
            validPlan = plan
            return plan
        })
        .catch(err =>
            console.log(err)
        )
        .finally(() => console.log('Finished valid plan promise flow'))
    console.log("----------------------------")
    console.log("Trying to build a plan with mising task ...")

    await buildStudyPlan(["callback", "wrong-task"])
        .then(plan => console.log(" Study plan created", plan))
        .catch(err => console.log(err))
        .finally(() => console.log("Finished invalid plan promise flow"))


    console.log("-----------------------------")

    console.log("Tryf reminder student withing contact ")

    const studentWhithoutContact = await getStudentWithCallback(2)

    try {
        const reminder = await prepareReminder(studentWhithoutContact, validPlan)
        console.log("Reminder ready")
        console.log(reminder.message)

    } catch (err) {
        console.log(err.message)
    }


    console.log("--------------------------"
    )

    if (!validPlan) {
        try {
            const saveMessage = await savePLan(validPlan)
            console.log(saveMessage)
        } catch (err) {
            console.log("Could not save plan ", err.message)
        }
    }

    console.log("-----------------------------")
    console.log("Study Planeer finisher finalllllllllllllly")



}

runApp()