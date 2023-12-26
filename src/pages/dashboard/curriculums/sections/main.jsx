import { Button, Grid, Stack, Typography } from "@mui/material";
import CurriculumsCard from "./cards";
import ModalComponent from "../../../../components/modal/modal";
import { useState } from "react";
import NewCurriculum from "../new/new";
import { useSelector } from "../../../../redux/store";

const CurriculumsMain = () => {
	const [openModal, setOpenModal] = useState(false);
	const {
		curriculums: { data: allCurriculums },
	} = useSelector((state) => state.curriculum);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	return (
		<>
			<Stack direction="column" spacing={3}>
				<Button
					variant="contained"
					color="primary"
					onClick={handleOpenModal}
				>
					<Typography variant="h6">Add a new Curriculum</Typography>
				</Button>

				<div>
					<Grid container spacing={3}>
						{allCurriculums
							? allCurriculums.map((curriculum, index) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={4}
										xl={3}
										key={index}
									>
										<CurriculumsCard
											curriculum={curriculum}
										/>
									</Grid>
							))
							: null}
					</Grid>
				</div>
			</Stack>

			<ModalComponent
				title="Add a new Curriculum"
				open={openModal}
				onClose={() => setOpenModal(false)}
				height={600}
				maxWidth="lg"
			>
				<NewCurriculum />
			</ModalComponent>
		</>
	);
};

export default CurriculumsMain;
