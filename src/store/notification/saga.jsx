import { all, call, fork, takeEvery, put } from "redux-saga/effects"

import {
  CHANGE_NOTIFICATION_COUNT,
  CHANGE_NOTIFICATION_LIST,
  CHANGE_NOTIFICATION_MENU
} from "./actionTypes"

import {
  changeNotificationCount as changeNotificationCountAction,
  changeNotificationList as changeNotificationListAction,
  changeNotificationMenu as changeNotificationMenuAction,
} from "./actions"

function* changeNotificationCount({ payload: count }) {
  try {
    yield put(changeNotificationCountAction(count))
  } catch (error) {}
}

function* changeNotificationList({ payload: list }) {
  try {
    yield put(changeNotificationListAction(list))
  } catch (error) {}
}

function* changeNotificationMenu({ payload: menu }) {
  try {
    yield put(changeNotificationMenuAction(menu))
  } catch (error) {}
}

export function* watchNotificationCount() {
  yield takeEvery(CHANGE_NOTIFICATION_COUNT, changeNotificationCount)
}

export function* watchNotificationList() {
  yield takeEvery(CHANGE_NOTIFICATION_LIST, changeNotificationList)
}

export function* watchNotificationMenu() {
  yield takeEvery(CHANGE_NOTIFICATION_MENU, changeNotificationMenu)
}

function* NotificationSaga() {
  yield all([
    fork(watchNotificationCount),
    fork(watchNotificationList),
    fork(watchNotificationMenu)
  ])
}

export default NotificationSaga
