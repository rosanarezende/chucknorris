import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { push } from "connected-react-router"

import { getCategories, setSelectedCategory } from "../../actions/jokes"

function HomePage(){
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.jokes)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const onClickCategory = async (category) => {
        await dispatch(setSelectedCategory(category))
        dispatch(push(`/category/${category}`))
    }

    return (
        <>
        HomePage
        {categories?.map(category => 
            <div key={category} onClick={() => onClickCategory(category)}>
                {category}
            </div>)}
        </>
    )
}

export default HomePage