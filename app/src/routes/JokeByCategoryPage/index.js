import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { getJokeByCategory, setJokeByCategory } from "../../actions/jokes"
import { PageWrapper, ContentWrapper, JokeWrapper, Image, NewJokeButton } from "./styles"
import { Typography } from "@material-ui/core"

function JokeByCategoryPage() {
    const dispatch = useDispatch()
    const { selectedCategory, joke } = useSelector(state => state.jokes)

    let category
    if (Object.keys(selectedCategory).length === 0) {
        category = window.location.pathname.substr(10, 15)
    } else {
        category = selectedCategory
    }

    useEffect(() => {
        dispatch(getJokeByCategory(category))
        return () => dispatch(setJokeByCategory({}))
    }, [dispatch, selectedCategory, category])

    return (
        <PageWrapper>
            {Object.keys(joke).length !== 0
                &&
                <>
                    <Typography variant="h5" align="center">
                        {category?.toUpperCase()} JOKE
                    </Typography>
                    <ContentWrapper>
                        <JokeWrapper>
                            <Typography variant="overline" align="center">
                                {joke?.value}
                            </Typography>
                            <Image src={joke?.icon_url} alt="icon" />
                        </JokeWrapper>
                        <NewJokeButton variant="contained" color="secondary"
                            onClick={() => dispatch(getJokeByCategory(category))}
                        >
                            NEW {category} JOKE
                        </NewJokeButton>
                        <Typography variant="caption">
                            Details in: <a href={joke?.url}>ChuckNorris.io</a>
                        </Typography>
                    </ContentWrapper>
                </>
                // :
                // <Typography>
                //     ...
                // </Typography>
            }
        </PageWrapper>
    )
}

export default JokeByCategoryPage