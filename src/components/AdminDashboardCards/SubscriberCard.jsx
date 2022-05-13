import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { blue } from "@mui/material/colors";
import { httpService } from "../../utils/services";
import Loading from "../../assets/aesthetics/Loading";

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
    <div
      className="p-4 text-white rounded-3"
      style={{ backgroundColor: blue[600] }}
    >
      <Typography variant="h4" gutterBottom>
        <i class="fa fa-user" aria-hidden="true"></i> {subscriber.firstName}{" "}
        {subscriber.lastName}
      </Typography>
      <Loading show={loading} color="light" />
    </div>
  );
}
