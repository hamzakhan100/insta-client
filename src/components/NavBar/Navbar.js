import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Material-UI Components

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

// Material-UI Icons
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import AddAPhotoOutlinedIcon from "@material-ui/icons/AddAPhotoOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import AllInboxOutlinedIcon from "@material-ui/icons/AllInboxOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontFamily: "Grand Hotel, cursive",
    color: "rgba(0, 0, 0, 0.54)",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(0, 0, 0, 0.075)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.03)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    margin: "0px auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(0, 0, 0, 0.54)",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
    },
    color: "#000000",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid rgba(0, 0, 0, 0.015)",
    boxShadow: theme.shadows[4],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
    "&:focus": {
      border: "1px solid rgba(0, 0, 0, 0.015)",
    },
  },
  links: {
    textDecoration: "none",
  },
}));

const Navbar = () => {
  const history = useHistory();

  // Material-Ui
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    localStorage.clear();

    history.push("/");
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/explore">
        <IconButton>
          <ExploreOutlinedIcon
            style={{
              color: "rgba(0, 0, 0, 0.54)",
            }}
          />
        </IconButton>
        <p>Explore</p>
      </MenuItem>
      <MenuItem component={Link} to="/createpost">
        <IconButton>
          <AddAPhotoOutlinedIcon
            style={{
              color: "rgba(0, 0, 0, 0.54)",
            }}
          />
        </IconButton>
        <p>Add Post</p>
      </MenuItem>
      <MenuItem component={Link} to="#">
        <IconButton>
          <Badge
            badgeContent={4}
            color="secondary"
            style={{
              color: "rgba(0, 0, 0, 0.54)",
            }}
          >
            <AllInboxOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem component={Link} to="#">
        <IconButton>
          <Badge badgeContent={6} color="secondary">
            <NotificationsActiveOutlinedIcon
              style={{
                color: "rgba(0, 0, 0, 0.54)",
              }}
            />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem component={Link} to="/profile">
        <IconButton>
          <AccountCircleOutlinedIcon
            style={{
              color: "rgba(0, 0, 0, 0.54)",
            }}
          />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleLogOut}>
        <IconButton>
          <ExitToAppOutlinedIcon
            style={{
              color: "rgba(0, 0, 0, 0.54)",
            }}
          />
        </IconButton>
        <p>LogOut</p>
      </MenuItem>
    </Menu>
  );

  return (
    <nav>
      <div className={classes.grow}>
        <AppBar position="static" style={{ backgroundColor: "#ffffff" }}>
          <Toolbar>
            <Link>
              <Typography className={classes.title} variant="h4" noWrap>
                Instagram
              </Typography>
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <BottomNavigation>
                <BottomNavigationAction
                  label="Home"
                  value="home"
                  component={Link}
                  to="/Home"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  icon={
                    <HomeOutlinedIcon
                      style={{
                        color: "rgba(0, 0, 0, 0.54)",
                      }}
                    />
                  }
                />

                <BottomNavigationAction
                  label="Add Post"
                  value="add post"
                  component={Link}
                  to="/createpost"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  icon={
                    <AddAPhotoOutlinedIcon
                      style={{
                        color: "rgba(0, 0, 0, 0.54)",
                      }}
                    />
                  }
                />
                <BottomNavigationAction
                  label="Messages"
                  value="messages"
                  component={Link}
                  to="/Home"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  icon={
                    <Badge
                      badgeContent={4}
                      color="secondary"
                      style={{
                        color: "rgba(0, 0, 0, 0.54)",
                      }}
                    >
                      <AllInboxOutlinedIcon />
                    </Badge>
                  }
                />
                <BottomNavigationAction
                  label="Notifications"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  value="notification"
                  icon={
                    <Badge badgeContent={6} color="secondary">
                      <NotificationsActiveOutlinedIcon
                        style={{
                          color: "rgba(0, 0, 0, 0.54)",
                        }}
                      />
                    </Badge>
                  }
                />
                <BottomNavigationAction
                  label="Profile"
                  value="profile"
                  component={Link}
                  to="/Home"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  icon={
                    <AccountCircleOutlinedIcon
                      style={{
                        color: "rgba(0, 0, 0, 0.54)",
                      }}
                    />
                  }
                />
                <BottomNavigationAction
                  label="Logout"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                  value="logout"
                  onClick={handleLogOut}
                  icon={
                    <ExitToAppOutlinedIcon
                      style={{
                        color: "rgba(0, 0, 0, 0.54)",
                      }}
                    />
                  }
                />
              </BottomNavigation>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon style={{ color: "rgba(0, 0, 0, 0.54)" }} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </nav>
  );
};

export default Navbar;
