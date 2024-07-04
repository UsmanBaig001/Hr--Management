"use client";
import {
  INITIAL_STATE_ACCOUNT_ACCESS,
  INITIAL_STATE_DOCUMENTS_FILES,
  INITIAL_STATE_PERSONAL_INFO,
  INITIAL_STATE_PROFESSIONAL_INFO,
} from "@/constants/IntialStates";
import { addEmployee } from "@/redux/slices/employeesSlice";
import { useAppDispatch } from "@/redux/store";
import {
  EMPLOYEE_ACCOUNT_ACCESS_DATA,
  EMPLOYEE_DOCUMENTS_DATA,
  EMPLOYEE_PERSONAL_DATA,
  EMPLOYEE_PROFESSIONAL_DATA,
} from "@/types/types";
import { MouseEvent, useState } from "react";

const useAddEmployee = () => {
  const [isloading, setIsLoading] = useState(false);
  const [option, setOption] = useState<number>(0);
  const [personalInfo, setPersonalInfo] = useState<EMPLOYEE_PERSONAL_DATA>(
    INITIAL_STATE_PERSONAL_INFO
  );
  const [professionalInfo, setProfessionalInfo] =
    useState<EMPLOYEE_PROFESSIONAL_DATA>(INITIAL_STATE_PROFESSIONAL_INFO);
  const [documents, setDocuments] = useState<EMPLOYEE_DOCUMENTS_DATA>(
    INITIAL_STATE_DOCUMENTS_FILES
  );
  const [accountAccess, setAccountAccess] =
    useState<EMPLOYEE_ACCOUNT_ACCESS_DATA>(INITIAL_STATE_ACCOUNT_ACCESS);

  const dispatch = useAppDispatch();

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const employeeData = {
      ...personalInfo,
      ...professionalInfo,
      ...documents,
      ...accountAccess,
      attendance: "",
      type: "",
      checkIn: "",
      checkOut: "",
    };
    try {
      await dispatch(addEmployee(employeeData));
    } catch (error) {
      console.log("Something went wrong while adding new employee", error);
    } finally {
      setIsLoading(false);
      setOption(0);
      setPersonalInfo(INITIAL_STATE_PERSONAL_INFO);
      setProfessionalInfo(INITIAL_STATE_PROFESSIONAL_INFO);
      setDocuments(INITIAL_STATE_DOCUMENTS_FILES);
      setAccountAccess(INITIAL_STATE_ACCOUNT_ACCESS);
    }
  };

  const handleClick = (num: number) => {
    setOption(num);
  };
  return {
    option,
    isloading,
    personalInfo,
    professionalInfo,
    accountAccess,
    documents,
    handleClick,
    handleSubmit,
    setAccountAccess,
    setDocuments,
    setPersonalInfo,
    setProfessionalInfo,
  };
};

export default useAddEmployee;
