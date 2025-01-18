import React from "react";
import FundsOverview from "./_components/FundsOverview";
import TransactionHistory from "./_components/TransactionHistory";

const TransactionPage = () => {
  return (
    <div>
      <h1 className="text-[#454545] font-semibold text-[40px] py-3">
        All Transactions
      </h1>

      <div>
        <FundsOverview />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default TransactionPage;
