import React from 'react'

// Reactstrap Components
import {Button} from 'reactstrap';

const Message = () => {
    return (
        <div className="wrapper">
            <h1>React Demo App</h1>
            <p className="description">A React demo application to configure &amp; run CI/CD pipeline</p>
            <Button color="danger">Danger!</Button>
        </div>
    )
}

export default Message
