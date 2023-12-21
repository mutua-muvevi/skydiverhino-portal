import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
import { Page } from "../../../components/page";
import { PATH_DASHBOARD } from "../../../routes/path";

const Announcement = () => {
	return (
		<Page title="Announcement">
			<CustomBreadcrumbs
				heading="Announcement"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home,
					},
					{ name: "Announcement" },
				]}
			/>
			Announcement
		</Page>
	);
}

export default Announcement;