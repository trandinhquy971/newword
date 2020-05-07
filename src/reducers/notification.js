import * as types from "../constants/redux"

const initialState = ["Hello", "Tao ne"]

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.ADD_NOTIFICATION:
            state.push(payload)
            return [...state]

        case types.CLEAR_NOTIFICATION:
            return []

        default:
            return state
    }
}
