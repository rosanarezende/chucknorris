import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { push } from "connected-react-router"

import { getCategories, setSelectedCategory } from "../../actions/jokes"

import { Typography } from "@material-ui/core"
import { PageWrapper, CategoriesWrapper, CategoryButton } from "./styles"

function HomePage() {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.jokes)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const onClickCategory = async (category) => {
        await dispatch(setSelectedCategory(category))
        dispatch(push(`/chucknorris/category/${category}`))
    }

    return (
        <PageWrapper>
            <Typography variant="h5" align="center">
                Choose a category to retrieve a random Chuck Norris joke!
            </Typography>
            <CategoriesWrapper>
                {categories?.map(category =>
                    <CategoryButton key={category}
                        onClick={() => onClickCategory(category)}
                        variant="outlined"
                        color="secondary"
                    >
                        {category}
                    </CategoryButton>)}
            </CategoriesWrapper>
        </PageWrapper>
    )
}

export default HomePage