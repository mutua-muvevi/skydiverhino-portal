import { Grid, Typography } from "@mui/material";
import LeadGraph from "./graph";
import LeadPie from "./pie";
import LeadCards from "./card";
import { useSelector } from "../../../../redux/store";

const LeadMain = () => {

	const { leads : { data: allLeads } } = useSelector((state) => state.leads);

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6} lg={8} xl={9}>
				<LeadGraph/>
			</Grid>
			<Grid item xs={12} md={6} lg={4} xl={3}>
				<LeadPie/>
			</Grid>
			{
				allLeads ? allLeads.map((lead) => {
					return (
						<Grid item xs={12} md={6} lg={4} xl={3} key={lead._id}>
							<LeadCards lead={lead}/>
						</Grid>
					);
				}) : null
			}
		</Grid>
	);
};

export default LeadMain;
