import PropTypes from "prop-types";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { sentenceCase } from "change-case";
import Iconify from "../../../../components/iconify";

const TermsCards = ({ term }) => {
	const { name, type, file } = term;
	const theme = useTheme();

	return (
		<Card>
			<CardActionArea>
				<CardHeader title={sentenceCase(name)} />
				<CardContent>
					<Stack direction="column" spacing={1}>
						<Box
							sx={{
								position: "absolute",
								right: 0,
								top: "10%",
								opacity: 0.2,
								zIndex: -1,
							}}
						>
							<Iconify
								icon="clarity:contract-solid"
								width={100}
								sx={{ color: theme.palette.primary.main }}
							/>
						</Box>
						<Stack direction="row" spacing={3}>
							<Typography variant="subtitle2" color="primary">
								Type:
							</Typography>
							<Typography variant="body2">
								{sentenceCase(type)}
							</Typography>
						</Stack>

						{/* file icon and file */}
						<Stack direction="row" spacing={3}>
							<Typography variant="subtitle2" color="primary">
								File:
							</Typography>
							<Typography variant="body2">
								{file ? file.split("/").pop() : "No File"}
							</Typography>
						</Stack>
					</Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

TermsCards.propTypes = {
	term: PropTypes.object.isRequired,
};

export default TermsCards;
