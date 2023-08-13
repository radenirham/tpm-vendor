import {
    apiRequest,
    authLogin,
} from "../../../../services/adapters/base"

class AuthRepository {

    fetchAuth = async (query) => {
        console.log(query)
        return await apiRequest("post", authLogin, {
            body: query
        }, true)
    }

}

export default AuthRepository