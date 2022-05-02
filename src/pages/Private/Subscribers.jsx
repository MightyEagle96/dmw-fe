import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { httpService } from "../../utils/services";

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);

  const ViewSubscribers = async () => {
    const path = "viewSubscribers?role=subscriber";

    const res = await httpService.get(path);
    setSubscribers(res.data.subscribers);
  };

  useEffect(() => {
    ViewSubscribers();
  }, []);

  const columns = [
    { name: "First Name", selector: (row) => row.firstName },
    { name: "Last Name", selector: (row) => row.lastName },
    { name: "Email", selector: (row) => row.email },
  ];

  const ExpandableComponent = ({ data }) => {
    return (
      <div>
        <Alert variant="danger">
          <div className="d-flex justify-content-between">
            <Typography>Bank Name: {data.bankName}</Typography>
            <Typography>Account Number: {data.accountNumber}</Typography>
            <Typography>Phone Number: {data.phoneNumber || "-"}</Typography>
          </div>
        </Alert>
      </div>
    );
  };
  return (
    <div>
      <Container>
        <Alert>
          <Typography>DMW SUBSCRIBERS</Typography>
        </Alert>
        <div className="border ">
          <DataTable
            data={subscribers}
            columns={columns}
            expandableRows
            expandableRowsComponent={ExpandableComponent}
          />
        </div>
      </Container>
    </div>
  );
}
