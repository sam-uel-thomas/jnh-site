import { Inter, New_Tegomin } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const tegomin = New_Tegomin({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata = {
  title: "jnh",
  description: "Portfolio of Jonah Davies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
