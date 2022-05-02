import { Container, Typography } from "@mui/material";
import React from "react";
import { Alert } from "react-bootstrap";
import { loggedInUser } from "../../utils/services";

export default function AdminDashboard() {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between">
          <div>
            <Alert>
              <Typography>
                {loggedInUser.firstName} {loggedInUser.lastName}
              </Typography>
            </Alert>
          </div>
          <div>
            <Alert>
              <Typography>Total Amount</Typography>
              <Typography variant="h3">₦0.00</Typography>
            </Alert>
          </div>
        </div>
        <hr />
      </Container>
    </div>
  );
}
