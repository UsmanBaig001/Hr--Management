"use client";

import { options } from "@/constants/ChartOptions";
import { iconArrowDown } from "@/constants/Images";
import { CHART_STATE } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AttendanceChart: React.FC = () => {
  const [state, setState] = useState<CHART_STATE>({
    series: [
      {
        name: "Attendance",
        data: [62, 23, 65, 85, 93, 87, 85],
      },
      {
        name: "Employee",
        data: [15, 65, 5, 7, 1, 3, 4],
      },
      {
        name: "Revenue",
        data: [23, 12, 30, 8, 6, 10, 11],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="flex flex-col 2xl:w-[1069px] bg-primaryBlack ms-2.5 me-[30px]  mt-5 h-[534px] border-[1px] border-borderGrey rounded-[10px]">
      <div className="mb-4 justify-between mt-[25px] flex">
        <div>
          <h4 className="text-xl font-semibold ms-8 ">Attendance Overview</h4>
        </div>
        <div className="relative z-20 hidden  sm:flex border-[1px] p-[10px] border-borderGrey rounded-[10px] bg-primaryBlack me-[30px]">
          <select className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none">
            <option>This Week</option>
            <option>Last Week</option>
          </select>
          <Image src={iconArrowDown} alt="Arrow Down" />
        </div>
      </div>

      <div className="mx-[33px]">
        <ReactApexChart
          options={options}
          series={state.series}
          type="bar"
          height={433}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default AttendanceChart;
