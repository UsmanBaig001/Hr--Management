import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CustomChangeEvent, EMPLOYEE_PROFESSIONAL_DATA } from "@/types/types";

const useProfessionalInformation = ({
  data,
  setData,
}: {
  data: EMPLOYEE_PROFESSIONAL_DATA | undefined;
  setData: Dispatch<SetStateAction<EMPLOYEE_PROFESSIONAL_DATA>>;
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

export default useProfessionalInformation;
