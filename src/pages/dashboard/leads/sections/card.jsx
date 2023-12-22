import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import Iconify from "../../../../components/iconify";

const LeadCard = ({ lead }) => {
	const theme = useTheme();
	return (
		<Card>
			<CardActionArea sx={{ minHeight: 180 }}>
				<CardContent>
					<Stack direction="row" spacing={3}>
						<Box sx={{
							position: "absolute",
							right: 0,
							top: 0,
							opacity: 0.1,
						}}>
							<Iconify
								icon="fa-solid:funnel-dollar"
								width={150}
								sx={{ color: theme.palette.primary.main }}
							/>
						</Box>

						<Stack direction="column" spacing={1}>
							<Stack direction="row" spacing={3}>
								<Typography variant="subtitle2" color="primary">
									Name :
								</Typography>
								<Typography variant="body2">
									{lead.fullname}
								</Typography>
							</Stack>
							<Stack direction="row" spacing={3}>
								<Typography variant="subtitle2" color="primary">
									Email :
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
								>
									{lead.email}
								</Typography>
							</Stack>
							<Stack direction="row" spacing={3}>
								<Typography variant="subtitle2" color="primary">
									Service:
								</Typography>
								<Typography variant="body2">
									{lead.service.name}
								</Typography>
							</Stack>
						</Stack>
					</Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

LeadCard.propTypes = {
	lead: PropTypes.object.isRequired,
};

export default LeadCard;
