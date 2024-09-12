import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Notice from "../Tools/Notice";
import { postData } from "../Fetchs/PostData";

function PostForm(props) {
  const { author, userId, refresh } = props;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");

  const handleTitle = (title) => {
    setIsSent(false);
    setTitle(title);
  };

  const handleText = (text) => {
    setIsSent(false);
    setText(text);
  };


  const handleSubmit = () => {
    const data = postData("posts", text, undefined, userId, title);
    data.then((data) => {
      if (data) {
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
            <Link to={`/users/${userId}`}>
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                className="author-profile"
              >
                {author[0].toUpperCase()}
              </Avatar>
            </Link>
          }
          subheader={
            <OutlinedInput
              id="outlined-adornment-amount"
              multiline
              placeholder="Başlık"
              value={title}
              inputProps={{ maxLength: 50 }}
              sx={{ fontSize: 14, height: 40, fontWeight: "bold" }}
              fullWidth
              onChange={(i) => handleTitle(i.target.value)}
            ></OutlinedInput>
          }
          title={
            <Link
              style={{ fontSize: 14 }}
              className="author-name"
              to={`users/${userId}`}
            >
              {author.toUpperCase()}
            </Link>
          }
        />
        {/* ADD IMAGE BUTTON */}
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <OutlinedInput
              id="outlined-adornment-amount"
              multiline
              placeholder="Açıklama"
              value={text}
              inputProps={{ maxLength: 500 }}
              sx={{ fontSize: 14, height: 50, fontWeight: "bold" }}
              fullWidth
              onChange={(i) => handleText(i.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    sx={{ width: 15, fontSize: 10 }}
                    variant="contained"
                    style={{
                      backgroundColor:
                        "background: linear-gradient(45deg, #d2d2d2 30%, #fdfbfa 90%)",
                    }}
                    onClick={handleSubmit}
                  >
                    Gönder
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
