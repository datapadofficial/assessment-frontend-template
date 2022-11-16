import { FC, Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { useMetricsAllFetch } from "@core/hooks/data/use-metrics-all-fetch";
import MetricChart from "../Dashboards/MetricChart";

type Props = {
  workspaceid: string;
  showSidePanel: boolean;
  setShowSidePanel: (arg0: boolean) => void;
  addMetricToDashboardData: (arg0: any) => void;
};

const AddNewKpiSidePanel: FC<Props> = ({
  workspaceid,
  showSidePanel,
  setShowSidePanel,
  addMetricToDashboardData,
}) => {
  const { isError, error, isSuccess, status, data } =
    useMetricsAllFetch(workspaceid);

  const closeSidePanel = () => {
    setShowSidePanel(false);
  };

  return (
    <Transition show={showSidePanel} className="fixed inset-0">
      {/* Background overlay */}
      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="w-screen h-screen fixed inset-0 bg-black/50"
          onClick={closeSidePanel}
        />
      </Transition.Child>
      {/* Sliding sidebar */}
      <Transition.Child
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="-translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="-translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="fixed h-screen w-[600px] z-10 top-0 right-0 bg-white shadow-lg px-12 py-16 overflow-y-scroll">
          <XIcon
            className="h-6 w-6 text-gray-600 hover:text-black cursor-pointer fixed top-8 right-8"
            onClick={closeSidePanel}
          />
          <div className="flex flex-col justify-start items-start gap-y-8 w-full">
            {isError && <div>error: {JSON.stringify(error)}</div>}
            {!isSuccess ||
              (data === undefined && <div>status: {status}...</div>)}
            {isSuccess &&
              data &&
              data.map((metric, idx) => {
                return (
                  <div
                    key={idx}
                    className="shadow-lg rounded-lg w-full"
                    onClick={() => addMetricToDashboardData(metric)}
                  >
                    <MetricChart metric={metric} />
                  </div>
                );
              })}
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default AddNewKpiSidePanel;
