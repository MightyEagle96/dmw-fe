import { AccountBalance, HandshakeRounded } from "@mui/icons-material";
import { Card, CardMedia, Stack, CardContent, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

export default function MyCardComponent({
  avatarSize,
  iconSize,
  textVariant,
  fontIcon,
  cardWidth,
}) {
  return (
    <div
      className="d-flex justify-content-center bg-white shadow-lg"
      style={{ marginTop: -120 }}
    >
      <Stack
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
      >
        <Card sx={{ minWidth: cardWidth || 300 }} className="p-3">
          <CardMedia>
            <div className="d-flex justify-content-center p-2">
              <HandshakeRounded
                sx={{ height: iconSize, width: iconSize, color: blue[800] }}
              />
            </div>
          </CardMedia>
          <CardContent>
            <Typography
              textAlign={"center"}
              variant={textVariant}
              color="GrayText"
            >
              INTEGRITY
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              exercitationem natus accusantium reiciendis veritatis incidunt
              atque, sequi dolorem numquam, blanditiis quo at, omnis inventore
              obcaecati. Corrupti reprehenderit iusto laborum provident?
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: cardWidth || 300 }} className="p-3">
          <CardMedia>
            <div className="d-flex justify-content-center p-2">
              <AccountBalance
                sx={{ height: iconSize, width: iconSize, color: blue[800] }}
              />
            </div>
          </CardMedia>
          <CardContent>
            <Typography
              textAlign={"center"}
              variant={textVariant}
              color="GrayText"
            >
              ACCURATE RECORDS
            </Typography>
            <Typography variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident repellendus consequatur beatae ipsam ab sunt illum
              magnam! Sit unde sequi atque sunt. Accusamus vel nesciunt culpa
              repellat esse reiciendis aspernatur.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: cardWidth || 300 }} className="p-3">
          <CardMedia>
            <div className="d-flex justify-content-center p-2">
              <i
                class="fas fa-user-clock    "
                style={{ fontSize: fontIcon || 45, color: blue[800] }}
              ></i>
            </div>
          </CardMedia>
          <CardContent>
            <Typography
              textAlign={"center"}
              variant={textVariant}
              color="GrayText"
            >
              TIMELY PAYMENT
            </Typography>
            <Typography variant="body2">
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
