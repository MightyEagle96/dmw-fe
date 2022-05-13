import { Notifications } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import React from "react";
import { Alert, Row } from "react-bootstrap";
import SubscriberTotal from "../../components/DashboardCards/SubscriberTotal";
import PendingTransactions from "../../components/DashboardCards/PendingTransactions";
import { loggedInUser } from "../../utils/services";
import SubscriberRecords from "./SubscriberRecords";
import TotalAmount from "../../components/AdminDashboardCards/TotalAmount";
import TotalSubscribers from "../../components/AdminDashboardCards/TotalSubscribers";

export default function AdminDashboard() {
  return (
    <div>
      <Container>
        {loggedInUser.role === "admin" ? (
          <div>
            <Row>
              <div className="col-md-3">
                <TotalAmount />
              </div>
              <div className="col-md-3">
                <TotalSubscribers />
              </div>
            </Row>
            <hr />
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
