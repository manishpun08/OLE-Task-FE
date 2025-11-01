import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./Provider";
import ConditionalLayout from "./ConditionalLayout";
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
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          <ConditionalLayout>{children}</ConditionalLayout>
        </Providers>
      </body>
    </html>
  );
}
