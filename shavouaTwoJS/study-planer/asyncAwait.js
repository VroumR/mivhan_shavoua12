const wait = ms => {
    return new Promise(res => {
        setTimeout(res, ms)
    })
}

export const prepareReminder = async (student, plan) => {
    await wait(500);

    if (!student) {
        throw Error('Cannot create reminder : student is missing')
    }
    if (!student.contact) {
        throw new Error(`Cannot crete reminder for ${student.name} : missing contact`)

    }
    if (!plan || !plan.tasks || plan.tasks.lenght === 0) {
        throw new Error("Cannot create reminder : study plan is missing")
    }
    return {
        to: student.contact,
        message: `Hi ${student.name} , your study plan is ready 
        Total time = ${plan.totalMinutes} minutes`
    }
}