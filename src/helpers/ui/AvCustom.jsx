import Flatpickr from 'react-flatpickr'
import { AvField } from "availity-reactstrap-validation"
import ReCAPTCHA from "react-google-recaptcha";

import React, { useState, useEffect, Fragment } from 'react'

import Select from 'react-select'

import moment from 'moment'

import { useDropzone } from 'react-dropzone'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { FiTrash, FiDownloadCloud } from 'react-icons/fi'
import toast from 'react-hot-toast'

import { RiFileExcel2Line, RiFileZipLine, RiFileWord2Line, RiFilePpt2Line, RiFilePdfLine, RiFileUnknowLine } from 'react-icons/ri'

export const AvGenerateFormData = (query, fileField = 'file') => {
	var formData = new FormData()
	fileField = (!Array.isArray(fileField)) ? [fileField] : fileField
	var fileFields = []
	fileField.map((item) => {
		fileFields.push((typeof item === 'object' ? item.field : item))
	})

	for (var key in query) {
		if (fileFields.includes(key)) {
			fileField.forEach(file => {
				var name = (typeof file === 'object' ? file.field : file)
				if (key === name && query[key].length) {
					query[key].forEach((value, index) => {
						if (typeof file === 'object') {
							Object.assign(value, {
								customName: (file.name !== '' ? file.name : value.name)
							})
						}
						formData.append(`${key}[]`, value)
					});
				}
			});
		} else {
			formData.append(key, query[key]);
		}
	}

	return formData;
};

