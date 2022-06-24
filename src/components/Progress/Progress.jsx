import React from "react";

const Progress = ({ color, item, percentaje, isCash, cashValue }) => {
  return (
    <>
      {isCash ? (
        <div className="p-6 border  rounded-xl mb-2">
          <div className="mb-1 text-base font-medium dark:text-white">
            {item}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-500 mb-4">
            <div
              className={`${color} h-0.5 rounded-full dark:bg-gray-300`}
              style={{ width: `${(percentaje * 50) / 75}%` }}
            ></div>
            <div className="flex relative -top-1">
              <div
                style={{ marginLeft: `0%` }}
                className={`${color} h-1.5  w-1.5 rotate-45`}
              ></div>
              <div
                style={{ marginLeft: `${(percentaje * 50) / 75 - 2}%` }}
                className={`${color}  h-2  w-2 rotate-45 `}
              ></div>
              <div className={`${color} h-1.5  w-1.5 rotate-45 ml-auto `}></div>
            </div>

            <div className="flex mt-1 text-xs ">
              <p style={{ width: `${(percentaje * 50) / 75 - 2}%` }}>50%</p>
              <p>{percentaje}%</p>
              <p className="ml-auto">100%</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 border  rounded-xl mb-2">
          <div className="mb-1 text-base font-medium dark:text-white">
            {item}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-500 mb-4">
            <div
              className={`${color} h-0.5 rounded-full dark:bg-gray-300`}
              style={{ width: `${(percentaje * 100) / (100 - cashValue)}%` }}
            ></div>
            <div className="flex relative -top-1">
              <div
                style={{ marginLeft: `0%` }}
                className={`${color} h-1.5  w-1.5 rotate-45`}
              ></div>
              <div
                style={{
                  marginLeft: `${(percentaje * 100) / (100 - cashValue) - 2}%`,
                }}
                className={`${color} h-2  w-2 rotate-45 `}
              ></div>
              <div className={`${color} h-1.5  w-1.5 rotate-45 ml-auto `}></div>
            </div>
            <div className="flex mt-1 text-xs ">
              <p
                style={{
                  width: `${(percentaje * 100) / (100 - cashValue) - 2}%`,
                }}
              >
                0%
              </p>
              <p>{percentaje}%</p>
              <p className="ml-auto">{`${100 - cashValue}%`}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Progress;
