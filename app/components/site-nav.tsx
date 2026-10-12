"use client";

import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { useState } from "react";

const links = [
  ["홈", "/#home"],
  ["연구", "/#research"],
  ["논문", "/#publications"],
  ["기술", "/#skills"],
  ["학력·활동", "/#credentials"],
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <Link className="brand" href="/#home" aria-label="BAN JUN HYEONG portfolio home">
        <span>BJH</span>
        <strong>반준형</strong>
      </Link>
      <div className="desktop-nav">
        {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
      </div>
      <Link className="nav-action" href="/#contact">연락하기 <ArrowUpRight weight="bold" /></Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
        {open ? <X /> : <List />}
      </button>
      {open && (
        <div className="mobile-nav">
          {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="mobile-contact" href="/#contact" onClick={() => setOpen(false)}>연락하기 <ArrowUpRight /></Link>
        </div>
      )}
    </nav>
  );
}
