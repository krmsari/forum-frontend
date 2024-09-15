import React from "react";
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
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Settings as SettingsIcon,
  Work as WorkIcon,
} from "@mui/icons-material";


function User(props) {
  const { user } = props;
  console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid2 container spacing={3}>
            <Grid2 item xs={12} sm={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  alt={user.username}
                  src="/placeholder.svg?height=200&width=200"
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
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary={user.email} />
                </ListItem>
              
                <ListItem>
                  <ListItemIcon>
                    <LocationIcon />
                  </ListItemIcon>
                  {/* <ListItemText primary={user.location} /> */}
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
                  {/* {user.skills.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))} */}
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