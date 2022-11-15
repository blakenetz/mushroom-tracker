import React from "react";
import { Button as RainbowButton } from "react-rainbow-components";

import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<RainbowButton variant="border">Close</RainbowButton>
			<RainbowButton>Save</RainbowButton>
		</footer>
	);
};

export default Footer;
