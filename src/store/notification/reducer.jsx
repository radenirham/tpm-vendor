// @flow
import {
    CHANGE_NOTIFICATION_COUNT,
    CHANGE_NOTIFICATION_LIST,
    CHANGE_NOTIFICATION_MENU
  } from "./actionTypes"
  
  const INIT_STATE = {
    notificationCount: 0,
    notificationList: {}
  }
  
  const Notification = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CHANGE_NOTIFICATION_COUNT:
        return {
          ...state,
          notificationCount: action.payload,
        }
      case CHANGE_NOTIFICATION_LIST:
        return {
          ...state,
          notificationList: action.payload,
        }
      case CHANGE_NOTIFICATION_MENU:
        return {
          ...state,
          notificationMenu: action.payload,
        }

      default:
        return state
    }
  }
  
  export default Notification
  