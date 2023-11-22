import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, Divider, Typography, Stack, MenuItem } from "@mui/material";
// routes
import { PATH_DASHBOARD, PATH_AUTH } from "../../../routes/path";
// auth
import { useAuthContext } from "../../../auth/use-auth-context";
// components
import { CustomAvatar } from "../../../components/custom-avatar";
import { useSnackbar } from "../../../components/snackbar";
import MenuPopover from "../../../components/menu-popover";
import { IconButtonAnimate } from "../../../components/animate";

// ----------------------------------------------------------------------

const OPTIONS = [
	{
		label: "Home",
		linkTo: PATH_DASHBOARD.general.account.overview,
	},
	{
		label: "Profile",
		linkTo: PATH_DASHBOARD.general.account.profile,
	},
	{
		label: "Settings",
		linkTo: PATH_DASHBOARD.general.account.account,
	},
	{
		label: "Billing",
		linkTo: PATH_DASHBOARD.general.account.billing,
	},
	{
		label: "Integration",
		linkTo: PATH_DASHBOARD.general.account.intergration,
	},
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
	const navigate = useNavigate();

	const { user, logout } = useAuthContext();

	const { enqueueSnackbar } = useSnackbar();

	const [openPopover, setOpenPopover] = useState(null);

	const handleOpenPopover = (event) => {
		setOpenPopover(event.currentTarget);
	};

	const handleClosePopover = () => {
		setOpenPopover(null);
	};

	const handleLogout = async () => {
		try {
			logout();
			navigate(PATH_AUTH.login, { replace: true });
			handleClosePopover();
		} catch (error) {
			console.error(error);
			enqueueSnackbar("Unable to logout!", { variant: "error" });
		}
	};

	const handleClickItem = (path) => {
		handleClosePopover();
		navigate(path);
	};

	return (
		<>
			<IconButtonAnimate
				onClick={handleOpenPopover}
				sx={{
					p: 0,
					...(openPopover && {
						"&:before": {
							zIndex: 1,
							content: "''",
							width: "100%",
							height: "100%",
							borderRadius: "50%",
							position: "absolute",
							bgcolor: (theme) =>
								alpha(theme.palette.grey[900], 0.8),
						},
					}),
				}}
			>
				<CustomAvatar
					src={user?.image}
					alt={user?.fullname}
					name={user?.fullname}
				/>
			</IconButtonAnimate>
			
			<MenuPopover
				open={openPopover}
				onClose={handleClosePopover}
				sx={{ width: 200, p: 0 }}
			>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant="subtitle2" noWrap>
						{user?.fullname}
					</Typography>

					<Typography
						variant="body2"
						sx={{ color: "text.secondary" }}
						noWrap
					>
						{user?.email}
					</Typography>
				</Box>

				<Divider sx={{ borderStyle: "dashed" }} />

				<Stack sx={{ p: 1 }}>
					{OPTIONS.map((option) => (
						<MenuItem
							key={option.label}
							onClick={() => handleClickItem(option.linkTo)}
						>
							{option.label}
						</MenuItem>
					))}
				</Stack>

				<Divider sx={{ borderStyle: "dashed" }} />

				<MenuItem onClick={handleLogout} sx={{ m: 1 }}>
					Logout
				</MenuItem>
			</MenuPopover>
		</>
	);
}