import { CustomChangeEvent } from "@/types/types";
import React, { ChangeEvent } from "react";

const ProfileDataField = ({
  heading,
  value,
  name,
  section,
  inputEnabled,
  handleChange,
}: {
  heading: string;
  value: string;
  name: string;
  section: "personalInfo" | "professionalInfo" | "accountAccess" | "documents";
  inputEnabled: boolean;
  handleChange: (
    event:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | CustomChangeEvent,
    section: "personalInfo" | "professionalInfo" | "accountAccess" | "documents"
  ) => void;
}) => {
  return (
    <div className="flex flex-col w-[374px]  border-b-[1px] border-borderGrey pb-[10px] ">
      <div className="font-light text-customGrey text-[14px]">{heading}</div>
      <input
        name={name}
        onChange={(e) => handleChange(e, section)}
        value={value}
        className="mt-[5px] font-light bg-primaryBlack outline-none"
        disabled={!inputEnabled}
      />
    </div>
  );
};

export default ProfileDataField;
