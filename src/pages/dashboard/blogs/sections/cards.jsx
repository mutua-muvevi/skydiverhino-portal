import {
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

const image =
	"https://res.cloudinary.com/dqweh6zte/image/upload/v1679998802/skydive%20rhino/images/paragliding_hdbsz8.jpg";

const description =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor sem, dictum eu nulla non, blandit porta leo. Maecenas vitae orci vulputate, tincidunt ex eget, dictum diam. Integer vitae elementum lectus, eu elementum urna. Quisque eleifend purus at odio molestie elementum. Suspendisse non mattis velit. Pellentesque a justo blandit, pulvinar sem nec, varius est. Etiam lacinia et metus eget pharetra. Integer id arcu aliquam nibh maximus interdum eget in diam.";

const BlogsCard = () => {
	const theme = useTheme();

	return (
		<Card>
			<CardActionArea>
				<CardMedia
					component="img"
					height={250}
					image={image}
					alt="Blog title here"
				/>
				<CardHeader
					title="Blog title here"
					sx={{ color: theme.palette.primary.main }}
				/>
				<CardContent>
					<Stack direction="column" spacing={3}>
						<Typography variant="body2">
							{truncateStr(sentenceCase(description), 200)}
						</Typography>

						<Stack direction="column">
							<Typography variant="subtitle1" color="primary">Author</Typography>
							<Typography variant="body2">Author Name</Typography>
						</Stack>
					</Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default BlogsCard;
