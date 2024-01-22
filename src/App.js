import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import JobList from './jobList';
import './style.css'

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch jobs from your API when the component mounts
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    // Replace with your API call
    const response = await fetch('/api/jobs');
    const data = await response.json();
    setJobs(data);
  };

  const handleSearch = term => {
    setSearchTerm(term);
    // Optionally, fetch jobs based on the search term
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <JobList jobs={jobs} searchTerm={searchTerm} />
    </div>
  );
}


export default App;
