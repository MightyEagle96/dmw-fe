import { AccountBalance, HandshakeRounded } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardMedia,
  Stack,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { green, brown, red } from "@mui/material/colors";

export default function MyCardComponent({
  avatarSize,
  iconSize,
  textVariant,
  fontIcon,
  cardWidth,
}) {
  return (
    <div className="d-flex justify-content-center">
      <Stack
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
      >
        <Card sx={{ minWidth: cardWidth || 345 }}>
          <CardMedia>
            <div className="d-flex justify-content-center p-2">
              <Avatar
                sx={{
                  height: avatarSize,
                  width: avatarSize,
                  bgcolor: green["500"],
                }}
              >
                <HandshakeRounded sx={{ height: iconSize, width: iconSize }} />
              </Avatar>
            </div>
          </CardMedia>
          <CardContent>
            <Typography
              textAlign={"center"}
              variant={textVariant}
              sx={{ color: green["900"] }}
            >
              INTEGRITY
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              exercitationem natus accusantium reiciendis veritatis incidunt
              atque, sequi dolorem numquam, blanditiis quo at, omnis inventore
              obcaecati. Corrupti reprehenderit iusto laborum provident?
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: cardWidth || 345 }}>
          <CardMedia>
            <div className="d-flex justify-content-center p-2">
              <Avatar
                sx={{
                  height: avatarSize,
                  width: avatarSize,
                  bgcolor: brown[500],
                }}
              >
                <AccountBalance sx={{ height: iconSize, width: iconSize }} />
              </Avatar>
            </div>
          </CardMedia>
          <CardContent>
            <Typography
              textAlign={"center"}
              variant={textVariant}
              sx={{ color: brown[800] }}
            >
              ACCURATE RECORDS
            </Typography>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident repellendus consequatur beatae ipsam ab sunt illum
              magnam! Sit unde sequi atque sunt. Accusamus vel nesciunt culpa
              repellat esse reiciendis aspernatur.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: cardWidth || 345 }}>
          <CardMedia>
            <div className="d-flex justify-content-center p-2">
              <Avatar
                sx={{
                  height: avatarSize,
                  width: avatarSize,
                  bgcolor: red[800],
                }}
              >
                <i
                  class="fas fa-user-clock    "
                  style={{ fontSize: fontIcon || 45 }}
                ></i>
              </Avatar>
            </div>
          </CardMedia>
          <CardContent>
            <Typography
              textAlign={"center"}
              variant={textVariant}
              sx={{ color: red[800] }}
            >
              TIMELY PAYMENT
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              dolorum consectetur error corrupti illum nisi pariatur iure
              tempora? Dignissimos, fuga fugiat! Officia minima eum, hic
              laudantium consequatur in veniam aliquid.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}
