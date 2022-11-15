import Head from "next/head";

import Provider from "../context/Provider";
import Calendar from "../components/Calendar";
import Drawer from "../components/Drawer";
import Header from "../components/Header";

export default function Index() {
	return (
		<section>
			<Head>
				<title>Mushy Calendar</title>
				<meta
					name="description"
					content="Track when why and where you did what 🍄"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Provider>
					<Header />
					<h1>🍄 Track 🍄</h1>
					<Calendar />
					<Drawer />
				</Provider>
			</main>
		</section>
	);
}
