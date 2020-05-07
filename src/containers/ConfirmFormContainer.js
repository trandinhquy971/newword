import React, { Component } from 'react'
import { connect } from 'react-redux';
import ConfirmForm from '../components/ConfirmForm'
import * as actions from '../actions'

class ConfirmFormContainer extends Component {

    componentWillUpdate(nextProps, nextState) {
        if(nextProps.isOpenConfirmForm !== this.props.isOpenConfirmForm) {
            return true
        }
        return false        
    }

    onOk = () => {
        this.props.onOk(actions.deleteWordRequest(this.props.currentWord))
        this.props.onClose()
    }
    
    render() {
        return (
            (this.props.isOpenConfirmForm?<ConfirmForm onClose={this.props.onClose} onOk={this.onOk}></ConfirmForm>:null)
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isOpenConfirmForm: state.isOpenConfirmForm,
        currentWord: state.currentWord
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClose: () => dispatch(actions.handleWhenClosingConfirmForm()),
        onOk: (action) => dispatch(action)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmFormContainer)
