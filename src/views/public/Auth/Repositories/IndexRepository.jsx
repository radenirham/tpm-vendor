import {
    apiRequest,
    getVendorAreas,
    getProvince,
    getCity,
    getCompanyType,
    getSupplierCategories,
    postPreregisterVendor
} from "../../../../services/adapters/vendorareas"

class IndexRepository {
    fetchVendorAreasList = async (query) => {
        return await apiRequest("get", getVendorAreas, {
            params: query,
        }, true)
    }

    fetchProvinceList = async (query) => {
        return await apiRequest("get", getProvince, {
            params: query,
        }, true)
    }

    fetchCityList = async (query) => {
        return await apiRequest("get", getCity, {
            params: query,
        }, true)
    }

    fetchCompanyTypeList = async (query) => {
        return await apiRequest("get", getCompanyType, {
            params: query,
        }, true)
    }

    fetchSupplierCategoriesList = async (query) => {
        return await apiRequest("get", getSupplierCategories, {
            params: query,
        }, true)
    }

    fetchPreregisterVendorStore = async (query) => {
        return await apiRequest("post", postPreregisterVendor, {
            body: query,
        }, true)
    }
}

export default IndexRepository