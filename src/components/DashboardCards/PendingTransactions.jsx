import React, { useState, useEffect } from "react";
import { httpService } from "../../utils/services";
import { Alert } from "react-bootstrap";
import { Typography } from "@mui/material";
import Loading from "../../assets/aesthetics/Loading";
import { Pending } from "@mui/icons-material";

export default function PendingTransactions() {
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const GetTotal = async () => {
    setLoading(true);
    try {
      const path = "pendingTransactions";
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
    <Alert variant="danger" className="col-md-3">
      <div className="d-flex justify-content-between">
        <div>
          <Pending sx={{ height: 60, width: 60 }} />
        </div>
        <div>
          <Typography variant="caption" gutterBottom>
            Pending Transactions
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
