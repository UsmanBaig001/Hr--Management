"use client";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { fetchEmployeeDetails } from "../../redux/slices/employeesDetailsSlice";
import { transformEmployeeDetails } from "@/hooks/useTransformData";
import toast from "react-hot-toast";
import {
  CustomChangeEvent,
  EMPLOYEE_DETAILS_PROPS,
  EMPLOYEE_SORTED_DATA,
} from "@/types/types";
import { updateEmployee } from "@/redux/slices/employeesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const useViewEmployee = ({ id, setName }: EMPLOYEE_DETAILS_PROPS) => {
  const [option, setOption] = useState<number>(0);
  const [inputEnabled, setInputEnabled] = useState(false);
  const [data, setData] = useState<EMPLOYEE_SORTED_DATA | undefined>();
  const [menuOption, setMenuOption] = useState<number>(0);
  const dispatch = useAppDispatch();
  const employeeDetails = useAppSelector(
    (state) => state.employeeDetails.employeeDetails
  );
  const handleUpdate = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!data || !employeeDetails) {
      return toast.error("No data Found!");
    }
    try {
      const mergedData = {
        id: employeeDetails?.data?.id,
        data: {
          ...data.personalInfo,
          ...data.professionalInfo,
          ...data.documents,
          ...data.accountAccess,
        },
      };

      await dispatch(updateEmployee(mergedData));
      toast.success("Employee Updated Successfully!");
    } catch (error) {
      console.log("error", error);
      toast.error("Error updating employee!");
    }
  };
  const details = employeeDetails?.data;

  useEffect(() => {
    dispatch(fetchEmployeeDetails(id));
    if (details) {
      setName(details?.firstName + " " + details?.lastName);
      const data = transformEmployeeDetails(details);
      setData(data);
    }
  }, [dispatch, !details]);
  const handleClick = (num: number) => {
    setOption(num);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | CustomChangeEvent,
    section: "personalInfo" | "professionalInfo" | "accountAccess" | "documents"
  ) => {
    if (data) {
      setData({
        ...data,
        [section]: {
          ...data[section],
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const handleMenuClick = (num: number) => {
    setMenuOption(num);
  };
  return {
    handleClick,
    option,
    menuOption,
    handleMenuClick,
    data,
    handleUpdate,
    inputEnabled,
    setInputEnabled,
    handleChange,
  };
};

export default useViewEmployee;
