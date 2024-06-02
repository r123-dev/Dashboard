



import React, { useState } from "react";
import PieChart from "./components/PieChart";
import BarGraph from "./components/BarGraph";
import LineChart from "./components/LineData";
import StackedBarGraph from "./components/StackedBarGraph";
import "./App.css";

const App = () => {
  const [currentChart, setCurrentChart] = useState("pie");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderChart = () => {
    switch (currentChart) {
      case "pie":
        return <PieChart />;
      case "bar":
        return <BarGraph />;
      case "line":
        return <LineChart />;
      case "stackedBar":
        return <StackedBarGraph />;
      default:
        return <PieChart />;
    }
  };

  return (
    <div className="App">
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="sidebar-button" onClick={() => setCurrentChart("pie")}>Pie Chart</button>
        <button className="sidebar-button" onClick={() => setCurrentChart("bar")}>Bar Graph</button>
        <button className="sidebar-button" onClick={() => setCurrentChart("line")}>Line Chart</button>
        <button className="sidebar-button" onClick={() => setCurrentChart("stackedBar")}>Stacked Bar Graph</button>
      </div>
      <div className="chart-container">
        <span className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </span>
        {renderChart()}
      </div>
    </div>
  );
};

export default App;
