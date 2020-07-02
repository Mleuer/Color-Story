import React, { Component } from "react";
import "./style.css"
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const element = <FontAwesomeIcon icon={faCoffee} />

function Burger() {
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true">
                <IconButton>
                    <FontAwesomeIcon icon="coffee" />
                </IconButton>
            </Button>
            <Menu>

            </Menu>
        </div>
    )
}

export default Burger;