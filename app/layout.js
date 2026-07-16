import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-heading", weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "ShreePuja - Authentic Puja Essentials",
  description: "ShreePuja offers premium puja samagri, idols, incense, and festival essentials in Pokhara, Nepal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <Toaster />
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
