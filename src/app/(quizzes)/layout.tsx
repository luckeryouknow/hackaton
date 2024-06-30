import type { Metadata } from "next";
import "../globals.css";
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
      <body
        className={"w-full h-screen"}
        style={{
          backgroundImage: "url(/quizzes/background.png)",
          backgroundSize: "cover",
      }}>
        {children}
      </body>
    </html>
  );
}