import {Sora} from "next/font/google"
import "@/app/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./_contexts/DarkModeContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata = {
  title: {
    template: "%s / Tasque",
    default:"Welcome / Tasque"
  },
  description: "A sleek and modern web application built with Next.js, featuring a clean design, responsive layout, and a powerful user experience."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-gray-50 bg-background h-screen ${sora.className}`}>
        <DarkModeProvider>
          <Toaster containerStyle={{ margin: "6px" }} position="top-center" gutter={8} toastOptions={{
              success:{
                duration:3000,
              },
              error: {
                duration:5000
              },
              style: {
                  padding:"10px",
                  backgroundColor:"var(--main-bg)",
                  color: "var(--main-text)",
                  fontSize: "14px",
                  maxWidth: "600px",
                }
            }} />
            {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
