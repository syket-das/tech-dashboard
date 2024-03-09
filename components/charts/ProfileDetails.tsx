import React from 'react';

const ProfileDetails = () => {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="w-1/2 mt-2">
        <h3 className="text-xl font-bold text-center">Profile Details</h3>
        <h4 className="text-md  text-center">Profile Details</h4>
      </div>
      <div className=" flex flex-col md:flex-row justify-between gap-2 items-center h-full ">
        <div className="h-full w-full  md:w-1/2 ">
          <div className="w-full">
            <img
              src="https://via.placeholder.com/150"
              alt="profile"
              className="rounded-full w-52 h-52 mt-4 mx-auto"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full px-4 ">
          <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-1 sm:py-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {' '}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />{' '}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-900 truncate dark:text-white ">
                    Primary
                  </p>
                  <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                    Coding Language
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-semibold text-gray-900 dark:text-white">
                  C++
                </div>
              </div>
            </li>
            <li className="py-1 sm:py-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {' '}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />{' '}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-900 truncate dark:text-white">
                    Secondary
                  </p>
                  <p className="text-[10px] text-gray-500 truncate dark:text-gray-400">
                    Coding Language
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-semibold text-gray-900 dark:text-white">
                  Python
                </div>
              </div>
            </li>
            <li className="py-1 sm:py-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {' '}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />{' '}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-900 truncate dark:text-white">
                    Experience
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-semibold text-gray-900 dark:text-white">
                  3 Years
                </div>
              </div>
            </li>
            <li className="py-1 sm:py-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {' '}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />{' '}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-900 truncate dark:text-white">
                    Preparation Streak
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-semibold text-gray-900 dark:text-white">
                  006
                </div>
              </div>
            </li>
            <li className="py-1 sm:py-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {' '}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />{' '}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-900 truncate dark:text-white">
                    Completed
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-semibold text-gray-900 dark:text-white">
                  006
                </div>
              </div>
            </li>
            <li className="py-1 sm:py-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 dark:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {' '}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />{' '}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium text-gray-900 truncate dark:text-white">
                    Missed
                  </p>
                </div>
                <div className="inline-flex items-center text-[10px] font-semibold text-gray-900 dark:text-white">
                  006
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
