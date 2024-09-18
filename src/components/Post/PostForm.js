import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  OutlinedInput,
  InputAdornment,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Notice from "../Tools/Notice";
import { postData } from "../Fetchs/PostData";
import { PhotoCamera } from "@mui/icons-material";
import { postImage } from "../Fetchs/Image";

function PostForm(props) {
  const { user, refresh } = props;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [image, setImage] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const handleTitle = (title) => {
    setIsSent(false);
    setTitle(title);
  };

  const handleText = (text) => {
    setIsSent(false);
    setText(text);
  };

  const handleSubmit = () => {
    const data = postData("posts", text, undefined, user.id, title);
    data.then((data) => {
      if (data) {
        postImage("post", image, data);
        setMessage("Başarıyla gönderildi!");
        setState("success");
      } else {
        setMessage("Bir hata oluştu!");
        setState("error");
      }
    });
    refresh();
    setIsSent(true);
    setTitle("");
    setText("");
  };

  const handleImageUpload = (event) => {
    if (event.target.files[0]) {
      setIsImageUploaded(true);
      setImage(event.target.files[0]);
    }
  };

  return (
    <div>
      <div>
        <Notice
          message={message}
          isSent={isSent}
          setIsSent={setIsSent}
          time={1200}
          state={state}
        />
      </div>

      <Card className="card" sx={{ maxWidth: 1900, minWidth: 800 }}>
        <CardHeader
          className="card-header"
          avatar={
            <Link to={`/users/${user.id}`}>
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                className="author-profile"
                src={`data:image/jpeg;base64,${user.image}`}
              >
                {user.username}
              </Avatar>
            </Link>
          }
          subheader={
            <OutlinedInput
              id="outlined-adornment-amount"
              multiline
              placeholder="*Başlık"
              value={title}
              inputProps={{ maxLength: 100 }}
              sx={{ fontSize: 14, height: 40, fontWeight: "bold" }}
              fullWidth
              onChange={(i) => handleTitle(i.target.value)}
            ></OutlinedInput>
          }
          title={
            <Link
              style={{ fontSize: 14 }}
              className="author-name"
              to={`users/${user.id}`}
            >
              {user.username}
            </Link>
          }
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
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <OutlinedInput
              id="outlined-adornment-amount"
              multiline
              placeholder="*Açıklama"
              value={text}
              inputProps={{ maxLength: 500 }}
              sx={{ fontSize: 14, fontWeight: "bold" }}
              fullWidth
              onChange={(i) => handleText(i.target.value)}
              endAdornment={
                <InputAdornment>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor:
                        "background: linear-gradient(45deg, #d2d2d2 30%, #fdfbfa 90%)",
                    }}
                    onClick={handleSubmit}
                    disabled={text === "" || title === "" || !isImageUploaded}
                  >
                    {isImageUploaded ? "Gönder" : "Gönderemezsiniz"}
                  </Button>
                </InputAdornment>
              }
            ></OutlinedInput>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostForm;
