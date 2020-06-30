import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import message from "./message"
import loading from "./loading"
import jokes from "./jokes"

export const generateReducers = history =>
    combineReducers({
        router: connectRouter(history),
        
        message,
        loading,
        jokes
})