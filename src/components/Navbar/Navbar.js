import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function Navbar() {
  let userId = 1;
  return (
    <AppBar position="static" sx={{
              background: "linear-gradient(45deg, #0f0fb3 30%, #00d4ff 90%)",

    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" className="navbar-logo">
            Synax
          </Link>
        </Typography>
        <Button color="inherit">
          <Link to={`/users/${userId}`} className="navbar-link">
            Giriş Yap
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/users/register" className="navbar-link">
            Kayıt Ol
          </Link>
        </Button>
        <Button color="inherit">
          <Link to={`/users/${userId}`} className="navbar-link">
            Profil
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
