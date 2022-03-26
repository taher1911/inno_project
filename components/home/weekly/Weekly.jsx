/////////// styles ///////////////
import classes from "./Weekly.module.scss";

import TextSection from "../Text";
////// test data //////////////
const testWeeksData = [
  {
    id: 1,
    data1: {
      title: "5B",
      description: "Basket Size",
    },
    data2: {
      title: "8,123B",
      description: "PAB",
    },
    data3: {
      title: "1,2M",
      description: "USD Sacrified",
    },
    data4: {
      title: "2.6K",
      description: "Unique addresses",
    },
  },
  {
    id: 2,
    data1: {
      title: "5B",
      description: "Basket Size",
    },
    data2: {
      title: "8,123B",
      description: "PAB",
    },
    data3: {
      title: "1,2M",
      description: "USD Sacrified",
    },
    data4: {
      title: "2.6K",
      description: "Unique addresses",
    },
  },
  {
    id: 3,
    data1: {
      title: "5B",
      description: "Basket Size",
    },
    data2: {
      title: "8,123B",
      description: "PAB",
    },
    data3: {
      title: "1,2M",
      description: "USD Sacrified",
    },
    data4: {
      title: "2.6K",
      description: "Unique addresses",
    },
  },
  {
    id: 4,
    data1: {
      title: "5B",
      description: "Basket Size",
    },
    data2: {
      title: "--",
      description: "PAB",
    },
    data3: {
      title: "--",
      description: "USD Sacrified",
    },
    data4: {
      title: "--",
      description: "Unique addresses",
    },
  },
  {
    id: 5,
    data1: {
      title: "5B",
      description: "Basket Size",
    },
    data2: {
      title: "--",
      description: "PAB",
    },
    data3: {
      title: "--",
      description: "USD Sacrified",
    },
    data4: {
      title: "--",
      description: "Unique addresses",
    },
  },
];
const Weekly = () => {
  return (
    <section className={classes.weekly}>
      <TextSection
        title="Weekly Amplifier"
        description="The total month amplifier will release ‘5B’ $INNO tokens will be allocated each week."
      />
      <div className={classes.weeksSection}>
        {testWeeksData.map((week) => (
          <div className={classes.week} key={week.id}>
            <h3>week {week.id}</h3>
            <div className={classes.weekInfo}>
              <div>
                <h4>{week.data1.title}</h4>
                <p>{week.data1.description}</p>
              </div>
              <span className={classes.line}></span>
              <div>
                <h4>{week.data2.title}</h4>
                <p>{week.data2.description}</p>
              </div>
              <span className={classes.line}></span>
              <div>
                <h4>{week.data3.title}</h4>
                <p>{week.data3.description}</p>
              </div>
              <span className={classes.line}></span>
              <div>
                <h4>{week.data4.title}</h4>
                <p>{week.data4.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Weekly;
