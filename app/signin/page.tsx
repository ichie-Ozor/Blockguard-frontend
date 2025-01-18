"use client";

import { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SigninPage = () => {
  const router = useRouter();
  // const [signIn, setSignIn] = useState();
  const [detail, setDetail] = useState({
    username: "",
    email: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSigninSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(detail, "signin page");
    router.push("/overview");
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-6">
          Sign In
        </h1>

        <div className="flex flex-col">
          <label className="text-[#454545] text-sm">Username:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Block.0xnerd"
            name="username"
            value={detail.username}
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Email Address:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="example@gmail.com"
            name="email"
            value={detail.email}
            onChange={onChange}
          />
        </div>

        <Button className="bg-[#0A2C66] w-full mt-7" onClick={onSigninSubmit}>
          Sign In <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <p className="text-sm mt-3">
        Don’t have an Account?{" "}
        <Link href="/setup">
          <span className="text-[#008365] underline">Sign Up</span>
        </Link>
      </p>
    </div>
  );
};

export default SigninPage;
