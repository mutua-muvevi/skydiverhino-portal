import { Page } from "../../../components/page";
import { PATH_DASHBOARD } from "../../../routes/path";

import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";

const Tools = () => {
	return (
		<Page title="Tools">
			<CustomBreadcrumbs
				heading="Tools"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home.root,
					},
					{ name: "Tools" },
				]}
			/>
			<div>Tools</div>
		</Page>
	);
};

export default Tools;
