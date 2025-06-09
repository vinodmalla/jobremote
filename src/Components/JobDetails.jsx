import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addJobDiscription } from '../Redux/descriptionSlice';

const JobDetails = ({
  id,
  company_name,
  title,
  category,
  url,
  salary,
  company_logo,
  candidate_required_location,
  job_type,
  description,
}) => {
  const dispatch = useDispatch();

  const handledispatch = () => {
    dispatch(addJobDiscription(description));
  };

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-2xl p-6 md:p-8 m-4 flex flex-col space-y-4">
      {/* Job Title */}
      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800">{title}</h2>

      {/* Company Logo & Name */}
      <div className="flex items-center justify-center space-x-4">
        <img
          className="w-10 h-10 md:w-14 md:h-14 rounded-lg object-contain"
          src={company_logo}
          alt={company_name}
        />
        <h3 className="text-md md:text-lg font-semibold text-gray-700">{company_name}</h3>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {[category, candidate_required_location, job_type].map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full border border-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
        <Link to="/description" className="w-full md:w-auto">
          <button
            onClick={handledispatch}
            className="w-full md:w-auto bg-black text-white px-5 py-2 rounded-lg font-semibold transition hover:bg-white hover:text-black border border-black"
          >
            View Details
          </button>
        </Link>
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
          <button className="w-full md:w-auto bg-black text-white px-5 py-2 rounded-lg font-semibold transition hover:bg-white hover:text-black border border-black">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default JobDetails;
