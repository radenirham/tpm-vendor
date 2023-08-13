import { Subject } from 'rxjs'
import apiResponse from '../../../../../services/apiResponse'
import DetailRepository from '../Repositories/DetailRepository'


class DetailBloc {

    detailChannel = new Subject();
    repository = new DetailRepository()

    constructor() {
        this.detailChannel.next({status: apiResponse.INITIAL})
    }

    fetchDetail = async (query) => {
        this.detailChannel.next({status: apiResponse.LOADING})
        try {
            await this.repository.fetchDetail(query).then((result) => {
                this.detailChannel.next({status: apiResponse.COMPLETED, data: result})
            }).catch((error) => {
                this.detailChannel.next({status: apiResponse.ERROR, data: error})
            })
        } catch (error) {}
    }
}

export default DetailBloc