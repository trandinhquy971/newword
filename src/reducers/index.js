import { combineReducers } from "redux"
import words from "./wordReducer"
import isOpenAddForm from "./handleAddForm"
import isOpenConfirmForm from "./handleConfirmForm"
import currentWord from "./currentWord"
import actionToConfirm from "./actionToConfirm"
import filter from "./filter"
import notifications from "./notification"

export const reducers = combineReducers({
	words,
	isOpenAddForm,
	isOpenConfirmForm,
	currentWord,
	actionToConfirm,
	filter,
	notifications
})