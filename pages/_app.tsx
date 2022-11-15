import "../styles/globals.css";
import type { AppProps } from "next/app";
// import localFont from "@next/font/local";

// const myFont = localFont({ src: "./my-font.woff2" });

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
