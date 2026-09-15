import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Portfolio | Scientist & Engineer",
  description:
    "A scientist and engineer portfolio for research, engineering, and collaboration opportunities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
