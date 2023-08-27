import { Subject } from 'rxjs'
import apiResponse from '../../../../services/apiResponse'
import IndexRepository from '../Repositories/IndexRepository'

class IndexBloc {

    getVendorAreas = new Subject();
    getProvince = new Subject();
    getCity = new Subject();
    getSupplierCategories = new Subject();
    getCompanyType = new Subject();
    postPreregisterVendor = new Subject();

    repository = new IndexRepository()

    constructor() {
        this.getVendorAreas.next({status: apiResponse.INITIAL})
        this.getProvince.next({status: apiResponse.INITIAL})
        this.getCity.next({status: apiResponse.INITIAL})
        this.getCompanyType.next({status: apiResponse.INITIAL})
        this.getSupplierCategories.next({status: apiResponse.INITIAL})
        this.postPreregisterVendor.next({status: apiResponse.INITIAL})
    }

    fetchVendorAreas = async (query) => {
        this.getVendorAreas.next({status: apiResponse.LOADING}) // Perbarui baris ini
        try {
            await this.repository.fetchVendorAreasList(query).then((result) => {

                this.getVendorAreas.next({status: apiResponse.COMPLETED, data: result}) // Perbarui baris ini
            }).catch((error) => {
                this.getVendorAreas.next({status: apiResponse.ERROR, data: error}) // Perbarui baris ini
            })
        } catch (error) {}
    };

    fetchProvince = async (query) => {
        this.getProvince.next({status: apiResponse.LOADING})
        try{
            await this.repository.fetchProvinceList(query).then((result) => {
     
                this.getProvince.next({
                    status: apiResponse.COMPLETED,
                    data: result,
                });
            })
            .catch((error) => {
                this.getProvince.next({
                    status: apiResponse.ERROR,
                    data: error,
                });
            });
        } catch (error) {}
    };

    fetchCity = async (query ) => {
        this.getCity.next({status: apiResponse.LOADING}) // Perbarui baris ini
        try {
            await this.repository.fetchCityList(query).then((result) => {
           
                this.getCity.next({status: apiResponse.COMPLETED, data: result}) // Perbarui baris ini
            }).catch((error) => {
                this.getCity.next({status: apiResponse.ERROR, data: error}) // Perbarui baris ini
            })
        } catch (error) {}
    };

    fetchCompanyType = async (query ) => {
        this.getCompanyType.next({status: apiResponse.LOADING}) // Perbarui baris ini
        try {
            await this.repository.fetchCompanyTypeList(query).then((result) => {
           
                this.getCompanyType.next({status: apiResponse.COMPLETED, data: result}) // Perbarui baris ini
            }).catch((error) => {
                this.getCompanyType.next({status: apiResponse.ERROR, data: error}) // Perbarui baris ini
            })
        } catch (error) {}
    };

    fetchSupplierCategories = async (query ) => {
        this.getSupplierCategories.next({status: apiResponse.LOADING}) // Perbarui baris ini
        try {
            await this.repository.fetchSupplierCategoriesList(query).then((result) => {
           
                this.getSupplierCategories.next({status: apiResponse.COMPLETED, data: result}) // Perbarui baris ini
            }).catch((error) => {
                this.getSupplierCategories.next({status: apiResponse.ERROR, data: error}) // Perbarui baris ini
            })
        } catch (error) {}
    };

    fetchPreregisterVendor = async (query) => {
        this.postPreregisterVendor.next({ status: apiResponse.LOADING })

        try {
            await this.repository.fetchPreregisterVendorStore(query).then((result) => {
                if (result.status) {
                    this.postPreregisterVendor.next({ status: apiResponse.COMPLETED, data: result })
                } else {
                    this.postPreregisterVendor.next({ status: apiResponse.ERROR, data: result.message })
                }
            }).catch((error) => {
                this.postPreregisterVendor.next({ status: apiResponse.ERROR, data: error })
            })
        } catch (error) {
            console.log('rxjs', 'Channel Unsubscribed')
        }
    }

}

export default IndexBloc
