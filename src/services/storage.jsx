import axios from 'axios'

import { initial } from './adapters/base'

const baseUrl = process.env.REACT_APP_SERVICE_BASE_URL
const appCode = process.env.REACT_APP_SERVICE_BASE_APPCODE
const outputType = 'json'

export const getSignedUrl = async (folder, filename, mime) => {
    const route = 'storage/signed/'
    const onSuccess = (response) => {
        if (response.data.tokenExpire) {
            localStorage.setItem(initial + 'AccessExpired', response.data.tokenExpire)
        }
        return response.data
    }

    const onError = (error) => {
        return Promise.reject(error.response || error.message)
    }

    return axios.create({
        baseURL: baseUrl,
        headers: {
            'initial': initial,
            'appCode': appCode,
            'accessToken': localStorage.getItem(initial + 'AccessToken'),
            'tokenId': localStorage.getItem('tokenId')
        }
    })({
        method: 'get',
        url: route + outputType,
        params: {folder: folder, filename: filename, mime: mime}
    }).then(onSuccess)
        .catch(onError)
}

export const previewLink = async (filepath) => {
    const route = 'storage/preview/'
    const onSuccess = (response) => {
        if (response.data.tokenExpire) {
            localStorage.setItem(initial + 'AccessExpired', response.data.tokenExpire)
        }
        return response.data
    }

    const onError = (error) => {
        return Promise.reject(error.response || error.message)
    }

    return axios.create({
        baseURL: baseUrl,
        headers: {
            'initial': initial,
            'appCode': appCode,
            'accessToken': localStorage.getItem(initial + 'AccessToken'),
            'tokenId': localStorage.getItem('tokenId')
        }
    })({
        method: 'get',
        url: route + outputType,
        params: {path: filepath}
    }).then(onSuccess)
        .catch(onError)
}

export const upload = async (signedUrl, file, mime) => {
    const onSuccess = (response) => {
        localStorage.setItem("uploadStatus", 'hide')
        dispatchEvent(new Event("uploadStatus"))
        return response.status
    }

    const onError = (error) => {
        localStorage.setItem("uploadStatus", 'hide')
        dispatchEvent(new Event("uploadStatus"))
        return Promise.reject(error.response || error.message)
    }

    const options = {
        headers: {
            'Content-Type': mime
        },
        onUploadProgress: progressEvent => {
            var progress = {
                'fileName': file.name,
                'sizeTotal': file.size,
                'uploaded': progressEvent.loaded,
                'percentage': Math.round((progressEvent.loaded/file.size)*100)
            }

            localStorage.setItem("uploadStatus", JSON.stringify(progress))
            dispatchEvent(new Event("uploadStatus"))
        }
    };

    var progress = {
        'fileName': file.name,
        'sizeTotal': file.size,
        'uploaded': 0,
        'percentage': 0
    }

    localStorage.setItem("uploadStatus", JSON.stringify(progress))
    dispatchEvent(new Event("uploadStatus"))

    localStorage.setItem("uploadStatus", 'show')
    dispatchEvent(new Event("uploadStatus"))

    return axios.put(signedUrl, file, options)
        .then(onSuccess)
        .catch(onError)
}

export const download = async (signedUrl, file, mime) => {
    const onSuccess = (response) => {
        return response
    }

    const onError = (error) => {
        return Promise.reject(error.response || error.message)
    }

    const options = {
        headers: {
            'Content-Type': mime
        },
        onUploadProgress: progressEvent => {
            var progress = {
                'fileName': file.name,
                'percentage': Math.round((progressEvent.loaded/file.size)*100)
            }
            console.log(progress)
        }
    };

    return axios.put(signedUrl, file, options)
        .then(onSuccess)
        .catch(onError)
}