import { Button, Grid, Stack, Typography } from "@mui/material";
import BlogsCard from "./cards";
import ModalComponent from "../../../../components/modal/modal";
import { useState } from "react";
import NewBlog from "../new/new";

const BlogsMain = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	return (
		<>
			<Stack direction="column" spacing={3}>
				<Button
					variant="contained"
					color="primary"
					onClick={handleOpenModal}
				>
					<Typography variant="h6">Add a new Blog</Typography>
				</Button>

				<div>
					<Grid container spacing={3}>
						{[...Array(12)].map((_, index) => (
							<Grid item xs={12} sm={6} md={4} xl={3} key={index}>
								<BlogsCard />
							</Grid>
						))}
					</Grid>
				</div>
			</Stack>

			<ModalComponent
				title="Add a new Blog"
				open={openModal}
				onClose={() => setOpenModal(false)}
				height={600}
				maxWidth="lg"
			>
				<NewBlog/>
			</ModalComponent>
		</>
	);
};

export default BlogsMain;
