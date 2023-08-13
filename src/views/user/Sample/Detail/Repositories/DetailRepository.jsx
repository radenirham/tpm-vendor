import {
    apiRequest,
    detail
} from "../../../../../services/adapters/sample"

class DetailRepository {
    fetchDetail = async (query) => {
        return await apiRequest("get", detail, {
            params: query
        }, true)
    }
}

export default DetailRepository