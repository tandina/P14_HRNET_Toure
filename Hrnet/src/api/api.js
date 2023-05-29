import axios from "axios";

export const addEmployee = async (employeeData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/employee",
      employeeData
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const deleteEmployee = async (employeeId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/employee/${employeeId}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllEmployees = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/employee");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
