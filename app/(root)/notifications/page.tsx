import DefaultLayout from "@/components/layouts/DefaultLayout";
import { profilePhoto } from "@/constants/Images";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <DefaultLayout heading={"Notifications"} description={"All Notifications"}>
      <div className="border-borderGrey border-[1px]  mx-[30px] px-5 rounded-[10px]">
        <div className="flex justify-between items-center py-5 border-borderGrey border-b-[1px] ">
          <div className="flex">
            <Image
              src={profilePhoto}
              alt="Photo"
              height={53}
              width={53}
              className="rounded-full"
            />
            <div className="flex flex-col ms-4">
              <div className="text-[16px] font-semibold ">Leave Request</div>
              <div className="text-[16px] text-fadedGrey font-light">
                @Econev Fox has applied for leave
              </div>
            </div>
          </div>
          <div className="mt-auto text-[16px] text-fadedGrey font-light ">
            Just now
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default page;
