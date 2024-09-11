import React, { useState } from "react";
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
import UpdateTool from "../Tools/UpdateTool";
import UpdateIcon from "../Tools/UpdateIcon";

function Comment(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const { commentId, userId, text, author, refresh, postId } = props;

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
        <UpdateTool
          entity="comments"
          id={commentId}
          postId={postId}
          userId={userId}
          text={text}
          refreshPosts={refresh}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <UpdateIcon
            entity="comments"
            isUpdate={isUpdate}
            setIsUpdate={setIsUpdate}
            refresh={refresh}
          />
          <DeleteTool entity="comments" id={commentId} refresh={refresh} />
        </div>
      </CardContent>
    </Card>
  );
}

export default Comment;
