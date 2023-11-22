const path = (root, sublink) => {
	return `${root}${sublink}`;
};

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/admin/freelance";

//auth path
export const PATH_AUTH = {
	root: ROOTS_AUTH,
	login: path(ROOTS_AUTH, "/login"),
	register: path(ROOTS_AUTH, "/register"),
	loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
	registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
	otp: path(ROOTS_AUTH, "/otp"),
	verify: path(ROOTS_AUTH, "/verify"),
	resetPassword: path(ROOTS_AUTH, "/reset-password"),
	newPassword: path(ROOTS_AUTH, "/new-password"),
};

export const PLAYGROUND = {
	chat: {
		root: path(ROOTS_DASHBOARD, "/chat"),
		new: path(ROOTS_DASHBOARD, "/chat/new"),
		view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
	},
}

//dashboard path
export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
	kanban: path(ROOTS_DASHBOARD, "/kanban"),
	calendar: path(ROOTS_DASHBOARD, "/calendar"),
	fileManager: path(ROOTS_DASHBOARD, "/files-manager"),
	permissionDenied: path(ROOTS_DASHBOARD, "/permission-denied"),
	blank: path(ROOTS_DASHBOARD, "/blank"),

	//main
	general: {
		//home:
		home: {
			root: path(ROOTS_DASHBOARD, "/home"),
			main: path(ROOTS_DASHBOARD, "/home/main"),
			marketing: path(ROOTS_DASHBOARD, "/home/marketing"),
			project: path(ROOTS_DASHBOARD, "/home/project"),
			sales: path(ROOTS_DASHBOARD, "/home/sales"),
		},

		//account:
		account: {
			root: path(ROOTS_DASHBOARD, "/account"),
			overview: path(ROOTS_DASHBOARD, "/account/overview"),
			settings: path(ROOTS_DASHBOARD, `/account/settings`),
			profile: path(ROOTS_DASHBOARD, "/account/profile"),
			billing: path(ROOTS_DASHBOARD, "/account/billing"),
			intergration: path(ROOTS_DASHBOARD, "/account/intergrations"),
		},

		// support:
		support: {
			root: path(ROOTS_DASHBOARD, "/support"),
			chat: path(ROOTS_DASHBOARD, "/support/chat"),
			documentation: path(ROOTS_DASHBOARD, "/support/documentation"),
			news: path(ROOTS_DASHBOARD, "/support/news"),
			tutorial: path(ROOTS_DASHBOARD, "/support/tutorial"),
			ticket: path(ROOTS_DASHBOARD, "/support/ticket"),
		},

		storage: path(ROOTS_DASHBOARD, "/storage"),
		tools: path(ROOTS_DASHBOARD, "/tools"),
		
		// projects:
		projects: {
			root: path(ROOTS_DASHBOARD, "/projects"),
			overview: path(ROOTS_DASHBOARD, "/projects/overview"),
			cardView: path(ROOTS_DASHBOARD, "/projects/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/projects/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/projects/gantt-view"),
		},

		// tasks:
		tasks: {
			root: path(ROOTS_DASHBOARD, "/tasks"),
			overview: path(ROOTS_DASHBOARD, "/tasks/overview"),
			cardView: path(ROOTS_DASHBOARD, "/tasks/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/tasks/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/tasks/gantt-view"),
		},

		// teams:
		teams: {
			root: path(ROOTS_DASHBOARD, "/teams"),
			overview: path(ROOTS_DASHBOARD, "/teams/overview"),
			cardView: path(ROOTS_DASHBOARD, "/teams/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/teams/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/teams/gantt-view"),
		},

		// finance:
		finance: {
			root: path(ROOTS_DASHBOARD, "/finance"),
			overview: path(ROOTS_DASHBOARD, "/finance/overview"),
			income: path(ROOTS_DASHBOARD, "/finance/income"),
			expenses: path(ROOTS_DASHBOARD, "/finance/expenses"),
			recomendations: path(ROOTS_DASHBOARD, "/finance/recomendations"),
		},

		// income:
		income: {
			root: path(ROOTS_DASHBOARD, "/income"),
			overview: path(ROOTS_DASHBOARD, "/income/overview"),
			cardView: path(ROOTS_DASHBOARD, "/income/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/income/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/income/gantt-view"),
		},


		// expenses:,
		expenses: {
			root: path(ROOTS_DASHBOARD, "/expenses"),
			overview: path(ROOTS_DASHBOARD, "/expenses/overview"),
			cardView: path(ROOTS_DASHBOARD, "/expenses/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/expenses/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/expenses/gantt-view"),
		},
		
		// services:
		services: {
			root: path(ROOTS_DASHBOARD, "/services"),
			overview: path(ROOTS_DASHBOARD, "/services/overview"),
			cardView: path(ROOTS_DASHBOARD, "/services/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/services/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/services/gantt-view"),
		},
		
		// clients:
		clients: {
			root: path(ROOTS_DASHBOARD, "/clients"),
			overview: path(ROOTS_DASHBOARD, "/clients/overview"),
			cardView: path(ROOTS_DASHBOARD, "/clients/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/clients/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/clients/gantt-view"),
		},


		// leads:,
		leads: {
			root: path(ROOTS_DASHBOARD, "/leads"),
			overview: path(ROOTS_DASHBOARD, "/leads/overview"),
			cardView: path(ROOTS_DASHBOARD, "/leads/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/leads/calendar-view"),
			pipelineView: path(ROOTS_DASHBOARD, "/leads/pipeline-view"),
		},


		// sales:
		sales: {
			root: path(ROOTS_DASHBOARD, "/sales"),
			overview: path(ROOTS_DASHBOARD, "/sales/overview"),
			activity: path(ROOTS_DASHBOARD, "/sales/activity"),
			pipeline: path(ROOTS_DASHBOARD, "/sales/pipeline"),
			recomendations: path(ROOTS_DASHBOARD, "/sales/recomendations"),
			invoices: path(ROOTS_DASHBOARD, "/sales/invoices"),
		},

		//promotions
		promotions: {
			root: path(ROOTS_DASHBOARD, "/promotions"),
			overview: path(ROOTS_DASHBOARD, "/promotions/overview"),
			facebookAds: path(ROOTS_DASHBOARD, "/promotions/facebook"),
			googleAds: path(ROOTS_DASHBOARD, "/promotions/google"),
			instagramAds: path(ROOTS_DASHBOARD, "/promotions/instagram"),
			linkedInAds: path(ROOTS_DASHBOARD, "/promotions/linkedin"),
			youtubeAds: path(ROOTS_DASHBOARD, "/promotions/youtube"),
		},

		//websites:
		websites: {
			root: path(ROOTS_DASHBOARD, "/websites"),
			overview: path(ROOTS_DASHBOARD, "/websites/overview"),
			cardView: path(ROOTS_DASHBOARD, "/websites/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/websites/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/websites/gantt-view"),

		},

		//emails
		emails: {
			root: path(ROOTS_DASHBOARD, "/emails"),
			overview: path(ROOTS_DASHBOARD, "/emails/overview"),
			cardView: path(ROOTS_DASHBOARD, "/emails/card-view"),
			calendarView: path(ROOTS_DASHBOARD, "/emails/calendar-view"),
			ganttView: path(ROOTS_DASHBOARD, "/emails/gantt-view"),
		},

		//social
		social: {
			root: path(ROOTS_DASHBOARD, "/social"),
			facebook: path(ROOTS_DASHBOARD, "/social/facebook"),
			instagram: path(ROOTS_DASHBOARD, "/social/instagram"),
			linkedin: path(ROOTS_DASHBOARD, "/social/linkedin"),
			twitter: path(ROOTS_DASHBOARD, "/social/twitter"),
			youtube: path(ROOTS_DASHBOARD, "/social/youtube"),
			tiktok: path(ROOTS_DASHBOARD, "/social/tiktok"),
		},

		//content
		content: {
			root: path(ROOTS_DASHBOARD, "/content"),
			website: path(ROOTS_DASHBOARD, "/content/website"),
			blogs: path(ROOTS_DASHBOARD, "/content/blogs"),
			facebook: path(ROOTS_DASHBOARD, "/content/facebook"),
			instagram: path(ROOTS_DASHBOARD, "/content/instagram"),
			linkedin: path(ROOTS_DASHBOARD, "/content/linkedin"),
			twitter: path(ROOTS_DASHBOARD, "/content/twitter"),
			youtube: path(ROOTS_DASHBOARD, "/content/youtube"),
			tiktok: path(ROOTS_DASHBOARD, "/content/tiktok"),
		},


		app: path(ROOTS_DASHBOARD, "/app"),
		ecommerce: path(ROOTS_DASHBOARD, "/ecommerce"),
		analytics: path(ROOTS_DASHBOARD, "/analytics"),
		banking: path(ROOTS_DASHBOARD, "/banking"),
		booking: path(ROOTS_DASHBOARD, "/booking"),
		file: path(ROOTS_DASHBOARD, "/file"),
	},

	mail: {
		root: path(ROOTS_DASHBOARD, "/mail"),
		all: path(ROOTS_DASHBOARD, "/mail/all"),
	},
	chat: {
		root: path(ROOTS_DASHBOARD, "/chat"),
		new: path(ROOTS_DASHBOARD, "/chat/new"),
		view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
	},
	eCommerce: {
		root: path(ROOTS_DASHBOARD, "/e-commerce"),
		shop: path(ROOTS_DASHBOARD, "/e-commerce/shop"),
		list: path(ROOTS_DASHBOARD, "/e-commerce/list"),
		checkout: path(ROOTS_DASHBOARD, "/e-commerce/checkout"),
		new: path(ROOTS_DASHBOARD, "/e-commerce/product/new"),
		view: (name) => path(ROOTS_DASHBOARD, `/e-commerce/product/${name}`),
		edit: (name) =>
			path(ROOTS_DASHBOARD, `/e-commerce/product/${name}/edit`),
		demoEdit: path(
			ROOTS_DASHBOARD,
			"/e-commerce/product/nike-blazer-low-77-vintage/edit"
		),
		demoView: path(
			ROOTS_DASHBOARD,
			"/e-commerce/product/nike-air-force-1-ndestrukt"
		),
	},
	invoice: {
		root: path(ROOTS_DASHBOARD, "/invoice"),
		list: path(ROOTS_DASHBOARD, "/invoice/list"),
		new: path(ROOTS_DASHBOARD, "/invoice/new"),
		view: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}`),
		edit: (id) => path(ROOTS_DASHBOARD, `/invoice/${id}/edit`),
		demoEdit: path(
			ROOTS_DASHBOARD,
			"/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1/edit"
		),
		demoView: path(
			ROOTS_DASHBOARD,
			"/invoice/e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5"
		),
	},
	blog: {
		root: path(ROOTS_DASHBOARD, "/blog"),
		posts: path(ROOTS_DASHBOARD, "/blog/posts"),
		new: path(ROOTS_DASHBOARD, "/blog/new"),
		view: (title) => path(ROOTS_DASHBOARD, `/blog/post/${title}`),
		demoView: path(
			ROOTS_DASHBOARD,
			"/blog/post/apply-these-7-secret-techniques-to-improve-event"
		),
	},
};

//other paths

export const PATH_PAGE = {
	comingSoon: "/coming-soon",
	maintenance: "/maintenance",
	pricing: "/pricing",
	payment: "/payment",
	about: "/about-us",
	contact: "/contact-us",
	faqs: "/faqs",
	page403: "/403",
	page404: "/404",
	page500: "/500",
	components: "/components",
};
