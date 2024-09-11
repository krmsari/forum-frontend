import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSent, setIsSent] = useState(false);

  const savePost = () => {
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: firstName,
        surname: lastName,
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  const handleFirstName = (firstName) => {
    setFirstName(firstName);
    setIsSent(false);
  };

  const handleLastName = (lastName) => {
    setLastName(lastName);
    setIsSent(false);
  };

  const handelUsername = (username) => {
    setUsername(username);
    setIsSent(false);
  };

  const handleEmail = (email) => {
    setEmail(email);
    setIsSent(false);
  };

  const handlePassword = (password) => {
    setPassword(password);
    setIsSent(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini işleme kodu buraya gelecek
    savePost();
    setIsSent(true);
  };

  return (
    <React.Fragment>
      <div>
        <Snackbar open={isSent} autoHideDuration={1000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Kullanıcı başarıyla kaydedildi!
          </Alert>
        </Snackbar>
      </div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Kayıt Ol
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Adınız"
              value={firstName}
              onChange={(e) => handleFirstName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Soyadınız"
              value={lastName}
              onChange={(e) => handleLastName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Kullanıcı Adı"
              value={username}
              onChange={(e) => handelUsername(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              variant="outlined"
              label="Şifre"
              type="password"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Kayıt Ol
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default RegisterForm;
