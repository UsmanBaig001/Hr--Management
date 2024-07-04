import React, { MouseEvent } from "react";

const SubmitButton = ({
  handleSubmit,
  loading,
}: {
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
}) => {
  return (
    <div className="mt-5">
      <button
        className={`ms-0 me-[20px] rounded-[10px] border-borderGrey py-[13px] px-[20px] border-[1px]`}
      >
        Cancel
      </button>
      <button
        onClick={handleSubmit}
        className={`ms-0 me-[10px] rounded-[10px] py-[13px] px-[27px] duration-300 hover:bg-customOrange hover:text-white ${
          loading ? "animate-pulse" : " "
        } text-customOrange bg-primaryBlack  border-customOrange border-[1px]`}
      >
        {!loading ? "Submit" : "Submiting"}
      </button>
    </div>
  );
};

export default SubmitButton;
