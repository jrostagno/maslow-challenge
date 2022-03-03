import React from "react";
import logo from "../../assets/logo.png";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const profile = {
  image:
    "https://res.cloudinary.com/dlw5hqmkj/image/upload/v1645889620/profile_lrduow.jpg",
  name: "Javier E Rostagno",
  company: "Maslow",
  position: "Frontend developer",
};

const NavBar = () => {
  return (
    <div className="lg:flex h-full  sm:flex-none  ">
      <img
        src={logo}
        alt="logo"
        className=" object-contain h-20 hidden lg:flex  "
      />
      <ProfileInfo profile={profile} />
    </div>
  );
};

export default NavBar;
