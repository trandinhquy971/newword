import * as types from "../constants/redux"

const initialState = false

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.OPEN_ADD_FORM:
            return true

        case types.CLOSE_ADD_FORM:
            return false

        default:
            return state
    }
}
