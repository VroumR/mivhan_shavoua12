import { tasks } from "./data.js"

export const buildStudyPlan = taskTitles => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const selectTask = [];
            for (const title of taskTitles) {
                const fondTask = tasks.find(task => task.title === title)

                if (!fondTask) {
                    rej(`Error : task ${title} not found`)
                    return
                }
                selectTask.push(fondTask)
            }
            const totalMinutes = selectTask.reduce((total, task) => total + task.minutes, 0)

            const plan = {
                tasks: selectTask,
                totalMinutes: totalMinutes
            }
            res(plan)
        }, 1000)
    })
}




