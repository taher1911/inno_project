/////////// styles ///////////////
import classes from "./Progress.module.scss";

import TextSection from "../Text";

import Image from "next/image";
////////// calender icon ///////////
import { BsCalendar4Week } from "react-icons/bs";
const ProgressSection = () => {
  return (
    <section className={classes.container}>
      <TextSection
        title="Work In Progress"
        description="Below is the calendar you can check the work in progress"
      />
      <div className={classes.progress}>
        <div className={classes.progressBar}>
          <div className={classes.procressActive}>
            <div className={classes.start}>
              <Image
                src="/photo5906748117531867302-removebg-preview (1).png"
                alt="front progress line"
                width={16}
                height={106}
              />
            </div>
            <div className={classes.front}>
              <Image
                src="/Ellipse 46.png"
                alt="front progress line"
                width={16}
                height={106}
              />
            </div>
          </div>
          <div className={classes.end}>
            <Image
              src="/progressEnd.png"
              alt="front progress line"
              width={16}
              height={106}
            />
          </div>
        </div>
        <div className={classes.dates}>
          <div className={classes.startDate}>
            <div className={classes.calender}>
              <BsCalendar4Week />
            </div>
            <div className={classes.information}>
              <h4>Start Date</h4>
              <p>01 - April - 2022</p>
            </div>
          </div>
          <div className={classes.endDate}>
            <div className={classes.calender}>
              {" "}
              <BsCalendar4Week />
            </div>
            <div className={classes.information}>
              <h4>End Date</h4>
              <p>06 - May - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProgressSection;
