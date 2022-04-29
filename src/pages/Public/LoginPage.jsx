import {
  Email,
  Login,
  Savings,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  TextField,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { httpService } from "../../utils/services";
import "./LoginPage.css";
import { blue } from "@mui/material/colors";
import notes from "../../assets/images/notes.jpg";

export default function LoginPage() {
  const [account, setAccount] = useState({});
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const LoginFunc = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const path = "login";
      const res = await httpService.post(path, account);
      if (res) {
        localStorage.setItem(process.env.REACT_APP_TOKEN, res.data.accessToken);
        localStorage.setItem(
          process.env.REACT_APP_PROJECT_NAME,
          JSON.stringify(res.data.user)
        );
        window.location.assign("/");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <Container classNamme="">
        <div className="d-none d-md-block">
          <div className="loginBanner mt-3">
            <Row className="m-0">
              <div className="col-md-6"></div>
              <div className="col-md-6 loginDiv d-flex align-items-center p-4  ">
                <div>
                  <div>
                    <Typography variant="h5" color="GrayText">
                      LOG INTO YOUR DMW ACCOUNT
                    </Typography>
                  </div>
                  <div className="mt-4">
                    <TextField
                      fullWidth
                      label="Email"
                      helperText="Email Address"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mt-3">
                    <TextField
                      fullWidth
                      label="Password"
                      helperText="Password"
                      type="password"
                    />
                  </div>
                  <div className="mt-3">
                    <Button endIcon={<Login />} variant="contained">
                      login
                    </Button>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </div>
        <div className="d-sm-block d-md-none p-3 border mt-3 shadow-sm">
          <div>
            <div className="mb-4">
              {" "}
              <Typography
                variant="h5"
                sx={{ fontWeight: 100 }}
                color="GrayText"
                textAlign="center"
              >
                LOG INTO YOUR DMW ACCOUNT
              </Typography>
              <div className="mt-2">
                <Avatar>
                  <Savings />
                </Avatar>
              </div>
            </div>

            <form onSubmit={LoginFunc}>
              <div className="mb-3">
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <Email color="primary" />
                      </InputAdornment>
                    }
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={account.email}
                  ></OutlinedInput>
                </FormControl>
              </div>
              <div className="mb-3">
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Password</InputLabel>
                  <OutlinedInput
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleShow}>
                          {!show ? (
                            <Visibility color="primary" />
                          ) : (
                            <VisibilityOff color="error" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    value={account.password}
                    type={show ? "text" : "password"}
                  ></OutlinedInput>
                </FormControl>
              </div>
              <div>
                <Button
                  endIcon={<Login />}
                  variant="contained"
                  className="me-2"
                  type="submit"
                >
                  Login
                </Button>
                {loading ? (
                  <Spinner animation="border" size="sm" variant="primary" />
                ) : null}
              </div>
            </form>
            <div className="d-flex justify-content-center mt-3">
              <Avatar
                src={notes}
                variant="rounded"
                sx={{ height: 300, width: 300 }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
