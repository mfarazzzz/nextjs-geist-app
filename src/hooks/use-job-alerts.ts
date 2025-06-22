"use client";

import { useState, useEffect } from "react";

interface JobAlert {
  id: string;
  keyword: string;
  location?: string;
  jobType?: string;
}

export function useJobAlerts() {
  const [alerts, setAlerts] = useState<JobAlert[]>([]);

  useEffect(() => {
    // Load saved alerts from localStorage or API
    const savedAlerts = localStorage.getItem("jobAlerts");
    if (savedAlerts) {
      setAlerts(JSON.parse(savedAlerts));
    }
  }, []);

  const addAlert = (alert: JobAlert) => {
    setAlerts((prev) => {
      const updated = [...prev, alert];
      localStorage.setItem("jobAlerts", JSON.stringify(updated));
      return updated;
    });
  };

  const removeAlert = (id: string) => {
    setAlerts((prev) => {
      const updated = prev.filter((alert) => alert.id !== id);
      localStorage.setItem("jobAlerts", JSON.stringify(updated));
      return updated;
    });
  };

  return { alerts, addAlert, removeAlert };
}
