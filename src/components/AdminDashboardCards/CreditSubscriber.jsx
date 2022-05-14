import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { httpService } from "../../utils/services";
import Loading from "../../assets/aesthetics/Loading";
import Swal from "sweetalert2";

export default function CreditSubscriber({ subscriber }) {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const Credit = async () => {
    Swal.fire({
      icon: "question",
      title: "Credit this subscriber?",
      text: `Are you sure you want to credit this subscriber with ${amount}?`,
      showCancelButton: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          const path = "creditSubscriber";

          const res = await httpService.post(path, { subscriber, amount });
          if (res) {
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
        }
      }
    });
  };

  return (
    <Alert variant="light border">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <Typography variant="h2">
            {" "}
            <i class="fa fa-repeat" aria-hidden="true"></i>
          </Typography>
        </div>
        <div>
          <div className="mb-2">
            {" "}
            <Typography variant="caption">Credit Subscriber</Typography>
          </div>
          <div className="mb-1">
            <TextField
              type="number"
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              disabled={amount <= 0 ? true : false}
              onClick={Credit}
            >
              Credit
            </Button>{" "}
            <Loading show={loading} color="dark" />
          </div>
          <div></div>
        </div>
      </div>
    </Alert>
  );
}
