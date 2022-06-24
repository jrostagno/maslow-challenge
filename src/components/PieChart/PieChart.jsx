import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { useTranslation } from "react-i18next";
// import { BsCash } from "react-icons/bs";

ChartJS.register(Tooltip, Title, ArcElement, Legend);

const PieChart = () => {
  const [t] = useTranslation("global");

  const labelsValues = [
    t("progress.cash"),
    t("progress.bonus"),
    t("progress.stack"),
    t("progress.maslow"),
  ];

  const data = {
    labels: labelsValues,

    datasets: [
      {
        label: "labels",

        data: [70, 10, 10, 10],
        backgroundColor: ["#34d399", "#10b981", "#047857", "#6d28d9"],

        borderColor: ["#34d399", "#10b981", "#047857", "#6d28d9"],
        hoverOffset: 4,
        rotation: 120,
        borderWidth: 0,
        spacing: 0,
        weight: 1,
      },
    ],
  };

  const options = {
    backgroundColor: "#10b981",
    animation: true,
    weight: 1,
  };

  return (
    <Pie className=" lg:p-4  p-10 text-xl" data={data} options={options} />
  );
};

export default PieChart;
