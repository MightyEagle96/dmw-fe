import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SubscriberCard from "../../components/AdminDashboardCards/SubscriberCard";
import SubscriberRecords from "./SubscriberRecords";

export default function ViewRecords() {
  const { id } = useParams();

  return (
    <div>
      <Container>
        <SubscriberCard id={id} />
        <hr />
        <SubscriberRecords subscriberId={id} />
      </Container>
    </div>
  );
}
