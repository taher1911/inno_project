/////////// styles ///////////////
import classes from "./Tokkens.module.scss";

import TextSection from "../Text";
////////////////card///////////
import Card from "./card/Card";

const Tokkens = () => {
  return (
    <section className={classes.tokkens}>
      <TextSection
        title="Top Tokkens"
        description="Below ae the top tokkens we have traded on daily basis"
      />

      <div className={classes.cards}>
        <div className={classes.col}>
          <Card
            img={`ethereum-eth-logo 1.png`}
            title={"Litecoin"}
            description="2.4B -- $2.6M"
          />
        </div>
        <div className={classes.col}>
          <Card
            img={`image 1 (1).png`}
            title="Solana"
            description="2.4B -- $2.6M"
          />
          <Card
            img={`ethereum-eth-logo 1 (1).png`}
            title="Luna"
            description="2.4B -- $2.6M"
          />
          <Card img={`Vector.png`} title="Avax" description="2.4B -- $2.6M" />
        </div>
        <div className={classes.col}>
          <Card
            img={`ethereum-eth-logo 1 (2).png`}
            title="Ethereum"
            description="2.4B -- $2.6M"
          />
          <Card
            img={`ethereum-eth-logo 1 (3).png`}
            title="USDC"
            description="2.4B -- $2.6M"
          />
          <Card
            img={`ethereum-eth-logo 1 (4).png`}
            title="HEX"
            description="2.4B -- $2.6M"
          />
          <Card
            img={`ethereum-eth-logo 1 (5).png`}
            title="DAI"
            description="2.4B -- $2.6M"
          />
        </div>
        <div className={classes.col}>
          <Card
            img={`ethereum-eth-logo 1 (6).png`}
            title="BNB"
            description="2.4B -- $2.6M"
          />
          <Card
            img={`ethereum-eth-logo 1 (7).png`}
            title="BUSD"
            description="2.4B -- $2.6M"
          />
          <Card
            img={`ethereum-eth-logo 1 (8).png`}
            title="USDT"
            description="2.4B -- $2.6M"
          />
        </div>
        <div className={classes.col}>
          <Card
            img={`ethereum-eth-logo 1 (9).png`}
            title="MATIC"
            description="2.4B -- $2.6M"
          />
        </div>
      </div>
      <div className={classes.background}></div>
    </section>
  );
};
export default Tokkens;
