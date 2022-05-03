import { Chip, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Loading from "../../assets/aesthetics/Loading";
import { httpService, loggedInUser } from "../../utils/services";

export default function SubscriberRecords() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetRecords = async () => {
    try {
      setLoading(true);
      const path = `subscriberRecords?subscriber=${loggedInUser._id}`;

      const res = await httpService.get(path);

      if (res) {
        setRecords(res.data.records);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetRecords();
  }, []);

  const columns = [
    { name: "Amount", selector: (row) => row.amount },

    {
      name: "Date of Deposit",
      selector: (row) => new Date(row.depositDate).toDateString(),
    },
    {
      name: "Time of Deposit",
      selector: (row) => new Date(row.depositDate).toLocaleTimeString(),
    },
    {
      name: "Approved",
      selector: (row) =>
        row.approved ? (
          <Chip label="YES" color="success" />
        ) : (
          <Chip label="NO" color="error" />
        ),
    },
  ];
  return (
    <div>
      <Container>
        <Alert variant="dark">
          <Typography variant="h5">ALL RECORDS</Typography>
        </Alert>
        <div>
          <Loading show={loading} />
        </div>
        <div className="border rounded-3">
          <DataTable data={records} columns={columns} pagination />
        </div>
      </Container>
    </div>
  );
}
