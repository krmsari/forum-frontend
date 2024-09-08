import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField, Button } from '@mui/material';
import { red } from '@mui/material/colors';


function Comment(props) {
  const { userId, text, author } = props;


  return (
    <Card className="card" sx={{ maxWidth: 800, minWidth: 800 }}>
      <CardHeader
        className="card-header"
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