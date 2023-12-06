import { Suspense, lazy } from "react";
// components
import LoadingScreen from "../components/loading-screen";

// ----------------------------------------------------------------------

const Loadable = (Component) => {
	const LoadableComponent = (props) => (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);

	// Assign a display name to the LoadableComponent
	LoadableComponent.displayName = `Loadable(${
		Component.displayName || Component.name || "Component"
	})`;

	return LoadableComponent;
};

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import("../pages/auth/login")));
export const RegisterPage = Loadable(
	lazy(() => import("../pages/auth/register"))
);
export const CheckEmailPage = Loadable(
	lazy(() => import("../pages/auth/check-email"))
);
export const NewPasswordPage = Loadable(
	lazy(() => import("../pages/auth/new-password"))
);
export const ResetPasswordPage = Loadable(
	lazy(() => import("../pages/auth/reset-password"))
);
export const OTPPage = Loadable(
	lazy(() => import("../pages/auth/otp-code"))
);

// PAGES
export const Page500 = Loadable(lazy(() => import("../pages/page-500")));
export const Page404 = Loadable(lazy(() => import("../pages/page-404")));
export const Page403 = Loadable(lazy(() => import("../pages/page-403")));
export const ComingSoonPage = Loadable(
	lazy(() => import("../pages/coming-soon"))
);
export const MaintenancePage = Loadable(
	lazy(() => import("../pages/maintenance"))
);

//PLAYGROUND
export const PlaygroundForms = Loadable(lazy(() => import("../pages/playground/forms")));
export const DatagridPlayground = Loadable(lazy(() => import("../pages/playground/datagrid")));
export const TimelinePlayground = Loadable(lazy(() => import("../pages/playground/timeline")));
export const CalendarPlayground = Loadable(lazy(() => import("../pages/playground/calendar")));
export const ChartPlayground = Loadable(lazy(() => import("../pages/playground/chart")));
export const AdvancedChartPlayGround = Loadable(lazy(() => import("../pages/playground/advanced-chart")));
export const ChatPlayGround = Loadable(lazy(() => import("../pages/playground/chat")));
export const KanbanPlayGround = Loadable(lazy(() => import("../pages/playground/kanban")));
export const OrgPlayGround = Loadable(lazy(() => import("../pages/playground/organization")));
export const ScrollPlaybround = Loadable(lazy(() => import("../pages/playground/scrollbar")));


// DASHBOARD
//-----------------main-----------------
//home
export const DashboardMain = Loadable(lazy(() => import("../pages/dashboard/home/main/main")));

//account
export const AccountOverview = Loadable(lazy(() => import("../pages/dashboard/account/overview/overview")));
export const AccountSettings = Loadable(lazy(() => import("../pages/dashboard/account/settings/settings")));
export const AccountProfile = Loadable(lazy(() => import("../pages/dashboard/account/profile/profile")));

//bookings
export const Bookings = Loadable(lazy(() => import("../pages/dashboard/bookings/bookings")));

//contacts
export const Contacts = Loadable(lazy(() => import("../pages/dashboard/contacts/contacts")));

//clients
export const Clients = Loadable(lazy(() => import("../pages/dashboard/clients/clients")));

//leads
export const Leads = Loadable(lazy(() => import("../pages/dashboard/leads/leads")));

//storage
export const Storage = Loadable(lazy(() => import("../pages/dashboard/storage/overview")));

//services
export const Services = Loadable(lazy(() => import("../pages/dashboard/services/overview")));

//tools
export const Tools = Loadable(lazy(() => import("../pages/dashboard/tools/tools")));

//social
export const FaceBook = Loadable(lazy(() => import("../pages/dashboard/social/facebook/facebook")));
export const Instagram = Loadable(lazy(() => import("../pages/dashboard/social/instagram/instagram")));
export const LinkedIn = Loadable(lazy(() => import("../pages/dashboard/social/linkedin/linkedin")));
export const Twitter = Loadable(lazy(() => import("../pages/dashboard/social/twitter/twitter")));
export const Youtube = Loadable(lazy(() => import("../pages/dashboard/social/youtube/youtube")));
export const TikTok = Loadable(lazy(() => import("../pages/dashboard/social/tiktok/tiktok")));

//website
export const WebsiteOverview = Loadable(lazy(() => import("../pages/dashboard/website/overview/overview")));
export const WebsiteHomepage = Loadable(lazy(() => import("../pages/dashboard/website/homepage/homepage")));
export const WebsiteAbout = Loadable(lazy(() => import("../pages/dashboard/website/about/about")));
export const WebsitePricing = Loadable(lazy(() => import("../pages/dashboard/website/pricing/pricing")));
