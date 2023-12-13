import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"

export const useExpensesContext = () => {
    const context = useContext(ExpenseContext)

    if(!context) {
        throw Error("useIncomesContext must be inside an IncomeContextProvider!")
    }

    return context
}