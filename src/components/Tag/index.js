import React, { Component } from 'react'
import styled from 'styled-components'

class Tag extends Component {
	render() {
		return (
			<div className={`${this.props.className}`}>
				<span>{this.props.title}</span>
			</div>
		)
	}
}

const StyledTag =  styled(Tag)`
	border-radius: 16px;
	background-color: #c5299b;
	padding: 0px 5px;
	font-weight: bold;
	color: white;
	text-align: center;
	margin-top: 10px;
	font-size: 16px;
`

export default StyledTag
