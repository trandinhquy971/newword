import React, { Component } from 'react'
import styled from 'styled-components'

class CardList extends Component {
	render() {
		return (
			<div className="container mt-1">
				{this.props.children}
			</div>
		)
	}
}

const DefaultCardList = styled(CardList)`

`

export default DefaultCardList


