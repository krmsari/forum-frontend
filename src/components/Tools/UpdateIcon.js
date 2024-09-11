import { IconButton } from "@mui/material";
import React from "react";
import UpgradeIcon from "@mui/icons-material/Upgrade";

function UpdateIcon(props) {
  const { isUpdate, setIsUpdate, refresh } = props;
  const handleUpdate = () => {
    isUpdate ? setIsUpdate(false) : setIsUpdate(true);
    refresh();
  };

  return (
    <IconButton className="delete-icon" onClick={handleUpdate}>
      <UpgradeIcon sx={{ fontSize: 30 }} className="update-icon" />
    </IconButton>
  );
}

export default UpdateIcon;
