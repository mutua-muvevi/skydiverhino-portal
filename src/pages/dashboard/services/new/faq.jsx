import PropTypes from "prop-types";
import Textfield from "../../../../components/form/textfield/textfield";
import { FieldArray } from "formik";
import { Button, Stack, Typography } from "@mui/material";
import { Upload } from "../../../../components/upload";

const AddServiceFAQ = ({
	values,
	faqImage,
	setFieldValue,
	handleFAQImageChange,
}) => {
	return (
		<Stack direction="column" spacing={3}>
			<Stack direction="column" spacing={1}>
				<Typography variant="body1">FAQ Tumbnail</Typography>
				<Upload
					name={`faqImage`}
					file={faqImage}
					onDrop={(acceptedFiles) =>
						handleFAQImageChange(acceptedFiles, setFieldValue)
					}
				/>
			</Stack>
			<FieldArray name="faq">
				{({ push, remove }) => (
					<Stack>
						{values.faq.map((faq, index) => (
							<Stack
								key={index}
								direction="column"
								spacing={3}
								sx={{ pb: 3 }}
							>
								<Textfield
									name={`faq[${index}].question`}
									label={`FAQ ${index + 1} Question`}
								/>
								<Textfield
									name={`faq[${index}].answer`}
									label={`FAQ ${index + 1} Answer`}
									multiline
									rows={5}
								/>
								{values.faq.length > 1 && (
									<Button
										type="button"
										variant="outlined"
										onClick={() => remove(index)}
									>
										Remove the above faq
									</Button>
								)}
							</Stack>
						))}
						<Button
							type="button"
							variant="contained"
							onClick={() =>
								push({
									question: "",
									answer: "",
								})
							}
						>
							Add Another FAQ
						</Button>
					</Stack>
				)}
			</FieldArray>
		</Stack>
	);
};

AddServiceFAQ.propTypes = {
	values: PropTypes.object.isRequired,
	faqImage: PropTypes.object,
	setFieldValue: PropTypes.func.isRequired,
	handleFAQImageChange: PropTypes.func.isRequired,
};

export default AddServiceFAQ;
