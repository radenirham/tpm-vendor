import SweetAlert from "react-bootstrap-sweetalert"
import loadingIcon from "../../assets/images/loading.gif"

const ConfirmAlert = (props) => {
    return (
        <>
            { props.showConfirm ? 
                <SweetAlert
                    title={props.confirmTitle ? props.confirmTitle : "Konfirmasi!"}
                    warning
                    showCancel
                    confirmBtnBsStyle="success"
                    cancelBtnBsStyle="danger"
                    onConfirm={() => {
                        props.response('confirm')
                    }}
                    onCancel={() => {
                        props.response('cancel')
                    }}
                >
                    {props.confirmInfo ? props.confirmInfo : "Apakah anda yakin?"}
                </SweetAlert>
            : null }

            { props.showLoading ? 
                <SweetAlert
                    title={props.loadingTitle ? props.loadingTitle : "Loading..."}
                    custom
                    showCloseButton={false}
                    showConfirm={false}
                    customIcon={loadingIcon}
                    onConfirm={() => {}}
                >
                    {props.loadingInfo ? props.loadingInfo : ""}
                </SweetAlert>
            : null }

            { props.showSuccess ? 
                <SweetAlert
                    title={props.successTitle ? props.successTitle : "Berhasil!"}
                    timeout={2000}
                    showCloseButton={false}
                    showConfirm={false}
                    success
                    onConfirm={() => {
                        props.response('success')
                    }}
                >
                    {props.successInfo ? props.successInfo : ""}
                </SweetAlert>
            : null }
            { props.showFailed ? 
                <SweetAlert
                    title={props.failedTitle ? props.failedTitle : "Gagal!"}
                    showCloseButton={false}
                    showConfirm={true}
                    confirmBtnBsStyle="danger"
                    error
                    onConfirm={() => {
                        props.response('failed')
                    }}
                >
                    {props.failedInfo ? props.failedInfo : ""}
                </SweetAlert>
            : null }
        </>
    )
}

export default ConfirmAlert