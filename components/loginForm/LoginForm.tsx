"use client";

import React from "react";
import FormInput from "@/components/formInput/FormInput";
import useLoginForm from "./useLoginForm";
import Link from "next/link";

export default function LoginForm() {
  const { loading, state, login, handleChange } = useLoginForm();
  return (
    <div className="flex flex-col items-center max-w-[445px] ">
      <FormInput
        label="Email"
        name={"email"}
        value={state?.email}
        onChange={handleChange}
        disabled={loading}
      />
      <FormInput
        label="Password"
        name={"password"}
        value={state?.password}
        onChange={handleChange}
        disabled={loading}
        type="password"
      />
      <div className="text-sm text-center flex w-full justify-between text-neutral-500 mt-1.5 mb-[30px]">
        <div className="text-[16px] text-white flex ">
          <input
            id="orange-checkbox"
            type="checkbox"
            className="w-5 h-5 accent-customOrange"
          />
          <span className="ms-2.5"> Remember me</span>
        </div>
        <Link href={"/register"} className="font-light text-customOrange me-4">
          Don't have an acount?
        </Link>
      </div>
      <div
        onClick={login}
        className="px-10 py-3 bg-customOrange w-full rounded-[10px] text-center text-white disabled:opacity-70 cursor-pointer"
      >
        Login
      </div>
      <Link href={"/forgetPassword"} className="text-customOrange mt-4">
        Forget Password?
      </Link>
    </div>
  );
}
