import React from 'react'
import ReactDOM from 'react-dom'

// import App from './app'
import logMessage from './utils/logger'

// Router
import Router from './router'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'


// Log message to console
logMessage('Welcome to React Demo App!')

ReactDOM.render(
    <Router />, 
    document.getElementById('app')
)

// Needed for Hot Module Replacement
if (typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef
}
