import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import DeleteTool from "../Tools/DeleteTool";
import UpdateTool from "../Tools/UpdateIcon";

function Comment(props) {
  const { id: key, userId, text, author,refresh } = props;

  return (
    <Card
      sx={{
        margin: 2,
        boxShadow: 15,
        border: 1,
        borderColor: grey[500],
        borderRadius: 2,
      }}
    >
      <CardHeader
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
        subheader={author}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
        <DeleteTool entity="comments" id={key} refresh={refresh} />
        <UpdateTool entity="comments" id={key} refresh={refresh} />
      </CardContent>
    </Card>
  );
}

export default Comment;
