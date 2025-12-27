import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams();
  console.log(id);
  const job = useLoaderData();
  console.log(job);
  const {
    _id,
    title,
    company,
    salaryRange,
    location,
    requirements,
    description,
    company_logo,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm mt-10 mb-10">
      <div className="flex items-center gap-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <p>{company}</p>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div className="badge badge-outline" key={index}>
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
