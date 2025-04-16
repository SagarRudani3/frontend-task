"use client";

import { motion } from "framer-motion";
import { AlertCircle, AlertTriangle, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import AlertCard from "./AlertCard";
import { generateRandomAlert } from "@/lib/utils";

export default function WithoutSimbian() {
  const [ignoredAlerts, setIgnoredAlerts] = useState(200);
  const [wronglyClosed, setWronglyClosed] = useState(35);
  const [activeThreats, setActiveThreats] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIgnoredAlerts((prev) => prev + Math.floor(Math.random() * 3));
      setWronglyClosed((prev) => prev + Math.floor(Math.random() * 2));
      setActiveThreats((prev) => prev + Math.floor(Math.random() * 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute -top-8 left-0"
      >
        <h2 className="text-2xl font-semibold text-red-500">Without Simbian</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <AlertCard
          title="Ignored Alerts"
          count={ignoredAlerts}
          icon={AlertCircle}
          color="red"
          description="Wasting valuable analyst time on false positives"
        />
        <AlertCard
          title="Wrongly Closed Alerts"
          count={wronglyClosed}
          icon={AlertTriangle}
          color="yellow"
          description="Processing one alert at a time, missing the big picture"
        />
        <AlertCard
          title="Active Threats"
          count={activeThreats}
          icon={Shield}
          color="orange"
          description="More time fixing SOAR automation, less time on real threats"
        />
      </div>
    </section>
  );
}