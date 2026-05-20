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
  github?: string;
  liveUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "digital-ph-meter",
    title: "Digital pH Meter System",
    excerpt: "A smart water quality monitoring system designed to measure and analyze pH levels in real time using an ESP32 microcontroller and analog pH sensor.",
    content: `
# Digital pH Meter System

A smart water quality monitoring system designed to measure and analyze pH levels in real time using an ESP32 microcontroller and analog pH sensor. The system converts analog sensor readings into accurate digital pH values and displays them on an LCD screen for instant monitoring. It also includes a buzzer-based alert mechanism to indicate unsafe water conditions.

Built with low-cost embedded components, the project focuses on providing an affordable, portable, and reliable solution for water quality testing in educational, domestic, and industrial applications. The system supports calibration using standard buffer solutions to improve measurement accuracy and demonstrates the practical integration of sensors, ADC processing, and embedded programming. Future enhancements include IoT-based wireless monitoring, temperature compensation, and cloud data logging for continuous environmental analysis.

## Tech Stack

ESP32, Analog pH Sensor, Arduino IDE, Embedded C, I2C LCD, IoT Concepts

## Features

- Real-time pH monitoring and display
- Safe/unsafe water indication using buzzer alerts
- Analog-to-digital signal processing with ESP32
- Sensor calibration for improved accuracy
- Portable and low-cost embedded system design
    `,
    author: "Aditya",
    date: "2024-03-15",
    readTime: "Project",
    category: "EMBEDDED / IOT",
    tech: "ESP32, Analog pH Sensor, Arduino IDE, Embedded C, I2C LCD, IoT Concepts",
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
  {
    id: "iv-fluid-monitoring-system",
    title: "IV Fluid Monitoring System",
    excerpt: "An IoT-based healthcare monitoring system designed to continuously track IV fluid levels and drip rate in real time using an ESP32 microcontroller.",
    content: `
# IV Fluid Monitoring System

An IoT-based healthcare monitoring system designed to continuously track IV fluid levels and drip rate in real time using an ESP32 microcontroller. The system uses a load cell sensor with an HX711 amplifier to measure the remaining IV fluid weight, while an IR sensor pair detects the drip flow through the IV chamber.

The ESP32 processes sensor data and displays live fluid percentage and drip rate on a 16×2 LCD display. To improve patient safety, the system includes LED indicators and a buzzer alert mechanism that activates when the IV fluid reaches critically low levels. The project reduces the need for constant manual supervision in hospitals and demonstrates the practical application of embedded systems and IoT in smart healthcare.

The system is designed to be affordable, efficient, and scalable, with future scope for wireless monitoring, mobile app integration, cloud data logging, and multi-patient monitoring support.

## Tech Stack

ESP32, Load Cell Sensor, HX711 Amplifier, IR Sensor, Arduino IDE, LCD Display, Embedded C, IoT

## Features

- Real-time IV fluid level monitoring
- Drip rate detection using IR sensors
- LCD display for live monitoring data
- Audio and visual alert system using buzzer and LEDs
- Low-cost and efficient healthcare automation solution
- Future-ready IoT integration support
    `,
    author: "Aditya",
    date: "2025-01-10",
    readTime: "Project",
    category: "EMBEDDED / IOT",
    tech: "ESP32, Load Cell Sensor, HX711 Amplifier, IR Sensor, Arduino IDE, LCD Display, Embedded C, IoT",
    image: "/projects/IV Fluid Monitoring.png",
    github: "https://github.com/adityaanand",
  },
];