import axios from "axios"

import { API_URL, TOKEN_PREFIX } from './config.js'

export async function getCategories() {
    try {
        const response = await axios.get(`${API_URL}/categories`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

export async function getCategoryById(id) {
    try {
        const response = await axios.get(`${API_URL}/categories/${id}`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

export async function getCategoryByStock(stockId) {
    try {
        const response = await axios.get(`${API_URL}/stock/${stockId}/categories`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

// Encontrar itens por categoria

// Cria uma categoria
/* 
{
    name: string,
    description: string?
}
*/
// Precisa do token, mas ele tenta pegar sozinho. Também precisa do id do estoque
export async function createCategory(stockId, categoryData, token = undefined) {
    if (!token) {
        token = localStorage.getItem("Token")

        if (!token) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.post(`${API_URL}/stock/${stockId}/categories`, categoryData,
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

export async function updateCategory(id, categoryData, token = undefined) {
    if (!token) {
        token = localStorage.getItem("Token")

        if (!token) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.patch(`${API_URL}/categories/${id}`, categoryData,
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

export async function deleteCategory(id, token = undefined) {
    if (!token) {
        token = localStorage.getItem("Token")

        if (!token) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.delete(`${API_URL}/categories/${id}`,
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