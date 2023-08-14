import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import {
    apiRequest as baseApi,
    authConnect as baseAuthConnect,
    authUserData as baseAuthUserData,
  } from "./services/adapters/base"

import publicRoutes from "./routes/PublicRoutes"
import userRoutes from "./routes/UserRoutes"


import UserLayout from "./components/UserLayout/Index"
import PublicLayout from "./components/PublicLayout/Index"
import * as serviceWorker from "./serviceWorker"

import store from "./store"

import App from "./App"
import Preload from './components/Preload'
import ErrorNetwork from './components/Error/Network'
import ErrorUser from './components/Error/User'
import UploadProgress from './helpers/ui/services/UploadProgress'

const canvas = document.getElementById("root")

const publicPath = publicRoutes.map((route) => { return route.path })


const sessionTimeOut = 7200
await checkSession()
testConnection()

async function checkSession() {
    const remember = localStorage.getItem('remember') ?? '0'
    const serverTime = parseInt(localStorage.getItem('serverTime') ?? '0')
    if(serverTime > 0 && remember === '0') {
        const thisTime = (Math.floor(Date.now() / 1000))
        console.log(serverTime+sessionTimeOut)
        console.log(thisTime)
        if (serverTime+sessionTimeOut < thisTime) {
            sessionStorage.clear()
            localStorage.clear()
        }
    }
}

async function testConnection() {

    ReactDOM.render(<Preload text="Memeriksa koneksi..." />, document.getElementById("root"))

    await new Promise(r => setTimeout(r, 2000));

    await baseApi("get", baseAuthConnect, {}, false)
    .then(async result => {
        if (result.serverTime) {
            localStorage.setItem('localTime', new Date().getTime())
            localStorage.setItem('serverTime', result.serverTime)
        }

        let userLogged = (localStorage.getItem('tokenId') ?? '') !== '' ? true : false
        if(userLogged) {
            getUserdata()
        } else {
            let refLogin = '/';
            userRoutes.map((route) => {
                if(!(Object.keys(publicPath).find(key => publicPath[key] === route.path) != undefined ? true : false) && window.location.pathname === route.path) {
                    refLogin = route.path;
                }
            })
            localStorage.setItem('refLogin', refLogin)

            if(refLogin !== '/') {
                window.location.href = '/auth/login.html'
            } else {
                publicArea()
            }
        }

    })
    .catch(result => {
        ReactDOM.render(<ErrorNetwork />, document.getElementById("root"))
    })
}

async function getUserdata() {
    ReactDOM.render(<Preload text="Mengambil detail login..." />, document.getElementById("root"))
    await baseApi("post", baseAuthUserData, {}, true)
    .then(result => {
        if (result.status) {
            const response = result.response
            localStorage.setItem('userData', JSON.stringify(response.userdata))
            localStorage.setItem('tokenId', response.token);
            userArea();
        } else {
            ReactDOM.render(<ErrorUser />, document.getElementById("root"))
        }
    })
    .catch(result => {
        ReactDOM.render(<ErrorNetwork />, document.getElementById("root"))
    })
}

function userArea() {
    const page = (
        <Provider store={store}>
            <BrowserRouter>
                <App routes={userRoutes} wrapper={UserLayout} />
            </BrowserRouter>
            <UploadProgress />
        </Provider>
    )
    ReactDOM.render(page, canvas)
    serviceWorker.unregister()
}

function publicArea() {
    const page = (
        <Provider store={store}>
            <BrowserRouter>
                <App routes={publicRoutes} wrapper={PublicLayout} />
            </BrowserRouter>
            <UploadProgress />
        </Provider>
    )
    ReactDOM.render(page, canvas)
    serviceWorker.unregister()
}