import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CreditSubscriber from "../../components/AdminDashboardCards/CreditSubscriber";
import SubscriberCard from "../../components/AdminDashboardCards/SubscriberCard";
import SubscriberTotal from "../../components/DashboardCards/SubscriberTotal";
import SubscriberRecords from "./SubscriberRecords";

export default function ViewRecords() {
  const { id } = useParams();

  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-4">
            <SubscriberCard id={id} />
          </div>
          <div className="col-md-4">
            <SubscriberTotal id={id} />
          </div>
          <div className="col-md-4">
            <CreditSubscriber subscriber={id} />
          </div>
        </Row>
        <hr />
        <SubscriberRecords subscriberId={id} />
      </Container>
    </div>
  );
}
