import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FloatButton } from './../components/Button';

class FloatButtonContainer extends Component {
    render() {
        return (
            <FloatButton onClick={() => this.props.onOpenAddForm()}><i className="fa fa-plus"/></FloatButton>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenAddForm: () => dispatch(actions.handleWhenOpeningAddFormToAdd()),
        onCloseAddForm: () => dispatch(actions.closeAddForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FloatButtonContainer)
