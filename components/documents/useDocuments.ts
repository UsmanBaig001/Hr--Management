import { INITIAL_STATE_DOCUMENTS_FILES } from "@/constants/IntialStates";
import { EMPLOYEE_DOCUMENTS_DATA } from "@/types/types";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const useDocuments = ({
  data,
  setData,
}: {
  data: EMPLOYEE_DOCUMENTS_DATA | undefined;
  setData: Dispatch<SetStateAction<EMPLOYEE_DOCUMENTS_DATA>>;
}) => {
  const handleFileChange = (key: string, file: string) => {
    setData((prevState) => ({
      ...prevState,
      [key]: file,
    }));
  };

  return {
    handleFileChange,
  };
};

export default useDocuments;
