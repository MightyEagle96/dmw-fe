import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SubscriberCard from "../../components/AdminDashboardCards/SubscriberCard";
import SubscriberTotal from "../../components/DashboardCards/SubscriberTotal";
import SubscriberRecords from "./SubscriberRecords";

export default function ViewRecords() {
  const { id } = useParams();

  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-6">
            <SubscriberCard id={id} />
          </div>
          <div className="col-md-6">
            <SubscriberTotal id={id} />
          </div>
        </Row>
        <hr />
        <SubscriberRecords subscriberId={id} />
      </Container>
    </div>
  );
}
