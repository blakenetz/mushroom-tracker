import React from "react";

interface ContextValue {
	showDrawer: boolean;
	closeDrawer(): void;
	openDrawer(): void;
}

export const Context = React.createContext({} as ContextValue);

const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [showDrawer, setShowDrawer] = React.useState(true);

	return (
		<Context.Provider
			value={{
				showDrawer,
				closeDrawer: () => setShowDrawer(false),
				openDrawer: () => setShowDrawer(true),
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Provider;
