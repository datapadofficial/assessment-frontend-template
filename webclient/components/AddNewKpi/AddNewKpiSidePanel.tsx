import { FC, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { useMetricsAllFetch } from "@core/hooks/data/use-metrics-all-fetch";

type Props = {
  workspaceid: string;
  showSidePanel: boolean;
  setShowSidePanel: (arg0: boolean) => void;
};

const AddNewKpiSidePanel: FC<Props> = ({
  workspaceid,
  showSidePanel,
  setShowSidePanel,
}) => {
  const { isError, error, isSuccess, status, data } =
    useMetricsAllFetch(workspaceid);

  const closeSidePanel = () => {
    setShowSidePanel(false);
  };
  console.log(isError, error, isSuccess, status, data);

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
        <div className="fixed h-screen w-[600px] z-10 top-0 right-0 bg-white shadow-lg px-4 py-8">
          <XIcon
            className="h-6 w-6 text-gray-600 hover:text-black cursor-pointer"
            onClick={closeSidePanel}
          />
          {isError && <div>error: {JSON.stringify(error)}</div>}
          {!isSuccess || (data === undefined && <div>status: {status}...</div>)}
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default AddNewKpiSidePanel;
