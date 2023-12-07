import { Link as RouterLink } from "react-router-dom";
// @mui
import { Stack, Typography, Link, Container } from "@mui/material";
// routes
import { PATH_AUTH } from "../../routes/path";
//
import AuthRegisterForm from "./register-form";
import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------------------

export default function Register() {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			sx={{ height: "100%" }}
		>
			<Helmet>
				<title> Register | Freelance Tool</title>
			</Helmet>

			<Container maxWidth="md">
				<Stack
					direction="column"
					alignItems="start"
					spacing={2}
					sx={{ width: "100%" }}
				>
					<Stack direction="column" sx={{ width: "100%" }}>
						<Typography variant="h3">Register</Typography>
						<Stack direction="row" spacing={0.5}>
							<Typography variant="body1">
								{" "}
								Already have an account?{" "}
							</Typography>

							<Link
								component={RouterLink}
								to={PATH_AUTH.login}
								variant="subtitle1"
							>
								Sign in
							</Link>
						</Stack>
					</Stack>

					<AuthRegisterForm />

					<Typography
						variant="caption"
						sx={{
							color: "text.secondary",
							mt: 3,
							textAlign: "center",
						}}
					>
						{"By signing up, I agree to "}
						<Link underline="always" color="text.primary">
							Terms of Service
						</Link>
						{" and "}
						<Link underline="always" color="text.primary">
							Privacy Policy
						</Link>
						.
					</Typography>
				</Stack>
			</Container>
		</Stack>
	);
}