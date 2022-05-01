import React from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Assessment,
  Notifications,
  People,
  PersonAdd,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";

const listItems = [
  {
    text: "Overview",
    icon: <i class="fas fa-project-diagram"></i>,
    redirectTo: "/allProjects",
  },

  { text: "Records", icon: <Assessment />, redirectTo: "/currentProject" },
];

const listItems2 = [
  {
    text: "Add new subscriber",
    icon: <PersonAdd />,
    redirectTo: "/newProject",
  },
  { text: "Subscribers", icon: <People />, redirectTo: "/subscribers" },
];
export default function AdminSideMenu() {
  return (
    <div className="p-3">
      <div>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={item}>
              <ListItemButton
                onClick={() => window.location.assign(item.redirectTo)}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <hr />
      <div>
        <List>
          {listItems2.map((item, index) => (
            <ListItem key={item}>
              <ListItemButton
                onClick={() => window.location.assign(item.redirectTo)}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <hr />
      <div>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              {" "}
              <Badge badgeContent={4} color="error">
                <Notifications sx={{ color: "white" }} />
              </Badge>
            </ListItemIcon>
            <ListItemText>Notifications</ListItemText>
          </ListItemButton>
        </ListItem>
      </div>
    </div>
  );
}
