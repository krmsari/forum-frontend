import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  CardContent,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  Typography,
} from "@mui/material";
import { updateData } from "../Fetchs/Update";
import Notice from "./Notice";

function UpdateTool(props) {
  const { entity, title, text, postId, refreshPosts, isUpdate, setIsUpdate } = props;
  const [newText, setNewText] = useState(text);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleText = (t) => {
    setNewText(t);
  };

  const handleSubmit = () => {
    const messages = updateData("posts", postId, title, newText);
    messages.then((data) => {
      setMessage(data[0]);
      setState(data[1]);
    });
    refreshPosts();
    handleClose();
    setIsUpdate(false);
    setIsSent(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSent(false);
  };
  return (
    <Typography>
      <div>
        <Notice
          message={message}
          isSent={isSent}
          setIsSent={setIsSent}
          time={1200}
          state={state}
        />
      </div>
      <CardContent>
        {isUpdate ? (
          <OutlinedInput
            value={newText}
            sx={{ width: 700 }}
            onChange={(i) => handleText(i.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <Button fullWidth variant="contained" onClick={handleSubmit}>
                  Güncelle
                </Button>
              </InputAdornment>
            }
          ></OutlinedInput>
        ) : (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {text}
          </Typography>
        )}
      </CardContent>
    </Typography>
  );
}
export default UpdateTool;
