import * as types from "../constants/redux"

const initialState = false

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.OPEN_CONFIRM_FORM:
            return true

        case types.CLOSE_CONFIRM_FORM:
            return false

        default:
            return state
    }
}
