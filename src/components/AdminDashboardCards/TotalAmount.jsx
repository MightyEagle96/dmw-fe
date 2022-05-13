import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { Typography } from "@mui/material";
import { httpService } from "../../utils/services";
import Loading from "../../assets/aesthetics/Loading";

export default function TotalAmount() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const GetTotal = async () => {
    setLoading(true);
    try {
      const path = "totalAmount";
      const res = await httpService.get(path);

      if (res) {
        setLoading(false);
        setTotalAmount(res.data.totalAmount);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetTotal();
  }, []);
  return (
    <Alert>
      <div className="d-flex justify-content-between">
        <div>
          <Typography variant="h2">₦</Typography>
        </div>
        <div>
          <Typography variant="caption" gutterBottom>
            Total Amount
          </Typography>
          <Typography variant="h6" textAlign={"end"}>
            {totalAmount.toLocaleString()}
          </Typography>
          <Loading show={loading} />
        </div>
      </div>
    </Alert>
  );
}
