import React from "react";
import { Container, Paper, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";



function Welcome() {
    
    return (
        <div>
            <Typography variant="h1">
                Welcome            
            </Typography>
            <p>
                <Typography variant="subtitle1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
            </p>
        </div>
    )
};

export default Welcome;