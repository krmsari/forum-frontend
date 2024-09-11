import React, { useState } from "react";
import {
  Button,
  CardContent,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { updateData } from "../Fetchs/Update";

function UpdateTool(props) {

  const { title, text, postId, refreshPosts, isUpdate, setIsUpdate } = props;
  const [newText, setNewText] = useState(text);
  const handleText = (t) => {
    setNewText(t);
  };

  const handleSubmit = () => {
    updateData("posts", postId, title, newText);
    refreshPosts();
    setIsUpdate(false);
  };
  return (
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
  );
}
export default UpdateTool;
