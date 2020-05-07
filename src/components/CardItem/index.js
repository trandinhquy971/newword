import React, { Component } from 'react'
import styled from 'styled-components'
import {CardButton, SmallCardButton} from '../Button'

class CardItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	onClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	onOutsideClick = () => {
		this.setState({
			isOpen: false
		})
	}

	onDelete = () => {
		this.props.onDelete(this.props.word)
	}

	onEdit = () => {
		this.props.onEdit(this.props.word)
	}
	
	render() {
		var {word} = this.props
		
		return (
			<div className={`col-xs-12 col-sm-12 col-md-4 col-lg-3 ${this.props.className}`}>
				<div className="card">
					<CardButton onClick={this.onClick}
						onOutsideClick={this.onOutsideClick}>
						<i className="fa fa-ellipsis-v"></i>
					</CardButton>
					<div className={`card-btn-container ${this.state.isOpen?'container-active':''}`}>
						<SmallCardButton onClick={this.onEdit}><i className="fa fa-pencil"></i></SmallCardButton>
						<SmallCardButton onClick={this.onDelete}><i className="fa fa-times"></i></SmallCardButton>
					</div>
					<img className="card-img-top" src="holder.js/100x180/" alt=""/>
					<div className="card-body">
						<h4 className="card-title">{word.word}</h4>
						<small>{word.pronunciation}</small>
						<p className="card-text">{word.meaning.map((line, index) => (
							<React.Fragment key={index}>
								{index!== 0?<br />:null}
								{`• ${line}`}
							</React.Fragment>
						))}</p>
					</div>
				</div>
			</div>
		)
	}
}

const DefaultCardItem = styled(CardItem)`
	padding: 5px !important ;

	.card {
		border-radius: 10px !important;
		transition: all 0.2s !important;
		border: 0px !important;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2) !important;
	}

	.card:hover {
		transform: translateY(-5px);
		box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2) !important;
	}

	.card-btn-container {
		padding: 5px;
		background-color: #f0f0f0;
		position: absolute;
		border-radius: 35px;
		display: flex;
		flex-direction: row;
		top: 5px;
		right: 45px;
		visibility: hidden;
		opacity: 0;
		transition: all 0.2s;
	}

	.container-active {
		visibility: visible !important;
		opacity: 100 !important;
		width: fit-content;
	}

	.card-btn-container .btn {
		width: 30px;
		height: 30px;
		border-radius: 50% !important;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 3px
	}

	.card-btn-container .btn:first-child {
		margin-left: 0px;
	}

	.card-btn-container .btn:last-child {
		margin-right: 0px;
	}


	.card-title {
		color: black;
		margin-bottom: 0px;
	}

	.card-body {
		padding: 10px !important;
	}

	.card-text {
		background-color: #F0F2F5 !important;
		padding: 10px;
		border-radius: 5px;
	}

	.marker {
		border-radius: 16px;
		background-color: #c5299b;
		padding: 0px 5px;
		font-weight: bold;
		color: white;
		text-align: center;
		margin-top: 10px;
		font-size: 16px;
	}
`
export default DefaultCardItem
