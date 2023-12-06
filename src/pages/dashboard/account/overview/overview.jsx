import { Page } from "../../../../components/page";
import { PATH_DASHBOARD } from "../../../../routes/path";

import CustomBreadcrumbs from "../../../../components/custom-breadcrumbs";

const AccountOverview = () => {
	return (
		<Page title="Account Overview">
			<CustomBreadcrumbs
				heading="Account Overview"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home.root,
					},
					{
						name: "Account",
						href: PATH_DASHBOARD.general.account.root,
					},
					{ name: "Overview" },
				]}
			/>
			<div>Account Overview</div>
		</Page>
	);
};

export default AccountOverview;
