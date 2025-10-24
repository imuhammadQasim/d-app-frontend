import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { StyledMiningGraph } from "./LiveGraph.styles";

const MiningGraph = ({ isLoading }) => {
  const chartRef = useRef(null);
  const [chartObject, setChartObject] = useState({
    title: {
      text: "",
    },
    chart: {
      type: "spline",
      spacingLeft: 0,
      marginLeft: 100,
      marginRight: 20,
      spacingBottom: -20,
      backgroundColor: "transparent",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshair: false,
      visible: true,
      labels: {
        style: {
          color: "white",
        },
      },
    },

    tooltip: {
      shared: true,
    },

    yAxis: {
      gridLineDashStyle: "dash",
      gridLineColor: "rgba(255, 255, 255, 0.4)",
      labels: {
        style: {
          color: "white",
        },
        format: "{value} (EH/s)",
      },
    },

    plotOptions: {
      series: {
        animation: {
          duration: 1000,
        },
        marker: {
          enabled: false,
        },
        lineWidth: 1,
      },
    },
    series: [
      {
        name: "",
        data: [
          800, 900, 700, 1200, 1500, 1100, 1300, 1400, 1000, 1600, 1200, 1800,
        ],
        yAxis: 0,
        color: "var(--primary)",
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {},
        },
      ],
    },
  });

  useEffect(() => {
    // You can add more chart options here dynamically if needed
  }, []);

  useEffect(() => {
    let chartReference = null;
    if (chartRef) {
      chartReference = chartRef.current.chart;
    }

    if (isLoading && chartReference) {
      chartReference?.showLoading();
    }
    if (!isLoading && chartReference) {
      chartReference?.hideLoading();
    }
  }, [isLoading]);

  return (
    <StyledMiningGraph>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartObject}
        ref={chartRef}
      />
    </StyledMiningGraph>
  );
};

export default MiningGraph;
