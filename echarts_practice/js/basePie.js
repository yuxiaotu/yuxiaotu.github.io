const basePieOptions = function(chartData, xAxisData) {
  let data = chartData.map((item, index) => {
    return {
      value: item,
      name: xAxisData[index]
    }
  });

  return {
    series: [
      {
        type: 'pie',
        data: data
      }
    ]
  }
}