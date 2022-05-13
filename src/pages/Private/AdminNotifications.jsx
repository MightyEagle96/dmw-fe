import { Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { Alert, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import Loading from "../../assets/aesthetics/Loading";
import { httpService } from "../../utils/services";
import { ReloadContext } from "../../Contexts/ReloadContext";

export default function AdminNotifications() {
  const { setAdminNotifications } = useContext(ReloadContext);
  const [adminNotifications, set_AdminNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetAdminNotifications = async () => {
    const path = "adminNotifications";

    const res = await httpService.get(path);

    set_AdminNotifications(res.data.notifications);
    setAdminNotifications(res.data.notifications.length);
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
          className="me-1"
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
              GetAdminNotifications();
              setLoading(false);
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
