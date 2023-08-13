import {
    apiRequest,
    category,
    dataCreate
} from "../../../../../services/adapters/sample"

class CreateRepository {
    fetchCategory = async () => {
        return await apiRequest("get", category, {}, true)
    }

    fetchCreate = async (query) => {
        return await apiRequest("post", dataCreate, {
            body: query
        }, true)
    }
}

export default CreateRepository