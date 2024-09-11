import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteData } from "../Fetchs/Delete";

import React from "react";

function DeleteTool(props) {
  const { entity, id, refresh } = props;

  const handleDeleted = () => {
    deleteData(entity, id);
    refresh();
  };

  return (
    <div style={{display:"flex", justifyContent:"flex-end"}}>
      <IconButton
        className="delete-icon"
        onClick={handleDeleted}
        sx={{ alignItems: "right" }}
      >
        <DeleteIcon className="delete-icon" />
      </IconButton>
    </div>
  );
}

export default DeleteTool;
