import {
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { postData } from "../Fetchs/PostData";
import Notice from "../Tools/Notice";
import { PhotoCamera } from "@mui/icons-material";
import { postImage } from "../Fetchs/Image";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [image, setImage] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);

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
  const handleImageUpload = (event) => {
    if (event.target.files[0]) {
      setIsImageUploaded(true);
      setImage(event.target.files[0]);
    }
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
        postImage("user", image, data);
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
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: 2 }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input type="file" hidden onChange={handleImageUpload} />
                <PhotoCamera />
              </IconButton>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              disabled={!email || !password || !isImageUploaded}
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
