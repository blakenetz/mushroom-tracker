import React from "react";

import { Drawer as RainbowDrawer } from "react-rainbow-components";
import { Context } from "../../context/Provider";
import Footer from "./Footer/Footer";

export default function Drawer() {
	const { showDrawer, closeDrawer } = React.useContext(Context);

	return (
		<RainbowDrawer
			isOpen={showDrawer}
			slideFrom="right"
			onRequestClose={closeDrawer}
			hideCloseButton
			footer={<Footer />}
		/>
	);
}
