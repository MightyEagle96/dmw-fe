import { Container, Typography } from "@mui/material";
import React from "react";
import { Alert } from "react-bootstrap";

export default function AdminDashboard() {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-between">
          <div></div>
          <div>
            <Alert>
              <Typography>Total Amount</Typography>
              <Typography variant="h3">₦0.00</Typography>
            </Alert>
          </div>
        </div>
      </Container>
    </div>
  );
}
