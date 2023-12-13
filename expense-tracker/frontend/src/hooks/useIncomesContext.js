import { useContext } from "react"
import { IncomeContext } from "../context/IncomeContext"

export const useIncomesContext = () => {
    const context = useContext(IncomeContext)

    if(!context) {
        throw Error("useIncomesContext must be inside an IncomeContextProvider!")
    }

    return context
}