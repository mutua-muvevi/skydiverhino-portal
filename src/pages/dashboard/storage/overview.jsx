import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
import { Page } from "../../../components/page";
import { PATH_DASHBOARD } from "../../../routes/path";

import { Grid, Stack } from "@mui/material";

import StorageOverviewGraph from "./sections/graph";
import StorageOverviewSpeedometerGraph from "./sections/spedometer-graph";
import StorageOverviewListCard from "./sections/list-cards";

const StorageOverview = () => {
	return (
		<Page title="Overview">
			<CustomBreadcrumbs
				heading="Overview"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home.root,
					},
					{
						name: "Overview",
					},
				]}
			/>
			<Grid container spacing={3}>
				<Grid item xs={12} md={12} lg={8} xl={9}>
					<StorageOverviewGraph />
				</Grid>
				<Grid item xs={12} md={12} lg={4} xl={3}>
					<Stack spacing={3}>
						<StorageOverviewSpeedometerGraph />
					</Stack>
				</Grid>
				<Grid item xs={12} md={12} lg={12} xl={12}>
					<StorageOverviewListCard />
				</Grid>
			</Grid>
		</Page>
	);
};

export default StorageOverview;
