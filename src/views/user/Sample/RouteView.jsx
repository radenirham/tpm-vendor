import React from 'react'
import { useTranslation } from 'react-i18next'

import IndexView from "./Index/View"
import CreateView from "./Create/View"
import DetailView from "./Detail/View"

const RouteView = (props) => {

    const queryParams = new URLSearchParams(window.location.search);
    const { t } = useTranslation(['base/sample'])


    const _create = queryParams.get('create')
    const _detail = queryParams.get('detail')
    const _update = queryParams.get('update')
    const _delete = queryParams.get('delete')
    const _print = queryParams.get('print')

    if (_create != null) {
        <CreateView lang={t} />
    } else if (_detail != null) {
        const uuid = queryParams.get('uuid')
        return (
            <DetailView lang={t} uuid={uuid} />
        )
    } else {
        return (
            <>
                <IndexView lang={t} />
            </>
        )
    }
}
export default RouteView