const baseBarLineOptions = function (chartType, xAxisData, chartData) {
  return {
    xAxis: {
      type: "category",
      data: xAxisData
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: chartData,
        type: chartType,
      },
    ],
  };
};
