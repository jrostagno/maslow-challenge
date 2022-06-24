import React from "react";
import { useState } from "react";

import Button from "../Button/Button";
import Progress from "../Progress/Progress";
import { useTranslation } from "react-i18next";

const Filter = () => {
  const [selected, setSelected] = useState(20);

  const [compensation, setCompensation] = useState(100);

  const [t] = useTranslation("global");

  const profileData = [
    {
      percentaje: 70,
      item: t("progress.cash"),
      isCash: true,
      color: "bg-emerald-400",
      id: 1,
    },
    {
      percentaje: 10,
      item: t("progress.bonus"),
      color: "bg-emerald-500",
      id: 2,
    },
    {
      percentaje: 10,
      item: t("progress.stack"),
      color: "bg-emerald-700",
      id: 3,
    },
    {
      percentaje: 10,
      item: t("progress.maslow"),
      color: "bg-violet-700",
      id: 4,
    },
  ];
  return (
    <div className="w-full lg:mt-0 mt-5">
      <div className="flex lg:ml-4  ml-0">
        <div className="w-3/5 border  rounded-xl p-6">
          <h3 className="text-base font-semibold  ">{t("filter.workHours")}</h3>
          <div className="flex pt-3 ">
            <Button selected={selected === 20} onClick={() => setSelected(20)}>
              20 Hs
            </Button>
            <Button
              selected={selected === 30}
              style={{ marginLeft: 10 }}
              onClick={() => setSelected(30)}
            >
              30 Hs
            </Button>
            <Button
              selected={selected === 40}
              style={{ marginLeft: 10 }}
              onClick={() => setSelected(40)}
            >
              40 Hs
            </Button>
          </div>
        </div>
        <div className="w-full d ml-3 border rounded-xl p-6">
          <h3 className="lg:text-base font-semibold text-center lg:text-left   text-lg  ">
            {t("filter.compensationsAmount")}
          </h3>
          <div className="flex pt-3  lg:mr-8 lg:justify-start   justify-evenly  ">
            <Button
              selected={compensation === 100}
              onClick={() => setCompensation(100)}
            >
              Base USD 100.000
            </Button>

            <Button
              selected={compensation === 180}
              onClick={() => setCompensation(180)}
              style={{ marginLeft: 10 }}
            >
              {t("filter.buttonPotential")} USD 180.000
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:ml-4  ml:0 mt-2">
        {profileData.map((el) => {
          return (
            <Progress
              percentaje={el.percentaje}
              isCash={el.isCash}
              item={el.item}
              color={el.color}
              key={el.id}
              cashValue={profileData[0].percentaje}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <button className=" lg:ml-auto mt-3 lg:mr-3  flex items-center justify-center  box-border bg-emerald-400 text-white hover:bg-emerald-200 hover:text-slate-600 pt-2 pb-2 pl-3 pr-3 rounded sm:text-base lg:text-xs transition-colors font-medium ">
          {" "}
          {t("filter.buttonAccept")}
        </button>
      </div>
    </div>
  );
};

export default Filter;
