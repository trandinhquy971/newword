import React, { Component } from 'react'
import DefaultNavBar from './../components/NavBar/index';
import { connect } from 'react-redux';
import * as actions from '../actions'

class NavBarContainer extends Component {
    render() {
        return (
            <DefaultNavBar onChangeFilter={this.props.onChangeFilter}></DefaultNavBar>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeFilter: (keyword) => dispatch(actions.changeFilter(keyword))
    }
}

export default connect(null, mapDispatchToProps)(NavBarContainer)
