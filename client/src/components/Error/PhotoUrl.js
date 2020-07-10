import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';

function PhotoUrl(props) {
    const { message, clearMessage } = props

    return (
        <>
        {message !== "" ? 
            <MuiAlert severity="success">{message}<Button onClick={() => clearMessage()}>X</Button></MuiAlert>
        : <></>}
        </>
    );

}

export default PhotoUrl;