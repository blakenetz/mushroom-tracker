import React from "react";
import { Button as RainbowButton } from "react-rainbow-components";
import { Context } from "../../context/Provider";

import styles from "./Header.module.css";

export default function Header() {
	const { session, signOut } = React.useContext(Context);

	return (
		<header className={styles.header}>
			{session?.user ? (
				<RainbowButton onClick={signOut}>Logout</RainbowButton>
			) : (
				<>
					<RainbowButton>Create Account</RainbowButton>
					<RainbowButton>Login</RainbowButton>
				</>
			)}
		</header>
	);
}
