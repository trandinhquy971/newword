import * as types from "../constants/redux"

const initialState = []

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case types.FETCH_WORD: 
			state = payload
			state.sort((a, b) => {
				if (a.word > b.word) return 1
				else if (a.word === b.word) return 0
				else return -1
			})
			return [...state]

		case types.ADD_WORD: 
			var arrMeaning = payload.meaning.split("\n")
			payload.meaning = arrMeaning
			state.push(payload)
			state.sort((a, b) => {
				if (a.word > b.word) return 1
				else if (a.word === b.word) return 0
				else return -1
			})
			return [...state]
		
		case types.DELETE_WORD: 
			let index = state.findIndex((word) => {
				if(word.id === payload.id) return true
				else return false
			})
			state.splice(index, 1)
			return [...state]
		
		case types.UPDATE_WORD:
			let i = state.findIndex((word) => {
				if(word.id === payload.id) return true
				else return false
			})
			var date = state[i].date
			var newword = {...state[i], ...payload}
			var arr = newword.meaning.split("\n")
			newword.meaning = arr
			newword.date = date
			state.splice(i, 1, newword)
			state.sort((a, b) => {
				if (a.word > b.word) return 1
				else if (a.word === b.word) return 0
				else return -1
			})
			return [...state]

		default:
			return state
	}
}
