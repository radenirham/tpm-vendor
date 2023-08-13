import { Subject } from 'rxjs'
import apiResponse from '../../../../../services/apiResponse'
import CreateRepository from '../Repositories/CreateRepository'


class CreateBloc {

    categoryChannel = new Subject();
    createChannel = new Subject()
    repository = new CreateRepository()

    constructor() {
        this.categoryChannel.next({status: apiResponse.INITIAL})
        this.createChannel.next({status: apiResponse.INITIAL})
    }

    fetchCategory = async () => {
        this.categoryChannel.next({status: apiResponse.LOADING})
        try {
            await this.repository.fetchCategory().then((result) => {
                this.categoryChannel.next({status: apiResponse.COMPLETED, data: result})
            }).catch((error) => {
                this.categoryChannel.next({status: apiResponse.ERROR, data: error})
            })
        } catch (error) {}
    }

    fetchCreate = async (query) => {
        this.createChannel.next({ status: apiResponse.LOADING })
        try {
            await this.repository.fetchCreate(query).then((result) => {
                if(result.status) {
                    this.createChannel.next({ status: apiResponse.COMPLETED, data: result })
                } else {
                    this.createChannel.next({status: apiResponse.ERROR, data: result.message})
                }
            }).catch((error) => {
                this.createChannel.next({ status: apiResponse.ERROR, data: error })
            })
        } catch (error) {
            console.log('rxjs', 'Channel Unsubscribed')
        }
    }

}

export default CreateBloc