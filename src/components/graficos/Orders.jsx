/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    color: "hsl(60, 70%, 50%)",
    data: [
      {
        x: "janeiro",
        y: 100,
      },
      {
        x: "fevereiro",
        y: 120,
      },
      {
        x: "março",
        y: 50,
      },
      {
        x: "abril",
        y: 228,
      },
      {
        x: "maio",
        y: 155,
      },
      {
        x: "junho",
        y: 227,
      },
      {
        x: "julho",
        y: 271,
      },
      {
        x: "agosto",
        y: 112,
      },
      {
        x: "setembro",
        y: 170,
      },
      {
        x: "outubro",
        y: 145,
      },
      {
        x: "novembro",
        y: 203,
      },
      {
        x: "dezembro",
        y: 181,
      },
    ],
  },
];

class prejuízo extends React.Component {
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
        lineWidth={3}
        colors={{ scheme: "red_yellow_green" }}
        enablePoints={false}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "red" }}
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

export default prejuízo;
