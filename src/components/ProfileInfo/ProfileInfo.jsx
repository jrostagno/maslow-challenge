import React from "react";
import { useTranslation } from "react-i18next";

const ProfileInfo = ({ profile }) => {
  const [t, i18n] = useTranslation("global");

  const local = window.localStorage.getItem("local");

  function handleClick() {
    if (local === "es") {
      i18n.changeLanguage("en");
      window.localStorage.setItem("local", "en");
      window.location.reload();
    } else if (local === "en") {
      i18n.changeLanguage("es");
      window.localStorage.setItem("local", "es");
      window.location.reload();
    }
  }

  return (
    <div className="flex lg:ml-4 p-1 shadow-sm border rounded-xl w-full h-full">
      <div className="flex p-1  h-full mt-auto">
        <img
          src={profile.image}
          alt="profilepic"
          className="h-14  ml-2 rounded-tr-xl rounded-bl-xl mt-0"
        />
        <div className=" ml-4 mt-0 ">
          <h1 className="font-semibold text-base ">{profile.name}</h1>
          <h4 className="font-regular text-base  lg:text-sm">{`${t(
            "profileInfo.company"
          )}: ${profile.company} - ${t("profileInfo.position")}: ${
            profile.position
          }`}</h4>
        </div>
      </div>
      {local === "en" ? (
        <button
          className="rounded-full border p-1 h-9 w-9 ml-auto mr-8 m-auto text-sm text-slate-200   bg-slate-500  hover:bg-slate-300 hover:text-slate-600 transition-colors "
          onClick={handleClick}
        >
          ES
        </button>
      ) : (
        <button
          className="rounded-full border p-1 h-9 w-9 ml-auto mr-8 m-auto text-sm text-slate-200   bg-slate-500  hover:bg-slate-300 hover:text-slate-600 transition-colors"
          onClick={handleClick}
        >
          EN
        </button>
      )}
    </div>
  );
};

export default ProfileInfo;
