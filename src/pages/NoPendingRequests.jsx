import React from "react";

const NoPendingRequests = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] px-4 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/7486/7486800.png" // A free illustration from Flaticon
        alt="No Pending Requests"
        className="w-40 h-40 md:w-56 md:h-56 mb-6"
      />
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
        No More Pending Requests
      </h2>
      <p className="text-gray-500 text-sm md:text-base mt-2">
        You're all caught up! Check back later for any new requests.
      </p>
    </div>
  );
};

export default NoPendingRequests;
