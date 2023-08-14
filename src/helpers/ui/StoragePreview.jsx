import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { FiDownload } from 'react-icons/fi'

import { RiFileExcel2Line, RiFileZipLine, RiFileWord2Line, RiFilePpt2Line, RiFilePdfLine, RiFileUnknowLine } from 'react-icons/ri'

import Shimmer from "react-shimmer-effect"

import { previewLink } from '../../services/storage'

class StoragePreview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            link: ''
        }
    }

    componentDidMount() {
        this.generatePreview(this.props.path)
    }

    generatePreview = async (path) => {
        await previewLink(path)
        .then(result => {
            console.log(result.response)
            this.setState({
                link: result.response
            })
        })
        .catch((e) => {})
    }

    renderFileSize = (size) => {
        if (Math.round(size / 100) / 10 > 1000) {
          return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
        } else {
          return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
        }
    }

    contentType = () => {
        if(this.props.mime.split('/')[0] === 'image') {
            if(this.state.link !== '') {
                //return <img className='rounded' alt={this.props.name} src={this.state.link} style={{height:42, width:42}} />
                return <img alt={this.props.name} src={this.state.link} style={{height: this.props.inline ? 35.28 : 42, width: this.props.inline ? 35.28 : 42, borderTopLeftRadius: '0.357rem', borderBottomLeftRadius: '0.357rem'}} />
            } else {
                return <Shimmer><div className="shimmer button" style={{width: this.props.inline ? 35.28 : 42, height: this.props.inline ? 35.28 : 42, paddingBottom: 0, marginBottom: 0, borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}></div></Shimmer>
            }
        } else {
            const ext = this.props.name.split('.').pop()
            if(ext === 'zip') { return <RiFileZipLine size={this.props.inline ? 22 : 32} style={{margin: this.props.inline ? 7 : 5}} /> }
            else if(ext === 'xls' || ext === 'xlsx') { return <RiFileExcel2Line size={this.props.inline ? 22 : 32} style={{margin: this.props.inline ? 7 : 5, color: '#00aa00'}} /> }
            else if(ext === 'doc' || ext === 'docx') { return <RiFileWord2Line size={this.props.inline ? 22 : 32} style={{margin: this.props.inline ? 7 : 5, color: '#0000aa'}} /> }
            else if(ext === 'ppt' || ext === 'pptx') { return <RiFilePpt2Line size={this.props.inline ? 22 : 32} style={{margin: this.props.inline ? 7 : 5, color: '#AA3300'}} /> }
            else if(ext === 'pdf' || ext === 'pdfx') { return <RiFilePdfLine size={this.props.inline ? 22 : 32} style={{margin: this.props.inline ? 7 : 5, color: '#aa0000'}} /> }
            else { return <RiFileUnknowLine size={this.props.inline ? 22 : 32} style={{margin: this.props.inline ? 7 : 5}} /> }
        }
    }

    render() {
        return (
            <>
                <ListGroup>
                    {
                        this.props.inline ?
                        <ListGroupItem className='d-flex align-items-center justify-content-between flex-row' style={{border: '1.5px solid #d8d6de', height: 38.28, paddingLeft: 0, paddingRight: 0, width: '100%'}}>
                            <>
                                <div className='file-preview' style={{height:35.28}} >
                                    { this.contentType(this.props.mime) }
                                </div>
                                <div className='text-truncate ps-1 pe-1' style={{width:'100%'}}>
                                    {this.props.name}
                                </div>
                                {
                                    this.state.link !== '' &&
                                    <>
                                        <Button color='danger' type='button' style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} onClick={() => window.open(this.state.link, '_blank') }><FiDownload size={14} /></Button>
                                    </>
                                }
                            </>
                        </ListGroupItem>
                        :
                        <ListGroupItem className='d-flex align-items-center justify-content-between'>
                            <div className='file-details d-flex align-items-center'>
                                <div className='file-preview me-1' style={{height:42, width:42, backgroundColor: '#f5f5f5'}} >
                                    { this.contentType(this.props.mime) }
                                </div>
                                <div>
                                    <p className='file-name mb-0'><strong>{this.props.name}</strong></p>
                                    <p className='file-size mb-0'>{this.renderFileSize(this.props.size)}</p>
                                </div>
                            </div>
                            {
                                this.state.link !== '' &&
                                <>
                                    <Button color='success' size='sm' onClick={() => {
                                        window.open(this.state.link, '_blank');
                                    }}>
                                        <FiDownload size={14} />
                                    </Button>
                                </>
                            }
                        </ListGroupItem>
                    }
                </ListGroup>
            </>
        )
    }    
}

export default StoragePreview