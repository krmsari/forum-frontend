import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

const CommentForm = (props) => {
  const { userId, postId, fetchComments } = props;
  const [text, setText] = useState("");
  const [isSent, setIsSent] = useState(false);

  const saveComment = () => {
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        postId: postId,
        userId: userId,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  const handleTextChange = (text) => {
    setIsSent(false);
    setText(text);
  };


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSent(false);
  };

  const handleCommentSubmit = () => {
    setIsSent(true);
    saveComment();
    setText("");
    fetchComments();
  };

  return (
    <div>
      <Snackbar open={isSent} autoHideDuration={900} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Yorum gönderildi.
        </Alert>
      </Snackbar>
      <Card sx={{ maxWidth: 600, margin: "auto", mt: 5 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
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
            sx={{ mb: 2 }}
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
