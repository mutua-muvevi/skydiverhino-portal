import React from "react";
import { Box, Typography, Stack, CardMedia } from "@mui/material";

const BlogPreview = ({ formData }) => {
	return (
		<Box>
			<Typography variant="h5" gutterBottom>
				Title
			</Typography>
			<Typography paragraph>{formData.title}</Typography>

			<Typography variant="h5" gutterBottom>
				Tags
			</Typography>
			<Typography paragraph>{formData.tags.join(", ")}</Typography>

			<Typography variant="h5" gutterBottom>
				Intro Description
			</Typography>
			<Typography paragraph>{formData.introDescription}</Typography>

			{formData.thumbnail && (
				<Box>
					<Typography variant="h5" gutterBottom>
						Thumbnail Preview
					</Typography>
					<CardMedia
						component="img"
						image={URL.createObjectURL(formData.thumbnail)}
						alt="Thumbnail"
					/>
				</Box>
			)}

			<Typography variant="h5" gutterBottom>
				Content Blocks
			</Typography>
			{formData.contentBlocks.map((block, index) => (
				<Stack key={index} spacing={2}>
					<Typography variant="subtitle1">{`Block ${
						index + 1
					} Title`}</Typography>
					<Typography paragraph>{block.title}</Typography>

					<Typography variant="subtitle1">{`Block ${
						index + 1
					} Details`}</Typography>
					<Typography paragraph>{block.details}</Typography>

					{block.image && (
						<CardMedia
							component="img"
							image={URL.createObjectURL(block.image)}
							alt={`Content Block ${index + 1}`}
						/>
					)}
				</Stack>
			))}
		</Box>
	);
};

export default BlogPreview;
