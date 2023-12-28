import SelectField from "../../../../components/form/select/select";
import Textfield from "../../../../components/form/textfield/textfield";
import { Button, Stack } from "@mui/material";
import { FieldArray } from "formik";
import PropTypes from "prop-types";
import useResponsive from "../../../../hooks/use-responsive";
import Iconify from "../../../../components/iconify";

const selectOptions = [
	{
		name: "USD",
		label: "US Dollars",
	},
	{
		name: "EUR",
		label: "Euro",
	},
	{
		name: "GBP",
		label: "Great Britain Pounds",
	},
	{
		name: "KES",
		label: "Kenya Shillings",
	},
];

// --------------------------------------------------
const AddServicePrices = ({ values }) => {
	const isDesktop = useResponsive("up", "sm");

	return (
		<FieldArray name="prices">
			{({ push, remove }) => (
				<Stack
					direction="column"
					spacing={6}
				>
					{values.prices.map((price, index) => (
						<Stack key={index} direction="column" spacing={3}>
							<Textfield
								name={`prices[${index}].title`}
								label={`Price ${index + 1} Title`}
							/>
							<FieldArray name={`prices[${index}].listItems`}>
								{({ push, remove }) => (
									<Stack direction="column" spacing={1.5}>
										{price.listItems.map(
											(item, itemIndex) => (
												<Stack
													key={itemIndex}
													direction="row"
													spacing={2}
												>
													<Textfield
														name={`prices[${index}].listItems[${itemIndex}]`}
														label={`Price ${
															index + 1
														} List Item ${
															itemIndex + 1
														}`}
													/>
													{price.listItems.length >
														1 && (
														<Button
															type="button"
															variant="outlined"
															onClick={() =>
																remove(
																	itemIndex
																)
															}
														>
															Remove
														</Button>
													)}
												</Stack>
											)
										)}
										<div>
											<Button
												type="button"
												variant="contained"
												onClick={() => push("")}
											>
												Add Another List Item
											</Button>
										</div>
									</Stack>
								)}
							</FieldArray>

							<Stack direction={isDesktop ? "row" : "column" } spacing={3}>
								<Textfield
									name={`prices[${index}].price.amount`}
									label={`Price ${index + 1} Amount`}
									type="number"
								/>
								<SelectField
									name={`prices[${index}].price.currency`}
									label={`Price ${index + 1} Currency`}
									options={selectOptions}
								/>
							</Stack>

							{values.prices.length > 1 && (
								<Button
									type="button"
									variant="outlined"
									onClick={() => remove(index)}
									endIcon={<Iconify icon="ant-design:delete-filled"/>}
								>
									Remove the above price
								</Button>
							)}
						</Stack>
					))}
					<Button
						type="button"
						variant="contained"
						endIcon={<Iconify icon="emojione-monotone:money-bag"/>}
						onClick={() =>
							push({
								title: "",
								listItems: [""],
								price: {
									amount: 0,
									currency: "USD",
								},
							})
						}
					>
						Add Another Pricing
					</Button>
				</Stack>
			)}
		</FieldArray>
	);
};

AddServicePrices.propTypes = {
	values: PropTypes.object.isRequired,
};

export default AddServicePrices;
