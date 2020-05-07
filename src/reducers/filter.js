import * as types from "../constants/redux"

const initialState = ""

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.CHANGE_FILTER:
            return payload

        default:
            return state
    }
}
