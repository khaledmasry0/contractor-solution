import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

function MessagesComponent() {
  const ModeDarkMode = useSelector((state) => state.DarkMode.mode);

  return (
    <List
      className="textColorMessage"
      sx={{
        width: "100%",
        bgcolor: ModeDarkMode ? "#d4e8ef" : "#012939",
        borderRadius: "15px",
        overflowY: "auto",
        maxHeight: "73vh",
      }}
    >
      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              khaled Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>

      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>

      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>

      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>

      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>

      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>

      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>

      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>

      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            background: "#2A5639",
            cursor: "pointer",
          },
          borderRadius: "15px",
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="zainab ahmed"
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
            >
              Ali Connors
            </Typography>
          }
        />
        <Typography
          variant="div"
          component="div"
          sx={{
            fontSize: "12px",
            color: ModeDarkMode ? "#000000" : "#CBCBCB",
          }}
        >
          2m
        </Typography>
      </ListItem>
    </List>
  );
}

export default MessagesComponent;
