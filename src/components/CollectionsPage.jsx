import React from "react";
import NewArrivalsSection from "./NewArrivalsSection";
import HomePageSection from "./HomePageSection";
import InfoSection from "./InfoSection";

const CollectionsPage = () => {
  return (
    <div className="grid grid-rows-3 pt-16">
      <HomePageSection />
      <NewArrivalsSection />
      <InfoSection />
    </div>
  );
};

export default CollectionsPage;
