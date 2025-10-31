import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import Footer from "@/common/Footer";
import Header from "@/common/Header";
import Providers from "./Provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SurveyShala || Home",
  description:
    "Design surveys in minutes with complete flexibility. Choose from ready-made templates or build fully custom surveys, add your questions easily, & have them ready to share in no time.",
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
      <body
        className={`${outfit.variable} ${poppins.variable} font-outfit antialiased`}
      >
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
