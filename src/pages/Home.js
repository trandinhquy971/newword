import React, { Component, Fragment } from 'react'
import CardListContainer from '../containers/CardListContainer'
import AddFormContainer from './../containers/AddFormContainer';
import FloatButtonContainer from './../containers/FloatButtonContainer';
import ConfirmFormContainer from '../containers/ConfirmFormContainer';
import NotificationContainer from '../containers/NotificationContainer';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpenAddForm: false
		}
	}

	render() {
		return (
			<Fragment>
				<ConfirmFormContainer></ConfirmFormContainer>
				<AddFormContainer></AddFormContainer>
				<CardListContainer></CardListContainer>
				<FloatButtonContainer></FloatButtonContainer>
				<NotificationContainer></NotificationContainer>
			</Fragment>
		)
	}
}
