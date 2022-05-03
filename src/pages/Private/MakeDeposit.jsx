import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import Loading from "../../assets/aesthetics/Loading";
import { httpService } from "../../utils/services";

export default function MakeDeposit() {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const MakeDeposit = async () => {
    try {
      Swal.fire({
        icon: "question",
        title: "Do you want to deposit this amount?",
        text: "This cannot be undone after now",
        confirmButtonText: "Yes, Deposit",
        cancelButtonText: "No do not",
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLoading(true);
          const path = "makeDeposit";

          const res = await httpService.post(path, { amount });
          if (res) {
            setLoading(false);
            setAmount(0);
          }
        }
      });
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div>
      <Container>
        <Alert>
          <Typography>MAKE A DEPOSIT</Typography>
        </Alert>
        <hr />
        <div>
          <div>
            <TextField
              type="number"
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="mt-2">
            {" "}
            <Button variant="contained" onClick={MakeDeposit}>
              Make Deposit
            </Button>{" "}
            <Loading show={loading} />
          </div>
        </div>
      </Container>
    </div>
  );
}
