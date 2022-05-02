import { PersonAdd, Save } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { BANKS } from "../../utils/labels";
import img4 from "../../assets/images/img4.jpg";
import Loading from "../../assets/aesthetics/Loading";
import { httpService } from "../../utils/services";

export default function NewSubscriber() {
  const defaultData = {
    password: "test123",
    newAccount: true,
    firstName: "",
    lastName: "",
    email: "",
    accountNumber: "",
    phoneNumber: "",
    bankName: "",
    role: "subscriber",
  };
  const [account, setAccount] = useState(defaultData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setAccount({ ...account, [e.target.name]: e.target.value });

  const CreateSubscriber = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const path = "addNewSubscriber";
      const res = await httpService.post(path, account);

      if (res) {
        setLoading(false);
        setAccount(defaultData);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div>
      <Container>
        <Alert variant="secondary">
          <Typography variant="h5">
            ADD A NEW SUBSCRIBER
            <PersonAdd className="ms-2" />
          </Typography>
        </Alert>
        <Row>
          <div className="col-md-4  ">
            <div>
              <form onSubmit={CreateSubscriber}>
                <div className="mt-2">
                  <TextField
                    label="First Name"
                    name="firstName"
                    helperText="First Name"
                    fullWidth
                    value={account.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    helperText="Last Name"
                    value={account.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    helperText="Email"
                    value={account.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    fullWidth
                    helperText="Phone Number"
                    value={account.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <FormControl fullWidth>
                    <InputLabel id="subBank">Subscriber's Bank</InputLabel>
                    <Select
                      labelId="subBank"
                      label="Subscriber's Bank"
                      name="bankName"
                      value={account.bankName}
                      onChange={handleChange}
                      required
                    >
                      {BANKS.map((b, i) => (
                        <MenuItem key={i} value={b}>
                          {b}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>Select Bank</FormHelperText>
                  </FormControl>
                </div>
                <div className="mt-2">
                  <TextField
                    label="Account Number"
                    name="accountNumber"
                    type="number"
                    fullWidth
                    helperText="Account Number"
                    value={account.accountNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mt-2">
                  <IconButton color="primary" type="submit">
                    <Save />
                  </IconButton>
                  {loading ? <Loading /> : null}
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-8 border-start d-flex align-items-center">
            <img src={img4} className="img-fluid" alt="new subscriber" />
          </div>
        </Row>
      </Container>
    </div>
  );
}
