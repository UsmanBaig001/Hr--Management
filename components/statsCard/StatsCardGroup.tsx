import React from "react";
import StatsCard from "./StatsCard";
import {
  OrangeBriefcase,
  OrangeCalender,
  OrangeFile,
  iconGreenArrow,
  iconRedArrow,
  orangeUsers,
} from "@/constants/Images";
import { COLORS } from "@/constants/Colors";

const StatsCardGroup = ({ employeesArray }: { employeesArray: number }) => {
  return (
    <div className="flex flex-wrap">
      <StatsCard
        icon={orangeUsers}
        amount={employeesArray}
        heading={"All Employees"}
        date={"July 16, 2023"}
        percent={23}
        src={iconGreenArrow}
        BgColor={COLORS.greenDark}
        textColor={COLORS.greenShade}
        iconAlt={"OrangeUser"}
        srcAlt={"iconUp"}
      />
      <StatsCard
        icon={OrangeBriefcase}
        amount={666}
        heading={"Total Applicant"}
        date={"July 16, 2023"}
        percent={12}
        src={iconRedArrow}
        BgColor={COLORS.redDark}
        textColor={COLORS.redShade}
        iconAlt={"OrangeUser"}
        srcAlt={"iconDown"}
      />
      <StatsCard
        icon={OrangeCalender}
        amount={666}
        heading={"Today Attendance"}
        date={"July 16, 2023"}
        percent={23}
        src={iconGreenArrow}
        BgColor={COLORS.greenDark}
        textColor={COLORS.greenShade}
        iconAlt={"OrangeUser"}
        srcAlt={"iconUp"}
      />
      <StatsCard
        icon={OrangeFile}
        amount={666}
        heading={"Total Projects"}
        date={"July 16, 2023"}
        percent={23}
        src={iconGreenArrow}
        BgColor={COLORS.greenDark}
        textColor={COLORS.greenShade}
        iconAlt={"OrangeUser"}
        srcAlt={"iconUp"}
      />
    </div>
  );
};

export default StatsCardGroup;
