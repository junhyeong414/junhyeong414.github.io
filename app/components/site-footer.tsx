import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>반준형 · BAN JUN HYEONG</strong>
        <p>가천대학원 배터리공학과 석사과정</p>
      </div>
      <div className="footer-contact">
        <span>공개 이메일 · TODO</span>
        <span>LinkedIn / GitHub / Google Scholar · TODO</span>
      </div>
      <Link href="/#home">맨 위로 <ArrowUpRight weight="bold" /></Link>
    </footer>
  );
}
