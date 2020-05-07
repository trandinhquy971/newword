import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import StyledTag from '../Tag'

class CardHolder extends Component {
	render() {
		return (
			<Fragment>
				<div className="row">
					<StyledTag title={this.props.title}></StyledTag>
				</div>
				<div className="row">
					{this.props.children}
				</div>
			</Fragment>
		)
	}
}

const DefaultCardHolder = styled(CardHolder)`

`
export default DefaultCardHolder
