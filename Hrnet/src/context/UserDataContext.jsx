// import React, { createContext, useContext, useState } from "react";
// import { EMPLOYEE_MAIN_DATA } from "../__mocks__/mockData";

// const EmployeeContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [employees, setEmployees] = useState(EMPLOYEE_MAIN_DATA);

//   const addEmployee = (employee) => {
//     const newEmployee = {
//       id: employees.length + 1,
//       userInfos: employee,
//     };

//     setEmployees([...employees, newEmployee]);
//   };

//   return (
//     <EmployeeContext.Provider value={{ employees, addEmployee }}>
//       {children}
//     </EmployeeContext.Provider>
//   );
// };

// const useData = () => useContext(EmployeeContext);

// export { useData };
