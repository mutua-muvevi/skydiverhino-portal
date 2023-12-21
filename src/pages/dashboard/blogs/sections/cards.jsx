import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	Stack,
	Typography,
	useTheme,
} from "@mui/material";
import { sentenceCase } from "change-case";
import { truncateStr } from "../../../../utils/format-string";
import PropTypes from "prop-types";
import Iconify from "../../../../components/iconify";
import { useState } from "react";
import ModalComponent from "../../../../components/modal/modal";
import Blog from "../blog/blog";

const BlogsCard = ({ blog }) => {
	const [ openBlog, setOpenBlog ] = useState(false);
	const theme = useTheme();

	const {
		title,
		introDescription,
		thumbnail,
		author: { fullname },
	} = blog;

	const handleOpenBlog = () => {
		setOpenBlog(true);
	}

	//edit blog
	const handleEditBlog = () => {

	}

	//delete blog
	const handleDeleteBlog = () => {
		
	}

	//modal Actions 
	const modalActions = [
		{
			label: "Edit",
			icon: "uiw:edit",
			onClick: handleEditBlog,
		},
		{
			label: "Delete",
			icon: "ic:baseline-delete",
			onClick: handleDeleteBlog,
			color: "error",
		},
	];

	return (
		<>
			<Card>
				<CardActionArea onClick={handleOpenBlog}>
					{blog && thumbnail ? (
						<CardMedia
							component="img"
							height={250}
							image={thumbnail}
							alt={title}
						/>
					) : (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "100%",
								height: 400,
								backgroundColor: "rgba(0, 0, 0, 0.5)",
								padding: 2,
							}}
						>
							<Iconify
								icon="fluent-emoji-high-contrast:parachute"
								width={1}
							/>
						</Box>
					)}
					<CardHeader
						title={
							blog.title
								? truncateStr(sentenceCase(blog.title), 30)
								: "Blog title"
						}
						sx={{ color: theme.palette.primary.main }}
					/>
					<CardContent>
						<Stack direction="column" spacing={3}>
							<Typography variant="body2">
								{truncateStr(sentenceCase(introDescription), 200)}
							</Typography>

							<Stack direction="column">
								<Typography variant="subtitle1" color="primary">
									Author
								</Typography>
								<Typography
									variant="body2"
									sx={{ textTransform: "capitalize" }}
								>
									{fullname}
								</Typography>
							</Stack>
						</Stack>
					</CardContent>
				</CardActionArea>
			</Card>

			<ModalComponent
				title={title}
				open={openBlog}
				onClose={() => setOpenBlog(false)}
				height={700}
				actions={modalActions}
			>
				<Blog blog={blog} />
			</ModalComponent>
		</>
	);
};

BlogsCard.propTypes = {
	blog: PropTypes.object.isRequired,
};

export default BlogsCard;
