import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { alertsData } from "../Data/datas";

// Process data to get count of alerts by source IP and destination IP
const alertCounts = alertsData.reduce((acc, alert) => {
  const srcIP = alert.src_ip;
  const destIP = alert.dest_ip;
  if (!acc[srcIP]) acc[srcIP] = {};
  acc[srcIP][destIP] = (acc[srcIP][destIP] || 0) + 1;
  return acc;
}, {});

const srcIPs = Object.keys(alertCounts);
const destIPs = [
  ...new Set(srcIPs.flatMap((srcIP) => Object.keys(alertCounts[srcIP]))),
];

// Stacked bar data
const stackedBarData = {
  labels: srcIPs,
  datasets: destIPs.map((destIP, index) => ({
    label: destIP,
    data: srcIPs.map((srcIP) => alertCounts[srcIP][destIP] || 0),
    backgroundColor: `rgba(${index * 30}, ${index * 60}, ${index * 90}, 0.6)`,
    borderColor: `rgba(${index * 30}, ${index * 60}, ${index * 90}, 1)`,
    borderWidth: 1,
  })),
};

const StackedBarGraph = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 className="headings" style={{ margin: "auto", fontSize: "30px" }}>
        Alerts by Source and Destination IPs
      </h2>
      <div style={{ width: "90%", height: "70%" }}>
        <Bar
          data={stackedBarData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default StackedBarGraph;
