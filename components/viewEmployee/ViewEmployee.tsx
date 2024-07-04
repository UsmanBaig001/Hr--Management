"use client";
import {
  iconBriefcase,
  iconEdit,
  iconGamil,
  iconProfile,
} from "@/constants/Images";
import Image from "next/image";
import React from "react";
import ProfileMenu from "../profileMenu/ProfileMenu";
import InfoBar from "../infoBar/InfoBar";
import useViewEmployee from "./useViewEmployee";
import ProfileDataField from "../profileDataField/ProfileDataField";
import {
  PROFILE_ACCOUNT_ACCESS,
  PROFILE_PERSONAL_INFO,
  PROFILE_PROFESSIONAL_INFO,
} from "@/constants/EmployeeInfo";
import FileViewer from "../fileViewer/FileViewer";
import ProfileTable from "../profileTable/ProfileTable";
import {
  PROFILE_ATTENDANCE_TABLE_HEAD,
  PROFILE_LEAVE_TABLE_DATA,
  PROFILE_LEAVE_TABLE_HEADINGS,
  PROFILE_PROJECT_TABLE_DATA,
  PROFILE_PROJECT_TABLE_HEADINGS,
  PROFILE_TABLE_ATTENDANCE_DATA,
} from "@/constants/Constants";
import { EMPLOYEE_DETAILS_PROPS } from "@/types/types";
import Loader from "../loader/Loader";

const ViewEmployee = ({ id, setName }: EMPLOYEE_DETAILS_PROPS) => {
  const {
    option,
    handleClick,
    inputEnabled,
    menuOption,
    setInputEnabled,
    handleMenuClick,
    handleUpdate,
    handleChange,
    data,
  } = useViewEmployee({
    id,
    setName,
  });
  if (!data) {
    return <Loader />;
  }
  return (
    <div className="p-5 rounded-[10px] border-[1px] border-borderGrey">
      <div className="flex border-b-[1px] border-borderGrey pb-8 justify-between">
        <div className="flex">
          <div className="rounded-[10px]">
            <Image src={iconProfile} alt="" />
          </div>
          <div className="flex flex-col ms-4">
            <div className="font-semibold text-2xl">
              {data?.personalInfo?.firstName +
                " " +
                data?.personalInfo?.lastName}
            </div>
            <div className="flex my-2">
              <Image src={iconBriefcase} alt="Icon Gmail" />
              <div className="font-light ms-[10px] ">
                {data?.professionalInfo?.employmentType}
              </div>
            </div>
            <div className="flex ">
              <Image src={iconGamil} alt="Icon Gmail" />
              <div className="font-light ms-[10px]">
                {data?.personalInfo?.emailAddress}
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
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
      <div className="flex mt-[30px]">
        <ProfileMenu
          handleMenuClick={handleMenuClick}
          menuOption={menuOption}
        />
        <div className="flex flex-col ms-[20px]">
          {menuOption === 0 && (
            <>
              <InfoBar option={option} handleClick={handleClick} />
              <div className="flex flex-wrap ms-[10px] gap-4 ">
                {option === 0 &&
                  PROFILE_PERSONAL_INFO.map((item, i) => {
                    return (
                      <ProfileDataField
                        name={item.key}
                        section={"personalInfo"}
                        handleChange={handleChange}
                        inputEnabled={inputEnabled}
                        heading={item.label}
                        value={data?.personalInfo[item.key]}
                        key={i}
                      />
                    );
                  })}
                {option === 1 &&
                  PROFILE_PROFESSIONAL_INFO.map((item, i) => {
                    return (
                      <ProfileDataField
                        section={"professionalInfo"}
                        name={item.key}
                        handleChange={handleChange}
                        inputEnabled={inputEnabled}
                        heading={item.label}
                        value={data?.professionalInfo[item.key]}
                        key={i}
                      />
                    );
                  })}
                {option === 2 && (
                  <>
                    <FileViewer FileName="Salary Slip" />
                    <FileViewer FileName="Salary Slip" />
                    <FileViewer FileName="Salary Slip" />
                    <FileViewer FileName="Salary Slip" />
                  </>
                )}
                {option === 3 &&
                  PROFILE_ACCOUNT_ACCESS.map((item, i) => {
                    return (
                      <ProfileDataField
                        key={i}
                        section={"accountAccess"}
                        name={item.key}
                        handleChange={handleChange}
                        inputEnabled={inputEnabled}
                        heading={item.label}
                        value={data?.accountAccess[item.key]}
                      />
                    );
                  })}
              </div>
            </>
          )}
          {menuOption === 1 && (
            <ProfileTable
              tableHeadings={PROFILE_ATTENDANCE_TABLE_HEAD}
              tableData={PROFILE_TABLE_ATTENDANCE_DATA}
            />
          )}
          {menuOption === 2 && (
            <ProfileTable
              tableHeadings={PROFILE_PROJECT_TABLE_HEADINGS}
              tableData={PROFILE_PROJECT_TABLE_DATA}
            />
          )}
          {menuOption === 3 && (
            <ProfileTable
              tableHeadings={PROFILE_LEAVE_TABLE_HEADINGS}
              tableData={PROFILE_LEAVE_TABLE_DATA}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
