import React from 'react';

function JobItem({ job }) {
  return (
    <div className="job-item">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.description}</p>
      {/* Add more job details as needed */}
    </div>
  );
}

export default JobItem;
