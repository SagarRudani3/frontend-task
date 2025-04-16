import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const alertTypes = [
  "Phishing Email Detected",
  "Suspicious Login Attempt",
  "Malware Activity",
  "Data Exfiltration",
  "Unauthorized Access",
  "SQL Injection Attempt",
  "Brute Force Attack",
  "DDoS Attack",
  "Ransomware Activity",
  "Zero-day Exploit"
];

export function generateRandomAlert(): string {
  return alertTypes[Math.floor(Math.random() * alertTypes.length)];
}