import React from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Notifications,
  Assessment,
  AccountBalance,
  Home,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";

const listItems = [
  {
    text: "Home",
    icon: <Home />,
    redirectTo: "/",
  },
  {
    text: "Make Deposit",
    icon: <AccountBalance />,
    redirectTo: "/makeDeposit",
  },
  {
    text: "Records",
    icon: <Assessment />,
    redirectTo: `/subscriberRecords`,
  },
];

export default function SubcriberSideMenu() {
  return (
    <div className="p-3">
      <div>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index}>
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
          <ListItemButton>
            <ListItemIcon>
              <Badge badgeContent={4} color="error">
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
