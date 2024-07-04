import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axiosInstance/axiosInstance";
import { EMPLOYEE_DATA } from "@/types/types";

export type DetailsState = {
  employeeDetails: EMPLOYEE_DATA | null;
  isLoading: boolean;
  error: string | null;
};
const initialState: DetailsState = {
  employeeDetails: null,
  isLoading: false,
  error: null,
};

export const fetchEmployeeDetails = createAsyncThunk(
  "employee/fetchEmployeeDetails",
  async (id: string) => {
    try {
      const response = await instance.get(`details?id=${id}`);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching employee details:", error);
      throw new Error(error?.message || "Error fetching employee details");
    }
  }
);

const employeeDetailsSlice = createSlice({
  name: "employeeDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEmployeeDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeDetails = action.payload;
      })
      .addCase(fetchEmployeeDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error as string;
      });
  },
});

export default employeeDetailsSlice.reducer;
