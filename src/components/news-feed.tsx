"use client";

import React, { useEffect, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
}

export default function NewsFeed() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // TODO: Replace with real API integration
    const mockNews: NewsItem[] = [
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
    setNews(mockNews);
  }, []);

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 rounded p-4 hover:shadow-md transition-shadow"
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            {item.title}
          </a>
          <p className="text-gray-600 text-sm">
            {item.source} - {new Date(item.date).toLocaleDateString()}
          </p>
          <p className="text-gray-700">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}
