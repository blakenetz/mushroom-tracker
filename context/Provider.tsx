import { Session } from "@supabase/supabase-js";
import React from "react";

import { supabase } from "../lib/initSupabase";

interface ContextValue {
	showDrawer: boolean;
	closeDrawer(): void;
	openDrawer(): void;
	session: Session | null;
	signOut(): void;
}

export const Context = React.createContext({} as ContextValue);

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [showDrawer, setShowDrawer] = React.useState(false);
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

	async function signOut() {
		setSession(null);
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		}
	}

	return (
		<Context.Provider
			value={{
				showDrawer,
				closeDrawer: () => setShowDrawer(false),
				openDrawer: () => setShowDrawer(true),
				session,
				signOut,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Provider;
