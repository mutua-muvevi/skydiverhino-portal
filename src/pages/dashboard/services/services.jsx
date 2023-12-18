import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
import { Page } from "../../../components/page";
import { PATH_DASHBOARD } from "../../../routes/path";

import { useSelector } from "../../../redux/store";
import ServiceMain from "./sections/main";


const Services = () => {
	const {
		services: { data: allServices },
	} = useSelector((state) => state.services);
	
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
			
			<ServiceMain services={allServices} />
		</Page>
	);
};

export default Services;
