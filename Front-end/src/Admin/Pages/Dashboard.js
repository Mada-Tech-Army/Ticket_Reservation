import React from "react";
import Header from "../Components/Header";
import Navigation from "../Components/navigation/Navigation";
import "../admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";

const Dashboard = (props) => {
  return (
    <div className="flex flex-row">
      <Navigation />
      <div className="grow w-full max-h-screen overflow-y-scroll scroll">
        <Header />
        <div className="p-3 mt-10">
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
