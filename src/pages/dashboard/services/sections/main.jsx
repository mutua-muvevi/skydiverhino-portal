import { Stack } from '@mui/material'
import PropTypes from 'prop-types'
import ServiceCards from './card'

const ServiceMain = ({ services }) => {
	return (
		<Stack direction="column" spacing={5}>
			{services.map((service) => (
				<div key={service._id}>
					<ServiceCards service={service} />
				</div>
			))}
		</Stack>
	)
}

ServiceMain.propTypes = {
	services: PropTypes.array.isRequired,
}

export default ServiceMain