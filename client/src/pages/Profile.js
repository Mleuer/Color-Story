import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, makeStyles, Container, Fab, Grid, Typography, CardContent } from "@material-ui/core";
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

    const preventDefault = (event) => {
        event.preventDefault();
    }



    const useStyles = makeStyles({
        avatar: {
            height: "400px",
            width: "400px",
            marginTop: "20px"
        }

    })

    const classes = useStyles();
    return (

        <>
            <Grid container direction="row" alignItems="center" justify="center">
                <Grid xs={6}>
                    <Avatar onClick={uploadImage} alt={state.name} src={state.imageUrl} className={classes.avatar} />
                </Grid>
                <Grid xs={6}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            Name
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Color Story
                        </Typography>
                        <Typography>
                            <Link href="#" onClick={preventDefault}>
                                Website
  </Link>
                        </Typography>
                        <Typography>
                            <Link href="#" onClick={preventDefault}>
                                Blog
  </Link>
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>

            <Fab color="primary" aria-label="add">
                <AddIcon component={Link} to="/dashboard" />
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
                        id="link"
                        label="Website Link"
                        type="Website Link"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
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

            <ButtonRow />
        </>
    )
}

export default Profile;