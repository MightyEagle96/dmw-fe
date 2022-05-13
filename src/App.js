import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Page from "react-page-loading";
import { grey, blue } from "@mui/material/colors";
import NavigationBar from "./components/NavigationBar";
import MainRoutes from "./routes/Index";
import "./App.css";
import Footer from "./components/Footer";
import { loggedInUser } from "./utils/services";
import { Row } from "react-bootstrap";
import AdminSideMenu from "./components/SideMenus/AdminSideMenu";
import SubcriberSideMenu from "./components/SideMenus/SubscriberSideMenu";
import { ReloadContext } from "./Contexts/ReloadContext";
import React, { useState } from "react";

function App() {
  const [adminNotifications, setAdminNotifications] = useState(0);

  return (
    <div className="App">
      <Page color={blue["A100"]}>
        <ReloadContext.Provider
          value={{ adminNotifications, setAdminNotifications }}
        >
          <NavigationBar />
          {loggedInUser && loggedInUser.role === "admin" ? (
            <Row className="mt-5">
              <div className="col-md-3" style={{ backgroundColor: grey[200] }}>
                <AdminSideMenu />
              </div>
              <div className="col-md-9 p-3">
                <MainRoutes />
              </div>
            </Row>
          ) : null}
          {loggedInUser && loggedInUser.role === "subscriber" ? (
            <Row className="mt-5">
              <div className="col-md-3" style={{ backgroundColor: grey[50] }}>
                <SubcriberSideMenu />
              </div>
              <div className="col-md-9 p-3">
                <MainRoutes />
              </div>
            </Row>
          ) : null}

          {!loggedInUser ? <MainRoutes /> : null}
          <Footer />
        </ReloadContext.Provider>
      </Page>
    </div>
  );
}

export default App;
