import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";
import Error from "./components/error/Error";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import CreateEmployee from "./components/createEmployee/CreateEmployee";
import EmployeeList from "./components/employeeList/EmployeeList";
import "./App.css";

function BasicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
