import { Avatar, Typography } from "@mui/material";
import React from "react";
import { siteLabels } from "../../utils/labels";
import "./HomePage.css";
import { blue } from "@mui/material/colors";
import { Container, Button } from "react-bootstrap";
import MyCardComponent from "../../components/cards/MyCardComponent";
import { Login } from "@mui/icons-material";
import { redirectTo } from "../../utils/services";

export default function HomePage() {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="desktopBanner d-flex align-items-center justify-content-center">
          <div className="p-5 transparentBanner text-white rounded-3 shadow-md">
            <div>
              <div className="d-flex justify-content-center mb-3">
                <Avatar sx={{ width: 60, height: 60, bgcolor: blue[700] }}>
                  <Typography variant="h4">₦</Typography>
                </Avatar>
              </div>
              <Typography variant="h2" fontWeight={300}>
                {siteLabels.title}
              </Typography>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
              <Typography
                variant="subtitle1"
                fontStyle={"italic"}
                className="text-capitalize"
              >
                {siteLabels.subtitle}
              </Typography>
            </div>
            <div>
              <Button variant="outline-light" className="me-2">
                CREATE ACCOUNT
                <span className="ms-1">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>
                </span>
              </Button>
              <Button
                variant="outline-light"
                onClick={() => redirectTo("login")}
              >
                LOGIN
                <span className="ms-1">
                  <Login />
                </span>
              </Button>
            </div>
          </div>
        </div>
        <Container className="mt-3">
          <MyCardComponent avatarSize={100} iconSize={60} textVariant={"h5"} />
        </Container>
      </div>
      <div className="d-none d-md-block d-lg-none">
        <div className="desktopBanner d-flex align-items-center justify-content-center">
          <div className="p-5 transparentBanner text-white rounded-3 shadow-md">
            <div>
              <div className="d-flex justify-content-center mb-3">
                <Avatar sx={{ width: 60, height: 60, bgcolor: blue[700] }}>
                  <Typography variant="h5">₦</Typography>
                </Avatar>
              </div>
              <Typography variant="h4" fontWeight={300}>
                {siteLabels.title}
              </Typography>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
              <Typography
                variant="subtitle2"
                fontStyle={"italic"}
                className="text-capitalize"
              >
                {siteLabels.subtitle}
              </Typography>
            </div>
            <div className="mt-3">
              <div className="d-flex justify-content-center">
                <Button variant="outline-light" className="me-2">
                  CREATE ACCOUNT
                  <span className="ms-1">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                  </span>
                </Button>
                <Button
                  variant="outline-light"
                  onClick={() => redirectTo("login")}
                >
                  LOGIN
                  <span className="ms-1">
                    <Login />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <MyCardComponent
            avatarSize={80}
            iconSize={40}
            textVariant={"h6"}
            fontIcon={35}
            cardWidth={300}
          />
        </div>
      </div>
      <div className="d-xs-block d-md-none">
        <div className="mobileBanner d-flex align-items-center justify-content-center">
          <div className="p-4 transparentBanner text-white rounded-3 shadow-lg">
            <div>
              <div className="d-flex justify-content-center mb-3">
                <Avatar sx={{ width: 60, height: 60, bgcolor: blue[700] }}>
                  <Typography variant="h6">₦</Typography>
                </Avatar>
              </div>
              <Typography variant="h5" fontWeight={100} textAlign="center">
                {siteLabels.title}
              </Typography>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
              <Typography
                variant="subtitle2"
                fontStyle={"italic"}
                className="text-capitalize"
              >
                {siteLabels.subtitle}
              </Typography>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div>
                <Button variant="outline-light" className="me-2">
                  CREATE ACCOUNT
                  <span className="ms-1">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                  </span>
                </Button>
                <Button
                  variant="outline-light"
                  onClick={() => redirectTo("login")}
                >
                  LOGIN
                  <span className="ms-1">
                    <Login />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2">
          <hr />
        </div>
        <div className="p-2">
          <MyCardComponent
            avatarSize={80}
            iconSize={40}
            textVariant={"h6"}
            fontIcon={35}
          />
        </div>
      </div>
    </div>
  );
}
