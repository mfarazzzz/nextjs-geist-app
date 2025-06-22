"use client";

import React, { useEffect, useState } from "react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  skills?: string[];
}

export default function JobFeed() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // TODO: Replace with real API integration
    const mockJobs: Job[] = [
      {
        id: "1",
        title: "Software Engineer",
        company: "Tech Corp",
        location: "Bangalore",
        type: "Full-time",
        salary: "₹10,00,000 - ₹15,00,000",
        skills: ["React", "Node.js", "TypeScript"],
      },
      {
        id: "2",
        title: "Data Analyst Intern",
        company: "Data Insights",
        location: "Hyderabad",
        type: "Internship",
        salary: "₹15,000 per month",
        skills: ["SQL", "Excel", "Python"],
      },
    ];
    setJobs(mockJobs);
  }, []);

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="border border-gray-300 rounded p-4 hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-700">{job.company}</p>
          <p className="text-gray-600">{job.location}</p>
          <p className="text-sm text-gray-500">{job.type}</p>
          {job.salary && <p className="text-sm text-gray-500">Salary: {job.salary}</p>}
          {job.skills && (
            <p className="text-sm text-gray-500">
              Skills: {job.skills.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
