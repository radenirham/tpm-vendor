import { apiWrapper, apiCancel } from '../wrapper'

export const initial = 'sample'
const baseUrl = process.env.REACT_APP_SERVICE_VENDORAREAS_URL
const appCode = process.env.REACT_APP_SERVICE_VENDORAREAS_APPCODE
const outputType = 'json'

export const authConnect = 'auth/connect/'

export const getVendorAreas = 'tpm/option/getVendorAreas/'
export const getProvince = 'tpm/option/getProvince/'
export const getCity = 'tpm/option/getCity/'
export const getCompanyType = 'tpm/option/getCompanyType/'
export const getSupplierCategories = 'tpm/option/getSupplierCategories/'
export const postPreregisterVendor = 'tpm/option/postPreregisterVendor/'

export const cancelToken = () => {
    return apiCancel()
}
export const apiRequest = async (method, route, data = { params: null, body: null, cancelToken: null }, needToken = true) => {
    if (needToken) {
        const thisTime = (Math.floor(Date.now() / 1000))
        const expire = localStorage.getItem(`${initial}AccessExpired`)
        if (expire < thisTime && route !== 'auth/connect/') {
           await apiWrapper(baseUrl, initial, appCode, outputType, 'post', 'auth/getAccessToken/')
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