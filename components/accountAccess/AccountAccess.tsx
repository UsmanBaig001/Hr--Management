import React from "react";
import useAccountAccess from "./useAccountAccess";
import Input from "../input/Input";
import { EMPLOYEE_ACCOUNT_ACCESS_PROPS } from "@/types/types";

const AccountAccess = ({
  data,
  option,
  setData,
  handleClick,
}: EMPLOYEE_ACCOUNT_ACCESS_PROPS) => {
  const { handleChange } = useAccountAccess({
    data,
    setData,
  });
  if (!data) {
    return null;
  }
  return (
    <form className={`flex flex-col`}>
      <div className={`flex w-full`}>
        <Input
          value={data?.email}
          name={"email"}
          type={"email"}
          onChange={handleChange}
          placeholder={"Email Address"}
        />
        <Input
          value={data?.slackId}
          name={"slackId"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Enter Slack Id"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={data?.skypeId}
          name={"skypeId"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Enter Skype Id"}
        />
        <Input
          value={data?.githubId}
          name={"githubId"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Enter Github Id"}
        />
      </div>
    </form>
  );
};

export default AccountAccess;
