import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setLoading } from "../../actions/loading"

import { CircularProgress } from "@material-ui/core";
import { Backdrop } from "@material-ui/core";

function Loading() {
    const dispatch = useDispatch()
    const { openLoading } = useSelector(state => state.loading)

    const handleClose = () => { 
        dispatch(setLoading(false))
    };

    return (<Backdrop open={openLoading} onClick={handleClose} style={{ zIndex: 10}}>
            <CircularProgress />
        </Backdrop>)
}

export default Loading