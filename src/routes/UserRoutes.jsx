import React from "react"
import { Redirect } from "react-router-dom"

import HomeIndex from '../views/public/Home/Index'
import UserView from '../views/user/Index'

import SamplePage from '../views/user/Sample/RouteView'
import TpmPage from '../views/user/Tpm/RouteView'

const userRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/user.html" /> },
  { path: "/user.html", component: UserView },
  { path: "/home.html", component: HomeIndex },
  { path: "/sample.html", component: SamplePage },
  { path: '/tpm', component: TpmPage }
]

export default userRoutes