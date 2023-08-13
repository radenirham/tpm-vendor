import Select, {
    components,
    //ControlProps,
    //Props,
    //StylesConfig,
  } from 'react-select'
import _react from 'react';
import _includes from 'lodash/includes';
import _style from '../style';

var _react2 = _interopRequireDefault(_react);
var _includes2 = _interopRequireDefault(_includes);

export default TableHeader;

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function TableHeader(props) {
    if (props.config.show_length_menu === true || props.config.show_filter_field === true || props.config.show_filter === true || props.config.button.excel === true || props.config.button.csv === true || props.config.button.print === true) {
        return _react2.default.createElement(
            'div', {
                className: 'row table-head asrt-table-head',
                id: props.id ? props.id + "-table-head" : ""
            },
            _react2.default.createElement(
                'div', {
                    className: 'col-md-6',
                    style: {
                      marginBottom: '5px'
                    }
                },
                props.config.show_length_menu ? _react2.default.createElement(
                    'div', {
                        className: 'asrt-page-length'
                    },
                    _react2.default.createElement(
                        'div', {
                            className: 'input-group-addon input-group-prepend'
                        },
                        _react2.default.createElement(
                            'span', {
                                className: 'input-group-text',
                                style: _style2.default.table_size
                            },
                            props.lang('translation:datatable--->show'), //props.lengthMenuText[0] ? props.lengthMenuText[0] : ''
                        )
                    ),

                    (0, _includes2.default)(props.config.language.length_menu, '_MENU_') ? _react2.default.createElement(
                        'div', {
                            className: 'input-group-addon input-group-prepend',
                            style: _style2.default.table_size_dropdown,
                        },
                            _react2.default.createElement(Select, {
                                className: 'react-select',
                                onChange: props.changePageSize,
                                classNamePrefix: 'select',
                                defaultValue: {label: props.filter && props.filter.page_size ? props.filter.page_size : props.config.length_menu[0], value: props.filter && props.filter.page_size ? props.filter.page_size : props.config.length_menu[0]},
                                options: props.config.length_menu.map(function(value) { return { value: value, label: value } }),
                                isClearable: false
                            }
                        )
                    ) : null,

                    _react2.default.createElement(
                        'div', {
                            className: 'input-group-addon input-group-prepend'
                        },
                        _react2.default.createElement(
                            'span', {
                                className: 'input-group-text',
                                style: _style2.default.table_size
                            },
                            //props.lengthMenuText[1] ? props.lengthMenuText[1] : ''
                            props.lang('translation:datatable--->entry')
                        )
                    )
                ) : null
            ),
            _react2.default.createElement(
                'div', {
                    className: 'col-md-6 float-end text-end asrt-page-length',
                    style: {
                      marginBottom: '5px'
                    },
                },
                props.config.filter_field.length > 1 ? _react2.default.createElement(
                    'div', {
                        className: 'input-group-addon input-group-prepend',
                        style: {
                            marginBottom: '5px'
                        }
                    },
                    _react2.default.createElement(
                        'div', {
                            className: 'input-group-addon input-group-prepend',
                            style: _style2.default.table_size_filter,
                        },
                        _react2.default.createElement(Select, {
                                className: 'react-select',
                                onChange: props.changeFilterField,
                                classNamePrefix: 'select',
                                defaultValue: {value: props.filter && props.filter.field ? props.filter.field.value : props.config.filter_field[0].value, label: props.filter && props.filter.field ? props.lang(((props.filter.field.value === 'all') ? 'translation:datatable--->' : '')+props.filter.field.label) : props.lang(((props.config.filter_field[0].value === 'all') ? 'translation:datatable--->' : '')+props.config.filter_field[0].label)},
                                options: props.config.filter_field.map(function(value) { return { value: value.value, label: props.lang((value.value === 'all' ? 'translation:datatable--->' : '') + value.label) } }),
                                isClearable: false
                            }
                        )
                    )
                ) : null,
                
                props.config.show_filter ? _react2.default.createElement(
                    'div', {
                        className: 'table_filter',
                        style: _style2.default.table_filter
                    },
                    _react2.default.createElement('input', {
                        type: 'search',
                        className: 'form-control',
                        placeholder: props.lang('translation:datatable--->search'),
                        value: props.filter && props.filter.filter_value ? props.filter.filter_value : "",
                        onChange: props.filterRecords
                    })
                ) : null,
                _react2.default.createElement(
                    'div', {
                        className: 'table_tools',
                        style: _style2.default.table_tool
                    },
                    props.config.button.excel ? _react2.default.createElement(
                        'button', {
                            className: 'btn btn-primary buttons-excel',
                            tabIndex: '0',
                            'aria-controls': 'configuration_tbl',
                            title: 'Export to Excel',
                            style: _style2.default.table_tool_btn,
                            onClick: props.exportToExcel
                        },
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('i', {
                                className: 'far fa-file-excel',
                                'aria-hidden': 'true'
                            })
                        )
                    ) : null,
                    props.config.button.csv ? _react2.default.createElement(
                        'button', {
                            className: 'btn btn-primary buttons-csv',
                            tabIndex: '0',
                            'aria-controls': 'configuration_tbl',
                            title: 'Export to CSV',
                            style: _style2.default.table_tool_btn,
                            onClick: props.exportToCSV
                        },
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('i', {
                                className: 'fas fa-file-csv',
                                'aria-hidden': 'true'
                            })
                        )
                    ) : null,
                    props.config.button.print ? _react2.default.createElement(
                        'button', {
                            className: 'btn btn-primary buttons-pdf',
                            tabIndex: '0',
                            'aria-controls': 'configuration_tbl',
                            title: 'Export to PDF',
                            style: _style2.default.table_tool_btn,
                            onClick: props.exportToPDF
                        },
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('i', {
                                className: 'fas fa-print',
                                'aria-hidden': 'true'
                            })
                        )
                    ) : null,
                    props.config.button.extra === true ? props.extraButtons.map(function(elem, index) {
                        elem.clickCount = 0;
                        elem.singleClickTimer = '';
                        return _react2.default.createElement(
                            'button', {
                                className: elem.className ? elem.className : "btn btn-primary buttons-pdf",
                                tabIndex: '0',
                                'aria-controls': 'configuration_tbl',
                                title: elem.title ? elem.title : "Export to PDF",
                                style: _style2.default.table_tool_btn,
                                onClick: function onClick(event) {
                                    elem.onClick(event);
                                },
                                key: index
                            },
                            elem.children
                        );
                    }) : null
                )
            )
        );
    } else {
        return null;
    }
}