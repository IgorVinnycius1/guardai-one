import axios from "axios";
import { TOKEN_PREFIX, API_URL } from "./config";

export async function getEmployeesByStockId(stockId) {
    try {
        const response = await axios.get(`${API_URL}/stocks/${stockId}/employees`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

export async function getEmployeePermissions(id) {
    try {
        const response = await axios.get(`${API_URL}/employees/${id}`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}


/*
{
    firstName: string,
    secondName: string,
    username: string,
    password: string
}
*/
export async function createEmployee(stockId, employeeData, userToken = undefined) {
    if (!userToken) {
        userToken = localStorage.getItem("Token")

        if (!userToken) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.post(`${API_URL}/stock/${stockId}/employees`,
            employeeData,
            {
                headers: {
                    Authorization: `${TOKEN_PREFIX} ${userToken}`
                }
            }
        )
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}


export async function loginEmployee(username, password) {
    try {
        const response = await axios.post(`${API_URL}/employees/login`, {
            username, password
        })
        const data = response.data

        localStorage.setItem("Token", data.token)
        localStorage.setItem("User", JSON.stringify(data.employee))


        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}


export async function deleteEmployee(id, token = undefined) {
    if (!token) {
        token = localStorage.getItem("Token")

        if (!token) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.delete(`${API_URL}/employees/${id}`,
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

/*
{
    canCreateItem: boolean?,
    canCreateCategory: boolean?,
    canCreateMovement: boolean?,

    canEditItem: boolean?,
    canEditCategoty: boolean?,

    canDeleteItem: boolean?,
    canDeleteCategory: boolean?,
}
*/
export async function changeEmployeePermissions(id, permissionsData, userToken = undefined) {
    if (!userToken) {
        userToken = localStorage.getItem("Token")

        if (!userToken) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.patch(`${API_URL}/employees/${id}/permissions`,
            permissionsData,
            {
                headers: {
                    Authorization: `${TOKEN_PREFIX} ${userToken}`
                }
            }
        )
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}