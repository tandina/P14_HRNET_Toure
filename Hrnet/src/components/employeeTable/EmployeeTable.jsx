import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../../api/api";

export default function EmployeeTable() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [globalFilter, setGlobalFilter] = useState("");
  const pageSizeOptions = [10, 25, 50, 100];
  const [open, setOpen] = useState(false);
  const [activeSorting, setActiveSorting] = useState("");

  var newLang = "fr";
  document.documentElement.lang = newLang;

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => {
        const valueA =
          typeof a[col] === "string" ? a[col].toLowerCase() : a[col];
        const valueB =
          typeof b[col] === "string" ? b[col].toLowerCase() : b[col];
        return valueA > valueB ? 1 : -1;
      });
      setData(sorted);
      setOrder("DSC");
      setActiveSorting(col);
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => {
        const valueA =
          typeof a[col] === "string" ? a[col].toLowerCase() : a[col];
        const valueB =
          typeof b[col] === "string" ? b[col].toLowerCase() : b[col];
        return valueA < valueB ? 1 : -1;
      });
      setData(sorted);
      setOrder("ASC");
      setActiveSorting(col);
    }
  };
  console.log(order);

  const handleOpen = (col) => {
    setOpen(col === activeSorting ? !open : true);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesData = await getAllEmployees();
        setData(employeesData);
        console.log(employeesData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);
  console.log(data);

  // Fonction de filtrage global
  const filteredData = data.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(globalFilter.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(globalFilter.toLowerCase()) ||
      employee.dateOfStart.toLowerCase().includes(globalFilter.toLowerCase()) ||
      employee.département.toLowerCase().includes(globalFilter.toLowerCase()) ||
      employee.birthdate.toLowerCase().includes(globalFilter.toLowerCase()) ||
      employee.street.toLowerCase().includes(globalFilter.toLowerCase()) ||
      employee.city.toLowerCase().includes(globalFilter.toLowerCase()) ||
      employee.town.toLowerCase().includes(globalFilter.toLowerCase())
    );
  });

  // Pagination
  const pageCount = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const goToFirstPage = () => {
    setPageIndex(0);
  };

  const goToLastPage = () => {
    setPageIndex(pageCount - 1);
  };

  const goToPreviousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const goToNextPage = () => {
    if (pageIndex < pageCount - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  return (
    <div role="main" className="container">
      <h1>Liste des employées</h1>
      <div>
        <input
          type="text"
          value={globalFilter}
          className="searchBar"
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Recherche..."
        />
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th
              className="th-style"
              onClick={() => {
                sorting("firstName");
                handleOpen("firstName");
              }}
            >
              <div className="dropdown-text ">
                <div>First Name</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "firstName" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
            <th
              className="th-style"
              onClick={() => {
                sorting("lastName");
                handleOpen("lastName");
              }}
            >
              <div className="dropdown-text ">
                <div>Last Name</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "lastName" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
            <th
              className="th-style"
              onClick={() => {
                sorting("dateOfStart");
                handleOpen("dateOfStart");
              }}
            >
              <div className="dropdown-text ">
                <div>Start date</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "dateOfStart" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
            <th
              role="region"
              aria-label="Nom de la région"
              className="th-style"
              onClick={() => {
                sorting("département");
                handleOpen("département");
              }}
            >
              <div className="dropdown-text ">
                <div>Département</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "département" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
            <th
              className="th-style"
              onClick={() => {
                sorting("birthdate");
                handleOpen("birthdate");
              }}
            >
              <div className="dropdown-text ">
                <div>Birthdate</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "birthdate" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
            <th
              className="th-style"
              onClick={() => {
                sorting("street");
                handleOpen("street");
              }}
            >
              <div className="dropdown-text ">
                <div>Street</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "street" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
            <th
              className="th-style"
              onClick={() => {
                sorting("city");
                handleOpen("city");
              }}
            >
              <div className="dropdown-text ">
                <div>City</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "city" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
            <th
              className="th-style"
              onClick={() => {
                sorting("town");
                handleOpen("town");
              }}
            >
              <div className="dropdown-text ">
                <div>State</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "town" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
            <th
              className="th-style"
              onClick={() => {
                sorting("zipcode");
                handleOpen("zipcode");
              }}
            >
              <div className="dropdown-text ">
                <div>Zip code</div>
                <div
                  className="material-icons"
                  style={{
                    transform: `rotate(${
                      open && activeSorting === "zipcode" ? 180 : 0
                    }deg)`,
                  }}
                >
                  expand_more
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dateOfStart}</td>
              <td>{employee.département}</td>
              <td>{employee.birthdate}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.town}</td>
              <td>{employee.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div>
          <label>Affichage par page:</label>
          <select
            aria-label="nombre d'employer par page"
            value={pageSize}
            onChange={(e) => setPageSize(parseInt(e.target.value))}
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          {pageIndex * pageSize + 1} -{" "}
          {Math.min((pageIndex + 1) * pageSize, filteredData.length)} sur{" "}
          {filteredData.length} entrées
        </div>
        <div>
          <button onClick={goToFirstPage} disabled={pageIndex === 0}>
            Premier
          </button>
          <button onClick={goToPreviousPage} disabled={pageIndex === 0}>
            Précédent
          </button>
          <button onClick={goToNextPage} disabled={pageIndex === pageCount - 1}>
            Suivant
          </button>
          <button onClick={goToLastPage} disabled={pageIndex === pageCount - 1}>
            Dernier
          </button>
        </div>
      </div>
    </div>
  );
}
