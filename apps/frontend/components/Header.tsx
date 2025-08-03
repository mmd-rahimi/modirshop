"use client";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isActiveMobile, setIsActiveMobile] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header-wrapper">
        <Link className="logo" href="/">
          <img src="/images/logo.jpg" alt="logo" />
        </Link>
        <nav className={`nav ${isActiveMobile ? "active" : ""}`}>
          <Link className="nav-link" href={"/"}>
            صفحه اصلی
          </Link>
          <Link className="nav-link" href={"/products"}>
            محصولات
          </Link>
          <Link className="nav-link" href={"/cart"}>
            سبد خرید
          </Link>
        </nav>
        <button className="nav-button" onClick={() => setIsActiveMobile((prev) => !prev)}><AlignJustify /></button>
      </div>
    </header>
  );
}

export default Header;
