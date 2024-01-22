import React from 'react';
import JobItem from './jobItem';

function JobList({ jobs, searchTerm }) {
  return (
    <div>
      {jobs.filter(job => job.title.includes(searchTerm)).map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
