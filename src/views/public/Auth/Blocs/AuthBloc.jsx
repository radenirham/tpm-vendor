import { Subject } from 'rxjs'
import apiResponse from '../../../../services/apiResponse'
import AuthRepository from '../Repositories/AuthRepository'

class AuthBloc {
    authLoginChannel = new Subject();
    repository = new AuthRepository()

    constructor() {
        this.authLoginChannel.next({status: apiResponse.INITIAL})
    }

    fetchAuth = async (username, password) => {
        this.authLoginChannel.next({status: apiResponse.LOADING})
        try {
            await this.repository.fetchAuth({
                username: username,
                password: password,
            }).then((result) => {
                if(result.status) {
                    this.authLoginChannel.next({status: apiResponse.COMPLETED, data: result})
                } else {
                    this.authLoginChannel.next({status: apiResponse.ERROR, data: result.message})
                }
            }).catch((error) => {
                this.authLoginChannel.next({status: apiResponse.ERROR, data: error})
            })
        } catch (error) {
            console.log('rxjs', 'Channel Unsubscribed')
        }
    }
}

export default AuthBloc