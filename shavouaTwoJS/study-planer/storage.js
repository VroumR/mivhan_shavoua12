import fs from "fs/promises"

const FILE_PATH = "./saved-plan.json"

export const loadSavedPlan = async () => {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8")

        if (!data.trim()) { return null }

        const parsedData = JSON.parse(data)

        if (!parsedData.tasks) {
            return null
        }
        return parsedData
    }
    catch (err) {
        if (err.code === "ENOENT") {
            return null
        }
        throw err;
    }

}

export const savePLan = async plan => {
    await fs.writeFile(FILE_PATH, JSON.stringify(plan))
    return "Plan saved to JSON"
}