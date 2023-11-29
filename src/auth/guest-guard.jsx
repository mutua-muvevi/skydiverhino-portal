import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
// routes
import { PATH_DASHBOARD } from "../routes/path";
// components
import LoadingScreen from "../components/loading-screen";
//
import { useAuthContext } from "./use-auth-context";

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
	children: PropTypes.node,
};

export default function GuestGuard({ children }) {
	const { isAuthenticated, isInitialized } = useAuthContext();


	if (isAuthenticated) {
		return <Navigate to={PATH_DASHBOARD.general.home.main} />;
	}

	if (!isInitialized ) {
		return <LoadingScreen />;
	}

	return <> {children} </>;
}
