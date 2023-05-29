import { Link } from "react-router-dom";
import EmployeeTable from "../employeeTable/EmployeeTable";

export default function EmployeeList() {
  return (
    <>
      <EmployeeTable />
      <Link to="/">
        <div className="add-worker">
          {" "}
          <h2>Ajout d'un nouvel employer</h2>
        </div>
      </Link>
    </>
  );
}
