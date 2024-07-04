import { BUTTON_PROPS } from "@/types/types";
import React from "react";

const Button = ({ handleClick, option }: BUTTON_PROPS) => {
  return (
    <div className="mt-5">
      <button
        className={`ms-0 me-[20px] rounded-[10px] border-borderGrey py-[13px] px-[20px] border-[1px]`}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          handleClick(option + 1);
        }}
        className={`ms-0 me-[10px] rounded-[10px] py-[13px] px-[27px] bg-customOrange border-customOrange border-[1px]`}
      >
        Next
      </button>
    </div>
  );
};

export default Button;
