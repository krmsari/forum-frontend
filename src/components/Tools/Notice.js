import { Alert, Snackbar } from "@mui/material";
import React from "react";

function Notice(props) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSent(false);
  };

  const { isSent, setIsSent, message, time , state } = props;

  <Snackbar open={isSent} autoHideDuration={time} onClose={handleClose}>
    <Alert onClose={handleClose} severity={state} sx={{ width: "100%" }}>
      {message}
    </Alert>
  </Snackbar>;
}
export default Notice;
