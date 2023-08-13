import { Subject } from 'rxjs'
import apiResponse from '../../../../../services/apiResponse'
import IndexRepository from '../Repositories/IndexRepository'


class IndexBloc {

    activeListChannel = new Subject();
    inactiveListChannel = new Subject();
    inactiveChannel = new Subject();
    reactiveChannel = new Subject();
    repository = new IndexRepository()

    constructor() {
        this.activeListChannel.next({status: apiResponse.INITIAL})
        this.inactiveListChannel.next({status: apiResponse.INITIAL})
        this.inactiveChannel.next({status: apiResponse.INITIAL})
        this.reactiveChannel.next({status: apiResponse.INITIAL})
    }

    fetchActiveList = async (query, cancelToken) => {
        this.activeListChannel.next({status: apiResponse.LOADING})
        try {
            await this.repository.fetchActiveList(query, cancelToken).then((result) => {
                this.activeListChannel.next({status: apiResponse.COMPLETED, data: result})
            }).catch((error) => {
                this.activeListChannel.next({status: apiResponse.ERROR, data: error})
            })
        } catch (error) {}
    }

    fetchInactiveList = async (query, cancelToken) => {
        this.inactiveListChannel.next({status: apiResponse.LOADING})
        try {
            await this.repository.fetchInactiveList(query, cancelToken).then((result) => {
                this.inactiveListChannel.next({status: apiResponse.COMPLETED, data: result})
            }).catch((error) => {
                this.inactiveListChannel.next({status: apiResponse.ERROR, data: error})
            })
        } catch (error) {}
    }

    fetchInactive = async (query) => {
        this.inactiveChannel.next({ status: apiResponse.LOADING })
        try {
            await this.repository.fetchInactive(query).then((result) => {
                if(result.status) {
                    this.inactiveChannel.next({status: apiResponse.COMPLETED, data: result })
                } else {
                    this.inactiveChannel.next({status: apiResponse.ERROR, data: result.message})
                }
            }).catch((error) => {
                this.inactiveChannel.next({ status: apiResponse.ERROR, data: error })
            })
        } catch (error) {
            console.log('rxjs', 'Channel Unsubscribed')
        }
    }
    
    fetchReactive = async (query) => {
        this.reactiveChannel.next({ status: apiResponse.LOADING })
        try {
            await this.repository.fetchReactive(query).then((result) => {
                if(result.status) {
                    this.reactiveChannel.next({status: apiResponse.COMPLETED, data: result })
                } else {
                    this.reactiveChannel.next({status: apiResponse.ERROR, data: result.message})
                }
            }).catch((error) => {
                this.reactiveChannel.next({ status: apiResponse.ERROR, data: error })
            })
        } catch (error) {
            console.log('rxjs', 'Channel Unsubscribed')
        }
    }
}

export default IndexBloc