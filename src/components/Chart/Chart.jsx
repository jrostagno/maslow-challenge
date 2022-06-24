import React from "react";
import PieChart from "../PieChart/PieChart";
import { useTranslation } from "react-i18next";
import { BsCash, BsCashStack, BsTriangle } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";

const Chart = () => {
  const [t] = useTranslation("global");

  return (
    <div className="lg:w-3/5 border rounded-xl  ">
      <div className="border border-b-0 rounded-xl p-6 w-full">
        <h3 className="font-semibold lg:text-lg sm:text-xl ">
          {t("chart.title")}
        </h3>
        <h5 className="regular lg:text-sm text-base mt-2 mb-10  ">
          {t("chart.subtitle")}
        </h5>
        <PieChart style={{ marginTop: "40px" }} />
      </div>
      <div className="flex lg:text-xs justify-evenly lg:mt-6 lg:mb-0 mb-6 mt-2  text-sm ">
        <div className="flex items-center ">
          <BsCash />
          <p className="ml-1">{t("progress.cash")}</p>
        </div>
        <div className="flex  items-center ">
          <BsCashStack />
          <p className="ml-1">{t("progress.bonus")}</p>
        </div>
        <div className="flex  items-center ">
          <AiOutlineStock />
          <p className="ml-1">{t("progress.stack")}</p>
        </div>
        <div className="flex  items-center ">
          <BsTriangle />
          <p className="ml-1">{t("progress.maslow")}</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
