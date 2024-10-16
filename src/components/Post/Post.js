import {
  Avatar,
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
  Badge,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { red, grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./post.css";
import { Link } from "react-router-dom";
import { getData } from "../Fetchs/Get";
import CommentForm from "../Comment/CommentForm";
import Comment from "../Comment/Comment";
import UpdateTool from "../Tools/UpdateTool";
import DeleteTool from "../Tools/DeleteTool";
import UpdateIcon from "../Tools/UpdateIcon";
import { deleteLike, updateLike } from "../Fetchs/Like";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Post(props) {
  const {
    postId,
    title,
    text,
    author,
    userId,
    refresh,
    image,
    likeCount,
    isLikedCurrentUser,
    user
  } = props;
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const fetchComments = async () => {
    const commentsData = await getData("comments");
    setComments(commentsData);
  };

  const handleExpandClick = () => {
    fetchComments();
    setExpanded(!expanded);
  };

  useEffect(() => {
    setLiked(isLikedCurrentUser);
  }, [isLikedCurrentUser]);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      deleteLike(postId, userId);
    } else if (!liked) {
      setLiked(true);
      updateLike(postId, userId);
    }
  };

  return (
    <Card
      className="card"
      sx={{
        padding: 0.5,
        maxWidth: 800,
        minWidth: 800,
        boxShadow: 15,
        border: 1,
        borderColor: grey[500],
        borderRadius: 2,
      }}
    >
      <CardHeader
        className="card-header"
        avatar={
          <Link to={`/users/${userId}`}>
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              className="author-profile"
              src={`data:image/jpeg;base64,${user.image}`}
            >
              {author[0].toUpperCase()}
            </Avatar>
          </Link>
        }
        action={
          <Typography className="card-action" sx={{ fontSize: 11 }}>
            {new Date().toLocaleDateString()}
          </Typography>
        }
        title={
          <Typography
            className="card-title"
            sx={{ fontWeight: "bold", fontSize: 15 }}
          >
            {title}
          </Typography>
        }
        subheader={
          <Link className="author-name" to={`users/${userId}`}>
            {author.toUpperCase()}
          </Link>
        }
      />
      <CardMedia
        sx={{
          borderRadius: 2,
          border: 1,
          borderColor: grey[400],
          boxShadow: 20,
        }}
        component="img"
        height="194"
        image={image}
        alt="Post Image"
      />
      <UpdateTool
        entity="posts"
        title={title}
        text={text}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        postId={postId}
        refreshPosts={refresh}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <Badge badgeContent={likeCount} color="warning">
            <FavoriteIcon style={liked ? { color: "red" } : null} />
          </Badge>
        </IconButton>

        <DeleteTool entity="posts" id={postId} refresh={refresh} />

        <UpdateIcon
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          refresh={refresh}
        />

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ChatBubbleIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CommentForm
          postId={postId}
          userId={userId}
          fetchComments={fetchComments}
        />
        {comments.map((comment) => (
          <Comment
            commentId={comment.id}
            postId={comment.postId}
            userId={comment.userId}
            commentText={comment.text}
            author={comment.username}
            refresh={fetchComments}
          />
        ))}
      </Collapse>
    </Card>
  );
}

export default Post;
