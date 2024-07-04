import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import SelectMenu from "../selectMenu/SelectMenu";
import useProfessionalInformation from "./useProfessionalInformation";
import { EMPLOYEE_PROFESSIONAL_INFO_PROPS } from "@/types/types";

const ProfessionalInformation = ({
  handleClick,
  option,
  data,
  setData,
}: EMPLOYEE_PROFESSIONAL_INFO_PROPS) => {
  const { handleChange } = useProfessionalInformation({
    data,
    setData,
  });
  if (!data) {
    return null;
  }
  return (
    <form className={`flex flex-col flex-wrap`}>
      <div className="flex w-full">
        <Input
          value={data?.employeeId}
          name={"employeeId"}
          type={"text"}
          onChange={handleChange}
          placeholder={"employeeId"}
        />
        <Input
          value={data?.userName}
          name={"userName"}
          type={"text"}
          onChange={handleChange}
          placeholder={"userName"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={data?.employmentType}
          name={"employmentType"}
          type={"text"}
          onChange={handleChange}
          placeholder={"emplopeeType"}
        />
        <Input
          value={data?.email}
          name={"email"}
          type={"email"}
          onChange={handleChange}
          placeholder={"Email Address"}
        />
      </div>
      <div className="flex w-full">
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          onChange={handleChange}
          label={"Department"}
          options={[
            { label: "Software Developers", value: "Software Development" },
            { label: "Social media", value: "Social Media" },
            { label: "Digital marketing", value: "Digital marketing" },
            { label: "Video Animation", value: "Video Animation" },
          ]}
        />
        <Input
          value={data?.designation}
          name={"designation"}
          type={"text"}
          onChange={handleChange}
          placeholder={"designation"}
        />
      </div>
      <div className="flex w-full">
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          onChange={handleChange}
          label={"Working Days"}
          options={[
            { label: "Five", value: "5" },
            { label: "Six", value: "6" },
            { label: "Seven", value: "7" },
          ]}
        />
        <Input
          value={data?.joiningDate}
          name={"joiningDate"}
          type={"date"}
          onChange={handleChange}
          placeholder={"Joining Date"}
        />
      </div>
      <div className="flex w-full">
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          onChange={handleChange}
          label={"Office Location"}
          options={[{ label: "Faisalabad", value: "faisalabad" }]}
        />
      </div>
      <div className="flex flex-row-reverse">
        <Button handleClick={handleClick} option={option} />
      </div>
    </form>
  );
};

export default ProfessionalInformation;
