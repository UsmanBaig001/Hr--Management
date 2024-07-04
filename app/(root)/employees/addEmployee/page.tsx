"use client";
import React from "react";
import useAddEmployee from "./useAddEmployee";
import InfoBar from "@/components/infoBar/InfoBar";
import Documents from "@/components/documents/Documents";
import AccountAccess from "@/components/accountAccess/AccountAccess";
import PersonalInfomation from "@/components/personalInfomation/PersonalInfomation";
import ProfessionalInformation from "@/components/professionalInformation/ProfessionalInformation";
import SubmitButton from "@/components/submitButton/SubmitButton";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const page = () => {
  const {
    option,
    isloading,
    documents,
    handleClick,
    setDocuments,
    handleSubmit,
    personalInfo,
    accountAccess,
    setPersonalInfo,
    setAccountAccess,
    professionalInfo,
    setProfessionalInfo,
  } = useAddEmployee();
  return (
    <DefaultLayout
      heading={"Add New Employee"}
      description={`All Employee > add new employee`}
    >
      <div className="border-[1px] border-borderGrey items-center py-5 px-[10px] ms-[10px] me-[30px] rounded-[10px] ">
        <InfoBar option={option} handleClick={handleClick} />
        {option === 0 && (
          <PersonalInfomation
            data={personalInfo}
            setData={setPersonalInfo}
            handleClick={handleClick}
            option={option}
          />
        )}
        {option === 1 && (
          <ProfessionalInformation
            data={professionalInfo}
            setData={setProfessionalInfo}
            handleClick={handleClick}
            option={option}
          />
        )}
        {option === 2 && (
          <Documents
            data={documents}
            setData={setDocuments}
            handleClick={handleClick}
            option={option}
          />
        )}
        {option === 3 && (
          <>
            <AccountAccess
              data={accountAccess}
              setData={setAccountAccess}
              handleClick={handleClick}
              option={option}
            />
            <div className="flex flex-row-reverse">
              <SubmitButton handleSubmit={handleSubmit} loading={isloading} />
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default page;
