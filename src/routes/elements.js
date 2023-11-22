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
export const DashboardProject = Loadable(lazy(() => import("../pages/dashboard/home/project/project")));
export const DashboardSales = Loadable(lazy(() => import("../pages/dashboard/home/sales/sales")));
export const DashboardMarketing = Loadable(lazy(() => import("../pages/dashboard/home/marketing/marketing")));

//account
export const AccountOverview = Loadable(lazy(() => import("../pages/dashboard/account/overview/overview")));
export const AccountBilling = Loadable(lazy(() => import("../pages/dashboard/account/billing/billing")));
export const AccountIntergrations = Loadable(lazy(() => import("../pages/dashboard/account/intergrations/intergrations")));
export const AccountSettings = Loadable(lazy(() => import("../pages/dashboard/account/settings/settings")));
export const AccountProfile = Loadable(lazy(() => import("../pages/dashboard/account/profile/profile")));

// -----------------starter plan-----------------
//project
export const ProjectsOverview = Loadable(lazy(() => import("../pages/dashboard/projects/overview/overview")));
export const ProjectsGanttView = Loadable(lazy(() => import("../pages/dashboard/projects/gantt-view/gantt-view")));
export const ProjectsCalendarView = Loadable(lazy(() => import("../pages/dashboard/projects/calendar-view/calendar-view")));
export const ProjectsCardView = Loadable(lazy(() => import("../pages/dashboard/projects/card-view/card-view")));

//tasks
export const TasksOverview = Loadable(lazy(() => import("../pages/dashboard/tasks/overview/overview")));
export const TasksGanttView = Loadable(lazy(() => import("../pages/dashboard/tasks/gantt-view/gantt-view")));
export const TasksCalendarView = Loadable(lazy(() => import("../pages/dashboard/tasks/calendar-view/calendar-view")));
export const TasksCardView = Loadable(lazy(() => import("../pages/dashboard/tasks/card-view/card-view")));

//teams
export const TeamsOverview = Loadable(lazy(() => import("../pages/dashboard/teams/overview/overview")));
export const TeamsCalendarView = Loadable(lazy(() => import("../pages/dashboard/teams/calendar-view/calendar-view")));
export const TeamsCardView = Loadable(lazy(() => import("../pages/dashboard/teams/card-view/card-view")));
export const TeamsGanttView = Loadable(lazy(() => import("../pages/dashboard/teams/gantt-view/gantt-view")));

//finance
export const FinanceOverview = Loadable(lazy(() => import("../pages/dashboard/finance/overview/overview")));
export const FinanceIncome = Loadable(lazy(() => import("../pages/dashboard/finance/income/income")));
export const FinanceExpenses = Loadable(lazy(() => import("../pages/dashboard/finance/expenses/expenses")));
export const FinanceRecomendations = Loadable(lazy(() => import("../pages/dashboard/finance/recomendations/recomendations")));

//income
export const IncomeOverview = Loadable(lazy(() => import("../pages/dashboard/income/overview/overview")));
export const IncomeCalendarView = Loadable(lazy(() => import("../pages/dashboard/income/calendar-view/calendar-view")));
export const IncomeCardView = Loadable(lazy(() => import("../pages/dashboard/income/card-view/card-view")));
export const IncomeGanttView = Loadable(lazy(() => import("../pages/dashboard/income/gantt-view/gantt-view")));

//expenses
export const ExpensesOverview = Loadable(lazy(() => import("../pages/dashboard/expenses/overview/overview")));
export const ExpensesCalendarView = Loadable(lazy(() => import("../pages/dashboard/expenses/calendar-view/calendar-view")));
export const ExpensesCardView = Loadable(lazy(() => import("../pages/dashboard/expenses/card-view/card-view")));
export const ExpensesGanttView = Loadable(lazy(() => import("../pages/dashboard/expenses/gantt-view/gantt-view")));


export const Storage = Loadable(lazy(() => import("../pages/dashboard/storage/storage")));
export const Tools = Loadable(lazy(() => import("../pages/dashboard/tools/tools")));

//support
export const Support = Loadable(lazy(() => import("../pages/dashboard/support/support")));
export const SupportChat = Loadable(lazy(() => import("../pages/dashboard/support/chat/chat")));
export const SupportDocumentation = Loadable(lazy(() => import("../pages/dashboard/support/documentation/documentation")));
export const SupportTicket = Loadable(lazy(() => import("../pages/dashboard/support/ticket/ticket")));
export const SupportTutorial = Loadable(lazy(() => import("../pages/dashboard/support/tutorial/tutorial")));
export const SupportNews = Loadable(lazy(() => import("../pages/dashboard/support/news/news")));


//-----------------basic plan-----------------
//services
export const ServicesOverview = Loadable(lazy(() => import("../pages/dashboard/services/overview/overview")));
export const ServicesCalendarView = Loadable(lazy(() => import("../pages/dashboard/services/calendar-view/calendar-view")));
export const ServicesCardView = Loadable(lazy(() => import("../pages/dashboard/services/card-view/card-view")));
export const ServicesGanttView = Loadable(lazy(() => import("../pages/dashboard/services/gantt-view/gantt-view")));

