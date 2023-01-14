import React from "react";

const CollectionsPage = () => {
  return (
    <div className="grid grid-rows-2 h-screen">
      <div className="col-span-2 bg-red-500 flex items-center justify-center">
        Box1
      </div>
      <div className="bg-blue-400 flex items-center justify-center">Box2</div>
      <div className="bg-green-300 flex items-center justify-center">Box3</div>
    </div>
  );
};

export default CollectionsPage;
