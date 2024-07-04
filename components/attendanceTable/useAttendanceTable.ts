"use client";
import toast from "react-hot-toast";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CustomChangeEvent, EMPLOYEE_ATTENDANCE_DATA } from "@/types/types";
import { fetchEmployees } from "@/redux/slices/employeesSlice";
import { bulkUpdateAttendance } from "@/redux/slices/attendanceUpdateSlice";

const useAttendanceTable = () => {
  const [inputEnabled, setInputEnabled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [tableData, setTableData] = useState<EMPLOYEE_ATTENDANCE_DATA[]>([]);
  const dispatch = useAppDispatch();
  const allEmployees: EMPLOYEE_ATTENDANCE_DATA[] = useAppSelector(
    (state) => state.employees.employeeData
  );
  useEffect(() => {
    const fetchEmployeesData = async () => {
      const data = await dispatch(fetchEmployees());
      setTableData(data.payload);
    };
    fetchEmployeesData();
  }, [dispatch, !allEmployees]);
  const filteredData = tableData.filter(
    (employee) =>
      employee?.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      employee?.type.toLowerCase().includes(searchText.toLowerCase()) ||
      employee?.designation.toLowerCase().includes(searchText.toLowerCase())
  );
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | CustomChangeEvent,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedTableData = [...filteredData];
    updatedTableData[index] = { ...updatedTableData[index], [name]: value };
    setTableData(updatedTableData);
  };
  const handleUpdate = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await dispatch(bulkUpdateAttendance(tableData));
      toast.success("Updated successfully in table data");
    } catch (error) {
      console.log("error", error);
    }
  };

  const getCheckInTime = (time: string) => {
    const checkInTimeString = `2024-07-02T${time}:00`;
    const checkInTime = new Date(checkInTimeString);
    const standardCheckInTime = new Date();
    standardCheckInTime.setHours(8, 0, 0, 0);
    const isOnTime = checkInTime <= standardCheckInTime;
    return isOnTime;
  };
  return {
    tableData: filteredData,
    getCheckInTime,
    handleChange,
    inputEnabled,
    setInputEnabled,
    handleUpdate,
    searchText,
    setSearchText,
  };
};

export default useAttendanceTable;
