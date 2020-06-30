import styled from "styled-components"
import { Button } from "@material-ui/core"

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 3em auto;
    min-height: 80vh;

    @media screen and (max-device-width: 1200px) {
        width: 90%;
        margin: 1em auto;
    }
`

export const CategoriesWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 2em auto;
    flex-wrap: wrap;

    @media screen and (max-device-width: 1200px) {
        margin: 1em auto;
    }
`

export const CategoryButton = styled(Button)`
    width: 15rem;
    height: 10rem;
    margin: 1rem;

    @media screen and (max-device-width: 1200px) {
        width: 10rem;
        height: 5rem;
        margin: 0.5rem;
    }
`