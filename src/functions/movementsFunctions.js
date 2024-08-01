import axios from "axios";

import { TOKEN_PREFIX, API_URL } from "./config";

export async function getMovements() {
    try {
        const response = await axios.get(`${API_URL}/movements`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}


/*
[
    {
        idItem: number,
        movementType: "INPUT" || "OUTPUT",
        quantity: number
    }
]
*/
export async function createMovement(stockId, movementData, token = undefined) {
    if (!token) {
        token = localStorage.getItem("Token")

        if (!token) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.post(`${API_URL}/stock/${stockId}/movements`,
            movementData,
            {
                headers: {
                    Authorization: `${TOKEN_PREFIX} ${token}`
                }
            }
        )
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}