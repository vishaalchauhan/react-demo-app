import React from 'react'
import ReactDOM from 'react-dom'

import Message from './js/message'
import logMessage from './js/logger'
import './css/style.css'


// Log message to console
logMessage('Welcome to Rexpack!')

ReactDOM.render(
    <Message />, 
    document.getElementById('react-container')
)

// Needed for Hot Module Replacement
if (typeof(module.hot) !== 'undefined') {
    module.hot.accept() // eslint-disable-line no-undef
}
