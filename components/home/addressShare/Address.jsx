/////////// styles ///////////////
import classes from "./Address.module.scss";
import TextSection from "../Text";

////////////////  chart data  /////////////////
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels: ["Email", "Search Engine", "Union Ads", "Video Ads", "Direct"],
  datasets: [
    {
      data: [2, 13, 4, 15, 6],
      backgroundColor: ["#268AFF", "#AD00FF", "#F178B6", "#00E2D5", "#5A3FFF"],
      borderColor: ["#051D28"],
      borderWidth: 2,
      label: "#of votes",
    },
  ],
};

const Address = () => {
  return (
    <section className={classes.address}>
      <TextSection
        title="Address Share"
        description="Below ae the top tokkens we have traded on daily basis"
      />
      <div className={classes.chartContainer}>
        <div className={classes.chart}>
          <div>
            <Pie data={data} />
          </div>
        </div>
        <ul>
          <li>
            <span></span>Search Engine
          </li>
          <li>
            <span></span>Direct
          </li>
          <li>
            <span></span>Email
          </li>
          <li>
            <span></span>Union Ads
          </li>
          <li>
            <span></span>Video Ads
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Address;
