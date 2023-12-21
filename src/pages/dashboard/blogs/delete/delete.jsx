import { Typography, Stack, Button, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import Iconify from "../../../../components/iconify";

const DeleteBlog = ({ blog }) => {
	const { title } = blog;
	const theme = useTheme();

	return (
		<Stack direction="column" spacing={3}>
			<Typography variant="subtitle1" color="primary">
				Are You sure you want to delete{" "}
				<span style={{ color: theme.palette.text.primary }}>
					{title}
				</span>
			</Typography>
			<Button
				variant="contained"
				color="error"
				endIcon={<Iconify icon="mdi:delete" />}
			>
				Delete this blog
			</Button>
		</Stack>
	);
};

DeleteBlog.propTypes = {
	blog: PropTypes.object.isRequired,
};

export default DeleteBlog;
