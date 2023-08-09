import React from "react"
import { Redirect } from "react-router-dom"

import PublicView from '../views/public/Index'

const publicRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/home.html" /> },
  { path: "/home.html", component: PublicView },
]
export default publicRoutes