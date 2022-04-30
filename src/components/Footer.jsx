import { Home, People, Phone } from "@mui/icons-material";
import { Avatar, Link, Stack, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer p-3">
      <Container>
        {" "}
        <div className="d-none d-md-block">
          <div className="d-flex justify-content-between text-white">
            <div>
              <div className="d-flex justify-content-center mb-2">
                <Avatar sx={{ bgcolor: brown[500] }}>
                  <Typography variant="h5">₦</Typography>
                </Avatar>
              </div>
              <Typography>DURABLE WELFARE MARSHAL</Typography>
            </div>
            <div className="d-flex align-items-center">
              <div>
                <Stack direction={"row"} spacing={3}>
                  <Link underline="none" color="white">
                    Home{" "}
                    <span>
                      <Home />
                    </span>
                  </Link>
                  <Link underline="none" color="white">
                    About Us{" "}
                    <span>
                      <People />
                    </span>
                  </Link>
                  <Link underline="none" color="white">
                    Contact Us{" "}
                    <span>
                      <Phone />
                    </span>
                  </Link>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        <div className="d-sm-block d-md-none text-white">
          <div>
            <div className="d-flex justify-content-center ">
              <Avatar sx={{ bgcolor: brown[500] }}>
                <Typography variant="h5">₦</Typography>
              </Avatar>
            </div>
            <div className="text-center mt-2">
              <Typography>DURABLE WELFARE MARSHAL</Typography>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <Stack direction={"row"} spacing={1}>
                <Link underline="none" color="white">
                  Home{" "}
                  <span>
                    <Home />
                  </span>
                </Link>
                <Link underline="none" color="white">
                  About Us{" "}
                  <span>
                    <People />
                  </span>
                </Link>
                <Link underline="none" color="white">
                  Contact Us{" "}
                  <span>
                    <Phone />
                  </span>
                </Link>
              </Stack>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
