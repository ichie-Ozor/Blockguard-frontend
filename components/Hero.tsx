import TrustIcon from "@/assets/hero/trusticon.svg";
import SpeedIcon from "@/assets/hero/speedicon.svg";
import FairIcon from "@/assets/hero/fairicon.svg";
import AutoIcon from "@/assets/hero/autoicon.svg";
import CompanyIcon from "@/assets/hero/companyicon.svg";
import PeopleIcon from "@/assets/hero/peopleicon.svg";
import imgs from "@/assets/eventList/img.jpg";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const wcus = [
    {
      image: TrustIcon,
      title: "Trust",
      description:
        "Companies lock funds in smart contracts, ensuring transparency.",
    },
    {
      image: SpeedIcon,
      title: "Speed",
      description: "Instant payouts to winners with no delays.",
    },
    {
      image: FairIcon,
      title: "Fairness",
      description: "Reputation system guarantees accountability for Users.",
    },
    {
      image: AutoIcon,
      title: "Automation",
      description: "Payouts are automated; no manual intervention required.",
    },
  ];

  const services = [
    {
      image: CompanyIcon,
      title: "For Companies",
      description: "Transparent prize distribution and trust-building.",
      color: "#008365",
    },
    {
      image: PeopleIcon,
      title: "For Developers / Participants",
      description: "Guaranteed prizes without delays.",
      color: "#0A2C66",
    },
  ];
  return (
    <div className="pt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8">
      <div className="relative w-full bg-cover bg-center bg-no-repeat">
        <div className="w-full h-full min-h-[60vh] bg-gradient-to-br from-[#0A2C66] via-[#0A2C66] to-[#00E6A9] rounded-xl md:rounded-[20px] inset-0 ">
          <Image
            src={imgs}
            alt="img"
            fill
            className="rounded-xl md:rounded-[20px] opacity-[0.6] brightness-75 object-cover object-center"
          />
        </div>

        <div className="text-white w-full max-w-[530px] absolute bottom-0 left-0 px-4 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold leading-relaxed">
            Automate <br /> Prize Distribution with Blockchain Accountability.
          </h1>
          <p className="text-base md:text-lg mt-3">
            Ensure trust and transparency in your hackathons and bounties by
            locking prize funds in smart contracts and automating payouts.
          </p>
          <Link href="/events">
            <Button className="bg-[#0A2C66] mt-6">
              Get started <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-[#5D5D5D] font-bold text-[20px]">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 w-full pt-6">
          {wcus.map((item) => (
            <div
              key={item.title}
              className="bg-[#F6F6F6] p-4 min-h-[226px] rounded-[12px]"
            >
              <Image alt="image" src={item.image} />
              <h3 className="text-[#454545] text-[20px] font-bold pt-2">
                {item.title}
              </h3>
              <p className="text-[#454545] text-[14px] pt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 w-full pt-6">
          {services.map((item) => (
            <div
              key={item.title}
              style={{ backgroundColor: item.color }}
              className="min-h-[286px] rounded-[16px] px-4 py-10 text-white"
            >
              <div className="bg-white rounded-full p-4 w-fit">
                <Image alt="image" src={item.image} />
              </div>
              <div className="mt-12">
                <h3 className="font-bold text-[20px]">{item.title}</h3>
                <p className="text-[14px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
