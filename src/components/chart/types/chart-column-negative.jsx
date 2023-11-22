import PropTypes from "prop-types";
// components
import Chart, { useChart } from "../index";

// ----------------------------------------------------------------------

const ChartColumnNegative = ({ data }) => {
	const chartOptions = useChart(data.options);

	return (
		<Chart
			type={data.type}
			series={data.series}
			options={chartOptions}
			height={data.height ? data.height : 350}
		/>
	);
};

ChartColumnNegative.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ChartColumnNegative;

// ----------------------------------------------------------------------
