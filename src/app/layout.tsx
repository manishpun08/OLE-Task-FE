import Footer from "@/common/Footer";
import Header from "@/common/Header";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./Provider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Awwwesome || Home",
  description:
    "Awwwesome is a leading digital solutions provider, offering innovative web and mobile app development services to help businesses thrive in the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://accounts.google.com/gsi/client" async defer />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
