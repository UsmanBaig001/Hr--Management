import { CustomChangeEvent, EMPLOYEE_ACCOUNT_ACCESS_DATA } from "@/types/types";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const useAccountAccess = ({
  data,
  setData,
}: {
  data: EMPLOYEE_ACCOUNT_ACCESS_DATA | undefined;
  setData: Dispatch<SetStateAction<EMPLOYEE_ACCOUNT_ACCESS_DATA>>;
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | CustomChangeEvent
  ) => {
    if (data) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return { handleChange };
};

export default useAccountAccess;
