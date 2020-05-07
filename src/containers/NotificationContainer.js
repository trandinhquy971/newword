import React, { Component } from 'react'
import DefaultNotification from '../components/Notification'
import { connect } from 'react-redux';
import * as actions from '../actions'

class NotificationContainer extends Component {
    componentDidMount() {
        this.props.onClearNotification()
    }
    
    render() {
        return (
            <DefaultNotification notifications={this.props.notifications}></DefaultNotification>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        notifications: state.notifications
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClearNotification: () => dispatch(actions.clearNotification())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)
