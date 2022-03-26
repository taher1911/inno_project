/////////// styles ///////////////
import classes from "./LeaderBoard.module.scss";

import TextSection from "../Text";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const LeaderBoard = ({ data }) => {
  const [all, setAll] = useState(false);
  const [active, setActive] = useState(1);
  return (
    <section className={classes.leader}>
      <TextSection
        title="LeaderBoard"
        description="See top 100 user who sacrificed their addresses"
      />
      <div className={classes.weekTable}>
        <h4>Weekly Leaderboard</h4>
        <div className={classes.weeks_Search}>
          <div className={classes.weeks}>
            <button
              onClick={() => {
                setActive(1);
              }}
              style={{
                background:
                  active == 1 ? "rgba(0, 255, 240, 0.885839)" : "#434343",
                fontWeight: active == 1 ? "700" : "400",
              }}
            >
              week 1
            </button>
            <button
              onClick={() => {
                setActive(2);
              }}
              style={{
                background:
                  active == 2 ? "rgba(0, 255, 240, 0.885839)" : "#434343",
                fontWeight: active == 2 ? "700" : "400",
              }}
            >
              week 2
            </button>
            <button
              onClick={() => {
                setActive(3);
              }}
              style={{
                background:
                  active == 3 ? "rgba(0, 255, 240, 0.885839)" : "#434343",
                fontWeight: active == 3 ? "700" : "400",
              }}
            >
              week 3
            </button>
            <button
              onClick={() => {
                setActive(4);
              }}
              style={{
                background:
                  active == 4 ? "rgba(0, 255, 240, 0.885839)" : "#434343",
                fontWeight: active == 4 ? "700" : "400",
              }}
            >
              week 4
            </button>

            <button
              onClick={() => {
                setActive(5);
              }}
              style={{
                background:
                  active == 5 ? "rgba(0, 255, 240, 0.885839)" : "#434343",
                fontWeight: active == 5 ? "700" : "400",
              }}
            >
              {" "}
              week 5
            </button>

            <button
              onClick={() => {
                setAll(!all);
                setActive(0);
              }}
              style={{
                background:
                  active == 0 ? "rgba(0, 255, 240, 0.885839)" : "#434343",
                fontWeight: active == 0 ? "700" : "400",
              }}
            >
              {all ? "less" : "all"}
            </button>
          </div>
          <form>
            <input type="text" placeholder="Search address" />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Address</th>
              <th>Total USD</th>
              <th>Count</th>
              <th>Basket Share</th>
              <th>PBB</th>
              <th>Bonus Multiply</th>
              <th>PAB</th>
            </tr>
          </thead>
          <tbody>
            {data.map((day) => (
              <tr key={day.rank}>
                <td>
                  {day.rank}-{active}
                </td>
                <td>
                  {day.address}-{active}
                </td>
                <td>
                  {day.total}-{active}
                </td>
                <td>
                  {day.count}-{active}
                </td>
                <td>
                  {day.basket}-{active}
                </td>
                <td>
                  {day.pbb}-{active}
                </td>
                <td>
                  {day.bonus}-{active}
                </td>
                <td>
                  {day.pab}-{active}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default LeaderBoard;
