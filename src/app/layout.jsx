import './style.css'
import "./globals.css";
import { Inter } from "next/font/google";

import { Footer, CustomCursor } from "./components";
import 'typeface-oswald';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MCubedAuto - Mobile Mechanic, We Come to You",
  description: "Thank you for visiting! We're working hard to bring you something amazing. Stay tuned for updates and get ready for the launch of our exciting new website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
 
      </head>

      <body className={inter.className}>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
