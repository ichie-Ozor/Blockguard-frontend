"use client";
import { useState } from "react";
import StepOne from "./_components/StepOne";
import StepTwo from "./_components/StepTwo";
import StepThree from "./_components/StepThree";
import axios from "axios";
import { url } from "../../assets/helpers";

const CreateEventPage = () => {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDescription: "",
    eventType: "",
    startDate: new Date(),
    endDate: new Date(),
    amount: 0,
    prizeFundSource: "",
  });

  const updateEventData = (field: string, value: string | Date | number) => {
    setEventData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  console.log(eventData, "eventData");

  const onSubmitHandler = () => {
    const baseUrl = url + "/event";
    console.log("submit handler clicked", eventData);

    axios({
      method: "post",
      url: baseUrl,
      data: eventData,
    })
      .then((response) => {
        console.log(response, "event sent");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  // Function to display the current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            setCurrentStep={setCurrentStep}
            eventData={eventData}
            updateEventData={updateEventData}
          />
        );
      case 2:
        return (
          <StepTwo
            setCurrentStep={setCurrentStep}
            eventData={eventData}
            updateEventData={updateEventData}
          />
        );
      case 3:
        return (
          <StepThree
            setCurrentStep={setCurrentStep}
            eventData={eventData}
            onSubmitHandler={onSubmitHandler}
            // updateEventData={updateEventData}
          />
        );
      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex justify-center mt-4 w-full">
        <div
          className={`h-2 w-[20%] rounded-full ${
            currentStep == 1
              ? "border-blue-600 border-2 bg-[#0A2C66]"
              : "border-gray-400 border-2"
          }`}
        ></div>
        <div
          className={`h-2 w-[20%] rounded-full ${
            currentStep == 2
              ? "border-blue-600 border-2 bg-[#0A2C66]"
              : "border-gray-400 border-2"
          }`}
        ></div>
        <div
          className={`h-2 w-[20%] rounded-full ${
            currentStep == 3
              ? "border-blue-600 border-2 bg-[#0A2C66]"
              : "border-gray-400 border-2"
          }`}
        ></div>
      </div>
      {/* Render the content based on the current step */}
      {renderStepContent()}
    </>
  );
};

export default CreateEventPage;
