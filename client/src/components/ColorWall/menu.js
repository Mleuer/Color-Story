import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import API from "../../utils/API";

const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenEdit(false);
    props.resetPost();
  };

  const handleDelete = (id) => {
    // console.log("delete", id);
    API.Post.delete(id).then(function (data) {
      // console.log("data", data);
      props.resetPost();
    });
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    title: props.tile.title,
    // postLink: props.tile.postLink,
    description: props.tile.description,
  });

  const [postLink, setPostLink] = useState(props.tile.postLink);

  const [price, setPrice] = useState(props.tile.price);

  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpen = () => {
    setOpenEdit(true);
  };

  const handleSave = (id, e) => {
    // e.preventDefault();
    // console.log(id);
    setOpenEdit(false);
    API.Post.update(id, { ...state, postLink: (postLink.includes("://") ? (postLink) : (`http://${postLink}`)), price: price });
    setAnchorEl(null);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(e.target.name)

    if (e.target.name === "postLink") {
      setPostLink(e.target.value);
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
      // props.resetPost();
      // console.log(state)
    }
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
        <MenuItem
          key={options.Edit}
          onClick={() => {
            handleClickOpen(props.id);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          key={options.Delete}
          onClick={() => {
            handleDelete(props.id);
          }}
        >
          Delete
        </MenuItem>
      </Menu>

      <Dialog
        open={openEdit}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Post</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill in inputs</DialogContentText>
          <TextField
            onChange={handleEdit}
            name="title"
            value={state.title}
            autoFocus
            margin="normal"
            id="title"
            label="Title"
            type="text"
            fullWidth
          />
          <TextField
            fullWidth
            onChange={handleEdit}
            multiline
            variant="outlined"
            rows={3}
            name="description"
            value={state.description}
            id="description-input"
            label="Description"
            helperText="*optional; 1000 character limit"
          />
          <TextField
            onChange={handleEdit}
            name="postLink"
            value={postLink}
            autoFocus
            margin="dense"
            id="postLink"
            label="Link"
            type="text"
            fullWidth
          />
          <CurrencyTextField
            label="Amount"
            variant="standard"
            name="price"
            value={price}
            currencySymbol="$"
            outputFormat="number"
            onChange={(event, value) => setPrice(value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(event) => {
              handleClose(props.id);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={(event) => {
              handleSave(props.id);
            }}
            color="primary"
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
