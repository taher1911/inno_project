import Image from "next/image";
import Link from "next/link";
import classes from "./Landing.module.scss";
const Landing = () => {
  return (
    <section className={classes.landing}>
      <div className={classes.container}>
        <div className={classes.text}>
          <h1>
            Welcome to <br /> INNOVATION
          </h1>
          <p>
            Lorem ipsum is a placeholder text commonly document or a typeface
            without relying on meaningful content.
          </p>
          <div className={classes.totals}>
            <div>
              <h2>12.3K</h2>
              <p>
                TOTAL <br /> ADDRESSES
              </p>
            </div>

            <div>
              <h2>24M</h2>
              <p>
                TOTAL POINTS
                <br /> TO DATE
              </p>
            </div>
            <div>
              <h2>50.6K</h2>
              <p>
                TOTAL UNIQUE <br /> TRANSACTIONS
              </p>
            </div>
          </div>
          <div className={classes.btn}>
            <Link href="/sacrifie">Sacrifice Now</Link>
          </div>
        </div>
        <div className={classes.image}>
          <div className={classes.total}>
            <Image
              src="/Rectangle 187.png"
              alt="total usd sacrified"
              layout="fill"
            />
          </div>
          <div className={classes.creditCard}>
            <Image
              src="/Rectangle 3 (1).png"
              alt="total usd sacrified"
              layout="fill"
            />
          </div>
          <div className={classes.elli1}>
            <Image
              src="/Ellipse 3.png"
              alt="total usd sacrified"
              layout="fill"
            />
          </div>
          <div className={classes.elli2}>
            <Image
              src="/Ellipse 2.png"
              alt="total usd sacrified"
              layout="fill"
            />
          </div>
          <div className={classes.cardRectangle}>
            <Image
              src="/Rectangle 4.png"
              alt="total usd sacrified"
              layout="fill"
            />
          </div>
          <span className={classes.cardName}>JOHN ALEXENDAR</span>
          <div className={classes.dolarDiv}>
            <Image
              src="/Ellipse 4.png"
              alt="total usd sacrified"
              layout="fill"
            />
          </div>
          <div className={classes.dolar}>
            <Image
              src="/Vector (3).png"
              alt="total usd sacrified"
              layout="fill"
            />
          </div>
          <div className={classes.text}>
            <p>Total USD Sacrificed</p>
            <p>50,000,000</p>
            <span>Sacrifice Address</span>
            <p>0x1e5oE75dAF84nB8390xDD</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
