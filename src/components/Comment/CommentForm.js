import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Notice from "../Tools/Notice";
import { postData } from "../Fetchs/PostData";

const CommentForm = (props) => {
  const { userId, postId, fetchComments } = props;
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");

  const handleTextChange = (text) => {
    setIsSent(false);
    setText(text);
  };

  const handleCommentSubmit = () => {
    setIsSent(true);
    const post = postData("comments", text, postId, userId);
    post.then((data) => {
      if (data) {
        setMessage("Yorum başarıyla gönderildi!");
        setState("success");
      } else {
        setMessage("Yorum gönderilemedi!");
        setState("error");
      }
    });
    setText("");
    fetchComments();
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

      <Card
        sx={{
          margin: "auto",
          mt: 5,
          maxWidth: 800,
          minWidth: 800,
          boxShadow: 8,
          border: 1,
          borderColor: grey[400],
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
          >
            Yorumlar
          </Typography>
          <TextField
            label="Yorumunuzu yazın"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={text}
            onChange={(i) => handleTextChange(i.target.value)}
            sx={{ mb: 2, boxShadow: 15 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCommentSubmit}
          >
            Gönder
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentForm;
