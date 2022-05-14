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
import { red } from "@mui/material/colors";
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
      <Container>
        <div className="d-none d-md-block">
          <div className="loginBanner mt-3 mb-3">
            <Row className="m-0">
              <div className="col-md-6"></div>
              <div className="col-md-6 loginDiv d-flex align-items-center p-4  ">
                <div>
                  <div>
                    <Typography variant="h5" color="GrayText">
                      LOG INTO YOUR DMW ACCOUNT
                    </Typography>
                  </div>
                  <form onSubmit={LoginFunc}>
                    <div className="mt-4">
                      <TextField
                        fullWidth
                        label="Email"
                        helperText="Email Address"
                        type="email"
                        required
                        name="email"
                        value={account.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-3">
                      <TextField
                        fullWidth
                        label="Password"
                        helperText="Password"
                        type="password"
                        name="password"
                        value={account.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-2">
                      <Button
                        endIcon={<Login />}
                        variant="contained"
                        className="me-2"
                        type="submit"
                      >
                        login
                      </Button>
                      {loading ? (
                        <Spinner
                          animation="border"
                          size="sm"
                          variant="primary"
                        />
                      ) : null}
                    </div>
                    <div className="mt-2">
                      <Typography>
                        Don't have an acount?
                        <Button sx={{ color: red[500] }}>Sign Up</Button>
                      </Typography>
                    </div>
                  </form>
                </div>
              </div>
            </Row>
          </div>
        </div>
        <div className="d-sm-block d-md-none p-3 border mt-5 shadow-sm">
          <div>
            <div className="mb-4">
              {" "}
              <Typography
                variant="h5"
                sx={{ fontWeight: 700 }}
                color="GrayText"
                textAlign="center"
              >
                LOG INTO YOUR DMW ACCOUNT
              </Typography>
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
            <div className="mt-2">
              <Typography>
                Don't have an acount?
                <Button sx={{ color: red[500] }}>Sign Up</Button>
              </Typography>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <img
                src={notes}
                className="img-fluid rounded-3 shadow-md"
                alt="notes"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
