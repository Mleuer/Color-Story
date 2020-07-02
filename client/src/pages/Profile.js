import React, { useState } from "react";
import { Avatar, makeStyles, Container, Fab } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonRow from "../components/ButtonRow";

function Profile() {

    const [state, setState] = useState({
        User: [],
    });
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    //     API.User.getById()
    //         .then((res) => {

    //             var data = res;




    //             setState({ ...state, });
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    function uploadImage(event) {
        event.preventDefault();
        window.cloudinary.openUploadWidget(
            {
                cloudName: "dmxye0jps",
                uploadPreset: "ftjygjpy",
            },
            (error, result) => {
                if (result.event === "success") {
                    setState({ ...state, imageUrl: result.info.secure_url });
                } else if (result.event === "abort") {
                    setState({ ...state, imageUrl: "" });
                }
            }
        );
    }
    const handleImageLoaded = (event) => {




        setState({ loaded: true });
    };



    const useStyles = makeStyles({
        avatar: {
            height: "400px",
            width: "400px"
        }
    })

    const classes = useStyles();
    return (

        <>


            <Container />
            <ButtonRow />
            <Avatar onClick={uploadImage} alt={state.name} src={state.imageUrl} className={classes.avatar} />
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <EditIcon onClick={handleClickOpen} />
            </Fab>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Your color Story
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="Name"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Website Link"
                        type="Website Link"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        type="Description"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Done
          </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}

export default Profile;