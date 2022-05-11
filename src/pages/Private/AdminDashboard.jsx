import { Notifications } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import React from "react";
import { Alert } from "react-bootstrap";
import SubscriberTotal from "../../components/DashboardCards/SubscriberTotal";
import PendingTransactions from "../../components/DashboardCards/PendingTransactions";
import { loggedInUser } from "../../utils/services";
import SubscriberRecords from "./SubscriberRecords";

export default function AdminDashboard() {
  return (
    <div>
      <Container>
        {loggedInUser.role === "admin" ? (
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
        ) : null}

        {loggedInUser.role === "subscriber" ? (
          <div>
            <div className="d-flex justify-content-between">
              <SubscriberTotal />
              <PendingTransactions />
              <Alert variant="info" className="col-md-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <Notifications sx={{ height: 60, width: 60 }} />
                  </div>
                  <div>
                    <Typography variant="caption" gutterBottom>
                      Notifications
                    </Typography>
                    <Typography variant="h6">2</Typography>
                  </div>
                </div>
              </Alert>
            </div>
            <hr />
            <SubscriberRecords />
          </div>
        ) : null}
      </Container>
    </div>
  );
}
