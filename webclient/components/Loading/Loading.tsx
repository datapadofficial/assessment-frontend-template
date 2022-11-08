const Loading = () => {
  return (
    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-slate-50/90">
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm transition ease-in-out duration-150 cursor-not-allowed text-gray-500">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
