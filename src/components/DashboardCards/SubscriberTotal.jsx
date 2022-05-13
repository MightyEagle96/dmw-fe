import React, { useState, useEffect } from "react";
import { httpService } from "../../utils/services";
import { Alert } from "react-bootstrap";
import { Typography } from "@mui/material";
import Loading from "../../assets/aesthetics/Loading";

export default function SubscriberTotal({ id }) {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const GetTotal = async () => {
    setLoading(true);
    try {
      const path = `subscriberTotal?subscriber=${id}`;
      const res = await httpService.get(path);

      if (res) {
        setLoading(false);
        setTotal(res.data.total);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetTotal();
  }, []);
  return (
    <Alert variant="success">
      <div className="d-flex justify-content-between">
        <div>
          <Typography variant="h2">₦</Typography>
        </div>
        <div>
          <Typography variant="caption" gutterBottom>
            Amount in savings
          </Typography>
          <Typography variant="h6" textAlign={"end"}>
            {total.toLocaleString()}
          </Typography>
          <Loading show={loading} color="success" />
        </div>
      </div>
    </Alert>
  );
}
