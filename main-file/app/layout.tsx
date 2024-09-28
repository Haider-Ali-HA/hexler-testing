import type { Metadata } from "next";
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";
import "@/public/styles/customStyles.css"

export const metadata: Metadata = {
  title: "Hexler Tech | Software Development & IT Solutions",
  description: "Software Development & IT Solutions",
  keywords: [
    "Software",
    "IT",
    "Agency",
    "Javascript",
    "HTML",
    "CSS",
    "pyhton",
    "mongodb",
    "express",
    "Typescript",
    "React",
    "nextjs",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="darken">
      <body >
        {children}
        <InitAnimations />
        
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </body>
    </html>
  );
}
