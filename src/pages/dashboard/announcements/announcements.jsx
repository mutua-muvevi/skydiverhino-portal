import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
import DataGridCustom from "../../../components/datagrid/custom";
import { Page } from "../../../components/page";
import { useSelector } from "../../../redux/store";
import { PATH_DASHBOARD } from "../../../routes/path";

const Announcement = () => {
	const { announcements : { data: allAnnounceMents }} = useSelector((state) => state.announcements);
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
			<DataGridCustom data={allAnnounceMents} title="Announcement List" />
		</Page>
	);
}

export default Announcement;