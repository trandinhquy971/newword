import * as types from "../constants/redux"

const initialState = null

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.ADD_ACTION_TO_CONFIRM_FORM:
        return payload

    default:
        return state
    }
}
