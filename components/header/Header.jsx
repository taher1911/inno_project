import Link from "next/link";
import classes from "./Header.module.scss";
import { useState } from "react";
import Account from "../Account";
import useEagerConnect from "../../hooks/useEagerConnect";

const Header = () => {
  const [active, setActive] = useState(1);
  const triedToEagerConnect = useEagerConnect();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">inno</Link>
      </div>
      <ul>
        <li
          style={{
            fontWeight: active == 1 ? "700" : "400",
          }}
          onClick={() => setActive(1)}
        >
          <Link href="/">home</Link>
        </li>
        <li
          style={{
            fontWeight: active == 2 ? "700" : "400",
          }}
          onClick={() => setActive(2)}
        >
          <Link href="/refer">Refer</Link>
        </li>
        <li
          style={{
            fontWeight: active == 3 ? "700" : "400",
          }}
          onClick={() => setActive(3)}
        >
          <Link href="/profile">My Profile</Link>
        </li>
        <li className={classes.connect}>
          <Account triedToEagerConnect={triedToEagerConnect} />
        </li>
      </ul>
    </header>
  );
};
export default Header;
