import React, { useEffect, useState } from "react";
import commercialisation from "../../Assets/commercialisation.svg";
import employeesPic from "../../Assets/employees.svg";
import ventes from "../../Assets/ventes.svg";
import rh from "../../Assets/rh.svg";
import juridique from "../../Assets/juridique.svg";
import { getAllEmployees } from "../../api/api";

export default function EmployeeList(update) {
  const [employees, setEmployees] = useState([]);
  const dpt = (department) =>
    employees.filter(
      (employee) =>
        employee["département"].toLowerCase() === department.toLowerCase()
    ).length;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesData = await getAllEmployees();
        setEmployees(employeesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, [update]);
  console.log(employees);
  return (
    <>
      <div className="employees-container">
        <div>
          <img
            src={employeesPic}
            alt="employees Icon"
            className="employees-logo"
          />
          <p>Nombre d'employee</p>
          <p>{employees.length}</p>
        </div>
        <div>
          <img src={ventes} alt="commercial Icon" className="sales-logo" />
          <p>Département Ventes</p>
          <p>{dpt("Ventes")}</p>
        </div>
        <div>
          <img
            src={commercialisation}
            alt="commercial Icon"
            className="commercial-logo"
          />
          <p>Département Commercialisation</p>
          <p>{dpt("Commercial") + dpt("Commercialisation")}</p>
        </div>
        <div>
          <img src={rh} alt="commercial Icon" className="rh-logo" />
          <p>Département Ressources humaines</p>
          <p>{dpt("RH")}</p>
        </div>
        <div>
          <img
            src={juridique}
            alt="commercial Icon"
            className="juridique-logo"
          />
          <p>Département Juridique</p>
          <p>{dpt("Juridique")}</p>
        </div>
      </div>
    </>
  );
}
