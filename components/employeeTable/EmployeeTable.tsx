import React from "react";
import Image from "next/image";
import {
  iconEdit,
  iconTrash,
  iconView,
  profilePhoto,
} from "@/constants/Images";
import { EMPLOYEE_TABLE_HEAD } from "@/constants/Constants";
import Link from "next/link";
import useEmployeeTable from "./useEmployeeTable";
import { EMPLOYEES_TABLE_DATA } from "@/types/types";
import Loader from "../loader/Loader";

const EmployeeTable = ({ data }: { data: EMPLOYEES_TABLE_DATA[] }) => {
  const { handleDelete } = useEmployeeTable();
  return (
    <div className="mt-[30px] shadow-md ">
      <table className="w-full font-light text-sm text-left rtl:text-right ">
        <thead className="text-[16px] text-customGrey font-light">
          <tr>
            {EMPLOYEE_TABLE_HEAD.map((item, i) => {
              return (
                <th
                  scope="col"
                  className="py-[10px] border-b-[1px] border-borderGrey"
                  key={i}
                >
                  {item.heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!data ||
            (data.length === 0 && (
              <tr>
                {[...Array(7)].map((_, index) => (
                  <td key={index}>
                    <div className="animate-spin rounded-full my-2 h-8 w-8 border-customOrange border-t-2 "></div>
                  </td>
                ))}
              </tr>
            ))}
          {data &&
            data.length > 0 &&
            data.map((data: EMPLOYEES_TABLE_DATA, i: number) => (
              <tr className="border-b-[1px] border-borderGrey" key={i}>
                <th scope="row" className="flex items-center pt-[10px]">
                  {data.photoURL ? (
                    <img
                      src={data.photoURL}
                      className="rounded-[18px] h-[36px] w-[36px] hidden sm:flex"
                      alt="Photo"
                    />
                  ) : (
                    <Image
                      src={profilePhoto}
                      height={36}
                      width={36}
                      className="rounded-[18px] hidden sm:flex"
                      alt="Photo"
                    />
                  )}
                  <div className="text-[16px] ms-[10px]">
                    {data?.firstName + " " + data?.lastName}
                  </div>
                </th>
                <td className="pt-[10px]">{data?.employeeId}</td>
                <td className="pt-[10px]">{data.department}</td>
                <td className="pt-[10px]">{data.designation}</td>
                <td className="pt-[10px]">{data?.employmentType}</td>
                <td className="pt-[10px]">
                  <div className="w-fit text-[12px] bg-darkOrange text-customOrange rounded-[4px] px-[9px] py-[3px] font-light">
                    Permanent
                  </div>
                </td>
                <td className="pt-[10px] flex space-x-2">
                  <Link href={`/employees/${data.id}`}>
                    <Image src={iconView} alt="iconView" />
                  </Link>
                  <Link href={`/employees/${data.id}`}>
                    <Image src={iconEdit} alt="iconEdit" />
                  </Link>
                  <button onClick={() => handleDelete(data?.id)}>
                    <Image src={iconTrash} alt="iconTrash" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
