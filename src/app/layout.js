import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume Builder",
  description: "Build your resume today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
