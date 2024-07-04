"use client";
import React from "react";
import StatsCardGroup from "../statsCard/StatsCardGroup";
import AttendanceTable from "../attendanceTable/AttendanceTable";
import useDashboard from "./useDashboard";
import Loader from "../loader/Loader";
import AttendanceChart from "../attendanceChart/AttendanceChart";

function Dashboard() {
  const { employeeArray } = useDashboard();
  if (!employeeArray) return <Loader />;
  return (
    <>
      <StatsCardGroup employeesArray={employeeArray} />
      <AttendanceChart />
      <AttendanceTable
        showAttendance={false}
        display={"flex"}
        SearchBarDisplay={"hidden"}
      />
    </>
  );
}

export default Dashboard;
