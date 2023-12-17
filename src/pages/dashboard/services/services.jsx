import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
import { Page } from "../../../components/page";
import { PATH_DASHBOARD } from "../../../routes/path";

const Services = () => {
	return (
		<Page title="Services">
			<CustomBreadcrumbs
				heading="Services"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home,
					},
					{ name: "Services" },
				]}
			/>
			<div>Services</div>
		</Page>
	);
};

export default Services;
