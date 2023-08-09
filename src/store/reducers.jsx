import { combineReducers } from "redux"

import Layout from "./layout/reducer"
import Notification from "./notification/reducer"

const rootReducer = combineReducers({
  Layout,
  Notification
})

export default rootReducer
