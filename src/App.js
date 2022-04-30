import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Page from "react-page-loading";
import { blue } from "@mui/material/colors";
import NavigationBar from "./components/NavigationBar";
import MainRoutes from "./routes/Index";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Page color={blue["A100"]}>
        <NavigationBar />
        <MainRoutes />
        <Footer />
      </Page>
    </div>
  );
}

export default App;
