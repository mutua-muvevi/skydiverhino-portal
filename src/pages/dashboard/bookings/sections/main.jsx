import DataGridCustom from "../../../../components/datagrid/custom";
import { useSelector } from "../../../../redux/store";

const BookingMain = () => {

	//fetching reservations
	const {
		reservations: { data: reservationsData },
	} = useSelector((state) => state.reservations);

	return (
		<div>
			<DataGridCustom data={reservationsData}/>
		</div>
	)
}

export default BookingMain
