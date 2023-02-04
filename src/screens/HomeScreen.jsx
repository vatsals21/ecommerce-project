import React from "react";
import HeaderBar from "../components/HeaderBar";
import { CollectionsPage, Contact } from "../components";

const HomeScreen = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <HeaderBar />
      <CollectionsPage />
      <Contact />
    </div>
  );
};

export default HomeScreen;
