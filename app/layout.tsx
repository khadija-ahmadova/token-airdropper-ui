import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react"
import { Providers } from "./providers"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "TSender",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body      >
        <Providers>
          <Header />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
