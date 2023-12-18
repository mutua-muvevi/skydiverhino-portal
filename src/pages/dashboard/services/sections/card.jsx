import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import { sentenceCase } from "change-case";
import PropTypes from "prop-types";
import Iconify from "../../../../components/iconify";
import { truncateStr } from "../../../../utils/format-string";
import Scrollbar from "../../../../components/scrollbar";
import { useMediaQuery } from "@mui/material";

const image = "";

const ServiceCards = ({ service }) => {
	const isLargeScreen = useMediaQuery("(min-width: 1280px)");
	const isMediumScreen = useMediaQuery("(min-width: 960px)");

	return (
		<Card>
			<CardActionArea>
				<Stack direction={{ xs: "column", md: "row" }} spacing={1}>
					{image ? (
						<CardMedia
							component="img"
							src={image}
							alt={service.name}
							sx={{
								width: {
									md: "30%",
									lg: "35%",
									xl: "30%",
								},
							}}
						/>
					) : (
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: {
									md: "30%",
									lg: "35%",
									xl: "30%",
								},
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

					<Stack
						direction="column"
						spacing={3}
						sx={{
							width: {
								md: "70%",
								lg: "65%",
								xl: "70%",
							},
						}}
					>
						<CardContent sx={{ height: 400 }}>
							<Scrollbar>
								<Stack direction="column" spacing={2}>
									{/* Name */}
									<Typography
										variant="subtitle1"
										color="primary"
									>
										{service.name}
									</Typography>
									<Typography
										variant="body2"
										textAlign="justify"
									>
										{truncateStr(
											sentenceCase(
												service.shortDescription
											),
											isLargeScreen
												? 500
												: isMediumScreen
												? 350
												: 250
										)}
									</Typography>

									{/* Prices */}
									<Stack direction="column" spacing={1.5}>
										<Typography
											variant="subtitle1"
											color="primary"
										>
											Prices
										</Typography>
										<div>
											<Grid container spacing={3}>
												{service.prices.map((price) => (
													<Grid
														item
														xs={12}
														md={6}
														lg={4}
														key={price._id}
													>
														<Stack
															direction="column"
															spacing={1.5}
														>
															<Typography
																variant="subtitle2"
																color="primary"
															>
																{price.title}
															</Typography>
															<Stack
																direction="row"
																spacing={3}
															>
																<Iconify icon="icomoon-free:price-tags" />
																<Typography variant="body2">
																	{
																		price
																			.price
																			.amount
																	}{" "}
																	{
																		price
																			.price
																			.currency
																	}
																</Typography>
															</Stack>
														</Stack>
													</Grid>
												))}
											</Grid>
										</div>
										<Stack
											direction="row"
											spacing={3}
										></Stack>
									</Stack>

									{/* Leads */}
									<Stack direction="column" spacing={1.5}>
										<Typography
											variant="subtitle1"
											color="primary"
										>
											Leads
										</Typography>
										<Stack direction="row" spacing={3}>
											<Iconify icon="fluent:people-community-20-filled" />
											{service.leads.length < 1 ? (
												<Typography variant="body2">
													We currently have no leads
													for this service
												</Typography>
											) : (
												<Typography variant="body2">
													{service.leads.length}{" "}
													Lead(s)
												</Typography>
											)}
										</Stack>
									</Stack>

									{/* Clients */}
									<Stack direction="column" spacing={1.5}>
										<Typography
											variant="subtitle1"
											color="primary"
										>
											Clients
										</Typography>
										<Stack direction="row" spacing={3}>
											<Iconify icon="fluent:people-community-20-filled" />

											{service.clients &&
											service.clients.length < 1 ? (
												<Typography variant="body2">
													We currently have no clients
													for this service
												</Typography>
											) : (
												<Typography variant="body2">
													{service.clients.length}{" "}
													Client(s)
												</Typography>
											)}
										</Stack>
									</Stack>
								</Stack>
							</Scrollbar>
						</CardContent>
					</Stack>
				</Stack>
			</CardActionArea>
		</Card>
	);
};

ServiceCards.propTypes = {
	service: PropTypes.object.isRequired,
};

export default ServiceCards;
