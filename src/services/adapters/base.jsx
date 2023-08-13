import { apiWrapper, apiCancel } from '../wrapper'

export const initial = 'base'
const baseUrl = process.env.REACT_APP_SERVICE_BASE_URL
const appCode = process.env.REACT_APP_SERVICE_BASE_APPCODE
const outputType = 'json'

export const sampleList = 'sample/sample/allList/'

export const authConnect = 'auth/connect/'
export const authLogin = 'auth/getAuth/'
export const authUserData = 'auth/getUserdata/'

export const cancelToken = () => {
    return apiCancel()
}
export const apiRequest = async (method, route, data = { params: null, body: null, cancelToken: null }, needToken = true) => {
    if (needToken) {
        const thisTime = (Math.floor(Date.now() / 1000))
        const expire = localStorage.getItem(`${initial}AccessExpired`)
        if (expire < thisTime && route !== 'auth/connect/') {
           await apiWrapper(baseUrl, initial, appCode, outputType, 'post', 'auth/getAccessToken/', data)
           .then(result => {
                localStorage.setItem(`${initial}AccessToken`, result.response.access_token)
                return apiWrapper(baseUrl, initial, appCode, outputType, method, route, data)
            })
            .catch(() => {
                return Promise.reject('Tidak dapat mengambil accessToken')
            })
        } else {
            return apiWrapper(baseUrl, initial, appCode, outputType, method, route, data)
        }
    }
    return apiWrapper(baseUrl, initial, appCode, outputType, method, route, data)
}