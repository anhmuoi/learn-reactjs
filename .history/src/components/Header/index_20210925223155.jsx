import { Badge, Box, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  AccountCircle, Close, ShoppingCart
} from "@material-ui/icons";
import CodeIcon from "@material-ui/icons/Code";
import Login from "features/Auth/components/Login/index.jsx";
import Register from "features/Auth/components/Register/index.jsx";
import { logout } from "features/Auth/userSlice.js";
import { cartItemCountSelector } from "features/Cart/selectors.js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: "1",
  },
  menu: {
    top: theme.spacing(5),
    "margin-top": theme.spacing(6),
  },
}));

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const classes = useStyles();

  const LoggedIn = useSelector((state) => state.user);

  const cartItemCount = useSelector(cartItemCountSelector);

  const history = useHistory();

  const isLoggedIn = LoggedIn.current.id;

  const [mode, setMode] = useState(MODE.LOGIN);

  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogOut  = () => {
    handleCloseMenu();
    const action = logout();
    dispatch(action);
  }

  const handleCartClick  = () => {
    history.push('/cart')
  }



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              EZ SHOP
            </Link>
          </Typography>
          <NavLink
            className={classes.link}
            to="/todos"
            activeClassName="active-menu"
          >
            <Button color="inherit">Product</Button>
          </NavLink>
          <NavLink
            className={classes.link}
            to="/todos"
            activeClassName="active-menu"
          >
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink
            className={classes.link}
            to="/album"
            activeClassName="active-menu"
          >
            <Button color="inherit">Album</Button>
          </NavLink>
          {!!isLoggedIn && (
            <IconButton aria-haspopup="true" onClick={handleClickMenu}>
              <AccountCircle
                className={classes.link}
                color="inherit"
              ></AccountCircle>
            </IconButton>
          )}
          {!!!isLoggedIn && (
            <Button onClick={handleClickOpen} color="inherit">
              Login
            </Button>
          )}
          <IconButton onClick={handleCartClick} aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={cartItemCount} color="secondary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>

      <Dialog
        disableEscapeKeyDown
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close></Close>
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Dont have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
