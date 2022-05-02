import { PersonAdd } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";
import React from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { BANKS } from "../../utils/labels";
import img4 from "../../assets/images/img4.jpg";

export default function NewSubscriber() {
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
              <form>
                <div className="mt-2">
                  <TextField
                    label="First Name"
                    name="firstName"
                    helperText="First Name"
                    fullWidth
                  />
                </div>
                <div className="mt-2">
                  <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    helperText="Last Name"
                  />
                </div>
                <div className="mt-2">
                  <FormControl fullWidth>
                    <InputLabel id="subBank">Subscriber's Bank</InputLabel>
                    <Select labelId="subBank" label="Subscriber's Bank">
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
                  />
                </div>
                <div className="mt-2">
                  <Button variant="contained">Add</Button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-8 border-start">
            <img src={img4} className="img-fluid" alt="new subscriber" />
          </div>
        </Row>
      </Container>
    </div>
  );
}
