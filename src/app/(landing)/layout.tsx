import type { Metadata } from "next";
import "../globals.css";
import {Footer, Header} from "@/modules";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "SpaceLingo",
  description: "SpaceLingo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className={"font-nunito font-medium"} lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
