import _react from 'react';
import _Pagination from './Pagination';
import _ADPagination from './ADPagination';


export default TableFooter;

var _react2 = _interopRequireDefault(_react);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _ADPagination2 = _interopRequireDefault(_ADPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableFooter(props) {
  if (props.config.show_info === true || props.config.show_pagination === true) {
    return _react2.default.createElement(
      'div',
      { className: 'row table-foot asrt-table-foot', id: props.id ? props.id + "-table-foot" : "" },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12 ' },
        _react2.default.createElement(
          'div',
          { className: 'float-md-start mt-2 mb-2' },
          props.config.show_info ? [
              //props.paginationInfo
              _react2.default.createElement('span', {key: 'paginationInfoShow', style: {padding: '0px 5px'}}, props.lang('translation:datatable--->showing')),
              _react2.default.createElement('span', {key: 'paginationInfoStart'}, props.paginationInfoStart),
              _react2.default.createElement('span', {key: 'paginationInfoTo', style: {padding: '0px 5px'}}, props.lang('translation:datatable--->to')),
              _react2.default.createElement('span', {key: 'paginationInfoEnd'}, props.paginationInfoEnd),
              _react2.default.createElement('span', {key: 'paginationInfoOf', style: {padding: '0px 5px'}}, props.lang('translation:datatable--->of')),
              _react2.default.createElement('span', {key: 'paginationInfoTotal'}, props.paginationInfoTotal),
              _react2.default.createElement('span', {key: 'paginationInfoEntry', style: {padding: '0px 5px'}}, props.lang('translation:datatable--->entry')),
            ]
          : null
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'float-md-end text-right',
            style: { overflowX: 'auto' }
          },
          props.config.show_pagination ? _react2.default.createElement(
            'nav',
            { 'aria-label': 'Page navigation', style: {marginTop: 16} },
            _react2.default.createElement(
              'ul',
              { className: 'pagination' },
              props.config.pagination === "basic" ? _react2.default.createElement(_Pagination2.default, {
                lang: props.lang,
                config: props.config,
                isFirst: props.isFirst,
                isLast: props.isLast,
                pages: props.pages,
                page_number: props.page_number,
                is_temp_page: props.is_temp_page,
                temp_page_number: props.temp_page_number,
                previousPage: props.previousPage,
                firstPage: props.firstPage,
                nextPage: props.nextPage,
                lastPage: props.lastPage,
                goToPage: props.goToPage,
                onPageChange: props.onPageChange,
                onPageBlur: props.onPageBlur
              }) : _react2.default.createElement(_ADPagination2.default, {
                lang: props.lang,
                language: props.config.language,
                isFirst: props.isFirst,
                isLast: props.isLast,
                pages: props.pages,
                page_number: props.page_number,
                previousPage: props.previousPage,
                nextPage: props.nextPage,
                goToPage: props.goToPage
              })
            )
          ) : null
        )
      ),
    );
  } else {
    return null;
  }
}