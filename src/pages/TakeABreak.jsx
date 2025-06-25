import React from "react";
import { FaBed, FaHeartBroken } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

const TakeABreak = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-200 p-6 text-center">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full">
        <div className="text-6xl text-purple-500 mb-6 flex justify-center">
          <IoMoon className="animate-bounce-slow" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Whoa! You've swiped a lot today.
        </h1>
        <p className="text-gray-600 mb-6">
          It's time to take a little break. Give your heart and mind a chance to rest ❤️‍🩹
        </p>
        <div className="flex justify-center gap-4 text-3xl text-pink-500 mb-4">
          <FaBed />
          <FaHeartBroken />
        </div>
        <p className="text-gray-500 text-sm">
          We'll be here when you're ready. Come back refreshed and recharged!
        </p>
      </div>
    </div>
  );
};

export default TakeABreak;
