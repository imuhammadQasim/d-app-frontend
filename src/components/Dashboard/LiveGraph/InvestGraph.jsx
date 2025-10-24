import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const newData = {
  2020: [350, 350, 240, 180, 250, 420, 300, 500, 180, 150, 250, 300],
  2016: [80, 100, 120, 150, 170, 200, 250, 300, 350, 250, 250, 320],
};
const InvestGraph = ({ isLoading, data = newData }) => {
  const chartRef = useRef(null);
  const [chartObject, setChartObject] = useState({
    title: {
      text: "",
      align: "left",
    },
    subtitle: {
      text: "",
      align: "left",
    },
    chart: {
      type: "column",
      spacingLeft: 0,
      marginLeft: 70,
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
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        autoRotation: [-45, -90],
        style: {
          fontSize: "13px",
          color: "#FFFFFF",
        },
      },
    },
    yAxis: [
      {
        gridLineDashStyle: "dash",
        gridLineColor: "rgba(255, 255, 255, 0.4)",
        showFirstLabel: false,
        labels: {
          formatter: function () {
            return this.value >= 1000
              ? `$${this.value / 1000}k`
              : `$${this.value}`;
          },
          style: {
            fontSize: "13px",
            color: "#FFFFFF",
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      backgroundColor: "#000",
      style: {
        color: "#fff",
        fontWeight: "300",
      },
      headerFormat: '<span style="font-size: 15px">{point.key}</span><br/>',
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> ' +
        "<b >{point.xName}</b> <b>{point.custom.label}</b><br/>",
    },

    plotOptions: {
      column: {
        borderRadius: 5,
      },
      series: {
        grouping: false,
        borderWidth: 0,
      },
    },
    series: [
      {
        color: "var(--off-white)",
        pointPlacement: -0.2,
        linkedTo: "main",
        data: [],
        name: "2016",
        zIndex: 1,
      },
      {
        name: "2020",
        color: "var(--primary)",
        id: "main",
        dataSorting: {
          enabled: true,
          matchByName: true,
        },
        dataLabels: [
          {
            enabled: false,
            inside: true,
            style: {
              fontSize: "16px",
            },
          },
        ],
        data: [],
        zIndex: 2,
      },
    ],
    exporting: {
      allowHTML: true,
    },
  });

  const formatData = (data) =>
    data.map((value, index) => ({
      name: `Month ${index + 1}`,
      y: value,
      custom: {
        label: `Invt: $${value.toLocaleString()} INTD$`,
      },

      //   color: "var(--primary)",
    }));

  useEffect(() => {
    setChartObject((prevChart) => ({
      ...prevChart,
      series: [
        {
          ...prevChart.series[0],
          data: formatData(data[2016]),
        },
        {
          ...prevChart.series[1],
          data: formatData(data[2020]),
        },
      ],
    }));
  }, [data]);

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
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartObject}
        ref={chartRef}
      />
    </>
  );
};

export default InvestGraph;
