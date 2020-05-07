import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
	constructor(props) {
		super(props);
		this.wrapperRef = React.createRef()
	}
	
	
	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside)
	}

	
	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside)
	}

	handleClickOutside = (event) => {
		let {target} = event		
		if (!this.wrapperRef.current.contains(target)) {
			if(this.props.onOutsideClick)
				this.props.onOutsideClick()
		}
	}	

	render() {
		return (
			<button className={this.props.className + " "} type={this.props.type} onClick={this.props.onClick} ref={this.wrapperRef}>
				{this.props.children}
			</button>
		)
	}
}

export const StyledButton = styled(Button)`
	color: #fff !important;
	border: 0px !important;
	border-color: #c5299b !important;
	background-color: #c5299b !important;
	transition: all 0.4s !important;

	:hover {
		background: #c5299b radial-gradient(circle, transparent 1%, #c059a4 1%) center/15000% !important;
	}

	:active {
		background-color: #c5299b !important;
		background-size: 100% !important;
		transition: all 0s !important;
	}

	:active:focus {
		box-shadow: 0 0 0 0 black !important;
	}

	:focus {
		box-shadow: 0 0 0 0 black !important;
		outline: 0;
	}
`

export const CardButton = styled(StyledButton)`
	width: 35px;
	height: 35px;
	margin: 7.5px;
	background: white !important;
	border: 0px !important;
	border-radius: 50% !important;
	color: #a5a5a5 !important;
	position: absolute;
	right: 0px;
	top: 0px;

	:hover {
		color: #fff !important;
	}
`

export const SmallCardButton = styled(StyledButton)`
	width: 30px;
	height: 30px;
	margin: 0 3px;
	border: 0px !important;
	border-radius: 50% !important;
	color: #fff !important;
	right: 0px;
	top: 0px;
`

export const PillButton = styled(StyledButton)`
	height: 30px;
	border-radius: 15px;
	font-weight: bold;
`

export const FloatButton = styled(StyledButton)`
	width: 40px;
	height: 40px;
	position: fixed;
	border-radius: 50% !important;
	bottom: 20px;
	right: 20px;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	color: white;
`

export const ChangeBackgroundButton = styled(StyledButton)`
	width: 40px;
	height: 40px;
	position: fixed;
	border-radius: 50% !important;
	bottom: 80px;
	right: 20px;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	color: white;
`