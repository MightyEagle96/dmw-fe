import React, { useState, useEffect } from "react";

import {
  Avatar,
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
import { httpService } from "../../utils/services";

const listItems = [
  {
    text: "Overview",
    icon: <i class="fas fa-project-diagram"></i>,
    redirectTo: "/",
  },

  { text: "Records", icon: <Assessment />, redirectTo: "/currentProject" },
];

const listItems2 = [
  {
    text: "Add new subscriber",
    icon: <PersonAdd />,
    redirectTo: "/newSubscriber",
  },
  { text: "Subscribers", icon: <People />, redirectTo: "/subscribers" },
];

export default function AdminSideMenu() {
  const [adminNotifications, setAdminNotifications] = useState([]);

  const GetAdminNotifications = async () => {
    const path = "adminNotifications";

    const res = await httpService.get(path);

    setAdminNotifications(res.data.notifications);
  };

  useEffect(() => {
    GetAdminNotifications();
  }, []);
  return (
    <div className="p-3">
      <div className="d-flex justify-content-center">
        <Avatar sx={{ width: 56, height: 56 }} />
      </div>
      <div>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={item}>
              <ListItemButton
                onClick={() => window.location.assign(item.redirectTo)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
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
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <hr />
      <div>
        <ListItem>
          <ListItemButton
            onClick={() => window.location.assign("adminNotifications")}
          >
            <ListItemIcon>
              {" "}
              <Badge badgeContent={adminNotifications.length} color="error">
                <Notifications />
              </Badge>
            </ListItemIcon>
            <ListItemText>Notifications</ListItemText>
          </ListItemButton>
        </ListItem>
      </div>
    </div>
  );
}
