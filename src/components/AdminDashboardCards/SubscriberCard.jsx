import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { blue } from "@mui/material/colors";
import { httpService } from "../../utils/services";
import Loading from "../../assets/aesthetics/Loading";
import { Alert } from "react-bootstrap";

export default function SubscriberCard({ id }) {
  const [subscriber, setSubscriber] = useState({});
  const [loading, setLoading] = useState(false);

  const GetSubscriber = async () => {
    setLoading(true);
    const path = `subscriber/${id}`;
    const res = await httpService.get(path);
    if (res) {
      setSubscriber(res.data.subscriber);
      setLoading(false);
    } else setLoading(false);
  };

  useEffect(() => {
    GetSubscriber();
  }, []);
  return (
    <Alert variant="danger">
      <div className="d-flex justify-content-between">
        <div>
          <Typography variant="h2">
            <i class="fa fa-user" aria-hidden="true"></i>
          </Typography>
        </div>
        <div>
          <Typography variant="caption" gutterBottom>
            Subscriber
          </Typography>
          <Typography variant="h6" textAlign={"end"}>
            {subscriber.firstName} {subscriber.lastName}
          </Typography>
        </div>
      </div>
    </Alert>
  );
}
