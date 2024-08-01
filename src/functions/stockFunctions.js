import axios from "axios"
import { API_URL, TOKEN_PREFIX } from './config.js'

export async function getStocks() {
    try {
        const response = await axios.get(`${API_URL}/stocks`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err.response.data)
    }
}

export async function getStockById(id) {
    try {
        const response = await axios.get(`${API_URL}/stocks/${id}`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err.response.data)
    }
}

export async function getStocksByUserId(id) {
    try {
        const response = await axios.get(`${API_URL}/users/${id}/stocks`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err.response.data)
    }
}

// Criar Estoque
/*
{
    name: string,
    description: string?
}
*/
//Tem que passar o token, mas ele tenta pegar sozinho
export async function createStock(stockData, userToken = undefined) {
    if (!userToken) {
        userToken = localStorage.getItem("Token")

        if (!userToken) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.post(`${API_URL}/stocks`, stockData,
            {
                headers: {
                    Authorization: `${TOKEN_PREFIX} ${userToken}`
                }
            }
        )
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err.response.data)
    }
}

// Ainda não fiz
export async function updateStock() {

}

// Excluir Estoque
//Tem que passar o token, mas ele tenta pegar sozinho
export async function deleteStock(id, userToken = undefined) {
    if (!userToken) {
        userToken = localStorage.getItem("Token")

        if (!userToken) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.delete(`${API_URL}/stocks/${id}`,
            {
                headers: {
                    Authorization: `${TOKEN_PREFIX} ${userToken}`
                }
            }
        )
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err.response.data)
    }
}