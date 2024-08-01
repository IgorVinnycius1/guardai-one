import axios from 'axios'

import { API_URL, TOKEN_PREFIX } from './config.js'

export async function getItems() {
    try {
        const response = await axios.get(`${API_URL}/items`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

export async function getItemById(id) {
    try {
        const response = await axios.get(`${API_URL}/items/${id}`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

export async function getItemsByStockId(stockId) {
    try {
        const response = await axios.get(`${API_URL}/stock/${stockId}/items`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

// Tem que passar o token
/*
{
    idCategory: number,
    name: string,
    description: string?
}
*/
export async function createItem(stockId, itemData, token = undefined) {
    if (!token) {
        token = localStorage.getItem("Token")

        if (!token) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.post(`${API_URL}/stock/${stockId}/items`,
            itemData,
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

// Tem que passar o token
/*
{
    idCategory: number?,
    name: string?,
    description: string?
}
*/
export async function updateItem(id, itemData, token = undefined) {
    if (!token) {
        token = localStorage.getItem("Token")

        if (!token) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.patch(`${API_URL}/items/${id}`,
            itemData,
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

// Tem que passar o token
export async function deleteItem(id, token = undefined) {
    if (!userToken) {
        userToken = localStorage.getItem("Token")

        if (!userToken) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.delete(`${API_URL}/items/${id}`,
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