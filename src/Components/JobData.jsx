import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import JobDetails from "./JobDetails";
import { LoaderIcon } from 'lucide-react';

export default function JobData() {
  const job = useSelector((store) => store.data?.jobdata);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  if (!Array.isArray(job)) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <LoaderIcon size={64} className="animate-spin text-gray-500" />
      </div>
    );
  }

  const totalPages = Math.ceil(job.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = job.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
      {/* Job Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentJobs.map((datas) => (
          <li key={datas.id} className="bg-white shadow-md rounded-xl p-4">
            <JobDetails {...datas} />
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
