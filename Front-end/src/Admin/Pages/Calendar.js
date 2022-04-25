import React from "react";
import Navigation from "../Components/navigation/Navigation";
import Header from "../Components/Header";

const Calendar = (props) => {
  return (
    <div className="flex flex-row">
      <Navigation />
      <div className="grow w-full max-h-screen overflow-y-scroll scroll">
        <Header />
        <div className="p-3 mt-10">
            Calendar
        </div>
      </div>
    </div>
  );
};

export default Calendar;
