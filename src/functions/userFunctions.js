import axios from 'axios';

import { API_URL, TOKEN_PREFIX } from './config.js'

// Retorna todos os usuários do banco
export async function getUsers() {
    try {
        const response = await axios.get(`${API_URL}/users`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição")
    }
}

// Retorna um usuário pelo id passado.
export async function getUserById(id) {
    try {
        const response = await axios.get(`${API_URL}/users/:${id}`)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

// Cria um usuário no banco
/* 
{
    firstName: string,
    secondName: string,
    email: string,
    password: string
}
*/
export async function signUpUser(userData) {
    try {
        const response = await axios.post(`${API_URL}/users`, userData)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

// Atualiza um usuário no banco
/* 
{
    firstName: string?,
    secondName: string?,
}
*/
export async function updateUser(id, userData) {
    try {
        const response = await axios.post(`${API_URL}/users/:${id}`, userData)
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

// Deleta um usuário do banco
// Tem que passar o token do próprio usuário, mas se não passar, ele tenta pegar sozinho no 
// localStorage
export async function deleteUser(id, userToken = undefined) {
    if (!userToken) {
        userToken = localStorage.getItem("Token")

        if (!userToken) {
            console.error("Nenhum token por provido para a requisição")
            return
        }
    }

    try {
        const response = await axios.delete(`${API_URL}/users/:${id}`, {
            headers: {
                Authorization: `${TOKEN_PREFIX} ${userToken}`
            }
        })
        const data = response.data

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err)
    }
}

// Loga com um usuário e retorna o token
export async function loginUser(email, password) {
    try {
        const response = await axios.post(`${API_URL}/users/login`, {
            email,
            password
        })
        const data = response.data

        localStorage.setItem("Token", data.token)
        localStorage.setItem("User", JSON.stringify(data.user))

        return data
    } catch (err) {
        console.error("Algo deu errado com a requisição", err.response.data)
        return false
    }
}


export function userLoginVerify() {
    const user = JSON.parse(localStorage.getItem("User"))
    const token = localStorage.getItem("Token")

    if (!user || !token) {
        console.error("O usuário não está logado")
        return false
    }

    return true
}