"use client";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import ViewEmployee from "@/components/viewEmployee/ViewEmployee";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("Employee Name");
  const { id }: { id: string } = useParams();
  return (
    <DefaultLayout heading={`${name}`} description={`All Employee > ${name}`}>
      <ViewEmployee id={id} setName={setName} />
    </DefaultLayout>
  );
};

export default page;
