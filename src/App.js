import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Page from "react-page-loading";
import { grey, brown, blue } from "@mui/material/colors";
import NavigationBar from "./components/NavigationBar";
import MainRoutes from "./routes/Index";
import "./App.css";
import Footer from "./components/Footer";
import { loggedInUser } from "./utils/services";
import { Row } from "react-bootstrap";
import AdminSideMenu from "./components/SideMenus/AdminSideMenu";
import SubcriberSideMenu from "./components/SideMenus/SubscriberSideMenu";

function App() {
  return (
    <div className="App">
      <Page color={blue["A100"]}>
        <NavigationBar />
        {loggedInUser && loggedInUser.role === "admin" ? (
          <Row>
            <div
              className="col-md-3 text-white"
              style={{ backgroundColor: brown[300] }}
            >
              <AdminSideMenu />
            </div>
            <div className="col-md-9 p-3">
              <MainRoutes />
            </div>
          </Row>
        ) : null}
        {loggedInUser && loggedInUser.role === "subscriber" ? (
          <Row>
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
      </Page>
    </div>
  );
}

export default App;
