import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pomodoro Clock",
  description: "Generated by create next app",
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;

