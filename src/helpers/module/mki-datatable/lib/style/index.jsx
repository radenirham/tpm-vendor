'use strict';

/* Object.defineProperty(exports, "__esModule", {
  value: true
}); */

import _upArrow from '../assets/img/up-arrow.png';



import _downArrow from '../assets/img/down-arrow.png';



import _inactiveArrow from '../assets/img/inactive-arrow.png';

var _upArrow2 = _interopRequireDefault(_upArrow);
var _downArrow2 = _interopRequireDefault(_downArrow);

var _inactiveArrow2 = _interopRequireDefault(_inactiveArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

export default {
  table_body: {
    marginTop: '10px'
  },
  table_size: {
    background: 'none',
    border: 'none',
    padding: 0
  },
  table_size_filter: {
    width: '160px',
    flex: 'none',
    margin: '0px 5px',
    display: 'inline-block',
    float: 'none',
    textAlign: 'left'
  },
  table_size_dropdown: {
    width: '84px',
    flex: 'none',
    margin: '0px 5px',
    display: 'inline-block',
    float: 'none'
  },
  table_filter: {
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: '5px',
    width: '250px'
  },
  table_tool: {
    display: 'inline-block',
    verticalAlign: 'top'
  },
  table_tool_btn: {
    marginRight: '5px'
  },
  sort_asc: {
    backgroundImage: 'url(' + _upArrow2.default + ')'
  },
  sort_desc: {
    backgroundImage: 'url(' + _downArrow2.default + ')'
  },
  sort_inactive: {
    backgroundImage: 'url(' + _inactiveArrow2.default + ')'
  }
};