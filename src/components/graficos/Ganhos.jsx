import React from "react";
import { ResponsiveLine } from "@nivo/line";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    id: "japan",
    color: "hsl(246, 70%, 50%)",
    data: [
      {
        x: "jan",
        y: 263,
      },
      {
        x: "fev",
        y: 167,
      },
      {
        x: "março",
        y: 176,
      },
      {
        x: "abril",
        y: 161,
      },
      {
        x: "maio",
        y: 151,
      },
      {
        x: "junho",
        y: 192,
      },
      {
        x: "julho",
        y: 196,
      },
      {
        x: "agosto",
        y: 170,
      },
      {
        x: "setembro",
        y: 122,
      },
      {
        x: "outubro",
        y: 153,
      },
      {
        x: "novembro",
        y: 173,
      },
      {
        x: "dez",
        y: 247,
      },
    ],
  },
];
class Ganho extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <ResponsiveLine
        data={data}
        margin={{ top: 150, right: 30, bottom: 50, left: 70 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        colors={{ scheme: "category10" }}
        lineWidth={4}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        enableCrosshair={false}
        isInteractive={false}
        legends={[]}
        motionStiffness={75}
      />
    );
  }
}

export default Ganho;
