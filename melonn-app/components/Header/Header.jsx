import React from "react";
import s from "./Header.module.scss";
import Link from "next/link"

const Header = () => {

  return (
    <>
      <header className={s.header}>
        <Link href="/">
        <a>
       <h1>Melonn App</h1>
        </a>
        </Link>
      </header>
    </>
  );
};

export default Header;
