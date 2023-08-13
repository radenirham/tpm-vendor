import {config} from "../../../../../helpers/config_global"
import React, { Component, Fragment } from "react"

import moment from 'moment'

import ConfirmAlert from '../../../../../helpers/ui/ConfirmAlert'
import ButtonAction from '../../../../../helpers/ui/ButtonAction'

import { ThousandSparator } from '../../../../../helpers/ui/Global'

import MKIDataGrid from '../../../../../helpers/ui/MKIDataGrid'

import { cancelToken } from "../../../../../services/adapters/base"

import IndexBloc from '../Blocs/IndexBloc'
import apiResponse from '../../../../../services/apiResponse'

import { FiRepeat, FiAlignJustify } from 'react-icons/fi'

class SampleIndexInactiveListComponent extends Component {
    indexBloc = new IndexBloc();


    source
    historyTable = 'historySampleIndexInactiveListComponents'
    defaultOrder = 'sample_id'
    defaultSize = 10
    defaultSort = 'asc'
    configDatatable = {
        ...config('datatable'),
        sort: {
            column: this.defaultOrder,
            order: this.defaultSort
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            tooltip: false,
            defaultSize: 10,
            rows: [],
            totalRow: 0,
            loadingTable: true,
            filter: sessionStorage.getItem(this.historyTable) ?
                JSON.parse(sessionStorage.getItem(this.historyTable)) :
                {
                    filter_value: "",
                    page_number: 1,
                    page_size: this.defaultSize,
                    sort_order: {
                        column: this.defaultOrder,
                        order: this.defaultSort
                    },
                    field: {value: 'all', label: 'all'},
                    fields: [],
                }
        }
    }

    loadData = async () => {
        /* history Datatable */
        sessionStorage.setItem(this.historyTable, JSON.stringify(this.state.filter))

        /* kirim ke server */
        let offset = (this.state.filter.page_number-1)*this.state.filter.page_size
        if(this.state.defaultSize!==this.state.filter.page_size) {
            this.setState({
                defaultSize: this.state.filter.page_size
            })
            offset = 0
            this.configDatatable.page_number = 1
        }
        const query = {
            search: this.state.filter.filter_value,
            limit: this.state.filter.page_size,
            offset: offset,
            order: this.state.filter.sort_order.column,
            sort: this.state.filter.sort_order.order,
            status: 0,
            field: this.state.filter.field.value,
            fields: this.state.filter.fields,
        }
        await this.indexBloc.fetchInactiveList(query, this.source.token)
    }

    setTokenAPI = () => {
        if (typeof this.source != typeof undefined) {
            this.source.cancel();
        }
        this.source = cancelToken()
        this.loadData()
    }

    componentDidMount() {
        this.setTokenAPI()

        this.indexBloc.inactiveListChannel.subscribe((result) => {
            switch (result.status) {
                case apiResponse.INITIAL:
                    this.setState({
                        loadingTable: false
                    })
                    break
                case apiResponse.LOADING:
                    this.setState({
                        loadingTable: true
                    })
                    break
                case apiResponse.COMPLETED:
                    const response = result.data.response
                    this.setState({
                        totalRow: response.total,
                        rows: response.result,
                        loadingTable: false
                    })
                    break
                case apiResponse.ERROR:
                    
                    break
                default:
                    break
            }
        })

        this.indexBloc.reactiveChannel.subscribe((result) => {
            switch (result.status) {
                case apiResponse.COMPLETED:
                    this.setState({
                        loading: false,
                        success: true,
                        loadingTable: true
                    }, function () {
                        this.setTokenAPI()
                    });
                    break
                case apiResponse.ERROR:
                    this.setState({
                        loading: false,
                        failed: true,
                    });
                    break
                default:
                    break
            }
        })
    }

    confirmResponse = (response) => {
        let forState = {}
        switch (response) {
            case 'cancel':
                forState = {
                    confirm: false
                }
                break;
            case 'confirm':
                forState = {
                    loading: true,
                    confirm: false
                }
                this.activeData()
                break;
            case 'success':
                forState = {
                    success: false,
                }
                break;
            case 'failed':
                forState = {
                    failed: false
                }
                break;
            default:
        }
        this.setState(forState)
    }

