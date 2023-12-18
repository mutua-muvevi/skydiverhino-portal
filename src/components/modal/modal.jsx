import {
	Dialog,
	DialogTitle,
	DialogContent,
	Typography,
	useTheme,
	IconButton,
	Stack,
	DialogActions,
	Button,
	ButtonGroup,
} from "@mui/material";

import PropTypes from "prop-types";
import Iconify from "../iconify";
import Scrollbar from "../scrollbar";

const ModalComponent = ({
	title,
	open,
	onClose,
	children,
	height,
	actions,
}) => {
	const theme = useTheme();

	return (
		<Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
			<DialogTitle
				sx={{
					backgroundColor: theme.palette.primary.main,
					paddingTop: 2,
					paddingBottom: 2,
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography
						variant="sibtitle1"
						sx={{ color: theme.palette.primary.contrastText }}
					>
						{title ? title : "Row Details"}
					</Typography>
					<IconButton onClick={onClose}>
						<Iconify
							icon="mdi:close"
							sx={{ color: theme.palette.primary.contrastText }}
						/>
					</IconButton>
				</Stack>
			</DialogTitle>

			<DialogContent
				sx={{
					marginTop: 3,
					height: height ? height : 500,
				}}
			>
				<Scrollbar sx={{ height: 1 }}>{children}</Scrollbar>
			</DialogContent>

			{actions ? (
				<DialogActions sx={{ padding: 3 }}>
					<ButtonGroup>
						{actions.map((action, index) => (
							<Button
								key={index}
								variant="contained"
								color={action.color ? action.color : "primary"}
								onClick={action.onClick}
								endIcon={
									action.icon ? (
										<Iconify icon={action.icon} />
									) : null
								}
							>
								{action.label}
							</Button>
						))}
					</ButtonGroup>
				</DialogActions>
			) : null}
		</Dialog>
	);
};

ModalComponent.propTypes = {
	title: PropTypes.string,
	open: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.node,
	height: PropTypes.number,
	actions: PropTypes.array,
};

export default ModalComponent;
