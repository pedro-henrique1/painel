import React from "react";
import { ResponsiveLine } from "@nivo/line";
import "./NivoChart.css";

const data = [
  {
    color: "hsl(60, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 5,
      },
      {
        x: "helicopter",
        y: 20,
      },
      {
        x: "boat",
        y: 50,
      },
      {
        x: "train",
        y: 228,
      },
      {
        x: "subway",
        y: 155,
      },
      {
        x: "bus",
        y: 227,
      },
      {
        x: "car",
        y: 271,
      },
      {
        x: "moto",
        y: 112,
      },
      {
        x: "bicycle",
        y: 91,
      },
      {
        x: "horse",
        y: 145,
      },
      {
        x: "skateboard",
        y: 203,
      },
      {
        x: "others",
        y: 181,
      },
    ],
  },
];

class NivoChart extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <ResponsiveLine
        data={data}
        margin={{ top: 200, right: 17, bottom: 12, left: 25 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "dark2" }}
        enablePoints={false}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
      />
    );
  }
}

export default NivoChart;
