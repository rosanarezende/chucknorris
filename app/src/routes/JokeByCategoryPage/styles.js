import styled from "styled-components"
import { Button } from "@material-ui/core"

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 3em auto;

    @media screen and (max-device-width: 1200px) {
        width: 90%;
        margin: 2em auto;
    }
`

export const ContentWrapper = styled.div`
     display: flex;
     flex-direction: column;
`

export const JokeWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 2em auto;
`

export const Image = styled.img`
    height: 8vh;
    width: auto;
    margin-left: 1em;
`

export const NewJokeButton = styled(Button)`
    width: 30%;
    margin: 1em auto 3em; 
    
    @media screen and (max-device-width: 1200px) {
        width: 50%;
    }
`
