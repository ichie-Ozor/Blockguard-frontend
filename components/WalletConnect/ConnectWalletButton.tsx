import React, { useState } from "react";
import { connect, disconnect } from "@argent/get-starknet";
import { FiCopy } from "react-icons/fi"; // React Icon for the copy button

// import { Contract, RpcProvider } from "starknet";
// Type definitions for the component's state
interface WalletConnection {
  isConnected: boolean;
  wallet: string | null;
  address: string | null;
}

interface ConnectWalletButtonProps {
  // Optional callback to handle after successful connection
  onConnect?: (wallet: string, address: string) => void;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  onConnect,
}) => {
  const [connection, setConnection] = useState<WalletConnection | null>(null);

  // Function to connect the wallet
  const connectWallet = async () => {
    try {
      const connection = await connect({
        webWalletUrl: "https://web.argent.xyz",
      });

      if (connection && connection.isConnected) {
        setConnection({
          isConnected: connection.isConnected,
          wallet: connection.name,
          address: connection.selectedAddress,
        });
        alert("Connected Successfully");

        // Optionally run the onConnect callback, if provided
        if (onConnect) {
          onConnect(connection.name, connection.selectedAddress);
        }
      } else {
        console.log("Connection failed");
      }
    } catch (error) {
      console.error("Connection error:", error);
      console.log("Error connecting wallet");
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = async () => {
    await disconnect();
    setConnection(null); // Clear connection state
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!connection ? (
        <button
          onClick={connectWallet}
          className="border border-2 p-2 rounded-md bg-emerald-800 text-white text-sm font-bold  hover:bg-primary-dark hover:text-white transition duration-300 ease-in-out"
        >
          Connect Wallet
        </button>
      ) : (
        <>
          <div className="flex items-center justify-center space-x-4 mt-4">
            {/* Shortened Address with Copy Button */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-800 font-medium">
                Address: {connection.address.slice(0, 6)}...
                {connection.address.slice(-4)}
              </span>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(connection.address)
                }
                className="text-blue-500 hover:text-blue-700"
                title="Copy Address"
              >
                <FiCopy size={18} />
              </button>
            </div>

            {/* Disconnect Button */}
            <button
              onClick={disconnectWallet}
              className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition duration-200"
              title="Disconnect Wallet"
            >
              Disconnect
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ConnectWalletButton;
