import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Alert, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import Loading from "../../assets/aesthetics/Loading";
import { httpService } from "../../utils/services";

export default function AdminNotifications() {
  const [adminNotifications, setAdminNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetAdminNotifications = async () => {
    const path = "adminNotifications";

    const res = await httpService.get(path);

    setAdminNotifications(res.data.notifications);
  };

  useEffect(() => {
    GetAdminNotifications();
  }, []);

  const columns = [
    {
      name: "DEPOSITOR",
      selector: (row) =>
        `${row.subscriber.firstName} ${row.subscriber.lastName}`,
    },
    {
      name: "AMOUNT",
      selector: (row) => row.amount,
    },
    {
      name: "DATE DEPOSITED",
      selector: (row) => new Date(row.depositDate).toDateString(),
    },
    {
      name: "TIME DEPOSITED",
      selector: (row) => new Date(row.depositDate).toLocaleTimeString(),
    },
  ];

  const ExpandableComponent = ({ data }) => {
    return (
      <div className="p-3">
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            ApproveDeposit(data._id);
          }}
        >
          Approve this Deposit of {data.amount.toLocaleString() || "-"}
        </Button>
        <Loading show={loading} />
      </div>
    );
  };

  const ApproveDeposit = async (id) => {
    try {
      Swal.fire({
        icon: "question",
        title: "Do you want to approve this depost?",
        text: "This cannot be undone",
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLoading(true);
          try {
            const path = `approveDeposit/${id}`;
            const res = await httpService.patch(path, {});

            if (res) {
              window.location.reload();
            }
          } catch (error) {}
        }
      });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <Alert>Notifications to resolve</Alert>
        <hr />
        <div className="border rounded-3">
          <DataTable
            data={adminNotifications}
            columns={columns}
            pagination
            expandableRows
            expandableRowsComponent={ExpandableComponent}
          />
        </div>
      </Container>
    </div>
  );
}
