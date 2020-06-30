import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { getJokeByCategory } from "../../actions/jokes"

function JokeByCategoryPage(){
    const dispatch = useDispatch()
    const { selectedCategory, joke } = useSelector(state => state.jokes)
    
    let category
    if(Object.keys(selectedCategory).length  === 0){
        category = window.location.pathname.substr(10, 15)
    } else {
        category = selectedCategory
    }

    useEffect(() => {
        dispatch(getJokeByCategory(category))
    }, [dispatch, selectedCategory, category])

    console.log(joke)

    if(Object.keys(joke).length  === 0){
        console.log("não")
    }
    

    return (
        <>
        JokeByCategoryPage
        </>
    )
}

export default JokeByCategoryPage