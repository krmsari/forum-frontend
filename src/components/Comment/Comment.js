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

function Comment(props) {
  const { userId, text, author } = props;

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
      </CardContent>
    </Card>
  );
}

export default Comment;
