const initialState = {
    open: false,
    text: "",
    color: "",
}

const message = (state = initialState, action) => {

    switch (action.type) {
        case "SET_OPEN":
            return {
                ...state,
                open: action.payload.option
            }

        case "SET_MESSAGE":
            return {
                ...state,
                text: action.payload.text,
                color: action.payload.color
            }

        default:
            return state;
    }
}

export default message