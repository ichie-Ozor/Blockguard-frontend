import { Button } from "@/components/ui/button";
import Image from "next/image";
import Money from "@/assets/eventList/money.svg";
import LinkIcon from "@/assets/eventList/link.svg";
import { Dispatch, SetStateAction } from "react";

const StepTwo = ({
  setCurrentStep,
  eventData,
  updateEventData,
}: {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  eventData: {
    amount: number;
    eventType: string;
    prizeFundSource: string;
  };
  updateEventData: (field: string, value: string | number) => void;
}) => {
  const handleNextStep = () => {
    if (eventData.amount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }
    if (!eventData.prizeFundSource) {
      alert("Please select a prize fund source.");
    }
    setCurrentStep(3);
  };
  const amountError = eventData.amount <= 0;
  return (
    <div className="flex justify-center items-center min-h-[65vh] pt-10">
      <div className="max-w-[600px] w-full border-2 border-[#E7E7E7] rounded-[12px] md:rounded-[20px] px-2 py-8 md:p-8">
        <h1 className="text-[#0A2C66] text-[20px] text-center font-bold mb-1">
          Stake Funds
        </h1>
        <p className="text-sm text-[#454545] text-center mb-6">
          Lock prize funds in smart contracts
        </p>

        <div className="flex flex-col">
          <label className="text-[#454545] text-sm">Amount:</label>
          <input
            type="number"
            className={`rounded-[8px] bg-[#FCFCFC] border-2 ${
              amountError ? "border-red-500" : "border-[#E7E7E7]"
            } text-sm px-2 py-2`}
            placeholder="Block Hack"
            value={eventData.amount}
            onChange={(e) =>
              updateEventData("amount", parseFloat(e.target.value))
            }
          />
          {amountError && (
            <p className="text-red-500 text-sm mt-1">Invalid amount</p>
          )}
        </div>

        <div className="flex flex-col mt-7">
          <label className="text-[#454545] text-sm">
            Select price funds source.
          </label>
          <div className="flex space-x-2 md:space-x-5 mt-2">
            <div
              className={`border-2 flex flex-col justify-center items-center w-[180px] text-sm space-y-2 p-4 rounded-[8px] 
                ${
                  eventData.prizeFundSource === "metamask"
                    ? "bg-[#D1E8FF] border-[#0A2C66] scale-90 duration-100 ease-in-out"
                    : "bg-[#FCFCFC] border-[#E7E7E7]"
                }`}
              onClick={() => updateEventData("prizeFundSource", "metamask")}
            >
              <Image src={Money} alt="company" />
              <p>Connected Metamask</p>
            </div>
            <div
              className={`bg-[#FCFCFC] border-2 border-[#E7E7E7] flex flex-col justify-center items-center w-[180px] text-sm space-y-2 p-4 rounded-[8px] 
              ${
                eventData.prizeFundSource === "newWallet"
                  ? "bg-[#D1E8FF] border-[#0A2C66] scale-90 duration-100 ease-in-out"
                  : "bg-[#FCFCFC] border-[#E7E7E7]"
              }`}
              onClick={() => updateEventData("prizeFundSource", "newWallet")}
            >
              <Image src={LinkIcon} alt="people" />
              <p>Connect new wallet</p>
            </div>
          </div>
        </div>

        <Button className="bg-[#0A2C66] w-full mt-7" onClick={handleNextStep}>
          Stake Funds
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
