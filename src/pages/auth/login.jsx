import { Helmet } from "react-helmet-async";
// sections
import Login from "../../modules/auth/login";

// ----------------------------------------------------------------------

export default function LoginPage() {
	return (
		<>
			<Helmet>
				<title> Login | Freelance Tool</title>
			</Helmet>

			<Login />
		</>
	);
}
