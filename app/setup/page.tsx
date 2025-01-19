"use client";

import { useState } from "react";
import Image from "next/image";
import Company from "@/assets/signing/company.svg";
import People from "@/assets/signing/people.svg";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { url } from "../../assets/helpers";

const SetupPage = () => {
  type DetailType = {
    username: string;
    email: string;
    [key: string]: string;
  };
  const [description, setDescription] = useState("");
  const [setup, setSetUp] = useState<DetailType>({
    username: "",
    email: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSetUp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  setup.description = description;

  const onSetupSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(description, "clickeed", setup);
    const baseUrl = url + "/signup";

    axios({
      method: "post",
      url: baseUrl,
      data: setup,
    })
      .then((response) => {
        console.log(response, "setup successful");
        const token = response.data.assessToken;
        localStorage.setItem("tokan", token);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-6">
          Setup Account
        </h1>

        <div className="flex flex-col">
          <label className="text-[#454545] text-sm">Username:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="Block.0xnerd"
            name="username"
            value={setup.username}
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">Email Address:</label>
          <input
            className="rounded-[8px] bg-[#FCFCFC] border-2 border-[#E7E7E7] text-sm px-2 py-2"
            placeholder="example@gmail.com"
            name="email"
            value={setup.email}
            onChange={onChange}
          />
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">
            Which best describes you?
          </label>
          <div className="flex space-x-2 md:space-x-5 mt-2">
            <div
              className={`flex flex-col justify-center items-center w-[180px] text-sm space-y-2 p-4 rounded-[8px]
                ${
                  description === "company"
                    ? "bg-[#D1E8FF] border-[#0A2C66] scale-90 duration-100 ease-in-out"
                    : "bg-[#FCFCFC] border-2 border-[#E7E7E7]"
                }`}
              onClick={() => setDescription("company")}
            >
              <Image src={Company} alt="company" />
              <p>Company</p>
            </div>
            <div
              className={`flex flex-col justify-center items-center w-[180px] text-sm space-y-2 p-4 rounded-[8px]
                ${
                  description === "developer"
                    ? "bg-[#D1E8FF] border-[#0A2C66] scale-90 duration-100 ease-in-out"
                    : "bg-[#FCFCFC] border-2 border-[#E7E7E7]"
                }`}
              onClick={() => setDescription("developer")}
            >
              <Image src={People} alt="people" />
              <p>Developers/Participants</p>
            </div>
          </div>
        </div>

        <Link href="/signin">
          <Button className="bg-[#0A2C66] w-full mt-7" onClick={onSetupSubmit}>
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SetupPage;
