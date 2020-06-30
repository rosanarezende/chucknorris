const initialState = {
    categories: [],
    selectedCategory: "",
    joke: {}
}

const jokes = (state = initialState, action) => {
    switch (action.type) {

        case "SET_CATEGORIES":
            return {
                ...state,
                categories: action.payload.categories
            }

        case "SET_SELECTED_CATEGORY":
            return {
                ...state,
                selectedCategory: action.payload.categoryName
            }

        case "SET_JOKE_BY_CATEGORY":
            return {
                ...state,
                joke: action.payload.joke
            }

        default:
            return state;
    }
}

export default jokes