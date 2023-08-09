import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import publicRoutes from "./routes/PublicRoutes"
import userRoutes from "./routes/UserRoutes"


import UserLayout from "./components/UserLayout/Index"
import PublicLayout from "./components/PublicLayout/Index"
import * as serviceWorker from "./serviceWorker"

import store from "./store"

import App from "./App"
import Preload from './components/Preload'

const canvas = document.getElementById("root")

ReactDOM.render(<Preload text="Memeriksa koneksi..." />, canvas)
//userArea()


function userArea() {
    const page = (
        <Provider store={store}>
            <BrowserRouter>
                <App routes={userRoutes} wrapper={UserLayout} />
            </BrowserRouter>
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
        </Provider>
    )
    ReactDOM.render(page, canvas)
    serviceWorker.unregister()
}