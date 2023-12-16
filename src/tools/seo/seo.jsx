import CustomBreadcrumbs from "../../components/custom-breadcrumbs"
import { Page } from "../../components/page"
import { PATH_DASHBOARD } from "../../routes/path"

const SEO = () => {
	return (
		<Page title="SEO Management">
			<CustomBreadcrumbs
				heading="Tools"
				links={[
					{
						name: "Dashboard",
						href: PATH_DASHBOARD.general.home.root,
					},
					{ name: "Tools" },
				]}
			/>
		</Page>
	)
}

export default SEO