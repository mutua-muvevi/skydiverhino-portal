import { Navigate, useRoutes } from "react-router-dom";
// auth
import AuthGuard from "../auth/auth-guard";
import GuestGuard from "../auth/guest-guard";
import OTPGuard from "../auth/otp-guard";

// layouts
import DashboardLayout from "../layout/dashboard/layout";

//elements
import {
	LoginPage,
	RegisterPage,
	CheckEmailPage,
	NewPasswordPage,
	ResetPasswordPage,
	Page500,
	Page403,
	Page404,
	ComingSoonPage,
	MaintenancePage,

	//playground
	PlaygroundForms,
	DatagridPlayground,
	CalendarPlayground,
	ChartPlayground,
	AdvancedChartPlayGround,
	ChatPlayGround,
	KanbanPlayGround,
	OrgPlayGround,
	OTPPage,
	ScrollPlaybround,

	Storage,
	Tools,

	//-----------account----------------
	AccountOverview,
	AccountSettings,
	AccountProfile,
	AccountBilling,
	AccountIntergrations,

	//-----------home-------------------
	DashboardMain,
	DashboardSales,
	DashboardProject,
	DashboardMarketing,

	//-----------support----------------
	SupportDocumentation,
	SupportTicket,
	SupportTutorial,
	SupportNews,
	SupportChat,

	//-----------projects----------------
	ProjectsOverview,
	ProjectsCardView,
	ProjectsCalendarView,
	ProjectsGanttView,

	//-----------tasks----------------
	TasksOverview,
	TasksCardView,
	TasksCalendarView,
	TasksGanttView,

	//-----------teams----------------
	TeamsCardView,
	TeamsCalendarView,
	TeamsGanttView,

	//-----------finance----------------
	FinanceOverview,
	FinanceIncome,
	FinanceExpenses,
	FinanceRecomendations,

	//-----------income----------------
	IncomeOverview,
	IncomeCardView,
	IncomeCalendarView,
	IncomeGanttView,

	//-----------expenses----------------
	ExpensesOverview,
	ExpensesCardView,
	ExpensesCalendarView,
	ExpensesGanttView,

	//-----------services----------------
	ServicesOverview,
	ServicesCardView,
	ServicesCalendarView,
	ServicesGanttView,

	//-----------clients----------------
	ClientOverview,
	ClientsCalendarView,
	ClientsCardView,

	//-----------leads----------------
	LeadsCardView,
	LeadsCalendarView,

	//-----------sales----------------
	SalesOverview,
	SalesRecomendaions,
	SalesActivity,
	SalesPipeline,
	SalesInvoices,

	//-----------promotions----------------
	PromotionsOverview,
	FacebookAds,
	InstagramAds,
	GoogleAds,
	LinkedInAds,
	YoutubeAds,

	//-----------websites----------------
	WebsitesCardView,
	WebsitesCalendarView,
	WebsitesGanttView,
	WebsitesOverview,

	//-----------emails----------------
	EmailsOverview,
	EmailsCardView,
	EmailsCalendarView,
	EmailsGanttView,

	//-----------social----------------
	Twitter,
	FaceBook,
	Instagram,
	LinkedIn,
	Youtube,
	TikTok,

	//-----------content----------------
	FaceBookContent,
	BlogContent,
	WebsitesContent,
	InstagramContent,
	LinkedInContent,
	YoutubeContent,
	TwitterContent,
	TikTokContent,

} from "./elements";

import CompactLayout from "../layout/compact/compact-layout";
import TimelinePlayground from "../pages/playground/timeline";
import TeamsOverview from "../pages/dashboard/teams/overview/overview";
import ClientGanttView from "../pages/dashboard/clients/gantt-view/gantt-view";
import LeadsOverview from "../pages/dashboard/leads/overview/overview";
import LeadsPipelineView from "../pages/dashboard/leads/pipeline-view/pipeline-view";

