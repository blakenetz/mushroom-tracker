import Head from "next/head";
import Calendar from "../components/Calendar";

export default function Home() {
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
				<Calendar />
			</main>
		</section>
	);
}
