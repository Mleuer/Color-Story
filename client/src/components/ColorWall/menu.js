import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import API from "../../utils/API";

const options = ["Delete"];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    console.log("close happening", id);
    API.Post.delete(id).then(function (data) {
      console.log("data", data);
      props.resetPost();
    });
    setAnchorEl(null);
  };
  var style = {
    container: {
      float: "right",
      position: "relative",
      bottom: "66px",
      right: "20px",
      zIndex: "100",
      background: "white",
      borderRadius: "61px",
      marginBottom: "-50px",
    },
  };

  return (
    <>
      <IconButton
        style={style.container}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => {
              handleClose(props.id);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
