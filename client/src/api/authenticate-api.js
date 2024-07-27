import * as requester from './requests'

const baseURL = 'http://localhost:3030/users'

export const login = async (email, password) => {
    const authData = await requester.post(`${baseURL}/login`, {email, password})

    return authData
}