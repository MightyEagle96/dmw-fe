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
  return (
    <div>
      <Container>
        <Alert>
          <Typography>DMW SUBSCRIBERS</Typography>
        </Alert>
        <div className="border ">
          <DataTable data={subscribers} columns={columns} />
        </div>
      </Container>
    </div>
  );
}
