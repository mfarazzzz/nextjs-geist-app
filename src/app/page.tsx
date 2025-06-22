"use client";

import React from "react";
import JobFeed from "../components/job-feed";
import NewsFeed from "../components/news-feed";
import Dashboard from "../components/dashboard";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <section>
        <h2 className="text-3xl font-bold mb-4">Job Board Feeds</h2>
        <JobFeed />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Employment News</h2>
        <NewsFeed />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <Dashboard />
      </section>
    </div>
  );
}
