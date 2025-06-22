export async function fetchJobFeeds() {
  // TODO: Implement API calls to Indeed, Google Jobs, Naukri, or government job portals
  // Return mock data for now
  return [
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
}

export async function fetchEmploymentNews() {
  // TODO: Implement API calls to PIB, Economic Times, LiveMint
  // Return mock data for now
  return [
    {
      id: "1",
      title: "Government announces new employment scheme",
      source: "Press Information Bureau",
      date: "2024-06-01",
      summary:
        "The government has launched a new employment scheme aimed at increasing job opportunities in rural areas.",
      url: "#",
    },
    {
      id: "2",
      title: "Economic Times: Job market trends in 2024",
      source: "Economic Times",
      date: "2024-05-28",
      summary:
        "An analysis of the job market trends and sectors with the highest growth potential in 2024.",
      url: "#",
    },
  ];
}
