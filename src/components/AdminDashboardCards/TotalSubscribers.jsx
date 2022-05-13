import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { httpService } from "../../utils/services";
import Loading from "../../assets/aesthetics/Loading";

export default function TotalSubscribers() {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const GetTotal = async () => {
    setLoading(true);
    try {
      const path = "viewSubscribers?role=subscriber";
      const res = await httpService.get(path);

      if (res) {
        setLoading(false);
        setTotal(res.data.subscribers.length);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetTotal();
  }, []);
  return (
    <Alert variant="danger">
      <div className="d-flex justify-content-between">
        <div>
          <Typography variant="h2">
            <i class="fas fa-users    "></i>
          </Typography>
        </div>
        <div>
          <Typography variant="caption" gutterBottom>
            Total Subscribers
          </Typography>
          <Typography variant="h6" textAlign={"end"}>
            {total}
          </Typography>
          <Loading show={loading} />
        </div>
      </div>
    </Alert>
  );
}
