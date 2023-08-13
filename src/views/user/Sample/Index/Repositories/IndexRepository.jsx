import {
    apiRequest,
    dataList,
    inactive,
    reactive
} from "../../../../../services/adapters/sample"

class IndexRepository {
    fetchActiveList = async (query, cancelToken) => {
        return await apiRequest("get", dataList, {
            cancelToken: cancelToken,
            params: query
        }, true)
    }
    fetchInactiveList = async (query, cancelToken) => {
        return await apiRequest("get", dataList, {
            cancelToken: cancelToken,
            params: query
        }, true)
    }
    
    fetchInactive = async (query) => {
        return await apiRequest("post", inactive, {
            body: query
        }, true)
    }
    fetchReactive = async (query) => {
        return await apiRequest("post", reactive, {
            body: query
        }, true)
    }
}

export default IndexRepository