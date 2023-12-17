// utils/pie.js

/**
 * Processes reservation data to get the count of reservations per service.
 * @param {Array} reservations Array of reservation objects.
 * @returns {Object} Object containing series and labels for the pie chart.
 */
export const processPieChartData = (reservations) => {
	const countPerService = reservations.reduce((acc, reservation) => {
		const serviceName = reservation.service.name;
		acc[serviceName] = (acc[serviceName] || 0) + 1;
		return acc;
	}, {});

	const labels = Object.keys(countPerService);
	const series = labels.map((label) => countPerService[label]);

	return { labels, series };
};
