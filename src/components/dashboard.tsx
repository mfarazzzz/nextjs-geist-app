"use client";

import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="p-4 border border-gray-300 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Application Trends</h3>
        <p className="text-gray-700">Analytics and charts will be displayed here.</p>
      </section>

      <section className="p-4 border border-gray-300 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Suggested Opportunities</h3>
        <p className="text-gray-700">Job suggestions based on your profile will appear here.</p>
      </section>

      <section className="p-4 border border-gray-300 rounded shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Job Alerts</h3>
        <p className="text-gray-700">Manage your job alert preferences here.</p>
      </section>
    </div>
  );
}
