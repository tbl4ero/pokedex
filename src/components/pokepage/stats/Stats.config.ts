const statsConfig = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      displayTItle: false,
    },
  },
  scales: {
    r: {
      pointLabels: {
        backdropColor: "rgba(0, 0, 0, .5)",
        backdropPaddingX: 3,
        backdropPaddingY: 1,
        font: {
          size: 16,
          weight: "700",
        },
        color: "white",
      },
      ticks: {
        display: false,
        maxTicksLimit: 3,
        beginAtZero: true,
        max: 500,
      },
      grid: {
        color: "white",
        lines: {
          width: 10,
        },
        lineWidth: 4,
      },
      angleLines: {
        color: "white",
        width: 10,
      },
    },
  },
};

export default statsConfig;
