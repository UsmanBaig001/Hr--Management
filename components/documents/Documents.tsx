"use client";
import React from "react";
import useDocuments from "./useDocuments";
import UploadFile from "../uploadFile/UploadFile";
import Button from "../button/Button";
import { EMPLOYEE_DOCUMENTS_PROPS } from "@/types/types";

const Documents = ({
  handleClick,
  option,
  data,
  setData,
}: EMPLOYEE_DOCUMENTS_PROPS) => {
  const { handleFileChange } = useDocuments({
    data,
    setData,
  });
  return (
    <div className="p-[10px]">
      <div className="flex w-full">
        <UploadFile
          title={"Upload Appointment Letter"}
          onFileChange={(file) => handleFileChange("appointmentLetter", file)}
        />
        <UploadFile
          title={"Upload Salary Slips"}
          onFileChange={(file) => handleFileChange("salarySlip", file)}
        />
      </div>
      <div className="flex w-full">
        <UploadFile
          title={"Upload Reliving Letter"}
          onFileChange={(file) => handleFileChange("relivingLetter", file)}
        />
        <UploadFile
          title={"Upload Experience Letter"}
          onFileChange={(file) => handleFileChange("experienceLetter", file)}
        />
      </div>
      <div className="flex flex-row-reverse">
        <Button handleClick={handleClick} option={option} />
      </div>
    </div>
  );
};

export default Documents;
