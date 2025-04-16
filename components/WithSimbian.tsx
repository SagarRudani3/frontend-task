"use client";

import { motion } from "framer-motion";
import { AlertCircle, AlertTriangle, Shield, ArrowRight, CheckCircle } from "lucide-react";
import AlertCard from "./AlertCard";

const steps = [
  {
    title: "Triaged & Reported",
    description: "SOC Agent handled investigation and reporting",
    icon: CheckCircle,
  },
  {
    title: "Automated Response",
    description: "Incident automatically contained",
    icon: Shield,
  },
  {
    title: "Comprehensive Analysis",
    description: "AI recognized patterns",
    icon: AlertCircle,
  },
  {
    title: "Accurate Detection",
    description: "Zero false positives",
    icon: AlertTriangle,
  },
  {
    title: "24/7 Coverage",
    description: "No analyst fatigue",
    icon: Shield,
  },
];

export default function WithSimbian() {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute -top-8 left-0"
      >
        <h2 className="text-2xl font-semibold text-green-500">With Simbian</h2>
      </motion.div>

      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div key={step.title} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center w-48"
              >
                <div className="bg-green-500/10 p-4 rounded-full mb-4">
                  <step.icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </motion.div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block w-6 h-6 text-green-500 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AlertCard
          title="Ignored Alerts"
          count={0}
          icon={AlertCircle}
          color="green"
          description="90% of alerts resolved automatically, 24/7"
        />
        <AlertCard
          title="Wrongly Closed Alerts"
          count={0}
          icon={AlertTriangle}
          color="green"
          description="Correlates alerts to your environment"
        />
        <AlertCard
          title="Active Threats"
          count={0}
          icon={Shield}
          color="green"
          description="Investigate every alert—no SOAR needed"
        />
      </div>
    </section>
  );
}