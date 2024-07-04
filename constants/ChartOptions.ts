import { ApexOptions } from "apexcharts";
import { COLORS } from "./Colors";

export const options: ApexOptions = {
  colors: [COLORS.OrangeLightShade, COLORS.yellowShade, COLORS.pinkShade],
  chart: {
    type: "bar",
    height: 335,
    width: 50,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  grid: {
    show: false,
  },
  responsive: [
    {
      options: {
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: 12,
            gap: 200,
          },
        },
      },
    },
  ],

  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 5,
      columnWidth: 12,
      borderRadiusWhenStacked: "all",
      borderRadiusApplication: "around",
    },
  },

  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thru", "Fri", "Sat", "Sun"],
    axisBorder: { show: false },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: {
      formatter: function (val) {
        return val + "%";
      },
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",
    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};
