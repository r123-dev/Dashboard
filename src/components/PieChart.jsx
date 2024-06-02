import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { alertsData } from "../Data/datas";

// Process data to get count of alerts by category
const categoryCounts = alertsData.reduce((acc, alert) => {
  if (alert.alert && alert.alert.category) {
    const category = alert.alert.category;
    acc[category] = (acc[category] || 0) + 1;
  }
  return acc;
}, {});

const pieData = {
  labels: Object.keys(categoryCounts),
  datasets: [
    {
      label: "Alert Categories",
      data: Object.values(categoryCounts),
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
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
        Alert Distribution by Category
      </h2>
      <div style={{ width: "90%", height: "70%" }}>
        <Pie data={pieData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default PieChart;
