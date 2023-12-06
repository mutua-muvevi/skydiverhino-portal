import { Page } from "../../../components/page";
import { PATH_DASHBOARD } from "../../../routes/path";

import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";

const Clients = () => {
	return (
		<Page title="Clients">
			<CustomBreadcrumbs
				heading="Clients"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home.root,
					},
					{ name: "Clients" },
				]}
			/>
			<div>Clients</div>
		</Page>
	);
};

export default Clients;
