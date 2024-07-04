import {
  GLOBAL_PROFILE_TABLE_PROPS,
  PROFILE_TABLE_HEADINGS,
} from "@/types/types";
import React from "react";

const ProfileTable = ({
  tableHeadings,
  tableData,
}: GLOBAL_PROFILE_TABLE_PROPS) => {
  return (
    <>
      <table className="w-[742px] font-light text-sm text-left rtl:text-right">
        <thead className="text-[16px] text-customGrey font-light">
          <tr>
            {tableHeadings.map(
              (headingData: PROFILE_TABLE_HEADINGS, i: number) => {
                return (
                  <th scope="col" className="p-4 ps-0 font-light" key={i}>
                    {headingData.heading}
                  </th>
                );
              }
            )}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, i) => {
            return (
              <tr className=" border-t-[1px] border-borderGrey" key={i}>
                {data?.checkIn && (
                  <>
                    <td className="pt-[10px] pe-8">{data?.date}</td>
                    <td className="pt-[10px] pe-8">{data?.checkIn}</td>
                    <td className="pt-[10px] pe-8">{data?.checkOut}</td>
                    <td className="pt-[10px] pe-8">{data?.break}</td>
                    <td className="pt-[10px] pe-8">{data?.workingHours}</td>
                  </>
                )}
                {data?.projectName && (
                  <>
                    <td className="pt-[10px] pe-8">{i}</td>
                    <td className="pt-[10px] pe-8">{data?.projectName}</td>
                    <td className="pt-[10px] pe-8">{data?.startDate}</td>
                    <td className="pt-[10px] pe-8">{data?.endDate}</td>
                  </>
                )}
                {data?.days && (
                  <>
                    <td className="pt-[10px] pe-8">{data?.date}</td>
                    <td className="pt-[10px] pe-8">{data?.duration}</td>
                    <td className="pt-[10px] pe-8">{data?.days}</td>
                    <td className="pt-[10px] pe-8">{data?.reportingManager}</td>
                  </>
                )}

                <td className="pt-[10px]">
                  <div
                    className={` ${
                      data.status === "On Time" ||
                      data.status === "Completed" ||
                      data.status === "Approved"
                        ? "bg-successBackground text-success"
                        : data.status === "Pending"
                        ? "bg-warningBackground text-warning"
                        : "bg-dangerBackground text-danger"
                    } w-fit text-[12px] rounded-[4px] px-[9px] py-[3px] font-light`}
                  >
                    {data.status}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProfileTable;
