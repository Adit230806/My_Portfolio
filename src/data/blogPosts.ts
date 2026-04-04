export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tech?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "digital-ph-meter",
    title: "Digital pH Meter System",
    excerpt: "A real-time pH monitoring system designed to measure acidity and alkalinity levels in water using sensor-based input and microcontroller processing.",
    content: `
# Digital pH Meter System

A real-time pH monitoring system designed to measure acidity and alkalinity levels in water using sensor-based input and microcontroller processing.
    `,
    author: "Aditya",
    date: "2024-03-15",
    readTime: "Project",
    category: "EMBEDDED / IOT",
    tech: "Arduino, pH Sensor, Embedded C",
    image: "/projects/ph-meter.png"
  },
  {
    id: "finomaly-finance-tracker",
    title: "Finomaly – Finance Tracker",
    excerpt: "A smart finance management web app that helps users track expenses, analyze spending patterns, and manage budgets efficiently.",
    content: `
# Finomaly – Finance Tracker

A smart finance management web app that helps users track expenses, analyze spending patterns, and manage budgets efficiently.
    `,
    author: "Aditya",
    date: "2024-03-10",
    readTime: "Project",
    category: "FULL STACK",
    tech: "React, Node.js, MongoDB",
    image: "/projects/finomaly.png"
  },


];