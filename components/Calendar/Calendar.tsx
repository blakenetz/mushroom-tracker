import React from "react";
import { MonthlyCalendar as RainbowCalendar } from "react-rainbow-components";

import { Context } from "../../context/Provider";
import DateCell from "./DateCell/DateCell";

export default function Calendar() {
	const { openDrawer } = React.useContext(Context);

	const [currentMonth, setCurrentMonth] = React.useState(new Date());

	return (
		<RainbowCalendar
			currentMonth={currentMonth}
			onMonthChange={({ month }) => setCurrentMonth(month)}
			// onSelectDate={openDrawer}
			dateComponent={DateCell}
		/>
	);
}