    activeData = async () => {
        await this.indexBloc.fetchReactive({ uuid: this.state.uuid })
    }

    componentWillUnmount() {
        this.indexBloc.inactiveListChannel.unsubscribe()
        this.indexBloc.reactiveChannel.unsubscribe()
    }

    columns = [
        {
            key: "sample_code",
            text: "code",
            setFilter: true,
            className: "",
            align: "center",
            width: '140',
            sortable: true,
        },
        {
            key: "sample_text",
            text: "text",
            setFilter: true,
            className: "",
            //align: 'center',
            sortable: true,
            width: '500',
            /* cell: record => {
                return (
                    <>
                        { <center>{ moment(record.tglgaji).format('LL') }</center> }
                    </>
                )
            } */
        },
        {
            key: "sample_date",
            text: "date",
            //setFilter: true,
            className: "",
            //align: 'center',
            sortable: true,
            width: '150',
            cell: record => {
                return (
                    <>
                        { <div className="text-start">{ record.sample_date !== null ? moment(record.sample_date).locale(localStorage.getItem('i18nextLng')).format('D MMMM YYYY') : '-' }</div> }
                    </>
                )
            }
        },
        {
            key: "sample_datetime",
            text: "datetime",
            setFilter: true,
            className: "",
            //align: 'center',
            sortable: true,
            width: '150',
            cell: record => {
                return (
                    <>
                        { <div className="text-center">{ record.sample_datetime !== null ? moment(record.sample_datetime).locale(localStorage.getItem('i18nextLng')).fromNow() : '-' }</div> }
                    </>
                )
            }
        },
        {
            key: "sample_number",
            text: "number",
            setFilter: true,
            className: "",
            //align: 'center',
            sortable: true,
            width: '150',
            cell: record => {
                return (
                    <>
                        {/* { <div className="text-end">{ record.sample_number !== null ? <ThousandSparator number={record.sample_number} /> : '-' }</div> } */}
                        { <div className="text-end">{ record.sample_number !== null ? <ThousandSparator number={234324876.23} /> : '-' }</div> }
                    </>
                )
            }
        },
        {
            key: "action",
            text: "action",
            width: 160,
            sortable: false,
            align: 'center',
            cell: record => {
                const thisId = record.sample_uuid
                return (
                    <Fragment>
                        <ButtonAction
                            id={"detail-" + thisId}
                            color="success"
                            link={"/setting/users?detail&uuid="+thisId}
                            tooltip="Adalah"
                            text={<FiAlignJustify size={14} />}
                        />
                        <ButtonAction
                            id={"update-" + thisId}
                            color="danger"
                            onClick={() => {
                                this.setState({
                                    uuid: record.sample_uuid,
                                    confirm: true
                                })
                            }}
                            tooltip="Adapun"
                            text={<FiRepeat size={14} />}
                        />
                    </Fragment>
                );
            }
        }
    ]

    
    
    render() {
        return (
            <>
                <div className='invoice-list-dataTable react-dataTable'>
                    <MKIDataGrid
                        lang={this.props.lang}
                        className={this.configDatatable.tableClass}
                        config={this.configDatatable}
                        records={this.state.rows}
                        columns={this.columns}
                        dynamic={true}
                        minWidth={1020}
                        //withNumber={true}
                        total_record={this.state.totalRow}
                        initial={this.state.filter}
                        onChange={(filter) => {
                            this.setState({
                                loadingTable: true,
                                filter: filter
                            }, function () {
                                this.setTokenAPI()
                            });
                        }}
                        loading={this.state.loadingTable}
                    />
                </div>

                <ConfirmAlert
                    confirmTitle="Konfirmasi!"
                    confirmInfo="Apakah anda yakin akan mengaktifkan data ini?"

                    loadingTitle="Mengirim data..."
                    loadingInfo="Tunggu beberapa saat"

                    successTitle="Berhasil!"
                    successInfo="Data berhasil diaktifkan"

                    failedTitle="Gagal!"
                    failedInfo="Data gagal diaktifkan"

                    showConfirm={this.state.confirm}
                    showLoading={this.state.loading}
                    showSuccess={this.state.success}
                    showFailed={this.state.failed}

                    response={this.confirmResponse}
                />
            </>
        )
    }

}

export default SampleIndexInactiveListComponent