//clients
export const ClientsCalendarView = Loadable(lazy(() => import("../pages/dashboard/clients/calendar-view/calendar-view")));
export const ClientsCardView = Loadable(lazy(() => import("../pages/dashboard/clients/card-view/card-view")));
export const ClientsGanttView = Loadable(lazy(() => import("../pages/dashboard/clients/gantt-view/gantt-view")));
export const ClientOverview = Loadable(lazy(() => import("../pages/dashboard/clients/overview/overview")));

//leads
export const LeadsCalendarView = Loadable(lazy(() => import("../pages/dashboard/leads/calendar-view/calendar-view")));
export const LeadsCardView = Loadable(lazy(() => import("../pages/dashboard/leads/card-view/card-view")));
export const LeadsOverview = Loadable(lazy(() => import("../pages/dashboard/leads/overview/overview")));
export const LeadPipelineView = Loadable(lazy(() => import("../pages/dashboard/leads/pipeline-view/pipeline-view")));

//sales
export const SalesOverview = Loadable(lazy(() => import("../pages/dashboard/sales/overview/overview")));
export const SalesActivity = Loadable(lazy(() => import("../pages/dashboard/sales/activity/activity")));
export const SalesPipeline = Loadable(lazy(() => import("../pages/dashboard/sales/pipeline/pipeline")));
export const SalesRecomendaions = Loadable(lazy(() => import("../pages/dashboard/sales/recomendations/recomendations")));
export const SalesInvoices = Loadable(lazy(() => import("../pages/dashboard/sales/invoices/invoices")));

//-----------------professional plan-----------------
//promotions
export const PromotionsOverview = Loadable(lazy(() => import("../pages/dashboard/promotions/overview/overview")));
export const FacebookAds = Loadable(lazy(() => import("../pages/dashboard/promotions/facebook-ads/facebook-ads")));
export const GoogleAds = Loadable(lazy(() => import("../pages/dashboard/promotions/google-ads/google-ads")));
export const InstagramAds = Loadable(lazy(() => import("../pages/dashboard/promotions/instagram-ads/instagram-ads")));
export const LinkedInAds = Loadable(lazy(() => import("../pages/dashboard/promotions/linkedin-ads/linkedin-ads")));
export const YoutubeAds = Loadable(lazy(() => import("../pages/dashboard/promotions/youtube-ads/youtube-ads")));

//websites
export const WebsitesOverview = Loadable(lazy(() => import("../pages/dashboard/websites/overview/overview")));
export const WebsitesCalendarView = Loadable(lazy(() => import("../pages/dashboard/websites/calendar-view/calendar-view")));
export const WebsitesCardView = Loadable(lazy(() => import("../pages/dashboard/websites/card-view/card-view")));
export const WebsitesGanttView = Loadable(lazy(() => import("../pages/dashboard/websites/gantt-view/gantt-view")));

//emails
export const EmailsOverview = Loadable(lazy(() => import("../pages/dashboard/emails/overview/overview")));
export const EmailsCalendarView = Loadable(lazy(() => import("../pages/dashboard/emails/calendar-view/calendar-view")));
export const EmailsCardView = Loadable(lazy(() => import("../pages/dashboard/emails/card-view/card-view")));
export const EmailsGanttView = Loadable(lazy(() => import("../pages/dashboard/emails/gantt-view/gantt-view")));

//social
export const FaceBook = Loadable(lazy(() => import("../pages/dashboard/social/facebook/facebook")));
export const Instagram = Loadable(lazy(() => import("../pages/dashboard/social/instagram/instagram")));
export const LinkedIn = Loadable(lazy(() => import("../pages/dashboard/social/linkedin/linkedin")));
export const Twitter = Loadable(lazy(() => import("../pages/dashboard/social/twitter/twitter")));
export const Youtube = Loadable(lazy(() => import("../pages/dashboard/social/youtube/youtube")));
export const TikTok = Loadable(lazy(() => import("../pages/dashboard/social/tiktok/tiktok")));

//content
export const WebsitesContent = Loadable(lazy(() => import("../pages/dashboard/content/website/website")));
export const BlogContent = Loadable(lazy(() => import("../pages/dashboard/content/blogs/blogs")));
export const FaceBookContent = Loadable(lazy(() => import("../pages/dashboard/content/facebook/facebook")));
export const InstagramContent = Loadable(lazy(() => import("../pages/dashboard/content/instagram/instagram")));
export const LinkedInContent = Loadable(lazy(() => import("../pages/dashboard/content/linkedin/linkedin")));
export const TwitterContent = Loadable(lazy(() => import("../pages/dashboard/content/twitter/twitter")));
export const YoutubeContent = Loadable(lazy(() => import("../pages/dashboard/content/youtube/youtube")));
export const TikTokContent = Loadable(lazy(() => import("../pages/dashboard/content/tiktok/tiktok")));