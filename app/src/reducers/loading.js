const initialState = {
    openLoading: false,
}

const loading = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                openLoading: action.payload.option
            }

        default:
            return state;
    }
}

export default loading