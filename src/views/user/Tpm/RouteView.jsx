import React from 'react'
import { useTranslation } from 'react-i18next'
import GeneralDataView from './GeneralData/Index/View'

const RouteView = (props) => {
  const queryParams = new URLSearchParams(window.location.search)
  const { t } = useTranslation(['base/smaple'])

  const _sample = queryParams.get('sample')

  if (_sample !== null) {
    return <div>test</div>
  } else {
    return (
      <>
       <GeneralDataView lang={t}/>
      </>
    )
  }
}

export default RouteView