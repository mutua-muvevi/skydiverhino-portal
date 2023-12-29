import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { sentenceCase } from "change-case";
import PropTypes from "prop-types";
import Iconify from "../../../../components/iconify";
import { isFile } from "../../../../utils/is-file";

const Service = ({ service }) => {
	const {
		leads,
		thumbnail,
		gallery,
		introDescription,
		contentBlocks,
		prices,
		requirements,
		clients,
	} = service;

	return (
		<Stack direction="column" spacing={3}>
			<Stack direction="column">
				<Typography variant="subtitle1" color="primary">
					Thumbnail
				</Typography>
				{
					// Check if the thumbnail is a file
					thumbnail ? (
						<CardMedia
							component="img"
							image={thumbnail}
							alt="Thumbnail"
							style={{ height: "auto" }}
						/>
					) : (
						<Typography variant="body2" textAlign="justify">
							No thumbnail
						</Typography>
					)
				}
			</Stack>

			<Stack direction="column">
				<Typography variant="subtitle1" color="primary">
					Description
				</Typography>
				<Typography variant="body2" textAlign="justify">
					{sentenceCase(introDescription)}
				</Typography>
			</Stack>

			{/* contentBlocks */}
			<Stack direction="column" spacing={3}>
				<Typography variant="subtitle1" color="primary">
					Details
				</Typography>
				{
					// Loop through the contentBlocks
					contentBlocks ? contentBlocks.map((detail) => (
						<Stack
							direction="column"
							spacing={1.5}
							key={detail._id}
							color="primary"
						>
							<Typography variant="subtitle2" color="primary">
								{sentenceCase(detail.title)}
							</Typography>
							<Typography variant="body2" textAlign="justify">
								{sentenceCase(detail.details)}
							</Typography>
							{
								// Check if the detail has an image
								detail.image ? (
									<CardMedia
										component="img"
										image={detail.image}
										alt="Detail"
										style={{ height: "auto" }}
									/>
								) : null
							}
						</Stack>
					)): null
				}
			</Stack>

			{/* Prices */}
			<Stack direction="column" spacing={1.5}>
				<Typography variant="subtitle1" color="primary">
					Prices
				</Typography>
				<div>
					<Stack direction="column" spacing={1.5}>
						{prices.map((price) => (
							<Stack
								direction="row"
								spacing={3}
								key={price._id}
								color="primary"
							>
								<Typography variant="subtitle2">
									{sentenceCase(price.title)}
								</Typography>
								<Stack direction="row" spacing={3}>
									<Iconify icon="icomoon-free:price-tags" />
									<Typography
										variant="body2"
										textAlign="justify"
									>
										{price.price.amount}{" "}
										{price.price.currency}
									</Typography>
								</Stack>
							</Stack>
						))}
					</Stack>
				</div>
			</Stack>

			{/* Requirements */}
			<Stack direction="column" spacing={1.5}>
				<Typography variant="subtitle1" color="primary">
					Requirements
				</Typography>

				<Stack direction="column" spacing={1.5}>
					{requirements.map((requirement, index) => (
						<Stack
							direction="column"
							spacing={3}
							key={requirement._id}
							color="primary"
						>
							<Stack direction="row" spacing={3}>
								<Typography variant="subtitle2" color="primary">
									{index + 1}.
								</Typography>

								<Stack direction="column">
									<Typography
										variant="subtitle2"
										color="primary"
									>
										{sentenceCase(requirement.title)}
									</Typography>

									<Typography
										variant="body2"
										textAlign="justify"
									>
										{sentenceCase(requirement.details)}
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					))}
				</Stack>
			</Stack>

			{/* leads */}
			{leads.length > 0 ? (
				<Stack direction="column" spacing={1.5}>
					<Typography variant="subtitle1" color="primary">
						Leads
					</Typography>
					<Stack direction="row" spacing={3}>
						<Iconify icon="fluent:people-community-20-filled" />
						<Typography variant="body2">
							{leads.length} {leads.length > 1 ? "leads" : "lead"}
						</Typography>
					</Stack>
				</Stack>
			) : null}

			{/* Clients */}
			{clients.length > 0 ? (
				<Stack direction="column" spacing={1.5}>
					<Typography variant="subtitle1" color="primary">
						Clients
					</Typography>
					<Stack direction="row" spacing={3}>
						<Iconify icon="fluent:people-community-20-filled" />
						<Typography variant="body2">
							{clients.length}{" "}
							{clients.length > 1 ? "clients" : "client"}
						</Typography>
					</Stack>
				</Stack>
			) : null}

			{/* Gallery */}
			{gallery.length > 0 ? (
				<Stack direction="column" spacing={1.5}>
					<Typography variant="subtitle1" color="primary">
						Gallery
					</Typography>
					<div>
						<Grid container spacing={2}>
							{
								// Loop through the gallery
								gallery.map((image, index) => (
									<Grid item key={index} xs={12} sm={6} md={4} lg={3}>
										<CardMedia
											component="img"
											image={
												isFile(image)
													? URL.createObjectURL(image)
													: image
											}
											alt={`Gallery Images for service ${
												index + 1
											}`}
										/>
									</Grid>
								))
							}
						</Grid>
					</div>
				</Stack>
			) : null}
		</Stack>
	);
};

Service.propTypes = {
	service: PropTypes.shape({
		name: PropTypes.string.isRequired,
		introDescription: PropTypes.string.isRequired,
		contentBlocks: PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				details: PropTypes.string.isRequired,
			})
		),
		prices: PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				price: PropTypes.shape({
					currency: PropTypes.string.isRequired,
					amount: PropTypes.number.isRequired,
				}),
			})
		),
		requirements: PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				title: PropTypes.string.isRequired,
				details: PropTypes.string.isRequired,
			})
		),
		leads: PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				email: PropTypes.string.isRequired,
				country: PropTypes.string.isRequired,
				message: PropTypes.string.isRequired,
			})
		),
		clients: PropTypes.arrayOf(
			PropTypes.shape({
				_id: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				email: PropTypes.string.isRequired,
				country: PropTypes.string.isRequired,
				message: PropTypes.string.isRequired,
			})
		),
		gallery: PropTypes.arrayOf(PropTypes.string.isRequired),
		thumbnail: PropTypes.string.isRequired,
	}).isRequired,
};

export default Service;
