import "../styles/globals.css";

import React from "react";
import type { AppProps } from "next/app";
import { Session } from "@supabase/supabase-js";

import { supabase } from "../lib/initSupabase";

export default function App({ Component, pageProps }: AppProps) {
	const [session, setSession] = React.useState<Session | null>(null);

	React.useEffect(() => {
		async function getSession() {
			const { data, error } = await supabase.auth.getSession();
			if (error) {
				console.log(error);
			}
			setSession(data.session);
		}

		getSession();

		supabase.auth.onAuthStateChange((_event, nextSession) => {
			setSession(nextSession);
		});
	}, []);

	return <Component {...pageProps} />;
}
