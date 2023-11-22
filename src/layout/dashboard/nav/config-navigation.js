// routes
import { PATH_DASHBOARD } from "../../../routes/path";

// ----------------------------------------------------------------------


const ICONS = {


	home: "heroicons:home-solid",
	account: "mingcute:user-4-fill",
	support: "fluent:chat-help-24-filled",
	storage: "ic:baseline-cloud-upload",
	tools: "vaadin:tools",

	project: "mdi:workflow",
	tasks: "fluent:tasks-app-24-filled",
	teams: "fa6-solid:users",

	finance: "fontisto:wallet",
	expenses: "solar:card-send-bold",
	income: "fluent:wallet-credit-card-32-filled",

	services: "mdi:wide-area-network",
	clients: "mdi:folder-user",
	leads: "mdi:leads",
	sales: "streamline:decent-work-and-economic-growth-solid",

	promotions: "gridicons:speaker",
	websites: "mdi:web",
	emails: "ic:baseline-email",
	social: "icon-park-solid:connect",
	content: "bxs:bot",
};

const navConfig = [
	//MAIN
	//----------------------------------------------------------------------
	{
		subheader: "main",
		items: [
			{
				title: "home",
				path: PATH_DASHBOARD.general.home.root,
				icon: ICONS.home,
				children: [
					{ title: "main", path: PATH_DASHBOARD.general.home.main, },
					{ title: "marketing", path: PATH_DASHBOARD.general.home.marketing, },
					{ title: "project", path: PATH_DASHBOARD.general.home.project, },
					{ title: "sales", path: PATH_DASHBOARD.general.home.sales, },
				]
			},
			{
				title: "storage",
				path: PATH_DASHBOARD.general.storage,
				icon: ICONS.storage,
			},
			{
				title: "support",
				path: PATH_DASHBOARD.general.support.root,
				icon: ICONS.support,
				children: [
					{
						title: "chat",
						path: PATH_DASHBOARD.general.support.chat,
					},
					{
						title: "documentation",
						path: PATH_DASHBOARD.general.support.documentation,
					},
					{
						title: "news",
						path: PATH_DASHBOARD.general.support.news,
					},
					{
						title: "tutorial",
						path: PATH_DASHBOARD.general.support.tutorial,
					},
					{
						title: "ticket",
						path: PATH_DASHBOARD.general.support.ticket,
					}
				]
			},
			{
				title: "tools",
				path: PATH_DASHBOARD.general.tools,
				icon: ICONS.tools,
			},
		],
	},

	// PROJECTS
	//----------------------------------------------------------------------
	{
		subheader: "project & team management",
		items: [
			{
				title: "projects",
				path: PATH_DASHBOARD.general.projects.root,
				icon: ICONS.project,
				children : [
					{ title: "overview", path : PATH_DASHBOARD.general.projects.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.projects.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.projects.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.projects.ganttView, },
				]
			},
			{
				title: "tasks",
				path: PATH_DASHBOARD.general.tasks.root,
				icon: ICONS.tasks,
				children : [
					{ title: "overview", path : PATH_DASHBOARD.general.tasks.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.tasks.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.tasks.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.tasks.ganttView, },
				]
			},
			{
				title: "teams",
				path: PATH_DASHBOARD.general.teams.root,
				icon: ICONS.teams,
				children : [
					{ title: "overview", path : PATH_DASHBOARD.general.teams.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.teams.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.teams.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.teams.ganttView, },
				]
			},
		],
	},

	//FINANCE
	//----------------------------------------------------------------------
	{
		subheader: "finance",
		items: [
			{
				title: "finance",
				path: PATH_DASHBOARD.general.finance.root,
				icon: ICONS.finance,
				children: [
					{ title: "overview", path : PATH_DASHBOARD.general.finance.overview, },
					{ title: "income", path : PATH_DASHBOARD.general.finance.income, },
					{ title: "expenses", path : PATH_DASHBOARD.general.finance.expenses, },
					{ title: "recomendations", path : PATH_DASHBOARD.general.finance.recomendations, },
				]
			},
			{
				title: "income",
				path: PATH_DASHBOARD.general.income.root,
				icon: ICONS.income,
				children : [
					{ title: "overview", path : PATH_DASHBOARD.general.income.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.income.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.income.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.income.ganttView, },
				]
			},
			{
				title: "expenses",
				path: PATH_DASHBOARD.general.expenses.root,
				icon: ICONS.expenses,
				children : [
					{ title: "overview", path : PATH_DASHBOARD.general.expenses.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.expenses.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.expenses.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.expenses.ganttView, },
				]
			},
		],
	},

	//SALES
	//----------------------------------------------------------------------
	{
		subheader: "sales",
		items: [
			{
				title: "sales",
				path: PATH_DASHBOARD.general.sales.root,
				icon: ICONS.sales,
				children: [
					{ title: "overview", path : PATH_DASHBOARD.general.sales.overview, },
					{ title: "recomendations", path : PATH_DASHBOARD.general.sales.recomendations, },
					{ title: "activity", path: PATH_DASHBOARD.general.sales.activity, },
					{ title: "pipeline", path: PATH_DASHBOARD.general.sales.pipeline, },
					{ title: "invoices", path: PATH_DASHBOARD.general.sales.invoices, },
				]

			},
			{
				title: "clients",
				path: PATH_DASHBOARD.general.clients.root,
				icon: ICONS.clients,
				children : [
					{ title: "overview", path : PATH_DASHBOARD.general.clients.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.clients.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.clients.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.clients.ganttView, },
				]
			},
			{
				title: "leads",
				path: PATH_DASHBOARD.general.leads.root,
				icon: ICONS.leads,
				children : [
					{ title: "overview", path : PATH_DASHBOARD.general.leads.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.leads.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.leads.calendarView, },
					{ title: "pipeline view", path : PATH_DASHBOARD.general.leads.pipelineView, },
				]
			},
			{
				title: "my services",
				path: PATH_DASHBOARD.general.services.root,
				icon: ICONS.services,
				children : [
					{ title: "overview", path : PATH_DASHBOARD.general.services.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.services.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.services.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.services.ganttView, },
				]
			},
		],
	},

	//MARKETING
	//----------------------------------------------------------------------
	{
		subheader: "marketing",
		items: [
			{
				title: "promotions",
				path: PATH_DASHBOARD.general.promotions.root,
				icon: ICONS.promotions,
				children: [
					{ title: "overview", path : PATH_DASHBOARD.general.promotions.overview, },
					{ title: "google", path : PATH_DASHBOARD.general.promotions.googleAds, },
					{ title: "facebook", path : PATH_DASHBOARD.general.promotions.facebookAds, },
					{ title: "instagram", path : PATH_DASHBOARD.general.promotions.instagramAds, },
					{ title: "linkedin", path : PATH_DASHBOARD.general.promotions.linkedInAds, },
					{ title: "youtube", path : PATH_DASHBOARD.general.promotions.youtubeAds, },

				]
			},
			{
				title: "websites",
				path: PATH_DASHBOARD.general.websites.root,
				icon: ICONS.websites,
				children: [
					{ title: "overview", path : PATH_DASHBOARD.general.websites.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.websites.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.websites.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.websites.ganttView, },
				]
			},
			{
				title: "emails",
				path: PATH_DASHBOARD.general.emails.root,
				icon: ICONS.emails,
				children: [
					{ title: "overview", path : PATH_DASHBOARD.general.emails.overview, },
					{ title: "card view", path : PATH_DASHBOARD.general.emails.cardView, },
					{ title: "calendar view", path : PATH_DASHBOARD.general.emails.calendarView, },
					{ title: "gantt view", path : PATH_DASHBOARD.general.emails.ganttView, },
				]
			},
			{
				title: "social",
				path: PATH_DASHBOARD.general.social.root,
				icon: ICONS.social,
				children: [
					{ title: "facebook", path: PATH_DASHBOARD.general.social.facebook, },
					{ title: "instagram", path: PATH_DASHBOARD.general.social.instagram, },
					{ title: "linkedin", path: PATH_DASHBOARD.general.social.linkedin, },
					{ title: "youtube", path: PATH_DASHBOARD.general.social.youtube, },
					{ title: "twitter", path: PATH_DASHBOARD.general.social.twitter, },
					{ title: "tiktok", path: PATH_DASHBOARD.general.social.tiktok, },
				]
			},
			{
				title: "content",
				path: PATH_DASHBOARD.general.content.root,
				icon: ICONS.content,
				children: [
					{ title: "website", path: PATH_DASHBOARD.general.content.website, },
					{ title: "blogs", path: PATH_DASHBOARD.general.content.blogs, },
					{ title: "facebook", path: PATH_DASHBOARD.general.content.facebook, },
					{ title: "instagram", path: PATH_DASHBOARD.general.content.instagram, },
					{ title: "linkedin", path: PATH_DASHBOARD.general.content.linkedin, },
					{ title: "youtube", path: PATH_DASHBOARD.general.content.youtube, },
					{ title: "twitter", path: PATH_DASHBOARD.general.content.twitter, },
					{ title: "tiktok", path: PATH_DASHBOARD.general.content.tiktok, },
				]
			},
		],
	},
	
	//ACCOUNT
	//----------------------------------------------------------------------
	{
		subheader: "account",
		items: [
			{
				title: "account",
				path: PATH_DASHBOARD.general.account.root,
				icon: ICONS.account,
				children : [
					{ title: "edit", path : PATH_DASHBOARD.general.account.settings, },
					{ title: "profile", path : PATH_DASHBOARD.general.account.profile, },
					{ title: "billing", path : PATH_DASHBOARD.general.account.billing, },
					{ title: "intergrations", path : PATH_DASHBOARD.general.account.intergration, },
				]
			},
		],
	},
];

export default navConfig;
