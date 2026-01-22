import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: global error logging
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response || error);
    return Promise.reject(error);
  }
);

export const getExpenses = async () => {
  const { data } = await API.get("/api/expenses");
  return data;
};

export const addExpense = async (expense) => {
  const { data } = await API.post("/api/expenses", expense);
  return data;
};

export const deleteExpense = async (id) => {
  return API.delete(`/api/expenses/${id}`);
};

export const updateExpense = async (id, expense) => {
  const { data } = await API.put(`/api/expenses/${id}`, expense);
  return data;
};

export default API;
