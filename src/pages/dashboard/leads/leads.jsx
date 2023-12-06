import { Page } from "../../../components/page";
import { PATH_DASHBOARD } from "../../../routes/path";

import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";

const Leads = () => {
	return (
		<Page title="Leads">
			<CustomBreadcrumbs
				heading="Leads"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home.root,
					},
					{ name: "Leads" },
				]}
			/>
			<div>Leads</div>
		</Page>
	);
}

export default Leads