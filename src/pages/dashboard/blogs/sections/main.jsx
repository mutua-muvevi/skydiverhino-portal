import { Button, Grid, Stack, Typography } from '@mui/material'
import BlogsCard from './cards'

const BlogsMain = () => {
	return (
		<>
			<Stack direction="column" spacing={3}>
				<Button variant="contained" color="primary">
					<Typography variant="h6">
						Add a new Blog
					</Typography>
				</Button>

				<div>
					<Grid container spacing={3}>
						{
							[...Array(12)].map((_, index) => (
								<Grid item xs={12} sm={6} md={4} xl={3} key={index}>
									<BlogsCard />
								</Grid>
							))
						}
					</Grid>
				</div>
			</Stack>
		</>
	)
}

export default BlogsMain
