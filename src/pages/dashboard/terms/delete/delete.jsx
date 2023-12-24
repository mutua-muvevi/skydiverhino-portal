import { useState } from "react";
import {
	Typography,
	Stack,
	Button,
	TextField,
	useTheme,
	Alert,
} from "@mui/material";
import PropTypes from "prop-types";
import Iconify from "../../../../components/iconify";
import { useDispatch, useSelector } from "../../../../redux/store";
import { deleteTerm } from "../../../../redux/slices/terms";

const DeleteTerm = ({ onClose }) => {
	const [alertMessage, setAlertMessage] = useState("");
	const [alertSeverity, setAlertSeverity] = useState("info");
	const [inputTermName, setInputFullname] = useState("");

	const {
		me: { _id: userID },
	} = useSelector((state) => state.user);

	const { setTerm: term } = useSelector((state) => state.terms);

	const token = localStorage.getItem("token");

	const { name } = term;

	const theme = useTheme();
	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		setInputFullname(event.target.value);
	};

	const handleDelete = async () => {
		try {
			const response = await dispatch(
				deleteTerm(userID, token, term._id)
			);

			//extract success message
			const { success, message } = response;

			// Set the alert message from the response and determine severity
			setAlertMessage(message);
			setAlertSeverity(success ? "success" : "error");

			//close the modal
			if (success) {
				setTimeout(() => {
					onClose();
					window.location.reload();
				}, 2000);
			}
		} catch (error) {
			setAlertMessage(error.error || "An error occurred.");
			setAlertSeverity("error");
		}
	};

	const isInputTermName = inputTermName === name;
	return (
		<Stack direction="column" spacing={3}>
			{alertMessage && <Alert>{alertMessage}</Alert>}
			<Typography variant="subtitle1" color="primary">
				Please type the title of the blog to confirm deletion:
				<br />
				<span style={{ color: theme.palette.text.primary }}>
					{term.name}
				</span>
			</Typography>
			<TextField
				fullWidth
				variant="outlined"
				placeholder="Type blog title here"
				value={inputTermName}
				onChange={handleInputChange}
				size="small"
			/>
			<Button
				variant="contained"
				color="error"
				endIcon={<Iconify icon="mdi:delete" />}
				onClick={handleDelete}
				disabled={!isInputTermName}
				type="submit"
			>
				Delete this blog
			</Button>
		</Stack>
	);
};

export default DeleteTerm;
