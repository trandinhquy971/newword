import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

class Notification extends Component {

    renderNotificationItem = () => {
        return this.props.notifications.map((notification, index) => {
            return (
                <div key={index} className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
                    <div className="toast-header">
                        <strong className="mr-auto">{notification}</strong>
                        <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.renderNotificationItem()}
            </div>
        )
    }
}

const rotate = keyframes`
    0% {
        visibility: visible;
        opacity: 1;
    }
    80% {
        visibility: visible;
        opacity: 1;
    }
    100% {
        visibility: hidden;
        opacity: 0
    }
`;

const DefaultNotification = styled(Notification)`
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 250px;

    .toast {
        opacity: 1;
        animation: ${rotate} 5s forwards;
    }
`

export default DefaultNotification