export const AvFlatpickr = (props) => {
    const [selectedValue, setSelectedValue] = useState('')
    const {
        id,
        name,
        placeholder,
        enableTime = props.enableTime ?? false,
        className,
        validate,
        value = '',
        errorMessage,
        dateFormat = props.dateFormat ?? ((props.enableTime ?? false) ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'),
        options,
        onValueUpdate = props.onValueUpdate,
        onChange = props.onChange,
        onOpen = props.onOpen,
        onClose = props.onClose,
        onMonthChange = props.onMonthChange,
        onYearChange = props.onYearChange,
        onReady = props.onReady,
        onDayCreate = props.onDayCreate,
        isAvForm = true
    } = props

    useEffect(() => {
        setSelectedValue(value)
        console.log('asasa')
    }, [value])

    const handleChange = (dates) => {
        var dateValue = '';
        if(dates.length > 0) {
            dates.map((date) => {
                dateValue = (dateValue === '' ? '' : dateValue+',') + moment(date).format(dateFormat)
            })
        }
        setSelectedValue(dateValue)
        if (onChange && typeof onChange === "function") {
            onChange(dates)
        }
    }


    return (
        <>
            <Flatpickr
                placeholder={placeholder}
                className="form-control"
                data-enable-time={enableTime}
                options={{...options, altInput: true, altFormat: (props.enableTime ?? false) ? 'j F Y, H:i' : 'j F Y'}}
                id={id}
                value={selectedValue}
                onValueUpdate={(data) => { if (onValueUpdate && typeof onValueUpdate === "function") { onValueUpdate(data) }}}
                onChange={handleChange}
                onOpen={(data) => { if (onOpen && typeof onOpen === "function") { onOpen(data) }}}
                onClose={(data) => { if (onClose && typeof onClose === "function") { onClose(data) }}}
                onMonthChange={(data) => { if (onMonthChange && typeof onMonthChange === "function") { onMonthChange(data) }}}
                onYearChange={(data) => { if (onYearChange && typeof onYearChange === "function") { onYearChange(data) }}}
                onReady={(data) => { if (onReady && typeof onReady === "function") { onReady(data) }}}
                onDayCreate={(data) => { if (onDayCreate && typeof onDayCreate === "function") { onDayCreate(data) }}}
            />
            {isAvForm &&
                <AvField
                    name={name}
                    className={className}
                    validate={validate}
                    type="hidden"
                    value={selectedValue}
                    errorMessage={errorMessage}
                />
            }
        </>
    )
}

export const AvSelect = (props) => {
    const [selectedtValue, setSelectedValue] = useState();
    const {
        options,
        name,
        isMulti = false,
        errorMessage,
        defaultValue,
        validate,
        optionLabel = 'label',
        optionValue = 'value',
        onChange = null,
        onInputChange = null,
        isClearable,
        isSearchable = true,
        isDisabled,
        isLoading,
        isRtl,
        placeholder = "Select...",
        isAvForm = true,
        noOptionsMessage,
    } = props

    useEffect(() => {
        if (options?.length) {
            defaultVal()
        }
    }, [defaultValue, options])

    const handleChange = (values) => {
        setSelectedValue(values)
        if (onChange) {
            onChange(values)
        }
    }

    const defaultVal = () => {
        const filter = options.filter(option => option[optionValue] === defaultValue)
        setSelectedValue(filter[0])
    }

    return (
        <>
            <Select
                isMulti={isMulti}
                className='react-select'
                classNamePrefix='select'
                options={options}
                value={selectedtValue}
                onChange={handleChange}
                getOptionLabel={String(optionLabel).includes('=>') ? optionLabel : opt => opt[optionLabel]}
                getOptionValue={opt => opt[optionValue]}
                onInputChange={onInputChange}
                isSearchable={isSearchable}
                isClearable={isClearable}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isRtl={isRtl}
                placeholder={placeholder}
                noOptionsMessage={noOptionsMessage}
            />
            {isAvForm &&
                <AvField
                    errorMessage={errorMessage}
                    name={name}
                    type="hidden"
                    value={Array.isArray(selectedtValue) ? selectedtValue?.map((item) => item?.[optionValue]).join(',') : selectedtValue?.[optionValue]}
                    validate={validate}
                />
            }
        </>
    )
}

export const AvDropzone = (props) => {
    const {
        multiple = false,
        accept,
        isAvForm = true,
        errorMessage,
        name,
        validate,
        inline = false
    } = props
    const [selectedFiles, setSelectedFiles] = useState([])
  
    const { getRootProps, getInputProps } = useDropzone({
      multiple: inline ? false : multiple,
      accept: accept,
      onDrop: (acceptedFiles, rejectedFiles) => {
        if (rejectedFiles.length) {
          toast.error('You can only upload image Files!.')
        } else {
            if(multiple) {
                setSelectedFiles([...selectedFiles, ...acceptedFiles.map(file => Object.assign(file))])
            } else {
                setSelectedFiles([...acceptedFiles.map(file => Object.assign(file))])
            }
        }
      }
    })
  
    const handleRemoveFile = file => {
      const uploadedFiles = selectedFiles
      const filtered = uploadedFiles.filter(i => i.name !== file.name)
      setSelectedFiles([...filtered])
    }
  
    const renderFileSize = size => {
      if (Math.round(size / 100) / 10 > 1000) {
        return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
      } else {
        return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
      }
    }

    const contentType = (file) => {
        if(file.type.split('/')[0] === 'image') {
            return <img className='me-1' alt={file.name} src={URL.createObjectURL(file)} style={{height: inline ? 35.28 : 42, width: inline ? 35.28 : 42, borderTopLeftRadius: '0.357rem', borderBottomLeftRadius: '0.357rem'}} />
        } else {
            const ext = file.name.split('.').pop()
            if(ext === 'zip') { return <RiFileZipLine size={inline ? 22 : 32} style={{margin: inline ? 7 : 5}} /> }
            else if(ext === 'xls' || ext === 'xlsx') { return <RiFileExcel2Line size={inline ? 22 : 32} style={{margin: inline ? 7 : 5, color: '#00aa00'}} /> }
            else if(ext === 'doc' || ext === 'docx') { return <RiFileWord2Line size={inline ? 22 : 32} style={{margin: inline ? 7 : 5, color: '#0000aa'}} /> }
            else if(ext === 'ppt' || ext === 'pptx') { return <RiFilePpt2Line size={inline ? 22 : 32} style={{margin: inline ? 7 : 5, color: '#AA3300'}} /> }
            else if(ext === 'pdf' || ext === 'pdfx') { return <RiFilePdfLine size={inline ? 22 : 32} style={{margin: inline ? 7 : 5, color: '#aa0000'}} /> }
            else { return <RiFileUnknowLine size={inline ? 22 : 32} style={{margin: inline ? 7 : 5}} /> }
        }
    }
  
    const fileList = selectedFiles.map((file, index) => {
        return (
            <>
            { inline ?
                <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between flex-row' style={{border: '1.5px solid #d8d6de', height: 38.28, paddingLeft: 0, paddingRight: 0, width: '100%'}}>
                    <div className='file-preview' style={{height:35.28}} >
                        { contentType(file) }
                    </div>
                    <div className='text-truncate pe-1' style={{width:'100%'}}>
                        {file.name}
                    </div>
                    <Button color='danger' type='button' style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} onClick={() => handleRemoveFile(file)}><FiTrash size={14} /></Button>
                </ListGroupItem>
            :
                <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
                    <div className='file-details d-flex align-items-center'>
                        <div className='file-preview' style={{height:42, width:42}} >
                            { contentType(file) }
                        </div>
                        <div>
                            <p className='file-name mb-0'><strong>{file.name}</strong></p>
                            <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
                        </div>
                    </div>
                    <Button color='danger' size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
                        <FiTrash size={14} />
                    </Button>
                </ListGroupItem>
            }
            </>
        )
    })
    
      return (
        <div className='mb-3'>
            { inline ?
                <>
                    {selectedFiles.length ? (
                    <Fragment>
                        <ListGroup>{fileList}</ListGroup>
                    </Fragment>
                    ) : 
                    <div {...getRootProps({ className: 'dropzone' })} style={{minHeight: 38.28, height: 38.28, border: '1.5px solid #d8d6de', paddingLeft: 10}}>
                        <input {...getInputProps()} />
                        <div className='d-flex align-items-center justify-content-between' style={{width: '100%'}}>
                            <div style={{color: '#b9b9c3', paddingRight: 10}} className='text-truncate'>Drop Files here or click to upload</div>
                            {' '}
                            <Button color='secondary' type='button' style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} className='text-truncate'>Choose File</Button>
                        </div>
                    </div>
                    }
                </>
                :
                <>
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <FiDownloadCloud size={64} />
                            <h5>Drop Files here or click to upload</h5>
                            <p className='text-secondary'>
                                Drop files here or click{' '}
                                <a href='/' onClick={e => e.preventDefault()}>
                                browse
                                </a>{' '}
                                thorough your machine
                            </p>
                        </div>
                    </div>
                    {selectedFiles.length ? (
                    <Fragment>
                        <ListGroup className='my-2'>{fileList}</ListGroup>
                    </Fragment>
                    ) : null}
                </>
            }

            {isAvForm &&
                <AvField
                    errorMessage={errorMessage}
                    name={name}
                    type="hidden"
                    value={selectedFiles}
                    validate={validate}
                />
            }
        </div>
      )
  }

export const AvRecaptcha = (props) => {
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [selectedValue, setSelectedValue] = useState('');

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
        setSelectedValue('ready')
    };

    return (
        <>
            <ReCAPTCHA sitekey="6Lf2250nAAAAAOyf6D-I9LjMPka-AWxAljgl_dI7" onChange={handleRecaptchaChange} />
            <AvField
                name="recaptcha"
                className="form-control mb-3"
                validate={{ required: { value: true } }}
                type="hidden"
                value={selectedValue}
                errorMessage="Recaptcha harus dicentang"
            />
        </>
    );
};