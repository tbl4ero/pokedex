import React from "react";
import { Radar } from "react-chartjs-2";

import statsConfig from "./Stats.config";
import { statTypes } from "../../../constants";
import { ChartContainer } from "./Stats.styles";
import { Pokemon, Stat } from "../PokePage.types";

const Stats = (props: Pokemon) => {
  const radarData = props.stats.reduce((accum: { [key: string]: number }, current: Stat) => {
    return { ...accum, [statTypes[current.stat.name]]: current.base_stat };
  }, {});
  const newRadarData = {
    labels: [...Object.keys(radarData)],
    datasets: [
      {
        backgroundColor: "rgba(255,255,255,.55)",
        borderColor: "rgb(255,255,255)",
        pointBackgroundColor: "rgb(255,255,255)",
        pointHitRadius: 5,
        pointRadius: 4,
        data: [...Object.values(radarData)],
      },
    ],
  };
  
  return (
    <ChartContainer>
      <Radar type="radar" data={newRadarData} options={statsConfig} />
    </ChartContainer>
  );
};

export default Stats;
