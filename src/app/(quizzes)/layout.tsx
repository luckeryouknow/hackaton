import type { Metadata } from "next";
import "../globals.css";
import {ReactNode} from "react";
import Head from "next/head";

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
    <Head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
    </Head>
    <body
      className={"w-full xl:h-screen"}
      style={{
        backgroundImage: "url(/quizzes/background.png)",
            backgroundSize: "cover",
        }}>
        {children}
      </body>
    </html>
  );
}