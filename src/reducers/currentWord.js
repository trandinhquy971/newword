import * as types from "../constants/redux"

const initialState = null

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.SET_CURRENT_WORD_TO_HANDLE:
        return payload

    default:
        return state
    }
}
