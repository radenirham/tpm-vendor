import React from "react"
import { Redirect } from "react-router-dom"

import UserView from '../views/user/Index'

const userRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/user.html" /> },
  { path: "/user.html", component: UserView, blank: true },
]

export default userRoutes