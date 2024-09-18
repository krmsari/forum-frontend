import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import {
  Edit as EditIcon,
  Email as EmailIcon,
  Comment as MarkChatUnread,
  Work,
  ThumbUp,
  DynamicFeed,
} from "@mui/icons-material";

function User(props) {
  const { user } = props;
  const [roles, setRoles] = useState([]);
  const imageUrl = `data:image/jpeg;base64,${user.image}`;

  useEffect(() => {
    if (user.roles && Array.isArray(user.roles)) {
      setRoles(user.roles);
    } else {
      console.log("User roles are not defined or not an array");
    }
  }, [user.roles]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid2 container spacing={3}>
            <Grid2 item xs={12} sm={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  alt={user.username}
                  src={imageUrl}
                  sx={{ width: 150, height: 150, mb: 2 }}
                />
                <Typography variant="h5" gutterBottom>
                  {user.name + " " + user.surname}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {user.username}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  sx={{ mt: 2 }}
                >
                  Edit Profile
                </Button>
              </Box>
            </Grid2>
            <Grid2 item xs={12} sm={8}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon style={{ color: "darkkhaki" }} />
                  </ListItemIcon>
                  <ListItemText primary={user.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DynamicFeed style={{ color: "darkgoldenrod" }} />
                  </ListItemIcon>
                  <ListItemText primary={user.likeCount} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MarkChatUnread style={{ color: "darkgreen" }} />
                  </ListItemIcon>
                  <ListItemText primary={user.commentCount} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ThumbUp style={{ color: "darkred" }} />
                  </ListItemIcon>
                  <ListItemText primary={user.likeCount} />
                </ListItem>
              </List>
            </Grid2>
          </Grid2>
        </Paper>

        <Grid2 container spacing={3} sx={{ mt: 3 }}>
          <Grid2 item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Roller
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {roles.map((role) => (
                    <Chip label={role.name} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
export default User;
