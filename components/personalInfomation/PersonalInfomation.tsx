import React from "react";
import Image from "next/image";
import Input from "../input/Input";
import Button from "../button/Button";
import { iconCamera } from "@/constants/Images";
import SelectMenu from "../selectMenu/SelectMenu";
import { UploadButton } from "@/utils/uploadthing";
import usePersonalInfomation from "./usePersonalInfomation";
import { EMPLOYEE_PERSONAL_INFO_PROPS } from "@/types/types";
import toast from "react-hot-toast";

const PersonalInfomation = ({
  handleClick,
  option,
  data,
  setData,
}: EMPLOYEE_PERSONAL_INFO_PROPS) => {
  const { setProfileURL, handleChange } = usePersonalInfomation({
    data,
    setData,
  });
  if (!data) {
    return null;
  }
  return (
    <form className={`flex flex-col`}>
      <div className="flex ms-[10px] mb-[10px]">
        <UploadButton
          className="w-[40px] outline-none bg-greyShade ut-button:ut-uploading:text-red-300"
          content={{
            allowedContent() {
              return ``;
            },
            button() {
              return (
                <div className="flex mt-auto outline-none focus:outline-none focus:border-none ">
                  <Image src={iconCamera} height={24} width={24} alt="Camera" />
                </div>
              );
            },
          }}
          appearance={{
            container:
              "rounded-[10px] border-[1px] border-borderGrey h-[100px] w-[100px] m-0 p-0",

            allowedContent: "text-transparent",
            button:
              "bg-transparent text-transparent border-none focus:border-none outline-none  focus:outline-none shadow-none ",
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setData((data) => ({
              ...data,
              photoURL: res[0]?.url,
            }));
            setProfileURL(res[0]?.url);
            toast.success("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={data?.firstName}
          name={"firstName"}
          type={"text"}
          onChange={handleChange}
          placeholder={"First Name"}
        />
        <Input
          value={data?.lastName}
          name={"lastName"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Last Name"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={data?.mobileNumber}
          name={"mobileNumber"}
          type={"tel"}
          onChange={handleChange}
          placeholder={"Mobile Number"}
        />
        <Input
          value={data?.emailAddress}
          name={"emailAddress"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Email Address"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={data?.dateOfBirth}
          name={"dateOfBirth"}
          type={"date"}
          onChange={handleChange}
          placeholder={""}
        />
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          label={"Marital Status"}
          options={[
            { label: "Single", value: "single" },
            { label: "Married", value: "married" },
          ]}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full">
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          label={!data?.gender ? "Gender" : data?.gender}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          onChange={handleChange}
        />
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          label={"Nationality"}
          options={[
            { label: "Pakistan", value: "pakistan" },
            {
              label: "Saudi Arabia",
              value: "Saudi Arabia",
            },
          ]}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={data?.address}
          name={"address"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Addrress"}
        />
      </div>
      <div className="flex w-full">
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          label={"City"}
          options={[
            { label: "Faisalabad", value: "faisalabad" },
            { label: "Lahore", value: "lahore" },
          ]}
          onChange={handleChange}
        />
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          label={"State"}
          options={[{ label: "Faisalabad", value: "faisalabad" }]}
          onChange={handleChange}
        />
        <SelectMenu
          margin={true}
          height="h-14"
          width="w-full"
          label={"Zip Code"}
          options={[{ label: "3000", value: "3000" }]}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-row-reverse">
        <Button handleClick={handleClick} option={option} />
      </div>
    </form>
  );
};

export default PersonalInfomation;
