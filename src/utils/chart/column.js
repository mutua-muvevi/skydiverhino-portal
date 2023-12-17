// utils/graph.js
import { format, subMonths } from "date-fns";

/**
 * Processes reservation data to get the count of data per month for the last 12 months.
 * @param {Array} data Array of reservation objects.
 * @returns {Object} Object containing series and labels for the bar chart.
 */
export const processAnualCollumnData = (data, name) => {
	const currentDate = new Date();
	const months = {};

	// Initialize months
	for (let i = 11; i >= 0; i--) {
		const monthDate = subMonths(currentDate, i);
		const formattedMonth = format(monthDate, "MMM yyyy");
		months[formattedMonth] = 0;
	}

	data.forEach((reservation) => {
		const date = new Date(reservation.date);
		const reservationMonth = format(date, "MMM yyyy");

		if (reservationMonth in months) {
			months[reservationMonth]++;
		}
	});

	const labels = Object.keys(months);
	const series = labels.map((label) => months[label]);

	return {
		series: [
			{
				name: name,
				data: series,
			},
		],
		categories: labels,
	};
};
