import React from "react";
import NewArrivalsSection from "./NewArrivalsSection";
import HomePageSection from "./HomePageSection";
// import InfoSection from "./InfoSection";

const CollectionsPage = () => {
  return (
    <div className="grid grid-rows-2 pt-16 w-screen bg-gradient-to-b from-stone-500 via-stone-700 to-stone-900">
      <HomePageSection />
      <NewArrivalsSection />
      {/* <InfoSection /> */}
    </div>
  );
};

export default CollectionsPage;
