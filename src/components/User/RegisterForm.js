import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { postData } from "../Fetchs/PostData";
import Notice from "../Tools/Notice";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [isSent, setIsSent] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini işleme kodu buraya gelecek
    const data = postData(
      "users",
      undefined,
      undefined,
      undefined,
      undefined,
      firstName,
      lastName,
      username,
      email,
      password
    );
    data.then((data) => {
      if (data) {
        setMessage("Başarıyla kayıt oldunuz!");
        setState("success");
      } else {
        setMessage("Kayıt olunamadı!");
        setState("error");
      }
    });
    setIsSent(true);
  };

  return (
    <React.Fragment>
      <div>
        <Notice
          message={message}
          isSent={isSent}
          setIsSent={setIsSent}
          time={1200}
          state={state}
        />
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
