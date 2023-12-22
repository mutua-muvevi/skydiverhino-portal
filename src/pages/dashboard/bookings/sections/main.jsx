import DataGridCustom from "../../../../components/datagrid/custom";
import { useSelector } from "../../../../redux/store";

const BookingMain = () => {
	//fetching reservations
	const {
		reservations: { data: reservationsData },
	} = useSelector((state) => state.reservations);

	const modalActions = [
		{
			label: "Delete",
			action: "delete",
			icon: "ic:baseline-delete",
		},
	];

	return (
		<div>
			<DataGridCustom
				data={reservationsData}
				title="Reservations List"
				modalTitle="Reservations"
				modalActions={modalActions}
			/>
		</div>
	);
};

export default BookingMain;
