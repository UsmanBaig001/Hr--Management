"use client";
import React from "react";
import Image from "next/image";
import { iconEdit, profilePhoto } from "@/constants/Images";
import SearchBar from "../searchBar/SearchBar";
import PaginationBar from "../paginationBar/PaginationBar";
import { EMPLOYEE_ATTENDACE_TABLE_HEADS } from "@/constants/Constants";
import useAttendanceTable from "./useAttendanceTable";
import {
  ATTENDANCE_TABLE_PROPS,
  EMPLOYEE_ATTENDANCE_DATA,
} from "@/types/types";
import Loader from "../loader/Loader";
import SelectMenu from "../selectMenu/SelectMenu";
import Link from "next/link";

const AttendanceTable = ({
  display,
  showAttendance,
  SearchBarDisplay,
}: ATTENDANCE_TABLE_PROPS) => {
  const {
    tableData,
    handleChange,
    handleUpdate,
    inputEnabled,
    getCheckInTime,
    setInputEnabled,
    searchText,
    setSearchText,
  } = useAttendanceTable();
  return (
    <div className="ms-[10px] me-[30px] overflow-x-auto rounded-[10px] border-[1px] p-5 border-borderGrey mb-[30px] mt-5 shadow-md ">
      <div className={`mb-[30px] ${SearchBarDisplay}`}>
        <SearchBar
          setSearchText={setSearchText}
          searchText={searchText}
          width={330}
        />
        <div className="flex ms-auto">
          {inputEnabled ? (
            <button
              className=" hover:border-[1px] me-5 hover:border-customOrange hover:bg-primaryBlack hover:text-customOrange flex mt-auto py-[13px] px-5 rounded-[10px] bg-customOrange"
              onClick={handleUpdate}
            >
              Update Data
            </button>
          ) : (
            <></>
          )}
          <button
            className="me-[52px] hover:border-[1px] hover:border-customOrange hover:bg-primaryBlack hover:text-customOrange flex mt-auto py-[13px] px-5 rounded-[10px] bg-customOrange"
            onClick={() => setInputEnabled(!inputEnabled)}
          >
            <Image src={iconEdit} alt="Edit Icon" />
            <div className="ms-[10px]">
              {!inputEnabled ? "Edit Profile" : "Cancel Edit"}
            </div>
          </button>
        </div>
      </div>

      <div className={` ${display} mb-[25px] items-center justify-between`}>
        <div className="text-[20px] font-semibold ">Attendance Overview</div>
        <Link
          href={"/attendance"}
          className="border-[1px] py-[9px] px-[10px] rounded-[10px] border-borderGrey"
        >
          View All
        </Link>
      </div>
      <table className="w-full font-light text-sm  text-left rtl:text-right ">
        <thead className="text-[16px] text-customGrey font-light">
          <tr>
            {EMPLOYEE_ATTENDACE_TABLE_HEADS.slice(
              0,
              !showAttendance ? 5 : 6
            ).map((heading, i) => {
              return (
                <th scope="col" className="py-[10px] " key={i}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!tableData ||
            (tableData.length === 0 && (
              <tr>
                {[...Array(5)].map((_, index) => (
                  <td key={index}>
                    <div className="animate-spin rounded-full my-2 h-8 w-8 border-customOrange border-t-2 "></div>
                  </td>
                ))}
              </tr>
            ))}
          {tableData &&
            tableData.map((data: EMPLOYEE_ATTENDANCE_DATA, i: number) => {
              const status = getCheckInTime(data?.checkIn);
              return (
                <tr className="border-t-[1px] border-borderGrey" key={i}>
                  <th scope="row" className=" flex items-center pt-[10px] ">
                    {data.photoURL ? (
                      <img
                        src={data.photoURL}
                        className="rounded-[18px] h-[36px] w-[36px] hidden sm:flex"
                        alt="Photo"
                      />
                    ) : (
                      <Image
                        src={profilePhoto}
                        height={36}
                        width={36}
                        className="rounded-[18px] hidden sm:flex"
                        alt="Photo"
                      />
                    )}

                    <div className="text-[16px] ms-[10px] ">
                      {data?.firstName}
                    </div>
                  </th>
                  <td className="pt-[10px]">
                    {data?.designation.slice(0, 12)}
                  </td>
                  <td className="pt-[10px]">
                    <input
                      className="bg-primaryBlack w-24 outline-none"
                      type="text"
                      name="type"
                      disabled={!inputEnabled}
                      onChange={(e) => handleChange(e, i)}
                      value={data?.type}
                    />
                  </td>
                  <td className="pt-[10px]">
                    <input
                      name="checkIn"
                      disabled={!inputEnabled}
                      onChange={(e) => handleChange(e, i)}
                      className="bg-primaryBlack"
                      type="time"
                      value={data?.checkIn}
                    />
                  </td>
                  <td className="pt-[10px]">
                    <div
                      className={` ${
                        status
                          ? "bg-successBackground text-success"
                          : "bg-dangerBackground text-danger"
                      } w-fit text-[12px] rounded-[4px] px-[9px] py-[3px] font-light`}
                    >
                      {status ? "On Time" : "Late"}
                    </div>
                  </td>
                  {showAttendance ? (
                    <td>
                      <SelectMenu
                        initialValue={data?.attendance}
                        margin={false}
                        height="h-8"
                        width="w-[50%]"
                        label={"Attendance"}
                        options={[
                          { label: "Present", value: "present" },
                          { label: "Absent", value: "absent" },
                          { label: "Leave", value: "leave" },
                        ]}
                        onChange={(e) => handleChange(e, i)}
                      />
                    </td>
                  ) : (
                    <></>
                  )}
                </tr>
              );
            })}
          {!tableData && <Loader />}
        </tbody>
      </table>
      <PaginationBar length={tableData.length} />
    </div>
  );
};

export default AttendanceTable;
