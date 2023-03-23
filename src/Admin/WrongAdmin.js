import React from "react";

const WrongAdmin = () => {
  return (
    <div>
      <img
        className="h-[100vh] w-screen object-contain mr-4"
        src={process.env.PUBLIC_URL + "Images/WrongAdmin.jpg"}
        alt={"Page Not Found !"}
      />
    </div>
  );
};

export default WrongAdmin;
