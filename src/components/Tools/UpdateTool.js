import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  CardContent,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { updateData } from "../Fetchs/Update";
import Notice from "./Notice";

function UpdateTool(props) {
  
  const {
    entity,
    title,
    text,
    postId,
    userId,
    commentId,
    refreshPosts,
    isUpdate,
    setIsUpdate,
  } = props;
  const [newText, setNewText] = useState(text);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleText = (t) => {
    setNewText(t);
  };

  const handleSubmit = () => {
    const messages = updateData(
      entity,
      postId,
      title,
      newText,
      userId,
      commentId,
      text
    );
    messages.then((data) => {
      if (data) {
        setMessage("Başarıyla güncellendi!");
        setState("success");
      } else {
        setMessage("Bir hata oluştu!");
        setState("error");
      }
    });
    refreshPosts();
    setIsUpdate(false);
    setIsSent(true);
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
    </div>
  );
}
export default UpdateTool;
