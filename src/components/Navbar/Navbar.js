import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
 
function Navbar(props) { 
  const { user } = props;
  return (
    <AppBar
      position="static" 
      sx={{  
        background: "linear-gradient(45deg, #0f0fb3 30%, #0059ac 90%)", 
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" className="navbar-logo">
            Forum App
          </Link>
        </Typography>
        {user.name === "Guest"?<Button color="inherit">
          <Link to={`/users/${user.id}`} className="navbar-link">
            Sign In
          </Link>
        </Button>:null}
        {user.name === "Guest"?<Button color="inherit">
          <Link to="/users/register" className="navbar-link">
            Sign Up
          </Link>
        </Button>:null}
        {user.name === "Guest"?null:<Button color="inherit">
          <Link to={`/users/${user.id}`} className="navbar-link">
            Profile
          </Link>
        </Button>}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
