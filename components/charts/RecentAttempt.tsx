import React from 'react';

const RecentAttempt = () => {
  return (
    <div className="w-full h-full">
      <div className="relative overflow-x-auto">
        <div className="flex items-center justify-center mx-8 my-2">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Attempt
          </h2>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Topic
              </th>
              <th scope="col" className="px-6 py-3">
                Primary Company
              </th>
              <th scope="col" className="px-6 py-3">
                Secondary Company
              </th>
              <th scope="col" className="px-6 py-3">
                Level
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Array To String
              </th>
              <td className="px-6 py-4">Google</td>
              <td className="px-6 py-4">Meta</td>
              <td className="px-6 py-4">1</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Binary Search
              </th>
              <td className="px-6 py-4">Meta</td>
              <td className="px-6 py-4">Netflix</td>
              <td className="px-6 py-4">2</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Bubble Sort
              </th>
              <td className="px-6 py-4">Netflix</td>
              <td className="px-6 py-4">Yahoo</td>
              <td className="px-6 py-4">1</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Insertion Sort
              </th>
              <td className="px-6 py-4">Yahoo</td>
              <td className="px-6 py-4">Google</td>
              <td className="px-6 py-4">3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAttempt;
