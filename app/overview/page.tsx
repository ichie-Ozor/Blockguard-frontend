import OngoingEvents from "./_components/OngoingEvents";
import Stats from "./_components/Stats";
import Transactions from "./_components/Transactions";

const OverviewPage = () => {
  return (
    <div>
      <h1 className="text-[#454545] font-semibold text-[40px] py-3">
        Welcome, Aishat!
      </h1>
      <div>
        <Stats />
      </div>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 pt-10">
        <OngoingEvents />
        <Transactions />
      </div>
    </div>
  );
};

export default OverviewPage;
