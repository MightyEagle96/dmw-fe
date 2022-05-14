import { Typography } from "@mui/material";
import React from "react";
import { Container, Row } from "react-bootstrap";
import image2 from "../assets/images/image.jpg";
import { blue } from "@mui/material/colors";

export default function PictureBanner() {
  return (
    <Container className="bg-white">
      <Row>
        <div className="col-md-6">
          <img src={image2} className="img-fluid" alt="logo" />
        </div>
        <div className="col-md-6 d-flex align-items-center ps-5">
          <div>
            <Typography
              variant="h2"
              letterSpacing={4}
              fontWeight="700"
              color={blue[600]}
              gutterBottom
            >
              D.M.W
            </Typography>
            <Typography variant="h6" fontWeight="100" color="GrayText">
              Enhancing Saving Culture...
            </Typography>
          </div>
        </div>
      </Row>
    </Container>
  );
}
