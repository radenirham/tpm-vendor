import React from "react"
import { Redirect } from "react-router-dom"

import HomeIndex from '../views/public/Home/Index'
import AuthLogin from '../views/public/Auth/Views/Login'
import AuthRegister from '../views/public/Auth/Views/Register'
import AuthForgot from '../views/public/Auth/Views/Forgot'

const publicRoutes = [
  { path: "/", exact: true, component: () => <Redirect to="/home.html" /> },
  { path: "/home.html", component: HomeIndex },
  { path: "/auth/login.html", component: AuthLogin, blank: true },
  { path: "/auth/register.html", component: AuthRegister },
  { path: "/auth/forgot.html", component: AuthForgot, blank: true },
]
export default publicRoutes