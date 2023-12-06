import { Page } from "../../../components/page";
import { PATH_DASHBOARD } from "../../../routes/path";

import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";

const Bookings = () => {
	return (
		<Page title="Booking">
			<CustomBreadcrumbs
				heading="Booking"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home.root,
					},
					{
						name: "Booking",
						href: PATH_DASHBOARD.general.bookings,
					},
					{ name: "Overview" },
				]}
			/>
			<div>AccountOverview</div>
		</Page>
	);
};

export default Bookings;