// ----------------------------------------------------------------------
export default function Router() {
	return useRoutes([
		// auth ---------------------------
		{
			path: "auth",
			children: [
				{
					path: "login",
					element: (
						<GuestGuard>
							<LoginPage />
						</GuestGuard>
					),
				},
				{
					path: "register",
					element: (
						<OTPGuard>
							<RegisterPage />
						</OTPGuard>
					),
				},
				{
					element: <CompactLayout />,
					children: [
						{
							path: "login-unprotected",
							element: <LoginPage />,
						},
						{
							path: "register-unprotected",
							element: <RegisterPage />,
						},
						{
							path: "reset-password",
							element: <ResetPasswordPage />,
						},
						{
							path: "new-password/:resetToken",
							element: <NewPasswordPage />,
						},
						{ path: "verify", element: <CheckEmailPage /> },
						{
							path: "otp",
							element: (
								<GuestGuard>
									<OTPPage />
								</GuestGuard>
							),
						},
					],
				},
			],
		},

		// dashboard -------------------------
		{
			path: "admin/freelance",
			element: (
				<AuthGuard>
					<DashboardLayout />
				</AuthGuard>
			),
			children: [
				{ 
					path: "home", 
					children: [
						{
							element: (
								<Navigate
									to="/admin/freelance/home/main"
									replace
								/>
							),
							index: true	
						},
						{ path: "main", element: <DashboardMain/> },
						{ path: "project", element: <DashboardProject/> },
						{ path: "sales", element: <DashboardSales/> },
						{ path: "marketing", element: <DashboardMarketing/> },
					]
				},
				{
					path: "account",
					children: [
						{
							element: (
								<Navigate
									to="/admin/freelance/account/overview"
									replace
								/>
							),
							index: true,
						},
						{ path: "overview", element: <AccountOverview /> },
						{ path: "settings", element: <AccountSettings /> },
						{ path: "profile", element: <AccountProfile /> },
						{ path: "billing", element: <AccountBilling /> },
						{ path: "intergrations", element: <AccountIntergrations /> },
					],
				},

				{
					path: "support",
					children: [
						{
							element: (
								<Navigate
									to="/admin/freelance/support/documentation"
									replace
								/>
							),
							index: true,
						},
						{ path: "documentation", element: <SupportDocumentation /> },
						{ path: "ticket", element: <SupportTicket /> },
						{ path: "tutorial", element: <SupportTutorial /> },
						{ path: "news", element: <SupportNews /> },
						{ path: "chat", element: <SupportChat /> },
					]
				},

				{ path: "storage", element: <Storage /> },

				{
					path: "projects",
					children: [
						{
							element: (
								<Navigate
									to="/admin/freelance/projects/overview"
									replace
								/>
							),
							index: true
						},
						{ path: "overview", element: <ProjectsOverview /> },
						{ path: "card-view", element: <ProjectsCardView /> },
						{ path: "calendar-view", element: <ProjectsCalendarView /> },
						{ path: "gantt-view", element: <ProjectsGanttView /> },
					]
				},

				{
					path: "tasks",
					children: [
						{
							element: (
								<Navigate
									to="/admin/freelance/tasks/overview"
									replace
								/>
							),
							index: true
						},
						{ path: "overview", element: <TasksOverview /> },
						{ path: "card-view", element: <TasksCardView /> },
						{ path: "calendar-view", element: <TasksCalendarView /> },
						{ path: "gantt-view", element: <TasksGanttView /> },
					]
				},

				{
					path: "teams",
					children: [
						{
							element: (
								<Navigate
									to="/admin/freelance/teams/overview"
									replace
								/>
							),
							index: true
						},
						{ path: "overview", element: <TeamsOverview /> },
						{ path: "card-view", element: <TeamsCardView /> },
						{ path: "calendar-view", element: <TeamsCalendarView/> },
						{ path: "gantt-view", element: <TeamsGanttView /> },
					]
				},


				{
					path: "services",
					children: [
						{
							element: (
								<Navigate
									to="/admin/freelance/services/overview"
									replace
								/>
							),
							index: true
						},
						{ path: "overview", element: <ServicesOverview /> },
						{ path: "card-view", element: <ServicesCardView /> },
						{ path: "calendar-view", element: <ServicesCalendarView /> },
						{ path: "gantt-view", element: <ServicesGanttView /> },
					]
				},

				{
					path: "finance",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/finance/overview" replace />
							),
							index: true
						},
						{ path: "overview", element: <FinanceOverview /> },
						{ path: "income", element: <FinanceIncome /> },
						{ path: "expenses", element: <FinanceExpenses /> },
						{ path: "recomendations", element: <FinanceRecomendations /> },
					]
				},
				{
					path: "income",
					children : [
						{
							element: (
								<Navigate to="/admin/freelance/income/overview" replace />
							),
							index: true
						},
						{ path: "overview", element: <IncomeOverview /> },
						{ path: "card-view", element: <IncomeCardView /> },
						{ path: "calendar-view", element: <IncomeCalendarView /> },
						{ path: "gantt-view", element: <IncomeGanttView /> },
					]
				},
				{
					path: "expenses",
					children : [
						{
							element: (
								<Navigate to="/admin/freelance/expenses/overview" replace />
							),
							index: true
						},
						{ path: "overview", element: <ExpensesOverview /> },
						{ path: "card-view", element: <ExpensesCardView /> },
						{ path: "calendar-view", element: <ExpensesCalendarView /> },
						{ path: "gantt-view", element: <ExpensesGanttView /> },
					]
				},

				{
					path: "clients",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/clients/overview" replace/>
							),
							index: true
						},
						{ path: "overview", element: <ClientOverview /> },
						{ path: "card-view", element: <ClientsCardView /> },
						{ path: "calendar-view", element: <ClientsCalendarView /> },
						{ path: "gantt-view", element: <ClientGanttView /> },
					]
				},


				{
					path: "leads",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/leads/overview" replace/>
							),
							index: true
						},
						{ path: "overview", element: <LeadsOverview /> },
						{ path: "card-view", element: <LeadsCardView /> },
						{ path: "calendar-view", element: <LeadsCalendarView /> },
						{ path: "pipeline-view", element: <LeadsPipelineView /> },
					]
				},
				{
					path: "sales",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/sales/overview" replace/>
							),
							index: true
						},
						{ path: "overview", element: <SalesOverview /> },
						{ path: "recomendations", element: <SalesRecomendaions /> },
						{ path: "activity", element: <SalesActivity /> },
						{ path: "pipeline", element: <SalesPipeline /> },
						{ path: "invoices", element: <SalesInvoices /> },
					]
				},

				{
					path: "promotions",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/promotions/overview" replace/>
							),
							index: true
						},
						{ path: "overview", element: <PromotionsOverview /> },
						{ path: "facebook", element: <FacebookAds /> },
						{ path: "instagram", element: <InstagramAds /> },
						{ path: "google", element: <GoogleAds /> },
						{ path: "linkedin", element: <LinkedInAds /> },
						{ path: "youtube", element: <YoutubeAds /> },
					]
				},

				{
					path: "websites",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/websites/overview" replace/>
							),
							index: true
						},
						{ path: "overview", element: <WebsitesOverview /> },
						{ path: "card-view", element: <WebsitesCardView /> },
						{ path: "calendar-view", element: <WebsitesCalendarView /> },
						{ path: "gantt-view", element: <WebsitesGanttView /> },
					]
				},
				{
					path: "emails",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/emails/overview" replace/>
							),
							index: true
						},
						{ path: "overview", element: <EmailsOverview /> },
						{ path: "card-view", element: <EmailsCardView /> },
						{ path: "calendar-view", element: <EmailsCalendarView /> },
						{ path: "gantt-view", element: <EmailsGanttView /> },
					]
				},
				{
					path: "social",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/social/facebook" replace/>
							),
							index: true
						},
						{ path: "facebook", element: <FaceBook /> },
						{ path: "instagram", element: <Instagram /> },
						{ path: "linkedin", element: <LinkedIn /> },
						{ path: "youtube", element: <Youtube /> },
						{ path: "twitter", element: <Twitter /> },
						{ path: "tiktok", element: <TikTok /> },
					]
				},
				{
					path: "content",
					children: [
						{
							element: (
								<Navigate to="/admin/freelance/content/blogs" replace/>
							),
							index: true
						},
						{ path: "blogs", element: <BlogContent /> },
						{ path: "website", element: <WebsitesContent /> },
						{ path: "facebook", element: <FaceBookContent /> },
						{ path: "instagram", element: <InstagramContent /> },
						{ path: "linkedin", element: <LinkedInContent /> },
						{ path: "youtube", element: <YoutubeContent /> },
						{ path: "twitter", element: <TwitterContent /> },
						{ path: "tiktok", element: <TikTokContent /> },
					]
				},

				{ path: "tools", element: <Tools /> },
			],
		},

		//other ----------------------------------
		{
			element: <CompactLayout />,
			children: [
				{ path: "coming-soon", element: <ComingSoonPage /> },
				{ path: "maintenance", element: <MaintenancePage /> },
				{ path: "500", element: <Page500 /> },
				{ path: "404", element: <Page404 /> },
				{ path: "403", element: <Page403 /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },

		//playground -----------------------------
		{ path: "form-playground", element: <PlaygroundForms /> },
		{ path: "datagrid-playground", element: <DatagridPlayground /> },
		{ path: "timeline-playground", element: <TimelinePlayground /> },
		{ path: "calendar-playground", element: <CalendarPlayground /> },
		{
			path: "chart-playground",
			element: <ChartPlayground />,
		},
		{
			path: "advanced-chart-playground",
			element: <AdvancedChartPlayGround />,
		},
		{
			path: "chat-playground",
			element: <ChatPlayGround />,
			children: [
				{ element: <ChartPlayground />, index: true },
				{ path: "new", element: <ChartPlayground /> },
				{ path: ":conversationKey", element: <ChartPlayground /> },
			],
		},
		{ path: "kanban-playground", element: <KanbanPlayGround /> },
		{ path: "org-chart-playground", element: <OrgPlayGround /> },
		{ path: "scrollbar-playground", element: <ScrollPlaybround /> },
	]);
}
