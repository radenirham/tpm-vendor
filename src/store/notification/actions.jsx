import {
  CHANGE_NOTIFICATION_COUNT,
  CHANGE_NOTIFICATION_LIST,
  CHANGE_NOTIFICATION_MENU
} from "./actionTypes"

export const changeNotificationCount = count => ({
  type: CHANGE_NOTIFICATION_COUNT,
  payload: count,
})

export const changeNotificationList = list => ({
  type: CHANGE_NOTIFICATION_LIST,
  payload: list,
})

export const changeNotificationMenu = menu => ({
  type: CHANGE_NOTIFICATION_MENU,
  payload: menu,
})