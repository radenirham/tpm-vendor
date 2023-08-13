import React, { Component } from 'react'
import { Row, Col, Progress } from 'reactstrap'

class UploadProgress extends Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            size: 0,
            name: '-',
            progress: 0,
            percentage: 0
        }
    }

    renderFileSize = (size) => {
        var numb = 0;
        var item = 'b';
        if (Math.round(size / 100) / 10 > 1000) {
            numb = (Math.round(size / 100) / 10000).toFixed(2)
            item = 'mb'
        } else {
            numb = (Math.round(size / 100) / 10).toFixed(2)
            item = 'kb'
        }
        return numb.toString().replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+item
      }

    componentDidMount(){
        window.addEventListener('uploadStatus', () => {
            var data = localStorage.getItem('uploadStatus')
            if(data === 'show') {
                this.setState({
                    show: true
                })
            } else if(data === 'hide') {
                this.setState({
                    show: false
                })
            } else {
                const fileUpload = JSON.parse(data)
                console.log(fileUpload)
                this.setState({
                    show: true,
                    name: fileUpload.fileName,
                    size: fileUpload.sizeTotal,
                    progress: fileUpload.uploaded,
                    percentage: fileUpload.percentage
                })
            }
        })
    }
    
    render() {
        return (
            <>
                { this.state.show ?
                    <div
                        style={{
                            //height: 80,
                            //maxWidth: 400,
                            width: 400,
                            backgroundColor: '#ffffff',
                            position: 'fixed',
                            right: 40,
                            bottom: 40,
                            zIndex: 9999,
                            borderRadius: 4
                        }}
                        className='p-2'
                    >
                        <div className="d-flex pb-1">
                            <div className="float-start text-truncate" style={{fontWeight: 'bold', width: 358}}>
                                { this.state.name }
                            </div>
                            <div className="float-end ps-1">
                                <small>{ this.renderFileSize(this.state.size) }</small>
                            </div>
                        </div>
                        <Progress value={this.state.percentage} style={{height: 5}} />
                        <div className="float-end ps-1">
                            <small>{this.state.progress.toString().replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}/{this.state.size.toString().replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</small>
                        </div>
                    </div>
                    : <></>
                }
            </>
        )
    }
}

export default UploadProgress