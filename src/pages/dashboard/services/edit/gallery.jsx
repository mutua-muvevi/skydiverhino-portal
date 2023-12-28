import PropTypes from "prop-types";
import { Upload } from "../../../../components/upload";

const AddServiceGallery = ({values, setFieldValue, handleDropMultiFile}) => {
	return (
		<div>
			<Upload
				name="gallery"
				files={values.gallery || null}
				onDrop={(acceptedFiles) =>
					handleDropMultiFile(acceptedFiles, setFieldValue)
				}
				multiple
			/>
		</div>
	);
};

AddServiceGallery.propTypes = {
	values: PropTypes.object.isRequired,
	setFieldValue: PropTypes.func.isRequired,
	handleDropMultiFile: PropTypes.func.isRequired,
};

export default AddServiceGallery;
