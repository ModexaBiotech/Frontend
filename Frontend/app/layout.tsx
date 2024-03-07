import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
// import poppoins font 

export const metadata: Metadata = {
  title: "www.modexabiotech.com",
  description: "This is the Web app for modexa biotech where all the magic happens",
  icons: {
    icon: "./assets/logo.jpg"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full">
        {children}

        </div>
        </body>
    </html>
  );
}
