import * as types from "../constants/redux"
import requestApi from "../utils/request"
import notifications from "../constants/notification"

export const setMeaningInForm = (meaning) => ({
    type: types.SET_MEANING_IN_FORM,
    payload: meaning
})

export const handleWhenOpeningAddFormToEdit = (wordInfo) => {  
    return dispatch => {
        dispatch(setCurrentWordToHandle(wordInfo))
        dispatch(openAddForm())
    }
}

export const handleWhenOpeningAddFormToAdd = () => {
    return dispatch => {
        dispatch(setCurrentWordToHandle(null))
        dispatch(openAddForm())
    }
}

export const handleWhenClosingAddForm = () => {
    return dispatch => {
        dispatch(closeAddForm())
        dispatch(setCurrentWordToHandle(null))
    }
}

export const openAddForm = () => ({
    type: types.OPEN_ADD_FORM,
    payload: null
})

export const closeAddForm = () => ({
    type: types.CLOSE_ADD_FORM,
    payload: null
})

export const handleWhenOpeningConfirmForm = (wordInfo, action) => {
    return (dispatch) => {
        dispatch(setCurrentWordToHandle(wordInfo))
        dispatch(addActionToConfirmForm(action))
        dispatch(openConfirmForm())
    }
}

export const handleWhenClosingConfirmForm = () => {
    return (dispatch) => {
        dispatch(setCurrentWordToHandle(null))
        dispatch(addActionToConfirmForm(null))
        dispatch(closeConfirmForm())
    }
}

export const setCurrentWordToHandle = (wordInfo) => ({
    type: types.SET_CURRENT_WORD_TO_HANDLE,
    payload: wordInfo
})

export const addActionToConfirmForm = (action) => ({
    type: types.ADD_ACTION_TO_CONFIRM_FORM,
    payload: action
})

export const openConfirmForm = () => ({
    type: types.OPEN_CONFIRM_FORM,
    payload: null
})

export const closeConfirmForm = () => ({
    type: types.CLOSE_CONFIRM_FORM,
    payload: null
})

export const addWordRequest = (wordInfo) => {
    console.log(wordInfo);
    
    return dispatch => {
        let date = new Date()
        wordInfo.date = ("0" + date.getDate()).slice(-2) + "/" + ("0"+(date.getMonth()+1)).slice(-2) + "/" + date.getFullYear();

        requestApi("post", "api/words", wordInfo)
            .then( res => {
                if(res.data.status === 200) {
                    dispatch(addNotification(notifications.add_success))
                    dispatch(addWord(res.data.data))
                } else {
                    dispatch(addNotification(notifications.add_fail))
                }
            })
            .catch((e) => {
                dispatch(addNotification(notifications.add_fail))
            })
    }
}

export const addWord = (word) => ({
    type: types.ADD_WORD,
    payload: word
})

export const deleteWordRequest = (wordInfo) => {
    return dispatch => {
        requestApi("delete", "api/words?id=" + wordInfo.id, null)
            .then( res => {
                if(res.data.status === 200) {
                    dispatch(addNotification(notifications.delete_success))
                    dispatch(deleteWord(wordInfo))
                }
            })
            .catch((e) => {
                dispatch(addNotification(notifications.delete_fail))
            })
    }
}

export const deleteWord = (payload) => ({
    type: types.DELETE_WORD,
    payload
})

export const updateWordRequest = (wordInfo) => {
    return dispatch => {
        requestApi("patch", "api/words", wordInfo)
            .then( res => {              
                if(res.data.status === 200) {
                    dispatch(addNotification(notifications.edit_success))
                    dispatch(updateWord(wordInfo))
                }
            })
            .catch((e) => {
                dispatch(addNotification(notifications.edit_fail))
            })
    }
}

export const updateWord = (payload) => ({
    type: types.UPDATE_WORD,
    payload
})

export const onGetMeaningRequest = (word) => {
    return dispatch => {
        requestApi("get", "api/searchword?word=" + word, null )
            .then( res => {
                if(res.data.status === 200) {
                    dispatch(setCurrentWordToHandle({
                        word: word,
                        types: res.data.data.types,
                        pronunciation: res.data.data.pronunciation,
                        meaning: res.data.data.meaning
                    }))
                }
            })
            .catch((e) => {

            })
    }
}

export const fetchWordsRequest = (payload) => {
    return dispatch => {
        requestApi("get", "api/words", null)
            .then( res => {
                var data = res.data.data

                data.forEach((item) => {
                    item.meaning = item.meaning.split("\n")
                })
                
                dispatch(fetchWords(res.data.data))
            })
    }
}

export const fetchWords = (payload) => ({
    type: types.FETCH_WORD,
    payload
})

export const changeFilter = (payload) => ({
    type: types.CHANGE_FILTER,
    payload
})

export const addNotification = (payload) => ({
    type: types.ADD_NOTIFICATION,
    payload
})

export const clearNotification = () => ({
    type: types.CLEAR_NOTIFICATION,
    payload: null
})




