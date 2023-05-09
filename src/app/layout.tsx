import "./globals.css";
import { Barlow_Semi_Condensed } from "next/font/google";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Testimonial Grid - Ken Vilar",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={barlowSemiCondensed.className + " bg-gray-200"}>
        {children}
      </body>
    </html>
  );
}
