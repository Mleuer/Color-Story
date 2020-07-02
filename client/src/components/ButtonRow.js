import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles({
    navRoot: {
        minWidth: 275,
        textAlign: "center",
        backgroundColor: "lightgray",
        border: "2px solid black",
        paddingTop: "8px",
    }
});

function ButtonRow() {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.navRoot} variant="outlined">
                <CardContent>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "red" }} />
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "orange" }} />
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "yellow" }} />
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "green" }} />
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "blue" }} />
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "purple" }} />
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "black" }} />
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "white" }} />
                    </IconButton>
                    <IconButton>
                        <FiberManualRecordIcon style={{ color: "white" }} />
                    </IconButton>
                </CardContent>
            </Card>
        </>
    );
}

export default ButtonRow;