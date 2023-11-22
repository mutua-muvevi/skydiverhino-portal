import { Helmet } from "react-helmet-async";
// sections
import Register from "../../modules/auth/register";

// ----------------------------------------------------------------------

export default function RegisterPage() {
	return (
		<>
			<Helmet>
				<title> Register | Freelance Tool</title>
			</Helmet>

			<Register />
		</>
	);
}
