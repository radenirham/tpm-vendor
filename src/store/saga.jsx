import { all, fork } from "redux-saga/effects"

//public
import LayoutSaga from "./layout/saga"
import NotificationSaga from "./notification/saga"

export default function* rootSaga() {
  yield all([
    fork(LayoutSaga),
    NotificationSaga,
  ])
}
