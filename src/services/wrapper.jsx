import axios from 'axios'

import { getSignedUrl, upload } from './storage'

export const apiCancel = () => {
    return axios.CancelToken.source()
}
export const apiWrapper = async (baseUrl, initial, appCode, outputType, method, route, data = { params: null, body: null, cancelToken: null }) => {

    const onSuccess = (response) => {
        if (response.data.tokenExpire) {
            localStorage.setItem(initial + 'AccessExpired', response.data.tokenExpire)
        }
        return response.data
    }

    const onError = (error) => {
        return Promise.reject(error.response || error.message)
    }

    var gcsError = false
    if (data.body !== null) {

        if (data.body instanceof FormData) {
            var newBody = new FormData()
            const isFile = input => 'File' in window && input instanceof File

            var numberField = {}
            for (var pair of data.body.entries()) {
                if (!isFile(pair[1])) {
                    newBody.append(pair[0], pair[1])
                } else {
                    if (typeof (pair[1].customName) != "undefined") {
                        var currentField = pair[0].replace('[]', '')
                        numberField[currentField] = (!numberField[currentField]) ? 0 : numberField[currentField]
                        var filePathName = pair[1].customName + '_' + new Date().getTime() + '.' + pair[1].name.split('.').pop()
                        
                        var fileName = filePathName.split('/').pop()
                        var folder = filePathName.replace('/'+fileName, '')
                        var mime = pair[1].type

                        var signedUrl = ''
                        await getSignedUrl(folder === fileName ? '' : folder, fileName, mime)
                            .then(result => {
                                signedUrl = result.response
                            })
                            .catch((e) => {
                                console.log(e)
                            })
                        
                        if(signedUrl != '') {
                            await upload(signedUrl, pair[1], mime)
                                .then(result => {
                                    console.log(result)
                                    newBody.append(currentField + '[' + numberField[currentField] + '][name]', fileName)
                                    newBody.append(currentField + '[' + numberField[currentField] + '][path]', filePathName)
                                    newBody.append(currentField + '[' + numberField[currentField] + '][size]', pair[1].size)
                                    newBody.append(currentField + '[' + numberField[currentField] + '][mime]', mime)
                                    newBody.append(currentField + '[' + numberField[currentField] + '][original]', pair[1].name)
                                    newBody.append(currentField + '[' + numberField[currentField] + '][ext]', pair[1].name.split('.').pop())
                                })
                                .catch(error => {
                                    console.error('Error uploading file:', error);
                                });
                        }
                        ++numberField[currentField]
                    } else {
                        newBody.append(pair[0], pair[1])
                    }
                }
            }
            data.body = newBody
        }
    }

    if(gcsError) {
        return Promise.reject("405" || "Gagal Upload ke GCS")
    } else {
        return axios.create({
            baseURL: baseUrl,
            headers: {
                'initial': initial,
                'appCode': appCode,
                'accessToken': localStorage.getItem(initial + 'AccessToken'),
                'tokenId': localStorage.getItem('tokenId')
            }
        })({
            method,
            url: route + outputType,
            params: data.params,
            data: data.body,
            cancelToken: data.cancelToken
        }).then(onSuccess)
            .catch(onError)
    }
}