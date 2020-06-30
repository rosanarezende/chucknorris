import axios from 'axios'
// import { push } from 'connected-react-router'

import { 
    // routes, 
    baseUrl } from "../utils/constants"
import { setLoading } from "./loading"
import { setMessage, setOpen } from "./message"

export const setCategories = (categories) => ({
    type: "SET_CATEGORIES",
    payload: {
        categories
    }
})

export const getCategories = () => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await axios.get(`${baseUrl}/categories`)
        dispatch(setLoading(false))
        dispatch(setCategories(response.data))
    }
    catch (err) {
        dispatch(setLoading(false))

        console.error(err.response)
        dispatch(setMessage(err?.response?.data?.message || "Não foi possivel acessar a lista de categorias!", "red"))
        dispatch(setOpen(true))

    }
}

export const setSelectedCategory = (categoryName) => ({
    type: "SET_SELECTED_CATEGORY",
    payload: {
        categoryName
    }
})

export const setJokeByCategory = (joke) => ({
    type: "SET_JOKE_BY_CATEGORY",
    payload: {
        joke
    }
})

export const getJokeByCategory = (categoryName) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await axios.get(`${baseUrl}/random?category=${categoryName}`)
        dispatch(setLoading(false))
        dispatch(setJokeByCategory(response.data))

        // dispatch(setMessage(response?.data?.message, "green"))
        // dispatch(setOpen(true))
    }
    catch (err) {
        dispatch(setLoading(false))

        console.error(err.response)
        dispatch(setMessage(err?.response?.data?.message || "Não foi possivel acessar a lista de categorias!", "red"))
        dispatch(setOpen(true))

    }
}