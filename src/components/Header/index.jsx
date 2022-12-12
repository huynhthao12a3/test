import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function Header() {
     const [open, setOpen] = useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };
     return (
          <>
               <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                         <Toolbar>
                              <IconButton
                                   size="large"
                                   edge="start"
                                   color="inherit"
                                   aria-label="menu"
                                   sx={{ mr: 2 }}
                              >
                                   <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                   News
                              </Typography>
                              <Link to="/todos" >
                                   <Button color="inherit">Todos</Button>
                              </Link>
                              <Link to="/album" >
                                   <Button color="inherit">Albums</Button>
                              </Link>

                              <Button color="inherit" onClick={handleClickOpen}>Register</Button>
                         </Toolbar>
                    </AppBar>
               </Box>
               <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                         <DialogContentText>
                              To subscribe to this website, please enter your email address here. We
                              will send updates occasionally.
                         </DialogContentText>
                         <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Email Address"
                              type="email"
                              fullWidth
                              variant="standard"
                         />
                    </DialogContent>
                    <DialogActions>
                         <Button onClick={handleClose}>Cancel</Button>
                         <Button onClick={handleClose}>Subscribe</Button>
                    </DialogActions>
               </Dialog>
          </>
     );
}
