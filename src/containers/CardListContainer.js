import React, { Component } from 'react'
import DefaultCardList from '../components/CardList'
import { connect } from 'react-redux'
import DefaultCardHolder from '../components/CardHolder'
import DefaultCardItem from '../components/CardItem'
import * as actions from '../actions'

class CardListContainer extends Component {

	componentDidMount() {
		this.props.onFetch()
	}

	isIncluded = (array, date) => {
		if(array[date] !== undefined) return true
		return false
	}

	onDelete = (wordInfo) => {
		this.props.onDelete(wordInfo)
	}

	onEdit = (wordInfo) => {
		this.props.onEdit(wordInfo)
	}

	renderList = () => {
		var { words, filter } = this.props
		var filteredWords = words.filter((word) => word.word.startsWith(filter))

		var catalogedWords = {}
		filteredWords.forEach((word) => {
			if(!this.isIncluded(catalogedWords, word.date)){
				catalogedWords[word.date] = [word]
			} else {
				catalogedWords[word.date].push(word)
			}
		})
		var keys = Object.keys(catalogedWords)
		keys.sort((a, b) => {
			let da = new Date(a)
			let db = new Date(b)
			return da < db ? 1 : -1
		})		
		
		return (
			keys.map((key, index) => {
				return(
					<DefaultCardHolder title={key} key={index}>
						{
							catalogedWords[key].map((word, index) => {
								return <DefaultCardItem key={index} word={word} onDelete={this.onDelete} onEdit={this.onEdit}></DefaultCardItem>
							})
						}
					</DefaultCardHolder>
				)
			})
		)

	}

	render() {
		return (
			<DefaultCardList>
				{this.renderList()}
			</DefaultCardList>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		words: state.words,
		filter: state.filter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onDelete: (wordInfo) => dispatch(actions.handleWhenOpeningConfirmForm(wordInfo, actions.deleteWordRequest(wordInfo))),
		onFetch: () => dispatch(actions.fetchWordsRequest()),
		onEdit: (wordInfo) => dispatch(actions.handleWhenOpeningAddFormToEdit(wordInfo)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer)

